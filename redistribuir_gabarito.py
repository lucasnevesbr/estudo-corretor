# -*- coding: utf-8 -*-
"""Redistribui a alternativa correta das questoes de uma disciplina.

    python redistribuir_gabarito.py conteudo/02-direito-legislacao.js

POR QUE ISSO EXISTE: quem escreve questao tende a por a resposta certa
como segunda alternativa, sem perceber. Em Direito e Legislacao, 11 das
21 corretas cairam na letra B. O app embaralha as QUESTOES, nunca as
ALTERNATIVAS, entao esse vicio chega inteiro em quem estuda: treina a
chutar B em vez de treinar a materia.

O que o script faz: move a alternativa correta para uma posicao alvo,
preservando a ordem relativa das outras tres. O texto nao muda, so a
ordem, e o campo `correta` acompanha.

As posicoes alvo sao geradas por um giro de passo 3 sobre 4 posicoes,
que distribui parelho e NAO cria o ciclo A,B,C,D,A,B,C,D. Ciclo regular
e tao ruim quanto o vicio: da para acertar contando.

Depois de rodar, rode verificar.py e refaca o simulado pelo gabarito no
app: tem que dar nota cheia.
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def separar_alts(miolo):
    """Extrai as strings de alts:[...]. Neste formato nao ha aspas escapadas."""
    saida, i = [], 0
    while i < len(miolo):
        if miolo[i] == '"':
            j = i + 1
            while miolo[j] != '"':
                j += 1
            saida.append(miolo[i + 1:j])
            i = j + 1
        else:
            i += 1
    return saida


# Blocos de 4 posicoes, cada bloco uma permutacao DIFERENTE. Garante
# distribuicao parelha (cada bloco tem uma de cada letra) sem criar
# padrao: com 6 permutacoes, a sequencia so se repetiria em 24 questoes.
# Um giro simples tipo (k*3)%4 NAO serve: ele da ADCBADCB, periodo 4,
# e quem repete o simulado percebe o padrao antes de aprender a materia.
PERMUTACOES = [
    [0, 2, 3, 1],
    [2, 0, 1, 3],
    [1, 3, 0, 2],
    [3, 1, 2, 0],
    [0, 3, 1, 2],
    [2, 1, 3, 0],
]


def alvos(n):
    """Posicoes alvo para n questoes, parelhas e sem periodo curto."""
    saida = []
    for bloco in range((n + 3) // 4):
        saida.extend(PERMUTACOES[bloco % len(PERMUTACOES)])
    return saida[:n]


def redistribuir(caminho):
    t = io.open(caminho, encoding='utf-8').read()
    blocos = re.split(r'(?=\{id:"q\d+")', t)
    qids = re.findall(r'id:"(q\d+)"', t)
    plano = dict(zip(qids, alvos(len(qids))))

    saida, mudou = [], []
    for b in blocos:
        m = re.match(r'\{id:"(q\d+)"', b)
        if not m:
            saida.append(b)
            continue
        qid = m.group(1)
        ma = re.search(r'alts:\[(.*?)\],\n', b, re.S)
        mc = re.search(r'correta:(\d+)', b)
        if not (ma and mc):
            saida.append(b)
            continue

        alts = separar_alts(ma.group(1))
        if len(alts) != 4:
            print('  ! %s tem %d alternativas, pulei' % (qid, len(alts)))
            saida.append(b)
            continue

        atual, alvo = int(mc.group(1)), plano[qid]
        certa = alts[atual]
        resto = [a for k, a in enumerate(alts) if k != atual]
        nova = resto[:alvo] + [certa] + resto[alvo:]
        assert nova[alvo] == certa and sorted(nova) == sorted(alts), qid

        b = b.replace(ma.group(0), 'alts:[' + ','.join('"%s"' % a for a in nova) + '],\n', 1)
        b = b.replace('correta:%d' % atual, 'correta:%d' % alvo, 1)
        if atual != alvo:
            mudou.append('%s %s->%s' % (qid, 'ABCD'[atual], 'ABCD'[alvo]))
        saida.append(b)

    io.open(caminho, 'w', encoding='utf-8').write(''.join(saida))
    seq = [plano[q] for q in qids]
    print('%s: %d questoes, %d remanejadas' % (os.path.basename(caminho), len(qids), len(mudou)))
    print('  gabarito: %s' % ''.join('ABCD'[x] for x in seq))
    print('  A/B/C/D:  %s' % [seq.count(k) for k in range(4)])


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit('uso: python redistribuir_gabarito.py conteudo/<arquivo>.js')
    for alvo_arq in sys.argv[1:]:
        redistribuir(alvo_arq)

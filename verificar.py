# -*- coding: utf-8 -*-
"""Confere os arquivos de conteudo antes de publicar.

Rode sempre que mexer em conteudo/*.js:

    python verificar.py

O que ele protege, e por que:

O progresso do usuario e gravado por ID, no formato
    S.aulas["<disciplina>:<aula>"]  e  S.cards["<disciplina>:<card>"]
Entao o TEXTO pode mudar a vontade, mas ID NAO PODE. Trocar um id
orfana o progresso: a aula volta a aparecer como nao lida e o card
perde a agenda de revisao do SM-2.

Ja mordido em 25/08/2026: uma correcao de acentos trocou a chave
window.CONTEUDO["direito-legislacao"] por "direito-legislação" e a
disciplina inteira sumiu do app, silenciosamente.
"""
import io, os, re, sys, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'conteudo')
BLOCOS = {'p', 'l', 'd', 'a', 'tab'}
PESOS = {'alto', 'medio', 'baixo'}
erros = []


def ler(nome):
    return io.open(os.path.join(DIR, nome), encoding='utf-8').read()


# --- 1. indice: ids das 20 disciplinas -------------------------------------
idx = ler('00-indice.js')
ids_indice = re.findall(r'id:"([^"]+)"', idx)
if len(ids_indice) != 20:
    erros.append('indice tem %d disciplinas, esperado 20' % len(ids_indice))
if len(set(ids_indice)) != len(ids_indice):
    erros.append('indice tem id repetido')

arquivos = sorted(f for f in os.listdir(DIR) if re.match(r'\d\d-', f) and f != '00-indice.js')
print('Indice: %d disciplinas | Conteudo: %d arquivos\n' % (len(ids_indice), len(arquivos)))

# --- 2. cada arquivo de conteudo -------------------------------------------
for f in arquivos:
    t = ler(f)
    m = re.search(r'window\.CONTEUDO\["([^"]+)"\]', t)
    if not m:
        erros.append('%s: nao declara window.CONTEUDO["..."]' % f)
        continue
    chave = m.group(1)

    # a chave TEM que existir no indice, identica
    if chave not in ids_indice:
        erros.append('%s: chave "%s" nao existe no indice (acento? typo?)' % (f, chave))
    if chave != chave.encode('ascii', 'ignore').decode():
        erros.append('%s: chave "%s" tem acento. Chave e id, nunca leva acento.' % (f, chave))

    # ids internos: unicos e sem acento
    ids = re.findall(r'\bid:"([^"]+)"', t)
    if len(set(ids)) != len(ids):
        vistos, dup = set(), set()
        for i in ids:
            (dup if i in vistos else vistos).add(i)
        erros.append('%s: id repetido -> %s' % (f, sorted(dup)))
    for i in ids:
        if not re.fullmatch(r'[a-z]\d+', i):
            erros.append('%s: id "%s" fora do padrao (a1, c12, q3)' % (f, i))

    # chaves de objeto que o app le por nome: nunca podem ser acentuadas.
    # A busca roda no texto SEM o miolo das strings, senao um titulo de aula
    # como "A conta do titulo: ..." dispara falso positivo. Chave de objeto
    # nunca mora dentro de aspas neste formato.
    sem_strings = re.sub('"[^"]*"', '""', t)
    for chave_obj in ['explicacao', 'titulo', 'abertura', 'aulas', 'flashcards',
                      'simulado', 'blocos', 'enunciado', 'alts', 'correta', 'erro', 'peso']:
        acentuada = chave_obj.replace('cao', 'ção').replace('titulo', 'título')
        if acentuada != chave_obj and (acentuada + ':') in sem_strings:
            erros.append('%s: chave "%s:" foi acentuada. O app le por nome.' % (f, acentuada))

    # pesos validos
    for p in re.findall(r'peso:"([^"]+)"', t):
        if p not in PESOS:
            erros.append('%s: peso "%s" invalido' % (f, p))

    # tipos de bloco
    for b in re.findall(r'\{t:"([^"]+)"', t):
        if b not in BLOCOS:
            erros.append('%s: bloco tipo "%s" desconhecido' % (f, b))

    # gabarito viciado: quem escreve questao tende a por a certa como
    # segunda alternativa. O app embaralha as QUESTOES, nunca as
    # ALTERNATIVAS, entao o vicio chega inteiro em quem estuda.
    # Conserto: python redistribuir_gabarito.py conteudo/<arquivo>.js
    corretas = [int(x) for x in re.findall(r'correta:(\d+)', t)]
    if corretas:
        for letra in range(4):
            quantas = corretas.count(letra)
            if quantas > len(corretas) * 0.40:
                erros.append('%s: gabarito viciado, %d de %d corretas na letra %s '
                             '(rode redistribuir_gabarito.py)'
                             % (f, quantas, len(corretas), 'ABCD'[letra]))
        # padrao ciclico e tao ruim quanto: da pra acertar contando
        for periodo in (1, 2, 3, 4):
            if len(corretas) >= periodo * 3 and all(
                    c == corretas[i % periodo] for i, c in enumerate(corretas)):
                erros.append('%s: gabarito repete a cada %d questoes '
                             '(rode redistribuir_gabarito.py)' % (f, periodo))
                break

    n_a = len(re.findall(r'titulo:"', t))
    n_c = len(re.findall(r'\bid:"c\d+"', t))
    n_q = len(re.findall(r'\bid:"q\d+"', t))
    print('  %-30s %s | %d aulas, %d cards, %d questoes' % (f, chave, n_a, n_c, n_q))

    # o index.html carrega este arquivo?
    idxhtml = io.open(os.path.join(os.path.dirname(DIR), 'index.html'), encoding='utf-8').read()
    if ('conteudo/' + f) not in idxhtml:
        erros.append('%s: existe mas NAO esta no <script> do index.html' % f)

# --- 3. veredito ------------------------------------------------------------
print()
if erros:
    print('%d PROBLEMA(S):' % len(erros))
    for e in erros:
        print('  x ' + e)
    sys.exit(1)
print('Tudo certo. Nenhum id ou chave quebrado.')

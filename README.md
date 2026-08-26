# Sistema de Estudo, Corretor de Seguros

App de estudo para o **Exame de Habilitação de Corretores de Seguros (EHCS)** da ENS,
modalidade **Todos os Ramos**.

**No ar:** https://lucasnevesbr.github.io/estudo-corretor/

## O alvo

| Referência | Data |
|---|---|
| Inscrição | abre ~09/12/2026, fecha ~22/01/2027 |
| Provas | 08 a 11 de fevereiro de 2027, 18h às 19h, online |
| Resultado oficial | ~08/04/2027 |
| Taxa Todos os Ramos | ~R$ 2.330,00 |

São 200 questões em 4 dias, divididas em 3 blocos independentes. Aprovação é **70% por bloco,
sem zerar nenhuma disciplina**. Não existe compensação entre blocos.

| Bloco | Dia | Questões | Precisa acertar |
|---|---|---|---|
| Capitalização | 1º | 50 | 35 |
| Vida e Previdência | 2º | 50 | 35 |
| Seguros de Danos | 3º e 4º | 100 | 70 |

## A trilha

A tela inicial é uma trilha no estilo Duolingo: um nó por disciplina, na ordem de **aprender**,
não na ordem da prova. O nó atual é o único destacado, e clicar nele não pergunta nada, vai direto
para o passo que falta (ler a aula, fixar os cards ou rodar o simulado).

**Um nó fecha quando:** todas as aulas lidas **e** melhor simulado de 70% para cima.
O Consolidado não tranca a trilha, porque um flashcard leva no mínimo 21 dias para amadurecer e
travaria três semanas no primeiro nó. Ele vira estrela no nó já concluído.

| Estado | Como aparece |
|---|---|
| Atual | amarelo, maior, com anel de progresso e o balão Começar ou Continuar |
| Concluída | amarelo com ✓ |
| Dominada | amarelo com ★ (concluída mais Consolidado de 80% para cima) |
| Travada | cinza com 🔒, explica o que falta ao clicar |
| Sem conteúdo | contorno tracejado |

O topo mostra a semana da trilha, se você está em dia ou atrasado, e os dias que faltam para a prova.
Os cards vencidos aparecem **antes** da trilha, porque atravessam todas as disciplinas: revisão
vencida rende mais que matéria nova.

A trilha é opinativa de propósito. Se precisar furar a fila, a aba **Painel** abre tudo.

## O cartão Hoje

Abre a trilha e responde uma pergunta só: **o que fazer agora, e isso fecha a semana?**

- **Dia da semana e fita de 7 dias**, com os dias em que você estudou marcados e o de hoje em destaque.
- **Sequência de dias seguidos.** Conta a partir de ontem quando você ainda não estudou hoje, senão
  zeraria toda manhã antes do primeiro card.
- **As tarefas em ordem de retorno:** cards vencidos primeiro (atravessam todas as disciplinas),
  depois leitura, depois cards novos, e o simulado fechando a semana.
- **O ritmo calculado, não fixo.** Não existe "uma aula por dia": a disciplina tem N aulas e sobram
  X dias até domingo, então o alvo de hoje é N dividido por X, recalculado toda vez que você abre.
  Ler 3 num dia e 0 no outro dá no mesmo, desde que domingo chegue zerado.

## Como se lê uma disciplina

A tela abre a disciplina inteira numa rolagem, dividida em seções. **Uma seção é uma aula**, e cada
uma termina com o botão *Marcar como visto*.

- **Ao reabrir, a tela pula direto para a primeira seção não lida.** Sem isso você rola por cima do
  que já leu. Com a disciplina zerada ela começa do topo, para não pular a abertura.
- **Seção lida encolhe para o título**, com selo `✓ lida`. Toque no título para reler.
  Sair da disciplina volta tudo a encolher.
- **Barra de leitura no topo:** quantas de quantas, e a meta do dia quando esta é a disciplina da vez.
- **Tarja de peso** ao lado do título. O botão `80/20` esconde tudo que não é peso alto.

> O pulo é chamado de forma **síncrona**, não dentro de `requestAnimationFrame`: rAF não dispara em
> aba de segundo plano nem enquanto a página não compõe quadros, e o pulo simplesmente não aconteceria.

## As três réguas de progresso

- **Visto:** percentual de aulas marcadas como lidas.
- **Aprendido:** melhor simulado da disciplina dividido por 0,70. Bate a régua real da prova.
- **Consolidado:** percentual de flashcards com intervalo SM-2 de 21 dias ou mais.

## Método

- **Repetição espaçada SM-2**, com notas Errei / Difícil / Bom / Fácil. Errou volta na mesma sessão.
- **Flashcard e simulado não são a mesma coisa.** Card é recall ativo, mede se você SABE.
  Simulado é reconhecimento entre 4 alternativas, mede se você PASSA. Os dois ficam.
- **O botão 80/20 é filtro DENTRO da disciplina, nunca atalho entre disciplinas.** O regulamento
  reprova quem zera qualquer matéria, então largar a cauda não é opção. Cada aula, card e questão
  tem peso alto, médio ou baixo, e o 80/20 mostra só o alto.

## Instale na tela de início

No iPhone: Safari, botão de compartilhar, **Adicionar à Tela de Início**.
No Android: Chrome, menu de três pontos, **Instalar app**.

Não é só conforto. O Safari apaga o `localStorage` de site comum depois de **7 dias sem uso**, e o
app instalado na tela de início escapa dessa regra. Como a trilha dura 24 semanas e o SM-2 guarda o
calendário de revisão de cada card, perder o armazenamento é perder o estudo, não só a tela.

## Onde mora o progresso, e quem alcança ele

| Pergunta | Resposta |
|---|---|
| Outra pessoa vê meu progresso? | Não. Ele fica no `localStorage` do seu aparelho e nunca sai dele. Quem abre o link recebe um app zerado. |
| Outra pessoa altera meu progresso? | Não. Não existe servidor nem banco compartilhado. |
| Outra pessoa altera o código? | Não. Repositório público é leitura para todos, escrita só para o dono. |
| O que é público então? | O código e o conteúdo de estudo. Texto original, nada sigiloso. |

**Por isso este app não tem tela de login, e não deve ter.** GitHub Pages serve arquivo estático, sem
servidor: qualquer senha teria que viajar dentro do JavaScript, visível no código-fonte. E qualquer
arquivo do repositório é baixável por qualquer pessoa, `.env` inclusive. Segredo de verdade exige
servidor, e servidor aqui significa VPS, não Pages.

O único risco real é **você** perder o progresso: limpar os dados do navegador, trocar de aparelho
ou desinstalar. Por isso o botão `⤓` exporta e importa JSON, e o app cobra backup depois de 7 dias
sem salvar.

## Como roda

Estático puro. Sem servidor, sem banco, sem build. O progresso fica no `localStorage` do navegador,
com exportar e importar JSON no botão `⤓`.

```bash
python -m http.server 8899 --directory .
```

## Antes de publicar qualquer mudanca de conteudo

```bash
python verificar.py
```

**O progresso e gravado por ID, nunca por texto:**

```
S.aulas["teoria-geral:a1"]     aula lida
S.cards["teoria-geral:c12"]    agenda SM-2 daquele card
```

Consequencia pratica: **o texto pode mudar a vontade, o id nao.** Reescrever uma aula inteira
preserva o progresso. Trocar `c12` por `c13` orfana o card, que volta a aparecer como novo e perde
a agenda de revisao. Adicionar uma disciplina nova nunca afeta as existentes, porque cria chaves
novas.

O `verificar.py` confere isso: chave do objeto batendo com o indice, ids unicos e no padrao,
nenhuma chave de objeto acentuada, pesos validos, tipos de bloco conhecidos e `<script>` presente
no `index.html`.

## Estrutura

```
index.html            motor: progresso, SM-2, simulado, backup
conteudo/00-indice.js as 20 disciplinas, agrupadas nas 9 etapas da trilha
conteudo/NN-*.js      uma disciplina por arquivo
```

Para adicionar uma disciplina: criar o arquivo em `conteudo/` e incluir a tag `<script>` no
`index.html`.

> **Armadilha:** o array de questões do simulado chama-se `simulado`, **não** `questoes`.
> A chave `questoes` sobrescreve o número de questões vindo do índice no `Object.assign`.

## Conteúdo carregado

| Etapa | Disciplina | Aulas | Cards | Questões | Peso na prova |
|---|---|---|---|---|---|
| 1 | Teoria Geral do Seguro | 9 | 35 | 15 | 10 q |
| 1 | Direito e Legislação do Seguro | 8 | 33 | 15 | 10 q |
| 2 | Matemática Financeira | 9 | 35 | 15 | 10 q |

São 30 das 200 questões da prova, 15%. Faltam 17 disciplinas.

## Fonte

Conteúdo programático e estrutura conforme o Regulamento do 83º EHCS (2ª edição 2026) da ENS.
O texto das aulas é original, escrito a partir do programa público e da legislação primária
(Resoluções CNSP 249/12, 252/12, 258/12 e 318/14, Circulares SUSEP 428/12 e 510/15, Código Civil,
CDC e LGPD). As apostilas da ENS não são reproduzidas aqui.

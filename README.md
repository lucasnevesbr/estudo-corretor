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

## Como roda

Estático puro. Sem servidor, sem banco, sem build. O progresso fica no `localStorage` do navegador,
com exportar e importar JSON no botão `⤓`.

```bash
python -m http.server 8899 --directory .
```

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

Etapa 1 completa: Teoria Geral do Seguro e Direito e Legislação do Seguro.
São 20 das 200 questões da prova, 10%.

## Fonte

Conteúdo programático e estrutura conforme o Regulamento do 83º EHCS (2ª edição 2026) da ENS.
O texto das aulas é original, escrito a partir do programa público e da legislação primária
(Resoluções CNSP 249/12, 252/12, 258/12 e 318/14, Circulares SUSEP 428/12 e 510/15, Código Civil,
CDC e LGPD). As apostilas da ENS não são reproduzidas aqui.

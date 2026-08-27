/* Indice geral: as 8 etapas da trilha e as 20 disciplinas do exame.
   Fonte: Regulamento do EHCS (ENS), anexos 1 e 2.

   ALVO: 3a edicao de 2026, provas em 30/11 e 01, 02 e 03/12/2026.
   Trocado em 27/08/2026, quando o Lucas decidiu antecipar de fevereiro
   para dezembro. Sao 14 semanas: 13 de conteudo e 1 de reta final.
   Por isso a ordem aqui NAO e mais uma disciplina por semana: sete
   semanas carregam duas. O mapa semana a semana vive em SEM_DISC,
   no index.html, e a ordem deste array TEM que bater com ele.

   A ordem e a de APRENDER, nao a da prova, e e monotonica na semana.
   Adicionar disciplina = criar o arquivo em conteudo/ e incluir o <script> no index.html.
   Os campos `nome` e `modalidade` sao texto de tela: vao acentuados.
   NUNCA trocar um `id`: o progresso do Lucas e gravado por id. */

window.CONTEUDO = window.CONTEUDO || {};

window.INDICE = {
  etapas: [
    {n:1, nome:"O alicerce"},
    {n:2, nome:"As ferramentas"},
    {n:3, nome:"Acumulação e pessoas"},
    {n:4, nome:"A gramática dos danos"},
    {n:5, nome:"Os ramos patrimoniais"},
    {n:6, nome:"Responsabilidade e mobilidade"},
    {n:7, nome:"Demais Ramos e o negócio"},
    {n:8, nome:"Reta final"}
  ],
  disciplinas: [
    /* Etapa 1 · semanas 1 e 2 · a base conceitual e a lei */
    {id:"teoria-geral",        nome:"Teoria Geral do Seguro",              etapa:1, dia:1, modalidade:"Capitalização",     questoes:10},
    {id:"direito-legislacao",  nome:"Direito e Legislação do Seguro",      etapa:1, dia:1, modalidade:"Capitalização",     questoes:10},
    {id:"lgpd",                nome:"Lei Geral de Proteção de Dados",      etapa:1, dia:1, modalidade:"Capitalização",     questoes:10},
    /* Etapa 2 · semanas 3 e 4 · a conta, e as duas materias que vivem dela */
    {id:"matematica",          nome:"Matemática Financeira",               etapa:2, dia:1, modalidade:"Capitalização",     questoes:10},
    {id:"capitalizacao",       nome:"Capitalização",                       etapa:2, dia:1, modalidade:"Capitalização",     questoes:10},
    {id:"mercado-financeiro",  nome:"Mercado Financeiro",                  etapa:2, dia:2, modalidade:"Vida e Previdência",questoes:10},
    /* Etapa 3 · semanas 5 e 6 · as duas de 15 questoes, uma por semana */
    {id:"seguros-pessoas",     nome:"Seguros de Pessoas",                  etapa:3, dia:2, modalidade:"Vida e Previdência",questoes:15},
    {id:"previdencia",         nome:"Previdência Complementar",            etapa:3, dia:2, modalidade:"Vida e Previdência",questoes:15},
    /* Etapa 4 · semana 7 · abre o bloco de 100 questoes */
    {id:"introducao-danos",    nome:"Introdução aos Seguros de Danos",     etapa:4, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"gerenciamento-riscos",nome:"Gerenciamento de Riscos",             etapa:4, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    /* Etapa 5 · semanas 8 e 9 · patrimonio */
    {id:"compreensivos",       nome:"Compreensivos e Riscos Nomeados",     etapa:5, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"lucros-cessantes",    nome:"Seguros de Lucros Cessantes",         etapa:5, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"riscos-engenharia",   nome:"Seguros de Riscos de Engenharia",     etapa:5, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"riscos-rurais",       nome:"Riscos Rurais e Equipamentos Rurais", etapa:5, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    /* Etapa 6 · semanas 10 e 11 · quem responde, e o bem que anda */
    {id:"rc-geral",            nome:"Responsabilidade Civil Geral",        etapa:6, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"automoveis",          nome:"Seguros de Automóveis",               etapa:6, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"transportes",         nome:"Seguros de Transportes",              etapa:6, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    /* Etapa 7 · semanas 12 e 13 · as duas de 5 questoes juntas, e o fecho.
       Nome oficial no 84o EHCS e DEMAIS RAMOS, nao mais Ramos Diversos.
       Apostila 1a edicao/2026: a disciplina foi reescrita do zero. */
    {id:"ramos-diversos",      nome:"Demais Ramos (Seguro Garantia)",    etapa:7, dia:4, modalidade:"Seguros de Danos",  questoes:5},
    {id:"gestao-corretora",    nome:"Gestão de uma Corretora de Seguros",  etapa:7, dia:4, modalidade:"Seguros de Danos",  questoes:5},
    {id:"estrategias",         nome:"Estratégias de Comercialização",      etapa:7, dia:2, modalidade:"Vida e Previdência",questoes:10}
  ]
};

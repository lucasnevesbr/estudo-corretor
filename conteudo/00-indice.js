/* Indice geral: as 9 etapas da trilha e as 20 disciplinas do exame.
   Fonte: Regulamento do 77o Exame para Habilitacao de Corretores de Seguros (ENS), anexos 1 e 2.
   Adicionar disciplina = criar o arquivo em conteudo/ e incluir o <script> no index.html. */

window.CONTEUDO = window.CONTEUDO || {};

window.INDICE = {
  etapas: [
    {n:1, nome:"O alicerce"},
    {n:2, nome:"As ferramentas"},
    {n:3, nome:"Acumulacao e pessoas"},
    {n:4, nome:"A gramatica dos danos"},
    {n:5, nome:"Os ramos patrimoniais"},
    {n:6, nome:"Responsabilidade e mobilidade"},
    {n:7, nome:"Ramos Diversos"},
    {n:8, nome:"O negocio"},
    {n:9, nome:"Reta final"}
  ],
  disciplinas: [
    {id:"teoria-geral",        nome:"Teoria Geral do Seguro",              etapa:1, dia:1, modalidade:"Capitalizacao",     questoes:10},
    {id:"direito-legislacao",  nome:"Direito e Legislacao do Seguro",      etapa:1, dia:1, modalidade:"Capitalizacao",     questoes:10},
    {id:"matematica",          nome:"Matematica Financeira",               etapa:2, dia:1, modalidade:"Capitalizacao",     questoes:10},
    {id:"lgpd",                nome:"Lei Geral de Protecao de Dados",      etapa:2, dia:1, modalidade:"Capitalizacao",     questoes:10},
    {id:"mercado-financeiro",  nome:"Mercado Financeiro",                  etapa:2, dia:2, modalidade:"Vida e Previdencia",questoes:10},
    {id:"capitalizacao",       nome:"Capitalizacao",                       etapa:3, dia:1, modalidade:"Capitalizacao",     questoes:10},
    {id:"seguros-pessoas",     nome:"Seguros de Pessoas",                  etapa:3, dia:2, modalidade:"Vida e Previdencia",questoes:15},
    {id:"previdencia",         nome:"Previdencia Complementar",            etapa:3, dia:2, modalidade:"Vida e Previdencia",questoes:15},
    {id:"introducao-danos",    nome:"Introducao aos Seguros de Danos",     etapa:4, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"gerenciamento-riscos",nome:"Gerenciamento de Riscos",             etapa:4, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"compreensivos",       nome:"Compreensivos e Riscos Nomeados",     etapa:5, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"lucros-cessantes",    nome:"Seguros de Lucros Cessantes",         etapa:5, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"riscos-engenharia",   nome:"Seguros de Riscos de Engenharia",     etapa:5, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"riscos-rurais",       nome:"Riscos Rurais e Equipamentos Rurais", etapa:5, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"rc-geral",            nome:"Responsabilidade Civil Geral",        etapa:6, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"automoveis",          nome:"Seguros de Automoveis",               etapa:6, dia:4, modalidade:"Seguros de Danos",  questoes:10},
    {id:"transportes",         nome:"Seguros de Transportes",              etapa:6, dia:3, modalidade:"Seguros de Danos",  questoes:10},
    {id:"ramos-diversos",      nome:"Ramos Diversos (Seguro Garantia)",    etapa:7, dia:4, modalidade:"Seguros de Danos",  questoes:5},
    {id:"estrategias",         nome:"Estrategias de Comercializacao",      etapa:8, dia:2, modalidade:"Vida e Previdencia",questoes:10},
    {id:"gestao-corretora",    nome:"Gestao de uma Corretora de Seguros",  etapa:8, dia:4, modalidade:"Seguros de Danos",  questoes:5}
  ]
};

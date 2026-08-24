/* ETAPA 1 - Disciplina 2 de 20: Direito e Legislacao do Seguro (10 questoes, 1o dia) */

window.CONTEUDO["direito-legislacao"] = {
  abertura: "Aqui a resposta certa nao se deduz por logica, ela esta escrita em algum lugar. E a disciplina mais decoreba do 1o dia, e tambem a que mais recompensa quem estuda pela lei em vez de estudar por resumo.",

  aulas: [
    {
      id:"a1", peso:"medio", titulo:"Onde o seguro esta na lei brasileira",
      blocos:[
        {t:"p", x:"Quatro conjuntos de normas governam o seguro no Brasil, e cada um responde a uma pergunta diferente. Saber qual norma responde o que ja resolve boa parte das questoes."},
        {t:"tab", head:["Norma","Responde a pergunta"], rows:[
          ["<b>Codigo Civil</b>, artigos 757 a 802","Como funciona o contrato entre segurado e segurador."],
          ["<b>Decreto-Lei 73, de 1966</b>","Como se organiza o mercado: cria o Sistema Nacional de Seguros Privados."],
          ["<b>Lei 4.594, de 1964</b>","Quem e o corretor, o que ele pode e o que ele nao pode."],
          ["<b>Codigo de Defesa do Consumidor</b>","Como se protege o segurado enquanto consumidor."]
        ]},
        {t:"p", x:"Abaixo delas vem as <b>Resolucoes do CNSP</b> e as <b>Circulares da SUSEP</b>, que detalham a operacao. A <b>Lei Complementar 126, de 2007</b>, cuida do resseguro e da abertura daquele mercado."},
        {t:"d", x:"<b>A hierarquia importa na prova:</b> lei vem antes de Resolucao, e Resolucao vem antes de Circular. Uma Circular da SUSEP nao pode contrariar uma Resolucao do CNSP, e nenhuma das duas pode contrariar o Codigo Civil."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"O contrato de seguro no Codigo Civil",
      blocos:[
        {t:"d", x:"<b>Artigo 757.</b> Pelo contrato de seguro, o segurador se obriga, mediante o pagamento do premio, a garantir interesse legitimo do segurado, relativo a pessoa ou a coisa, contra riscos predeterminados. Vale ler essa frase palavra por palavra: ela contem interesse legitimo, premio, risco predeterminado e a divisao entre pessoa e coisa."},
        {t:"p", x:"E o paragrafo unico do mesmo artigo traz uma regra dura: <b>somente pode ser parte, como segurador, entidade para tal fim legalmente autorizada</b>. Ou seja, quem opera seguro sem autorizacao da SUSEP nao esta fazendo seguro, esta cometendo irregularidade."},
        {t:"p", x:"As caracteristicas do contrato, que a prova pede em lista:"},
        {t:"tab", head:["Caracteristica","Significado"], rows:[
          ["<b>Bilateral</b>","Gera obrigacoes para os dois lados: pagar o premio e garantir o risco."],
          ["<b>Oneroso</b>","Ha vantagem economica para ambos."],
          ["<b>Aleatorio</b>","A prestacao do segurador depende de evento incerto."],
          ["<b>Consensual</b>","Forma-se pelo acordo de vontades. A apolice prova o contrato, nao o cria."],
          ["<b>De adesao</b>","As clausulas sao previamente redigidas; o segurado adere. Por isso, duvida se interpreta a favor dele."],
          ["<b>De boa-fe</b>","Exige veracidade estrita dos dois lados (artigo 765)."]
        ]},
        {t:"p", x:"Sobre os documentos: o artigo 758 diz que o contrato <b>prova-se com a exibicao da apolice ou do bilhete</b> e, na falta deles, por documento comprobatorio do pagamento do premio. O artigo 760 permite apolice ou bilhete nominativo, a ordem ou ao portador, mas <b>nos seguros de pessoas nao se admite a forma ao portador</b>."},
        {t:"a", x:"Consensual nao quer dizer informal. Como o contrato se forma pelo consenso, ele ja existe antes da apolice sair. Muita questao explora isso: emitir a apolice depois nao significa que nao havia contrato antes."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"O que faz o segurado perder a garantia",
      blocos:[
        {t:"p", x:"Este e o bloco de artigos mais cobrado da disciplina. Sao cinco situacoes, cada uma com um artigo proprio."},
        {t:"tab", head:["Artigo","Situacao","Consequencia"], rows:[
          ["<b>762</b>","Risco proveniente de <b>ato doloso</b> do segurado, do beneficiario ou de representante","O contrato e <b>nulo</b>."],
          ["<b>763</b>","Segurado <b>em mora</b> no pagamento do premio quando ocorre o sinistro","Nao tem direito a indenizacao, salvo se purgar a mora."],
          ["<b>766</b>","<b>Declaracoes inexatas ou omissao</b> de circunstancia que influa na aceitacao ou na taxa","Se de ma-fe: perde a garantia e ainda deve o premio vencido. Se sem ma-fe: o segurador pode resolver o contrato ou cobrar a diferenca de premio."],
          ["<b>768</b>","Segurado <b>agrava intencionalmente</b> o risco","Perde o direito a garantia."],
          ["<b>771</b>","Nao comunicar o sinistro logo que souber, ou nao tomar providencias para minorar as consequencias","Perde o direito a indenizacao."]
        ]},
        {t:"d", x:"<b>A distincao que decide questao no artigo 766:</b> tudo depende da ma-fe. Com ma-fe, o segurado perde tudo e ainda deve o premio. Sem ma-fe, o contrato nao morre automaticamente: a seguradora escolhe entre encerrar ou cobrar a diferenca. A prova adora afirmar que qualquer declaracao inexata anula o seguro, e isso esta errado."},
        {t:"p", x:"Ha ainda o artigo 769, que obriga o segurado a <b>comunicar ao segurador todo incidente suscetivel de agravar consideravelmente o risco</b>, sob pena de perder a garantia se provada a omissao intencional."},
        {t:"a", x:"Agravacao intencional (artigo 768) e diferente de agravacao natural. Se o risco aumenta sozinho, sem ato do segurado, nao ha perda de garantia; o que a lei pune e a conduta intencional e a omissao intencional."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"Seguro de dano e seguro de pessoa na lei",
      blocos:[
        {t:"p", x:"O Codigo Civil separa os dois em secoes distintas, e as regras sao quase opostas. Fixar essa tabela resolve questoes tanto aqui quanto no 2o dia de prova."},
        {t:"tab", head:["Tema","Seguro de dano (778 a 788)","Seguro de pessoa (789 a 802)"], rows:[
          ["Valor","A garantia nao pode ultrapassar o valor do interesse segurado (778). A indenizacao nao pode superar o prejuizo no momento do sinistro (781).","O capital e <b>livremente estipulado</b> pelo proponente (789)."],
          ["Varias apolices","Nao pode segurar o mesmo interesse pelo valor integral em mais de uma apolice, sob pena das consequencias do artigo 782.","<b>Pode</b> contratar mais de um seguro sobre o mesmo interesse, com o mesmo ou diversos seguradores (789)."],
          ["Sub-rogacao","<b>Existe</b>: paga a indenizacao, o segurador sub-roga-se nos direitos contra o causador do dano (786).","<b>Nao existe</b>: o segurador nao pode sub-rogar-se nos direitos do segurado ou do beneficiario (800)."],
          ["Beneficiario","Nao se aplica da mesma forma.","Pode ser livremente indicado e substituido. Nao havendo indicacao, paga-se metade ao conjuge nao separado e o restante aos herdeiros (792)."]
        ]},
        {t:"d", x:"<b>Dois artigos que caem quase sempre nos seguros de pessoas:</b> o <b>794</b> diz que o capital estipulado nao esta sujeito as dividas do segurado nem se considera heranca; e o <b>798</b> diz que o beneficiario nao tem direito ao capital se o segurado se suicidar nos <b>primeiros dois anos</b> de vigencia, ficando garantida apenas a devolucao da reserva tecnica."},
        {t:"p", x:"No seguro de responsabilidade civil, o artigo 787 estabelece que o segurador garante o pagamento de perdas e danos devidos pelo segurado a terceiro, e que o segurado nao pode reconhecer sua responsabilidade nem transigir com o terceiro sem anuencia do segurador."},
        {t:"a", x:"A regra do suicidio nao e sobre premeditacao, e sobre <b>prazo</b>. Dentro de dois anos nao paga o capital, mesmo sem prova de premeditacao. Depois de dois anos paga, mesmo havendo indicio de premeditacao. A jurisprudencia consolidou o criterio objetivo do prazo."}
      ]
    },
    {
      id:"a5", peso:"alto", titulo:"Prescricao: os prazos que caem",
      blocos:[
        {t:"tab", head:["Quem cobra de quem","Prazo"], rows:[
          ["Segurado contra o segurador","<b>1 ano</b>"],
          ["Segurador contra o segurado","<b>1 ano</b>"],
          ["Beneficiario contra o segurador, no seguro de vida","<b>3 anos</b>"],
          ["Terceiro prejudicado contra o segurador, em RC obrigatorio","<b>3 anos</b>"]
        ]},
        {t:"d", x:"<b>A regra de bolso:</b> quem e <b>parte do contrato</b> prescreve em <b>1 ano</b>. Quem esta <b>fora do contrato</b>, como o beneficiario e o terceiro prejudicado, prescreve em <b>3 anos</b>."},
        {t:"p", x:"Duas sumulas do Superior Tribunal de Justica ajudam: a <b>Sumula 101</b> confirma o prazo anual para a acao do segurado contra o segurador no seguro de vida, e a <b>Sumula 229</b> diz que o <b>aviso de sinistro suspende o prazo</b> ate que o segurado receba a resposta da seguradora."},
        {t:"a", x:"O prazo do segurado nao corre enquanto a seguradora nao responde ao aviso de sinistro. Questao que diz que o prazo corre ininterruptamente do dia do sinistro esta errada."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"O Sistema Nacional de Seguros Privados",
      blocos:[
        {t:"p", x:"Criado pelo Decreto-Lei 73 de 1966, o sistema tem composicao definida em lei. A questao classica pede quem o integra."},
        {t:"l", x:[
          "<b>CNSP</b>, Conselho Nacional de Seguros Privados: orgao normativo, fixa diretrizes e edita Resolucoes.",
          "<b>SUSEP</b>, Superintendencia de Seguros Privados: autarquia executora e fiscalizadora, vinculada ao Ministerio da Fazenda, edita Circulares.",
          "<b>IRB</b> e os resseguradores: aceitam risco das seguradoras.",
          "<b>Sociedades seguradoras</b> autorizadas a funcionar.",
          "<b>Corretores de seguros</b> habilitados."
        ]},
        {t:"p", x:"Entre as competencias da SUSEP que a prova cobra: autorizar a constituicao e o funcionamento das seguradoras, fiscalizar suas operacoes e sua solvencia, aprovar limites de operacao, autorizar movimentacao de ativos garantidores, e proceder a liquidacao das sociedades. Entre as competencias do CNSP: fixar diretrizes da politica de seguros, regular a constituicao e o funcionamento, fixar as caracteristicas gerais dos contratos e disciplinar a corretagem."},
        {t:"a", x:"A SUSEP nao julga sinistro e nao obriga seguradora a pagar indenizacao a um segurado especifico. Ela fiscaliza a conduta e pode punir a seguradora, mas quem decide o pagamento e o Judiciario. Questao que coloca a SUSEP condenando a seguradora a indenizar esta errada."}
      ]
    },
    {
      id:"a7", peso:"alto", titulo:"O corretor de seguros",
      blocos:[
        {t:"p", x:"A profissao e regida pela <b>Lei 4.594, de 1964</b>. Esta e a parte da prova que fala diretamente do que voce vai ser."},
        {t:"l", x:[
          "<b>Definicao:</b> o corretor de seguros e o <b>intermediario legalmente autorizado</b> a angariar e promover contratos de seguro entre as seguradoras e as pessoas fisicas ou juridicas de direito privado.",
          "<b>Natureza:</b> pode ser pessoa fisica ou juridica, e e profissional <b>autonomo</b>. Nao e empregado nem preposto da seguradora.",
          "<b>Habilitacao e registro:</b> depende de aprovacao em exame ou curso de habilitacao e de registro na SUSEP.",
          "<b>Remuneracao:</b> comissao de corretagem, que <b>so pode ser paga a corretor habilitado e registrado</b>.",
          "<b>Responsabilidade:</b> responde civilmente perante segurados e seguradoras pelos prejuizos causados por <b>omissao, impericia ou negligencia</b> no exercicio da profissao."
        ]},
        {t:"d", x:"<b>As vedacoes, que sao questao garantida:</b> o corretor <b>nao pode</b> ser socio, administrador, procurador, despachante ou empregado de sociedade seguradora. Servidor publico tambem esta impedido. A logica e simples: quem intermedeia nao pode estar dos dois lados da mesa."},
        {t:"p", x:"As penalidades aplicaveis pela SUSEP, em escala: <b>multa</b>, <b>suspensao temporaria</b> do exercicio da profissao e <b>cancelamento do registro</b>."},
        {t:"a", x:"O corretor representa o <b>segurado</b>, nao a seguradora, ainda que quem pague a comissao seja a seguradora. Questao que descreve o corretor como representante ou preposto da seguradora esta errada."}
      ]
    },
    {
      id:"a8", peso:"medio", titulo:"O Codigo de Defesa do Consumidor no seguro",
      blocos:[
        {t:"p", x:"A atividade securitaria esta expressamente listada entre os servicos do Codigo de Defesa do Consumidor, entao ele incide sobre o contrato de seguro sempre que houver relacao de consumo."},
        {t:"l", x:[
          "<b>Interpretacao mais favoravel:</b> por ser contrato de adesao, a clausula ambigua ou contraditoria se interpreta a favor do segurado.",
          "<b>Destaque das limitacoes:</b> clausulas que limitam direito do consumidor precisam ser redigidas com destaque, permitindo compreensao imediata.",
          "<b>Clausulas abusivas:</b> sao nulas de pleno direito, como as que colocam o consumidor em desvantagem exagerada.",
          "<b>Informacao clara:</b> o dever de informar alcanca o corretor, e informacao mal prestada gera responsabilidade."
        ]},
        {t:"a", x:"Nem todo seguro e relacao de consumo. Quando a empresa contrata seguro como <b>insumo da sua atividade</b>, a aplicacao do Codigo de Defesa do Consumidor fica discutivel, porque falta a figura do destinatario final. Em prova, a regra geral e aplicar; a excecao aparece com o segurado empresarial usando o seguro como meio de producao."}
      ]
    }
  ],

  flashcards: [
    {id:"c1", peso:"alto", p:"Quais artigos do Codigo Civil tratam do contrato de seguro?", r:"Os artigos <b>757 a 802</b>. Danos: 778 a 788. Pessoas: 789 a 802."},
    {id:"c2", peso:"alto", p:"O que diz o artigo 757 do Codigo Civil?", r:"O segurador se obriga, mediante pagamento do <b>premio</b>, a garantir <b>interesse legitimo</b> do segurado, relativo a pessoa ou a coisa, contra <b>riscos predeterminados</b>. E so pode ser segurador entidade legalmente autorizada."},
    {id:"c3", peso:"alto", p:"Liste as caracteristicas do contrato de seguro.", r:"<b>Bilateral, oneroso, aleatorio, consensual, de adesao e de boa-fe.</b>"},
    {id:"c4", peso:"alto", p:"A apolice cria o contrato de seguro?", r:"Nao. O contrato e <b>consensual</b>, forma-se pelo acordo de vontades. A apolice <b>prova</b> o contrato (artigo 758), e na falta dela vale documento comprobatorio do pagamento do premio."},
    {id:"c5", peso:"medio", p:"Que forma de apolice nao se admite nos seguros de pessoas?", r:"A forma <b>ao portador</b>. Nominativa e a ordem sao admitidas (artigo 760)."},
    {id:"c6", peso:"alto", p:"Artigo 762: qual o efeito do ato doloso do segurado?", r:"O contrato e <b>nulo</b> quando o risco decorre de ato doloso do segurado, do beneficiario ou de representante de um deles."},
    {id:"c7", peso:"alto", p:"Artigo 763: e o segurado em mora com o premio quando ocorre o sinistro?", r:"<b>Nao tem direito a indenizacao</b> se o sinistro ocorrer antes de purgada a mora."},
    {id:"c8", peso:"alto", p:"Artigo 766: qual a diferenca entre declaracao inexata COM e SEM ma-fe?", r:"<b>Com ma-fe:</b> perde o direito a garantia e ainda fica obrigado ao premio vencido. <b>Sem ma-fe:</b> o segurador pode resolver o contrato ou cobrar a diferenca de premio. Nao ha nulidade automatica."},
    {id:"c9", peso:"alto", p:"Artigo 768: o que acontece se o segurado agrava o risco?", r:"Perde o direito a garantia se agravar <b>intencionalmente</b> o risco objeto do contrato. Agravacao natural, sem ato do segurado, nao gera perda."},
    {id:"c10", peso:"alto", p:"Artigo 771: quais os dois deveres do segurado ocorrido o sinistro?", r:"<b>Comunicar</b> o sinistro ao segurador logo que saiba, e <b>tomar as providencias</b> para minorar as consequencias. Descumprir faz perder o direito a indenizacao."},
    {id:"c11", peso:"alto", p:"No seguro de dano, ate quanto pode ir a indenizacao?", r:"Ate o <b>valor do interesse segurado no momento do sinistro</b>, respeitado o limite maximo da garantia (artigos 778 e 781). Nunca pode gerar lucro."},
    {id:"c12", peso:"alto", p:"No seguro de pessoa, quem define o capital segurado?", r:"O <b>proponente</b>, livremente (artigo 789). E ele pode contratar mais de um seguro sobre o mesmo interesse, com o mesmo ou diversos seguradores."},
    {id:"c13", peso:"alto", p:"Em que tipo de seguro existe sub-rogacao, e em qual nao existe?", r:"<b>Existe</b> no seguro de dano (artigo 786). <b>Nao existe</b> no seguro de pessoa (artigo 800)."},
    {id:"c14", peso:"medio", p:"Artigo 792: nao havendo beneficiario indicado, a quem se paga?", r:"<b>Metade ao conjuge</b> nao separado judicialmente, e o restante aos <b>herdeiros</b> do segurado, na ordem da vocacao hereditaria."},
    {id:"c15", peso:"alto", p:"Artigo 794: o capital do seguro de vida entra no inventario?", r:"<b>Nao.</b> Nao esta sujeito as dividas do segurado nem se considera heranca."},
    {id:"c16", peso:"alto", p:"Artigo 798: qual a regra do suicidio no seguro de vida?", r:"Nos <b>primeiros dois anos</b> de vigencia o beneficiario nao tem direito ao capital, garantida a devolucao da reserva tecnica. Depois de dois anos, paga. O criterio e o prazo, nao a prova de premeditacao."},
    {id:"c17", peso:"medio", p:"Artigo 787: o que o segurado NAO pode fazer no seguro de responsabilidade civil?", r:"Nao pode <b>reconhecer sua responsabilidade</b> nem <b>transigir com o terceiro</b> sem anuencia expressa do segurador."},
    {id:"c18", peso:"alto", p:"Prazo de prescricao do segurado contra o segurador?", r:"<b>1 ano.</b>"},
    {id:"c19", peso:"alto", p:"Prazo de prescricao do beneficiario e do terceiro prejudicado contra o segurador?", r:"<b>3 anos.</b> A regra de bolso: quem e parte do contrato tem 1 ano, quem esta fora tem 3."},
    {id:"c20", peso:"medio", p:"O que diz a Sumula 229 do Superior Tribunal de Justica?", r:"O <b>aviso de sinistro suspende</b> o prazo de prescricao ate que o segurado receba a resposta da seguradora."},
    {id:"c21", peso:"alto", p:"Qual norma criou o Sistema Nacional de Seguros Privados e quem o integra?", r:"O <b>Decreto-Lei 73 de 1966</b>. Integram: CNSP, SUSEP, IRB e resseguradores, sociedades seguradoras autorizadas e corretores habilitados."},
    {id:"c22", peso:"alto", p:"Quem edita Resolucao e quem edita Circular?", r:"<b>Resolucao e do CNSP</b> (normativo). <b>Circular e da SUSEP</b> (executora e fiscalizadora). Circular nao pode contrariar Resolucao."},
    {id:"c23", peso:"medio", p:"A SUSEP pode condenar a seguradora a pagar um sinistro?", r:"<b>Nao.</b> Ela fiscaliza a conduta e pode punir administrativamente, mas quem decide o pagamento de um sinistro especifico e o Judiciario."},
    {id:"c24", peso:"alto", p:"Qual lei regula a profissao de corretor de seguros?", r:"A <b>Lei 4.594, de 1964</b>."},
    {id:"c25", peso:"alto", p:"Qual a definicao legal de corretor de seguros?", r:"O <b>intermediario legalmente autorizado</b> a angariar e promover contratos de seguro entre as seguradoras e as pessoas fisicas ou juridicas de direito privado. E profissional autonomo, pessoa fisica ou juridica."},
    {id:"c26", peso:"alto", p:"O corretor representa quem: o segurado ou a seguradora?", r:"Representa o <b>segurado</b>, ainda que a comissao seja paga pela seguradora. Nao e preposto nem empregado dela."},
    {id:"c27", peso:"alto", p:"Quais as vedacoes ao corretor de seguros?", r:"Nao pode ser <b>socio, administrador, procurador, despachante ou empregado de sociedade seguradora</b>. Servidor publico tambem esta impedido."},
    {id:"c28", peso:"alto", p:"Por que o corretor responde civilmente, e em quais casos?", r:"Responde perante segurados e seguradoras pelos prejuizos causados por <b>omissao, impericia ou negligencia</b> no exercicio da profissao."},
    {id:"c29", peso:"medio", p:"Quais as penalidades aplicaveis ao corretor pela SUSEP?", r:"<b>Multa, suspensao temporaria</b> do exercicio da profissao e <b>cancelamento do registro</b>."},
    {id:"c30", peso:"medio", p:"A quem pode ser paga comissao de corretagem?", r:"Somente a <b>corretor habilitado e registrado</b> na SUSEP."},
    {id:"c31", peso:"medio", p:"Por que a clausula ambigua de uma apolice se interpreta a favor do segurado?", r:"Porque o seguro e contrato de <b>adesao</b>: as clausulas foram redigidas por uma das partes, e o Codigo de Defesa do Consumidor manda interpretar a favor de quem apenas aderiu."},
    {id:"c32", peso:"medio", p:"Qual a hierarquia entre lei, Resolucao do CNSP e Circular da SUSEP?", r:"<b>Lei, depois Resolucao, depois Circular.</b> Circular nao contraria Resolucao, e nenhuma das duas contraria o Codigo Civil."},
    {id:"c33", peso:"baixo", p:"Qual norma trata do resseguro e da abertura daquele mercado?", r:"A <b>Lei Complementar 126, de 2007</b>."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"Segundo o artigo 757 do Codigo Civil, pelo contrato de seguro o segurador se obriga, mediante o pagamento do premio, a garantir:",
     alts:["Qualquer prejuizo sofrido pelo segurado durante a vigencia.","Interesse legitimo do segurado, relativo a pessoa ou a coisa, contra riscos predeterminados.","O valor de mercado do bem, independentemente de previsao contratual.","A recomposicao integral do patrimonio do segurado, sem limite de valor."],
     correta:1,
     explicacao:"O artigo 757 exige tres coisas: interesse legitimo, riscos predeterminados e o pagamento do premio. Nao existe garantia generica contra qualquer prejuizo.",
     erro:"Artigo 757: interesse legitimo, sobre pessoa ou coisa, contra riscos predeterminados."},

    {id:"q2", peso:"alto",
     enunciado:"O segurado prestou declaracao inexata na proposta, sem ma-fe, influindo na taxa do premio. Nesse caso, o segurador:",
     alts:["Tera o contrato automaticamente anulado, sem devolucao de valores.","Podera resolver o contrato ou cobrar a diferenca de premio, mesmo apos o sinistro.","Devera pagar a indenizacao integral, sem qualquer consequencia.","Podera exigir a devolucao em dobro do que ja recebeu de premio."],
     correta:1,
     explicacao:"O artigo 766 separa os cenarios pela ma-fe. Sem ma-fe, o segurador escolhe entre resolver o contrato ou cobrar a diferenca de premio. A perda da garantia mais a obrigacao pelo premio vencido so ocorre havendo ma-fe.",
     erro:"Artigo 766 sem ma-fe: resolver o contrato OU cobrar diferenca. Nao ha nulidade automatica."},

    {id:"q3", peso:"alto",
     enunciado:"Sobre o seguro de pessoa, e correto afirmar que:",
     alts:["O capital segurado e limitado ao prejuizo economico comprovado pelo beneficiario.","O segurador sub-roga-se nos direitos do segurado contra o causador do dano.","O capital e livremente estipulado pelo proponente, que pode contratar mais de um seguro sobre o mesmo interesse.","Havendo duas apolices, a indenizacao e rateada entre as seguradoras."],
     correta:2,
     explicacao:"O artigo 789 permite capital livremente estipulado e mais de um seguro sobre o mesmo interesse. O artigo 800 veda a sub-rogacao. Rateio e principio indenitario sao do seguro de dano.",
     erro:"Artigo 789: capital livre e acumulo de apolices. Artigo 800: sem sub-rogacao."},

    {id:"q4", peso:"alto",
     enunciado:"O segurado de um seguro de vida suicidou-se no vigesimo mes de vigencia da apolice, sem qualquer indicio de premeditacao. O beneficiario:",
     alts:["Recebera o capital integral, pois nao houve premeditacao comprovada.","Nao tera direito ao capital, sendo garantida a devolucao da reserva tecnica.","Recebera metade do capital, a titulo de composicao.","Recebera o capital apenas se o suicidio decorrer de doenca psiquiatrica."],
     correta:1,
     explicacao:"O artigo 798 adota criterio objetivo de prazo: dentro dos dois primeiros anos nao ha direito ao capital, independentemente de premeditacao, garantida a devolucao da reserva tecnica.",
     erro:"Artigo 798: suicidio nos 2 primeiros anos nao paga capital. Criterio e prazo, nao premeditacao."},

    {id:"q5", peso:"alto",
     enunciado:"Os prazos prescricionais da pretensao do segurado contra o segurador e do terceiro prejudicado em seguro de responsabilidade civil obrigatorio sao, respectivamente:",
     alts:["1 ano e 3 anos.","3 anos e 1 ano.","1 ano e 1 ano.","5 anos e 3 anos."],
     correta:0,
     explicacao:"Quem e parte do contrato prescreve em 1 ano. Quem esta fora do contrato, como o terceiro prejudicado e o beneficiario, prescreve em 3 anos.",
     erro:"Prescricao: parte do contrato 1 ano, terceiro e beneficiario 3 anos."},

    {id:"q6", peso:"alto",
     enunciado:"O corretor de seguros, nos termos da Lei 4.594 de 1964, e:",
     alts:["Preposto da sociedade seguradora, a quem representa perante o segurado.","Empregado da seguradora, remunerado por comissao.","Intermediario legalmente autorizado a angariar e promover contratos de seguro, atuando de forma autonoma.","Servidor delegado da SUSEP para fiscalizar contratos de seguro."],
     correta:2,
     explicacao:"O corretor e intermediario autonomo, habilitado e registrado na SUSEP, e representa o interesse do segurado, ainda que a comissao seja paga pela seguradora. Nao e preposto nem empregado dela.",
     erro:"Corretor e intermediario autonomo que representa o segurado, nao preposto da seguradora."},

    {id:"q7", peso:"alto",
     enunciado:"Assinale a alternativa que apresenta uma vedacao legal ao corretor de seguros:",
     alts:["Constituir pessoa juridica para exercer a corretagem.","Ser socio, administrador ou empregado de sociedade seguradora.","Intermediar seguros de ramos diversos simultaneamente.","Receber comissao de corretagem de mais de uma seguradora."],
     correta:1,
     explicacao:"A lei impede que o corretor esteja dos dois lados da mesa: nao pode ser socio, administrador, procurador, despachante ou empregado de seguradora. Servidor publico tambem esta impedido. Constituir pessoa juridica e atuar em varios ramos sao praticas normais.",
     erro:"Vedacao: corretor nao pode ser socio, administrador, procurador, despachante ou empregado de seguradora."},

    {id:"q8", peso:"alto",
     enunciado:"Compete a SUSEP, entre outras atribuicoes:",
     alts:["Fixar as diretrizes e normas da politica de seguros privados.","Autorizar a constituicao e o funcionamento das sociedades seguradoras e fiscalizar suas operacoes.","Editar Resolucoes disciplinando as caracteristicas gerais dos contratos.","Julgar recursos de segurados sobre negativa de sinistro, determinando o pagamento."],
     correta:1,
     explicacao:"Fixar diretrizes e editar Resolucoes e do CNSP. Determinar pagamento de sinistro especifico e do Judiciario. A SUSEP autoriza, fiscaliza, pune administrativamente e liquida sociedades.",
     erro:"SUSEP autoriza e fiscaliza. CNSP fixa diretrizes e edita Resolucao. Sinistro especifico e do Judiciario."},

    {id:"q9", peso:"medio",
     enunciado:"O contrato de seguro e classificado como consensual porque:",
     alts:["Depende da entrega da apolice para se aperfeicoar.","Forma-se pelo acordo de vontades, servindo a apolice como prova.","Exige forma escrita solene sob pena de nulidade.","Depende de homologacao previa pela SUSEP."],
     correta:1,
     explicacao:"O artigo 758 estabelece que o contrato se prova com a apolice ou o bilhete e, na falta deles, por documento comprobatorio do pagamento do premio. A apolice prova, nao constitui.",
     erro:"Contrato consensual: a apolice prova o contrato, nao o cria."},

    {id:"q10", peso:"alto",
     enunciado:"Ocorrido o sinistro, sao deveres do segurado previstos no artigo 771 do Codigo Civil:",
     alts:["Comunicar o sinistro logo que o saiba e tomar as providencias para minorar as consequencias.","Aguardar a convocacao do regulador antes de qualquer providencia.","Reconhecer sua responsabilidade perante o terceiro prejudicado.","Providenciar orcamentos e efetuar o reparo antes do aviso a seguradora."],
     correta:0,
     explicacao:"O artigo 771 impoe os dois deveres, sob pena de perda do direito a indenizacao. Reconhecer responsabilidade perante terceiro, alias, e vedado no seguro de responsabilidade civil pelo artigo 787.",
     erro:"Artigo 771: comunicar logo que souber e minorar as consequencias."},

    {id:"q11", peso:"medio",
     enunciado:"O risco decorrente de ato doloso do segurado, do beneficiario ou de representante de um ou de outro torna o contrato:",
     alts:["Anulavel, a criterio do segurador.","Nulo.","Valido, com reducao proporcional da indenizacao.","Suspenso ate a apuracao judicial."],
     correta:1,
     explicacao:"O artigo 762 e categorico: o contrato e nulo. Note a diferenca em relacao a culpa simples, que continua coberta.",
     erro:"Artigo 762: risco por ato doloso torna o contrato NULO."},

    {id:"q12", peso:"medio",
     enunciado:"Nos seguros de vida, nao havendo indicacao de beneficiario, o capital segurado sera pago:",
     alts:["Integralmente ao conjuge sobrevivente.","Metade ao conjuge nao separado judicialmente e o restante aos herdeiros do segurado.","Integralmente ao espolio, para partilha em inventario.","A seguradora, que constituira reserva."],
     correta:1,
     explicacao:"E a regra do artigo 792. Lembrando que, pelo artigo 794, esse capital nao se considera heranca nem responde pelas dividas do segurado.",
     erro:"Sem beneficiario indicado: metade ao conjuge, o restante aos herdeiros (artigo 792)."},

    {id:"q13", peso:"medio",
     enunciado:"Sobre a hierarquia das normas do mercado segurador, e correto afirmar:",
     alts:["Circular da SUSEP prevalece sobre Resolucao do CNSP, por ser mais especifica.","Resolucao do CNSP pode contrariar o Codigo Civil, por regular materia tecnica.","Circular da SUSEP nao pode contrariar Resolucao do CNSP, e nenhuma delas contraria a lei.","Resolucao e Circular tem a mesma hierarquia, prevalecendo a mais recente."],
     correta:2,
     explicacao:"A ordem e lei, depois Resolucao do CNSP, depois Circular da SUSEP. Norma inferior detalha a superior e nao pode contraria-la.",
     erro:"Hierarquia: lei, depois Resolucao do CNSP, depois Circular da SUSEP."},

    {id:"q14", peso:"medio",
     enunciado:"No seguro de responsabilidade civil, o segurado que reconhece sua responsabilidade perante o terceiro sem anuencia do segurador:",
     alts:["Age corretamente, pois agiliza a indenizacao da vitima.","Pratica ato vedado pelo artigo 787 do Codigo Civil.","Fica dispensado de comunicar o sinistro a seguradora.","Passa a ter direito a indenizacao em dobro."],
     correta:1,
     explicacao:"O artigo 787 veda ao segurado reconhecer responsabilidade, confessar acao ou transigir com o terceiro sem anuencia expressa do segurador, justamente porque quem vai pagar e a seguradora.",
     erro:"Artigo 787: proibido reconhecer responsabilidade ou transigir sem anuencia do segurador."},

    {id:"q15", peso:"medio",
     enunciado:"A aplicacao do Codigo de Defesa do Consumidor ao contrato de seguro implica, entre outros efeitos:",
     alts:["A interpretacao das clausulas ambiguas em favor do segurador, que redigiu o contrato.","A interpretacao mais favoravel ao segurado e a exigencia de destaque para clausulas limitativas de direito.","A dispensa do pagamento do premio em caso de duvida sobre a cobertura.","A vedacao de qualquer clausula de exclusao de risco."],
     correta:1,
     explicacao:"Sendo contrato de adesao, a ambiguidade se resolve a favor de quem aderiu, e as clausulas que limitam direito precisam de destaque que permita compreensao imediata. Exclusoes continuam validas, desde que claras e destacadas.",
     erro:"CDC no seguro: interpretacao a favor do segurado e destaque nas clausulas limitativas."}
  ]
};

/* ETAPA 1 - Disciplina 2 de 20: Direito e Legislação do Seguro (10 questões, 1o dia) */

window.CONTEUDO["direito-legislacao"] = {
  abertura: "Aqui a resposta certa não se deduz por lógica, ela está escrita em algum lugar. E a disciplina mais decoreba do 1o dia, e também a que mais recompensa quem estuda pela lei em vez de estudar por resumo.",

  aulas: [
    {
      id:"a1", peso:"medio", titulo:"Onde o seguro está na lei brasileira",
      blocos:[
        {t:"p", x:"Quatro conjuntos de normas governam o seguro no Brasil, e cada um responde a uma pergunta diferente. Saber qual norma responde o que já resolve boa parte das questões."},
        {t:"tab", head:["Norma","Responde a pergunta"], rows:[
          ["<b>Código Civil</b>, artigos 757 a 802","Como funciona o contrato entre segurado e segurador."],
          ["<b>Decreto-Lei 73, de 1966</b>","Como se organiza o mercado: cria o Sistema Nacional de Seguros Privados."],
          ["<b>Lei 4.594, de 1964</b>","Quem é o corretor, o que ele pode e o que ele não pode."],
          ["<b>Código de Defesa do Consumidor</b>","Como se protege o segurado enquanto consumidor."]
        ]},
        {t:"p", x:"Abaixo delas vem as <b>Resoluções do CNSP</b> e as <b>Circulares da SUSEP</b>, que detalham a operação. A <b>Lei Complementar 126, de 2007</b>, cuida do resseguro e da abertura daquele mercado."},
        {t:"d", x:"<b>A hierarquia importa na prova:</b> lei vem antes de Resolução, e Resolução vem antes de Circular. Uma Circular da SUSEP não pode contrariar uma Resolução do CNSP, e nenhuma das duas pode contrariar o Código Civil."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"O contrato de seguro no Código Civil",
      blocos:[
        {t:"d", x:"<b>Artigo 757.</b> Pelo contrato de seguro, o segurador se obriga, mediante o pagamento do prêmio, a garantir interesse legítimo do segurado, relativo a pessoa ou a coisa, contra riscos predeterminados. Vale ler essa frase palavra por palavra: ela contém interesse legítimo, prêmio, risco predeterminado e a divisão entre pessoa e coisa."},
        {t:"p", x:"E o parágrafo único do mesmo artigo traz uma regra dura: <b>somente pode ser parte, como segurador, entidade para tal fim legalmente autorizada</b>. Ou seja, quem opera seguro sem autorização da SUSEP não está fazendo seguro, está cometendo irregularidade."},
        {t:"p", x:"As características do contrato, que a prova pede em lista:"},
        {t:"tab", head:["Característica","Significado"], rows:[
          ["<b>Bilateral</b>","Gera obrigações para os dois lados: pagar o prêmio e garantir o risco."],
          ["<b>Oneroso</b>","Há vantagem econômica para ambos."],
          ["<b>Aleatório</b>","A prestação do segurador depende de evento incerto."],
          ["<b>Consensual</b>","Forma-se pelo acordo de vontades. A apólice prova o contrato, não o cria."],
          ["<b>De adesão</b>","As cláusulas são previamente redigidas; o segurado adere. Por isso, duvida se interpreta a favor dele."],
          ["<b>De boa-fé</b>","Exige veracidade estrita dos dois lados (artigo 765)."]
        ]},
        {t:"p", x:"Sobre os documentos: o artigo 758 diz que o contrato <b>prova-se com a exibição da apólice ou do bilhete</b> e, na falta deles, por documento comprobatório do pagamento do prêmio. O artigo 760 permite apólice ou bilhete nominativo, a ordem ou ao portador, mas <b>nos seguros de pessoas não se admite a forma ao portador</b>."},
        {t:"a", x:"Consensual não quer dizer informal. Como o contrato se forma pelo consenso, ele já existe antes da apólice sair. Muita questão explora isso: emitir a apólice depois não significa que não havia contrato antes."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"O que faz o segurado perder a garantia",
      blocos:[
        {t:"p", x:"Este é o bloco de artigos mais cobrado da disciplina. São cinco situações, cada uma com um artigo próprio."},
        {t:"tab", head:["Artigo","Situação","Consequência"], rows:[
          ["<b>762</b>","Risco proveniente de <b>ato doloso</b> do segurado, do beneficiário ou de representante","O contrato é <b>nulo</b>."],
          ["<b>763</b>","Segurado <b>em mora</b> no pagamento do prêmio quando ocorre o sinistro","Não tem direito a indenização, salvo se purgar a mora."],
          ["<b>766</b>","<b>Declarações inexatas ou omissão</b> de circunstância que influa na aceitação ou na taxa","Se de má-fé: perde a garantia e ainda deve o prêmio vencido. Se sem má-fé: o segurador pode resolver o contrato ou cobrar a diferença de prêmio."],
          ["<b>768</b>","Segurado <b>agrava intencionalmente</b> o risco","Perde o direito a garantia."],
          ["<b>771</b>","Não comunicar o sinistro logo que souber, ou não tomar providências para minorar as consequências","Perde o direito a indenização."]
        ]},
        {t:"d", x:"<b>A distinção que decide questão no artigo 766:</b> tudo depende da má-fé. Com má-fé, o segurado perde tudo e ainda deve o prêmio. Sem má-fé, o contrato não morre automaticamente: a seguradora escolhe entre encerrar ou cobrar a diferença. A prova adora afirmar que qualquer declaração inexata anula o seguro, e isso está errado."},
        {t:"p", x:"Há ainda o artigo 769, que obriga o segurado a <b>comunicar ao segurador todo incidente suscetível de agravar consideravelmente o risco</b>, sob pena de perder a garantia se provada a omissão intencional."},
        {t:"a", x:"Agravação intencional (artigo 768) é diferente de agravação natural. Se o risco aumenta sozinho, sem ato do segurado, não há perda de garantia; o que a lei pune é a conduta intencional e a omissão intencional."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"Seguro de dano e seguro de pessoa na lei",
      blocos:[
        {t:"p", x:"O Código Civil separa os dois em seções distintas, e as regras são quase opostas. Fixar essa tabela resolve questões tanto aqui quanto no 2o dia de prova."},
        {t:"tab", head:["Tema","Seguro de dano (778 a 788)","Seguro de pessoa (789 a 802)"], rows:[
          ["Valor","A garantia não pode ultrapassar o valor do interesse segurado (778). A indenização não pode superar o prejuízo no momento do sinistro (781).","O capital é <b>livremente estipulado</b> pelo proponente (789)."],
          ["Várias apólices","Não pode segurar o mesmo interesse pelo valor integral em mais de uma apólice, sob pena das consequências do artigo 782.","<b>Pode</b> contratar mais de um seguro sobre o mesmo interesse, com o mesmo ou diversos seguradores (789)."],
          ["Sub-rogação","<b>Existe</b>: paga a indenização, o segurador sub-roga-se nos direitos contra o causador do dano (786).","<b>Não existe</b>: o segurador não pode sub-rogar-se nos direitos do segurado ou do beneficiário (800)."],
          ["Beneficiário","Não se aplica da mesma forma.","Pode ser livremente indicado e substituído. Não havendo indicação, paga-se metade ao cônjuge não separado e o restante aos herdeiros (792)."]
        ]},
        {t:"d", x:"<b>Dois artigos que caem quase sempre nos seguros de pessoas:</b> o <b>794</b> diz que o capital estipulado não está sujeito as dívidas do segurado nem se considera herança; e o <b>798</b> diz que o beneficiário não tem direito ao capital se o segurado se suicidar nos <b>primeiros dois anos</b> de vigência, ficando garantida apenas a devolução da reserva técnica."},
        {t:"p", x:"No seguro de responsabilidade civil, o artigo 787 estabelece que o segurador garante o pagamento de perdas e danos devidos pelo segurado a terceiro, e que o segurado não pode reconhecer sua responsabilidade nem transigir com o terceiro sem anuência do segurador."},
        {t:"a", x:"A regra do suicídio não é sobre premeditação, é sobre <b>prazo</b>. Dentro de dois anos não paga o capital, mesmo sem prova de premeditação. Depois de dois anos paga, mesmo havendo indício de premeditação. A jurisprudência consolidou o critério objetivo do prazo."}
      ]
    },
    {
      id:"a5", peso:"alto", titulo:"Prescrição: os prazos que caem",
      blocos:[
        {t:"tab", head:["Quem cobra de quem","Prazo"], rows:[
          ["Segurado contra o segurador","<b>1 ano</b>"],
          ["Segurador contra o segurado","<b>1 ano</b>"],
          ["Beneficiário contra o segurador, no seguro de vida","<b>3 anos</b>"],
          ["Terceiro prejudicado contra o segurador, em RC obrigatório","<b>3 anos</b>"]
        ]},
        {t:"d", x:"<b>A regra de bolso:</b> quem é <b>parte do contrato</b> prescreve em <b>1 ano</b>. Quem está <b>fora do contrato</b>, como o beneficiário e o terceiro prejudicado, prescreve em <b>3 anos</b>."},
        {t:"p", x:"Duas sumulas do Superior Tribunal de Justiça ajudam: a <b>Súmula 101</b> confirma o prazo anual para a ação do segurado contra o segurador no seguro de vida, e a <b>Súmula 229</b> diz que o <b>aviso de sinistro suspende o prazo</b> até que o segurado receba a resposta da seguradora."},
        {t:"a", x:"O prazo do segurado não corre enquanto a seguradora não responde ao aviso de sinistro. Questão que diz que o prazo corre ininterruptamente do dia do sinistro está errada."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"O Sistema Nacional de Seguros Privados",
      blocos:[
        {t:"p", x:"Criado pelo Decreto-Lei 73 de 1966, o sistema tem composição definida em lei. A questão clássica pede quem o integra."},
        {t:"l", x:[
          "<b>CNSP</b>, Conselho Nacional de Seguros Privados: órgão normativo, fixa diretrizes e edita Resoluções.",
          "<b>SUSEP</b>, Superintendência de Seguros Privados: autarquia executora e fiscalizadora, vinculada ao Ministério da Fazenda, edita Circulares.",
          "<b>IRB</b> e os resseguradores: aceitam risco das seguradoras.",
          "<b>Sociedades seguradoras</b> autorizadas a funcionar.",
          "<b>Corretores de seguros</b> habilitados."
        ]},
        {t:"p", x:"Entre as competências da SUSEP que a prova cobra: autorizar a constituição e o funcionamento das seguradoras, fiscalizar suas operações e sua solvência, aprovar limites de operação, autorizar movimentação de ativos garantidores, e proceder a liquidação das sociedades. Entre as competências do CNSP: fixar diretrizes da política de seguros, regular a constituição e o funcionamento, fixar as características gerais dos contratos e disciplinar a corretagem."},
        {t:"a", x:"A SUSEP não julga sinistro e não obriga seguradora a pagar indenização a um segurado específico. Ela fiscaliza a conduta e pode punir a seguradora, mas quem decide o pagamento é o Judiciário. Questão que coloca a SUSEP condenando a seguradora a indenizar está errada."}
      ]
    },
    {
      id:"a7", peso:"alto", titulo:"O corretor de seguros",
      blocos:[
        {t:"p", x:"A profissão é regida pela <b>Lei 4.594, de 1964</b>. Esta é a parte da prova que fala diretamente do que você vai ser."},
        {t:"l", x:[
          "<b>Definição:</b> o corretor de seguros é o <b>intermediário legalmente autorizado</b> a angariar e promover contratos de seguro entre as seguradoras e as pessoas físicas ou jurídicas de direito privado.",
          "<b>Natureza:</b> pode ser pessoa física ou jurídica, e é profissional <b>autônomo</b>. Não é empregado nem preposto da seguradora.",
          "<b>Habilitação e registro:</b> depende de aprovação em exame ou curso de habilitação e de registro na SUSEP.",
          "<b>Remuneração:</b> comissão de corretagem, que <b>só pode ser paga a corretor habilitado e registrado</b>.",
          "<b>Responsabilidade:</b> responde civilmente perante segurados e seguradoras pelos prejuízos causados por <b>omissão, imperícia ou negligência</b> no exercício da profissão."
        ]},
        {t:"d", x:"<b>As vedações, que são questão garantida:</b> o corretor <b>não pode</b> ser sócio, administrador, procurador, despachante ou empregado de sociedade seguradora. Servidor público também está impedido. A lógica é simples: quem intermedeia não pode estar dos dois lados da mesa."},
        {t:"p", x:"As penalidades aplicáveis pela SUSEP, em escala: <b>multa</b>, <b>suspensão temporária</b> do exercício da profissão e <b>cancelamento do registro</b>."},
        {t:"a", x:"O corretor representa o <b>segurado</b>, não a seguradora, ainda que quem pague a comissão seja a seguradora. Questão que descreve o corretor como representante ou preposto da seguradora está errada."}
      ]
    },
    {
      id:"a8", peso:"medio", titulo:"O Código de Defesa do Consumidor no seguro",
      blocos:[
        {t:"p", x:"A atividade securitária está expressamente listada entre os serviços do Código de Defesa do Consumidor, então ele incide sobre o contrato de seguro sempre que houver relação de consumo."},
        {t:"l", x:[
          "<b>Interpretação mais favorável:</b> por ser contrato de adesão, a cláusula ambigua ou contraditoria se interpreta a favor do segurado.",
          "<b>Destaque das limitações:</b> cláusulas que limitam direito do consumidor precisam ser redigidas com destaque, permitindo compreensão imediata.",
          "<b>Cláusulas abusivas:</b> são nulas de pleno direito, como as que colocam o consumidor em desvantagem exagerada.",
          "<b>Informação clara:</b> o dever de informar alcança o corretor, e informação mal prestada gera responsabilidade."
        ]},
        {t:"a", x:"Nem todo seguro é relação de consumo. Quando a empresa contrata seguro como <b>insumo da sua atividade</b>, a aplicação do Código de Defesa do Consumidor fica discutível, porque falta a figura do destinatário final. Em prova, a regra geral é aplicar; a exceção aparece com o segurado empresarial usando o seguro como meio de produção."}
      ]
    }
  ],

  flashcards: [
    {id:"c1", peso:"alto", p:"Quais artigos do Código Civil tratam do contrato de seguro?", r:"Os artigos <b>757 a 802</b>. Danos: 778 a 788. Pessoas: 789 a 802."},
    {id:"c2", peso:"alto", p:"O que diz o artigo 757 do Código Civil?", r:"O segurador se obriga, mediante pagamento do <b>prêmio</b>, a garantir <b>interesse legítimo</b> do segurado, relativo a pessoa ou a coisa, contra <b>riscos predeterminados</b>. E só pode ser segurador entidade legalmente autorizada."},
    {id:"c3", peso:"alto", p:"Liste as características do contrato de seguro.", r:"<b>Bilateral, oneroso, aleatório, consensual, de adesão e de boa-fé.</b>"},
    {id:"c4", peso:"alto", p:"A apólice cria o contrato de seguro?", r:"Não. O contrato é <b>consensual</b>, forma-se pelo acordo de vontades. A apólice <b>prova</b> o contrato (artigo 758), e na falta dela vale documento comprobatório do pagamento do prêmio."},
    {id:"c5", peso:"medio", p:"Que forma de apólice não se admite nos seguros de pessoas?", r:"A forma <b>ao portador</b>. Nominativa e a ordem são admitidas (artigo 760)."},
    {id:"c6", peso:"alto", p:"Artigo 762: qual o efeito do ato doloso do segurado?", r:"O contrato é <b>nulo</b> quando o risco decorre de ato doloso do segurado, do beneficiário ou de representante de um deles."},
    {id:"c7", peso:"alto", p:"Artigo 763: é o segurado em mora com o prêmio quando ocorre o sinistro?", r:"<b>Não tem direito a indenização</b> se o sinistro ocorrer antes de purgada a mora."},
    {id:"c8", peso:"alto", p:"Artigo 766: qual a diferença entre declaração inexata COM e SEM má-fé?", r:"<b>Com má-fé:</b> perde o direito a garantia e ainda fica obrigado ao prêmio vencido. <b>Sem má-fé:</b> o segurador pode resolver o contrato ou cobrar a diferença de prêmio. Não há nulidade automática."},
    {id:"c9", peso:"alto", p:"Artigo 768: o que acontece se o segurado agrava o risco?", r:"Perde o direito a garantia se agravar <b>intencionalmente</b> o risco objeto do contrato. Agravação natural, sem ato do segurado, não gera perda."},
    {id:"c10", peso:"alto", p:"Artigo 771: quais os dois deveres do segurado ocorrido o sinistro?", r:"<b>Comunicar</b> o sinistro ao segurador logo que saiba, e <b>tomar as providências</b> para minorar as consequências. Descumprir faz perder o direito a indenização."},
    {id:"c11", peso:"alto", p:"No seguro de dano, até quanto pode ir a indenização?", r:"Até o <b>valor do interesse segurado no momento do sinistro</b>, respeitado o limite máximo da garantia (artigos 778 e 781). Nunca pode gerar lucro."},
    {id:"c12", peso:"alto", p:"No seguro de pessoa, quem define o capital segurado?", r:"O <b>proponente</b>, livremente (artigo 789). E ele pode contratar mais de um seguro sobre o mesmo interesse, com o mesmo ou diversos seguradores."},
    {id:"c13", peso:"alto", p:"Em que tipo de seguro existe sub-rogação, e em qual não existe?", r:"<b>Existe</b> no seguro de dano (artigo 786). <b>Não existe</b> no seguro de pessoa (artigo 800)."},
    {id:"c14", peso:"medio", p:"Artigo 792: não havendo beneficiário indicado, a quem se paga?", r:"<b>Metade ao cônjuge</b> não separado judicialmente, e o restante aos <b>herdeiros</b> do segurado, na ordem da vocação hereditária."},
    {id:"c15", peso:"alto", p:"Artigo 794: o capital do seguro de vida entra no inventário?", r:"<b>Não.</b> Não está sujeito as dívidas do segurado nem se considera herança."},
    {id:"c16", peso:"alto", p:"Artigo 798: qual a regra do suicídio no seguro de vida?", r:"Nos <b>primeiros dois anos</b> de vigência o beneficiário não tem direito ao capital, garantida a devolução da reserva técnica. Depois de dois anos, paga. O critério é o prazo, não a prova de premeditação."},
    {id:"c17", peso:"medio", p:"Artigo 787: o que o segurado NAO pode fazer no seguro de responsabilidade civil?", r:"Não pode <b>reconhecer sua responsabilidade</b> nem <b>transigir com o terceiro</b> sem anuência expressa do segurador."},
    {id:"c18", peso:"alto", p:"Prazo de prescrição do segurado contra o segurador?", r:"<b>1 ano.</b>"},
    {id:"c19", peso:"alto", p:"Prazo de prescrição do beneficiário e do terceiro prejudicado contra o segurador?", r:"<b>3 anos.</b> A regra de bolso: quem é parte do contrato tem 1 ano, quem está fora tem 3."},
    {id:"c20", peso:"medio", p:"O que diz a Súmula 229 do Superior Tribunal de Justiça?", r:"O <b>aviso de sinistro suspende</b> o prazo de prescrição até que o segurado receba a resposta da seguradora."},
    {id:"c21", peso:"alto", p:"Qual norma criou o Sistema Nacional de Seguros Privados e quem o integra?", r:"O <b>Decreto-Lei 73 de 1966</b>. Integram: CNSP, SUSEP, IRB e resseguradores, sociedades seguradoras autorizadas e corretores habilitados."},
    {id:"c22", peso:"alto", p:"Quem edita Resolução e quem edita Circular?", r:"<b>Resolução é do CNSP</b> (normativo). <b>Circular é da SUSEP</b> (executora e fiscalizadora). Circular não pode contrariar Resolução."},
    {id:"c23", peso:"medio", p:"A SUSEP pode condenar a seguradora a pagar um sinistro?", r:"<b>Não.</b> Ela fiscaliza a conduta e pode punir administrativamente, mas quem decide o pagamento de um sinistro específico é o Judiciário."},
    {id:"c24", peso:"alto", p:"Qual lei regula a profissão de corretor de seguros?", r:"A <b>Lei 4.594, de 1964</b>."},
    {id:"c25", peso:"alto", p:"Qual a definição legal de corretor de seguros?", r:"O <b>intermediário legalmente autorizado</b> a angariar e promover contratos de seguro entre as seguradoras e as pessoas físicas ou jurídicas de direito privado. E profissional autônomo, pessoa física ou jurídica."},
    {id:"c26", peso:"alto", p:"O corretor representa quem: o segurado ou a seguradora?", r:"Representa o <b>segurado</b>, ainda que a comissão seja paga pela seguradora. Não é preposto nem empregado dela."},
    {id:"c27", peso:"alto", p:"Quais as vedações ao corretor de seguros?", r:"Não pode ser <b>sócio, administrador, procurador, despachante ou empregado de sociedade seguradora</b>. Servidor público também está impedido."},
    {id:"c28", peso:"alto", p:"Por que o corretor responde civilmente, e em quais casos?", r:"Responde perante segurados e seguradoras pelos prejuízos causados por <b>omissão, imperícia ou negligência</b> no exercício da profissão."},
    {id:"c29", peso:"medio", p:"Quais as penalidades aplicáveis ao corretor pela SUSEP?", r:"<b>Multa, suspensão temporária</b> do exercício da profissão e <b>cancelamento do registro</b>."},
    {id:"c30", peso:"medio", p:"A quem pode ser paga comissão de corretagem?", r:"Somente a <b>corretor habilitado e registrado</b> na SUSEP."},
    {id:"c31", peso:"medio", p:"Por que a cláusula ambigua de uma apólice se interpreta a favor do segurado?", r:"Porque o seguro é contrato de <b>adesão</b>: as cláusulas foram redigidas por uma das partes, e o Código de Defesa do Consumidor manda interpretar a favor de quem apenas aderiu."},
    {id:"c32", peso:"medio", p:"Qual a hierarquia entre lei, Resolução do CNSP e Circular da SUSEP?", r:"<b>Lei, depois Resolução, depois Circular.</b> Circular não contraria Resolução, e nenhuma das duas contraria o Código Civil."},
    {id:"c33", peso:"baixo", p:"Qual norma trata do resseguro e da abertura daquele mercado?", r:"A <b>Lei Complementar 126, de 2007</b>."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"Segundo o artigo 757 do Código Civil, pelo contrato de seguro o segurador se obriga, mediante o pagamento do prêmio, a garantir:",
     alts:["Qualquer prejuízo sofrido pelo segurado durante a vigência.","Interesse legítimo do segurado, relativo a pessoa ou a coisa, contra riscos predeterminados.","O valor de mercado do bem, independentemente de previsão contratual.","A recomposição integral do patrimônio do segurado, sem limite de valor."],
     correta:1,
     explicacao:"O artigo 757 exige três coisas: interesse legítimo, riscos predeterminados e o pagamento do prêmio. Não existe garantia genérica contra qualquer prejuízo.",
     erro:"Artigo 757: interesse legítimo, sobre pessoa ou coisa, contra riscos predeterminados."},

    {id:"q2", peso:"alto",
     enunciado:"O segurado prestou declaração inexata na proposta, sem má-fé, influindo na taxa do prêmio. Nesse caso, o segurador:",
     alts:["Tera o contrato automaticamente anulado, sem devolução de valores.","Podera resolver o contrato ou cobrar a diferença de prêmio, mesmo após o sinistro.","Devera pagar a indenização integral, sem qualquer consequência.","Podera exigir a devolução em dobro do que já recebeu de prêmio."],
     correta:1,
     explicacao:"O artigo 766 separa os cenários pela má-fé. Sem má-fé, o segurador escolhe entre resolver o contrato ou cobrar a diferença de prêmio. A perda da garantia mais a obrigação pelo prêmio vencido só ocorre havendo má-fé.",
     erro:"Artigo 766 sem má-fé: resolver o contrato OU cobrar diferença. Não há nulidade automática."},

    {id:"q3", peso:"alto",
     enunciado:"Sobre o seguro de pessoa, é correto afirmar que:",
     alts:["O capital segurado é limitado ao prejuízo econômico comprovado pelo beneficiário.","O segurador sub-roga-se nos direitos do segurado contra o causador do dano.","O capital é livremente estipulado pelo proponente, que pode contratar mais de um seguro sobre o mesmo interesse.","Havendo duas apólices, a indenização é rateada entre as seguradoras."],
     correta:2,
     explicacao:"O artigo 789 permite capital livremente estipulado e mais de um seguro sobre o mesmo interesse. O artigo 800 veda a sub-rogação. Rateio e princípio indenitário são do seguro de dano.",
     erro:"Artigo 789: capital livre e acúmulo de apólices. Artigo 800: sem sub-rogação."},

    {id:"q4", peso:"alto",
     enunciado:"O segurado de um seguro de vida suicidou-se no vigesimo mes de vigência da apólice, sem qualquer indício de premeditação. O beneficiário:",
     alts:["Recebera o capital integral, pois não houve premeditação comprovada.","Não tera direito ao capital, sendo garantida a devolução da reserva técnica.","Recebera metade do capital, a titulo de composição.","Recebera o capital apenas se o suicídio decorrer de doenca psiquiátrica."],
     correta:1,
     explicacao:"O artigo 798 adota critério objetivo de prazo: dentro dos dois primeiros anos não há direito ao capital, independentemente de premeditação, garantida a devolução da reserva técnica.",
     erro:"Artigo 798: suicídio nos 2 primeiros anos não paga capital. Critério é prazo, não premeditação."},

    {id:"q5", peso:"alto",
     enunciado:"Os prazos prescricionais da pretensão do segurado contra o segurador e do terceiro prejudicado em seguro de responsabilidade civil obrigatório são, respectivamente:",
     alts:["1 ano e 3 anos.","3 anos e 1 ano.","1 ano e 1 ano.","5 anos e 3 anos."],
     correta:0,
     explicacao:"Quem é parte do contrato prescreve em 1 ano. Quem está fora do contrato, como o terceiro prejudicado e o beneficiário, prescreve em 3 anos.",
     erro:"Prescrição: parte do contrato 1 ano, terceiro e beneficiário 3 anos."},

    {id:"q6", peso:"alto",
     enunciado:"O corretor de seguros, nos termos da Lei 4.594 de 1964, e:",
     alts:["Preposto da sociedade seguradora, a quem representa perante o segurado.","Empregado da seguradora, remunerado por comissão.","Intermediário legalmente autorizado a angariar e promover contratos de seguro, atuando de forma autônoma.","Servidor delegado da SUSEP para fiscalizar contratos de seguro."],
     correta:2,
     explicacao:"O corretor é intermediário autônomo, habilitado e registrado na SUSEP, e representa o interesse do segurado, ainda que a comissão seja paga pela seguradora. Não é preposto nem empregado dela.",
     erro:"Corretor é intermediário autônomo que representa o segurado, não preposto da seguradora."},

    {id:"q7", peso:"alto",
     enunciado:"Assinale a alternativa que apresenta uma vedação legal ao corretor de seguros:",
     alts:["Constituir pessoa jurídica para exercer a corretagem.","Ser sócio, administrador ou empregado de sociedade seguradora.","Intermediar seguros de ramos diversos simultaneamente.","Receber comissão de corretagem de mais de uma seguradora."],
     correta:1,
     explicacao:"A lei impede que o corretor esteja dos dois lados da mesa: não pode ser sócio, administrador, procurador, despachante ou empregado de seguradora. Servidor público também está impedido. Constituir pessoa jurídica e atuar em vários ramos são práticas normais.",
     erro:"Vedação: corretor não pode ser sócio, administrador, procurador, despachante ou empregado de seguradora."},

    {id:"q8", peso:"alto",
     enunciado:"Compete a SUSEP, entre outras atribuições:",
     alts:["Fixar as diretrizes e normas da política de seguros privados.","Autorizar a constituição e o funcionamento das sociedades seguradoras e fiscalizar suas operações.","Editar Resoluções disciplinando as características gerais dos contratos.","Julgar recursos de segurados sobre negativa de sinistro, determinando o pagamento."],
     correta:1,
     explicacao:"Fixar diretrizes e editar Resoluções é do CNSP. Determinar pagamento de sinistro específico é do Judiciário. A SUSEP autoriza, fiscaliza, pune administrativamente e liquida sociedades.",
     erro:"SUSEP autoriza e fiscaliza. CNSP fixa diretrizes e edita Resolução. Sinistro específico é do Judiciário."},

    {id:"q9", peso:"medio",
     enunciado:"O contrato de seguro é classificado como consensual porque:",
     alts:["Depende da entrega da apólice para se aperfeicoar.","Forma-se pelo acordo de vontades, servindo a apólice como prova.","Exige forma escrita solene sob pena de nulidade.","Depende de homologação prévia pela SUSEP."],
     correta:1,
     explicacao:"O artigo 758 estabelece que o contrato se prova com a apólice ou o bilhete e, na falta deles, por documento comprobatório do pagamento do prêmio. A apólice prova, não constitui.",
     erro:"Contrato consensual: a apólice prova o contrato, não o cria."},

    {id:"q10", peso:"alto",
     enunciado:"Ocorrido o sinistro, são deveres do segurado previstos no artigo 771 do Código Civil:",
     alts:["Comunicar o sinistro logo que o saiba e tomar as providências para minorar as consequências.","Aguardar a convocação do regulador antes de qualquer providência.","Reconhecer sua responsabilidade perante o terceiro prejudicado.","Providenciar orçamentos e efetuar o reparo antes do aviso a seguradora."],
     correta:0,
     explicacao:"O artigo 771 impoe os dois deveres, sob pena de perda do direito a indenização. Reconhecer responsabilidade perante terceiro, aliás, é vedado no seguro de responsabilidade civil pelo artigo 787.",
     erro:"Artigo 771: comunicar logo que souber e minorar as consequências."},

    {id:"q11", peso:"medio",
     enunciado:"O risco decorrente de ato doloso do segurado, do beneficiário ou de representante de um ou de outro torna o contrato:",
     alts:["Anulável, a critério do segurador.","Nulo.","Válido, com redução proporcional da indenização.","Suspenso até a apuração judicial."],
     correta:1,
     explicacao:"O artigo 762 é categórico: o contrato é nulo. Note a diferença em relação a culpa simples, que continua coberta.",
     erro:"Artigo 762: risco por ato doloso torna o contrato NULO."},

    {id:"q12", peso:"medio",
     enunciado:"Nos seguros de vida, não havendo indicação de beneficiário, o capital segurado será pago:",
     alts:["Integralmente ao cônjuge sobrevivente.","Metade ao cônjuge não separado judicialmente e o restante aos herdeiros do segurado.","Integralmente ao espolio, para partilha em inventário.","A seguradora, que constituira reserva."],
     correta:1,
     explicacao:"E a regra do artigo 792. Lembrando que, pelo artigo 794, esse capital não se considera herança nem responde pelas dívidas do segurado.",
     erro:"Sem beneficiário indicado: metade ao cônjuge, o restante aos herdeiros (artigo 792)."},

    {id:"q13", peso:"medio",
     enunciado:"Sobre a hierarquia das normas do mercado segurador, é correto afirmar:",
     alts:["Circular da SUSEP prevalece sobre Resolução do CNSP, por ser mais específica.","Resolução do CNSP pode contrariar o Código Civil, por regular materia técnica.","Circular da SUSEP não pode contrariar Resolução do CNSP, e nenhuma delas contraria a lei.","Resolução e Circular tem a mesma hierarquia, prevalecendo a mais recente."],
     correta:2,
     explicacao:"A ordem é lei, depois Resolução do CNSP, depois Circular da SUSEP. Norma inferior detalha a superior e não pode contrariá-la.",
     erro:"Hierarquia: lei, depois Resolução do CNSP, depois Circular da SUSEP."},

    {id:"q14", peso:"medio",
     enunciado:"No seguro de responsabilidade civil, o segurado que reconhece sua responsabilidade perante o terceiro sem anuência do segurador:",
     alts:["Age corretamente, pois agiliza a indenização da vítima.","Pratica ato vedado pelo artigo 787 do Código Civil.","Fica dispensado de comunicar o sinistro a seguradora.","Passa a ter direito a indenização em dobro."],
     correta:1,
     explicacao:"O artigo 787 veda ao segurado reconhecer responsabilidade, confessar ação ou transigir com o terceiro sem anuência expressa do segurador, justamente porque quem vai pagar é a seguradora.",
     erro:"Artigo 787: proibido reconhecer responsabilidade ou transigir sem anuência do segurador."},

    {id:"q15", peso:"medio",
     enunciado:"A aplicação do Código de Defesa do Consumidor ao contrato de seguro implica, entre outros efeitos:",
     alts:["A interpretação das cláusulas ambiguas em favor do segurador, que redigiu o contrato.","A interpretação mais favorável ao segurado e a exigência de destaque para cláusulas limitativas de direito.","A dispensa do pagamento do prêmio em caso de duvida sobre a cobertura.","A vedação de qualquer cláusula de exclusão de risco."],
     correta:1,
     explicacao:"Sendo contrato de adesão, a ambiguidade se resolve a favor de quem aderiu, e as cláusulas que limitam direito precisam de destaque que permita compreensão imediata. Exclusões continuam válidas, desde que claras e destacadas.",
     erro:"CDC no seguro: interpretação a favor do segurado e destaque nas cláusulas limitativas."}
  ]
};

/* ETAPA 1 - Disciplina 1 de 20: Teoria Geral do Seguro (10 questoes, 1o dia) */

window.CONTEUDO["teoria-geral"] = {
  abertura: "Esta e a gramatica da prova inteira. Todas as outras 19 disciplinas usam o vocabulario que voce fixa aqui. Se um conceito desta pagina ficar solto, ele vai voltar para te derrubar la no 4o dia.",

  aulas: [
    {
      id:"a1", peso:"alto", titulo:"O que e seguro, e por que ele funciona",
      blocos:[
        {t:"p", x:"Seguro e a operacao em que uma pessoa transfere um risco para um segurador, pagando por isso um valor chamado <b>premio</b>. O segurador aceita esse risco porque nao esta apostando com uma pessoa: ele junta milhares de pessoas expostas ao mesmo tipo de risco e forma um fundo comum."},
        {t:"d", x:"<b>A ideia central e o mutualismo.</b> Muitos pagam pouco para que os poucos que sofrerem o sinistro recebam muito. O dinheiro da indenizacao nao sai do bolso da seguradora, sai do fundo formado por todos os segurados. A seguradora administra esse fundo, calcula quanto cada um deve contribuir e garante que ele seja suficiente."},
        {t:"p", x:"Por isso o seguro exige <b>massa</b>. Quanto mais gente no grupo, mais previsivel fica o numero de sinistros, e mais precisa fica a conta. Isso se chama lei dos grandes numeros, e e o que separa seguro de aposta: na aposta voce cria um risco que nao existia; no seguro voce apenas transfere um risco que ja existe."},
        {t:"l", x:[
          "<b>Nao e aposta:</b> o segurado nao quer que o sinistro aconteca, e nao lucra com ele.",
          "<b>Nao e poupanca:</b> na maioria dos ramos, se nada acontecer, o premio nao volta. Ele pagou a garantia daquele periodo.",
          "<b>Nao e favor da seguradora:</b> a indenizacao e obrigacao contratual, paga com dinheiro do proprio grupo."
        ]},
        {t:"a", x:"A banca gosta de perguntar de onde sai o dinheiro da indenizacao. A resposta nao e o patrimonio da seguradora nem o lucro dela: sai do fundo mutuo formado pelos premios dos segurados."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"Os elementos essenciais",
      blocos:[
        {t:"p", x:"Sem qualquer um destes cinco, nao existe contrato de seguro. Guarde-os como uma lista fechada, porque a prova cobra exatamente isso."},
        {t:"tab", head:["Elemento","O que e"], rows:[
          ["<b>Risco</b>","O evento futuro e incerto contra o qual se busca protecao. E o objeto do contrato."],
          ["<b>Segurado</b>","Quem tem o interesse legitimo a proteger e transfere o risco."],
          ["<b>Segurador</b>","Quem assume o risco, em troca do premio. So pode ser sociedade autorizada."],
          ["<b>Premio</b>","O valor pago pelo segurado. E o preco da garantia, nao o preco do bem."],
          ["<b>Indenizacao</b>","O que o segurador paga quando o risco vira sinistro."]
        ]},
        {t:"p", x:"Em volta desses cinco circulam os termos operacionais que voce vai ver o tempo todo:"},
        {t:"l", x:[
          "<b>Proposta:</b> o pedido formal de seguro, assinado pelo proponente. E o documento que da inicio a tudo.",
          "<b>Apolice:</b> o documento que formaliza o contrato aceito. E prova, nao e o contrato em si.",
          "<b>Endosso:</b> o documento que altera a apolice durante a vigencia (mudanca de endereco, inclusao de cobertura, aumento de importancia segurada).",
          "<b>Vigencia:</b> o periodo em que a garantia esta de pe.",
          "<b>Importancia segurada:</b> o valor maximo contratado para uma cobertura.",
          "<b>Sinistro:</b> a realizacao do risco. O risco e a possibilidade, o sinistro e o fato consumado.",
          "<b>Franquia:</b> a parte do prejuizo que fica com o segurado."
        ]},
        {t:"a", x:"Risco e sinistro nao sao sinonimos e a prova troca os dois de proposito. Risco e o que <i>pode</i> acontecer. Sinistro e o que <i>aconteceu</i>. Uma vez ocorrido, aquele risco deixou de ser risco."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"Os principios que sustentam tudo",
      blocos:[
        {t:"p", x:"Cinco principios explicam praticamente toda regra estranha que voce vai encontrar nos ramos. Quando nao souber responder uma questao de outro dia de prova, volte mentalmente para eles."},
        {t:"tab", head:["Principio","O que significa na pratica"], rows:[
          ["<b>Mutualismo</b>","O fundo e coletivo. Um recebe porque todos pagaram."],
          ["<b>Maxima boa-fe</b>","O contrato exige sinceridade total dos dois lados, acima do padrao dos outros contratos. O segurado declara o risco como ele e, o segurador redige com clareza."],
          ["<b>Interesse seguravel</b>","So se pode segurar aquilo em que voce tem interesse legitimo. Nao da para segurar a casa do vizinho, porque voce nao perde nada se ela queimar."],
          ["<b>Principio indenitario</b>","O seguro repoe o prejuizo, nunca gera lucro. A indenizacao nao pode ultrapassar o valor do interesse segurado."],
          ["<b>Sub-rogacao</b>","Pagando a indenizacao, o segurador assume o lugar do segurado para cobrar do causador do dano."]
        ]},
        {t:"d", x:"<b>Guarde esta ponte para o futuro:</b> o principio indenitario e a sub-rogacao valem nos <b>seguros de danos</b> e <b>nao valem nos seguros de pessoas</b>. Em pessoas o capital e livremente estipulado, a pessoa pode ter varias apolices e receber de todas, e o segurador nao pode se sub-rogar. Essa unica frase resolve muita questao do 2o dia."},
        {t:"a", x:"A pegadinha classica de interesse seguravel: um locatario pode segurar o imovel alugado? Pode, porque ele tem interesse legitimo (responde pelo bem), mesmo nao sendo o dono. O que a lei exige e interesse legitimo, nao propriedade."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"O risco: o que da e o que nao da para segurar",
      blocos:[
        {t:"p", x:"Nem todo risco e seguravel. Para entrar numa apolice, ele precisa de caracteristicas especificas."},
        {t:"l", x:[
          "<b>Possivel:</b> tem que poder acontecer. Risco impossivel nao se segura.",
          "<b>Futuro:</b> se ja aconteceu, nao e mais risco.",
          "<b>Incerto:</b> incerto quanto a ocorrer, ou quanto a quando vai ocorrer. A morte e certa, mas a data nao, e por isso o seguro de vida existe.",
          "<b>Independente da vontade das partes:</b> se o segurado provoca, e dolo, nao risco.",
          "<b>Mensuravel:</b> tem que dar para calcular a probabilidade e o custo, senao nao ha como precificar."
        ]},
        {t:"p", x:"Tres palavras que a prova adora separar:"},
        {t:"tab", head:["Termo","Significado"], rows:[
          ["<b>Risco</b>","A possibilidade de um evento danoso acontecer."],
          ["<b>Perigo</b>","A causa do dano em si (incendio, colisao, roubo)."],
          ["<b>Agravacao</b>","A circunstancia que aumenta a chance ou a gravidade do dano (estocar material inflamavel no deposito, por exemplo)."]
        ]},
        {t:"d", x:"<b>Riscos tipicamente excluidos em quase todo ramo:</b> ato doloso do segurado, guerra e convulsao social, risco nuclear e radioativo, desgaste natural e falta de manutencao, e prejuizo indireto quando nao contratado a parte. Guardar essa lista rende ponto em varios dias de prova."},
        {t:"a", x:"Dolo e culpa nao sao a mesma coisa. O <b>dolo</b> do segurado (ele provocou de proposito) anula a garantia. A <b>culpa</b> simples, ou seja, imprudencia e negligencia sem intencao, continua coberta. Se culpa nao fosse coberta, seguro de automovel nao existiria."}
      ]
    },
    {
      id:"a5", peso:"medio", titulo:"Como nasce o premio",
      blocos:[
        {t:"p", x:"O preco do seguro nao e um chute nem uma tabela fixa. Ele e construido em camadas, e a prova cobra o nome de cada camada."},
        {t:"l", x:[
          "<b>Selecao e subscricao do risco:</b> a seguradora analisa quem esta entrando no grupo. Aceitar risco ruim pelo preco de risco bom quebra o fundo.",
          "<b>Taxa:</b> o percentual aplicado sobre a importancia segurada, definido pela probabilidade e severidade daquele risco.",
          "<b>Premio puro (ou premio de risco):</b> a parte que cobre estritamente o custo esperado dos sinistros.",
          "<b>Carregamento:</b> o que se soma ao premio puro para cobrir despesas administrativas, comissao de corretagem, despesas de operacao e margem de lucro.",
          "<b>Premio comercial:</b> premio puro mais carregamento. E o que aparece na proposta, antes de impostos e custo de apolice."
        ]},
        {t:"d", x:"<b>Sua comissao esta dentro do carregamento.</b> A comissao de corretagem nao e um valor cobrado por fora do segurado: ela ja esta embutida no premio comercial que ele paga. Vale entender isso, porque cai em Legislacao e em Gestao de uma Corretora tambem."},
        {t:"p", x:"Alem disso, a seguradora e obrigada a constituir <b>provisoes tecnicas</b>, que sao reservas contabeis para garantir os compromissos assumidos. Elas existem para que a promessa da apolice tenha lastro, e sao fiscalizadas."},
        {t:"a", x:"Antisselecao (ou selecao adversa) e quando quem tem mais risco procura mais o seguro. Se a seguradora nao seleciona, ela atrai justamente os piores riscos pelo preco medio, e o fundo nao fecha."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"Pulverizacao do risco: cosseguro, resseguro e retrocessao",
      blocos:[
        {t:"p", x:"Uma seguradora nao aguenta sozinha um risco gigante, como uma plataforma de petroleo ou uma obra de bilhoes. Existem tres mecanismos para diluir isso, e a prova cobra a diferenca entre eles em praticamente toda edicao."},
        {t:"tab", head:["Mecanismo","Quem divide com quem","O segurado sabe?"], rows:[
          ["<b>Cosseguro</b>","Varias seguradoras dividem o MESMO risco na MESMA apolice, cada uma com sua cota. Uma delas e a lider e administra o contrato.","Sim. Aparece na apolice, e cada cosseguradora responde diretamente pela sua parte."],
          ["<b>Resseguro</b>","A seguradora repassa parte do risco a um ressegurador. E o seguro da seguradora.","Nao necessariamente. E contrato entre seguradora e ressegurador; o segurado continua cobrando da sua seguradora."],
          ["<b>Retrocessao</b>","O ressegurador repassa parte do que assumiu para outro ressegurador ou seguradora. E o resseguro do resseguro.","Nao. E o terceiro andar da operacao."]
        ]},
        {t:"d", x:"<b>A frase que fixa:</b> cosseguro divide na horizontal, entre iguais, na mesma apolice. Resseguro divide na vertical, para cima. Retrocessao e mais um degrau para cima."},
        {t:"p", x:"No Brasil o resseguro foi monopolio do IRB ate a abertura do mercado. Hoje existem tres categorias de ressegurador: <b>local</b> (sediado no Brasil), <b>admitido</b> (estrangeiro com escritorio de representacao e cadastro na SUSEP) e <b>eventual</b> (estrangeiro sem escritorio, com restricoes maiores)."},
        {t:"a", x:"Cosseguro nao e o mesmo que apolices concorrentes. No cosseguro existe um unico contrato, com varias seguradoras dividindo cotas. Em apolices concorrentes existem contratos separados, feitos pelo segurado, cobrindo o mesmo bem."}
      ]
    },
    {
      id:"a7", peso:"alto", titulo:"A estrutura do mercado segurador brasileiro",
      blocos:[
        {t:"p", x:"O Sistema Nacional de Seguros Privados foi criado pelo Decreto-Lei 73, de 1966. Saber quem faz o que dentro dele e das questoes mais garantidas do 1o dia."},
        {t:"tab", head:["Orgao ou figura","Papel"], rows:[
          ["<b>CNSP</b>, Conselho Nacional de Seguros Privados","O orgao <b>normativo</b>. Fixa as diretrizes e edita as Resolucoes. E o conselho que legisla dentro do sistema."],
          ["<b>SUSEP</b>, Superintendencia de Seguros Privados","A autarquia <b>executora e fiscalizadora</b>. Autoriza o funcionamento das seguradoras, fiscaliza, aplica penalidades e edita Circulares. E onde o corretor se registra."],
          ["<b>Sociedades seguradoras</b>","Assumem os riscos. Precisam de autorizacao da SUSEP e so podem operar em seguros."],
          ["<b>Resseguradores</b>","Aceitam risco das seguradoras, nas tres categorias ja vistas."],
          ["<b>Sociedades de capitalizacao e EAPCs</b>","Titulos de capitalizacao e previdencia complementar aberta, tambem sob SUSEP."],
          ["<b>Corretores de seguros</b>","Os intermediarios habilitados e registrados. Fazem parte do sistema por lei, nao por costume de mercado."]
        ]},
        {t:"d", x:"<b>O que NAO e SUSEP, e cai muito:</b> plano de saude e da <b>ANS</b>, Agencia Nacional de Saude Suplementar. Previdencia complementar <b>fechada</b>, os fundos de pensao, e da <b>PREVIC</b>. A SUSEP cuida de seguros, capitalizacao, resseguro e previdencia complementar <b>aberta</b>."},
        {t:"a", x:"A inversao mais cobrada da prova inteira: quem <b>normatiza</b> e o CNSP, quem <b>fiscaliza</b> e a SUSEP. Se a questao disser que a SUSEP edita as diretrizes da politica de seguros, esta errada. Se disser que o CNSP fiscaliza a seguradora e aplica multa, tambem esta errada."}
      ]
    },
    {
      id:"a8", peso:"medio", titulo:"Os ramos e a grande divisao",
      blocos:[
        {t:"p", x:"Todo produto de seguro cai em um de dois mundos, e essa divisao muda as regras aplicaveis."},
        {t:"tab", head:["","Seguros de danos","Seguros de pessoas"], rows:[
          ["Objeto","Patrimonio e responsabilidades","A vida e a integridade fisica"],
          ["Valor pago","Indenizacao, limitada ao prejuizo","Capital segurado, valor pre-fixado"],
          ["Principio indenitario","Aplica","Nao aplica"],
          ["Varias apolices","Nao acumula, ha rateio entre elas","Acumula, recebe de todas"],
          ["Sub-rogacao","Existe","Nao existe"]
        ]},
        {t:"p", x:"Os seguros de danos tambem sao chamados de <b>ramos elementares</b>, expressao antiga que ainda aparece na prova e no proprio nome da habilitacao. Dentro deles ficam patrimonial, automovel, transportes, responsabilidade civil, riscos de engenharia, rurais e os ramos diversos, onde mora o seguro garantia."},
        {t:"a", x:"Seguro de acidentes pessoais e seguro de pessoas, mesmo pagando por evento. Ja o seguro de responsabilidade civil, que cobre dano corporal causado a terceiro, e seguro de <b>danos</b>, porque o que ele protege e o patrimonio do causador, nao a pessoa da vitima."}
      ]
    },
    {
      id:"a9", peso:"medio", titulo:"O ciclo do sinistro",
      blocos:[
        {t:"p", x:"Da ocorrencia ao pagamento existem etapas com nomes proprios, e a prova cobra o nome certo de cada uma."},
        {t:"l", x:[
          "<b>Aviso de sinistro:</b> a comunicacao do segurado a seguradora, que deve ser feita logo que ele toma conhecimento. Ele tambem tem o dever de tomar providencias para reduzir as consequencias.",
          "<b>Regulacao:</b> apurar o que aconteceu, a causa, e se o evento tem cobertura na apolice. Responde a pergunta: cabe pagar?",
          "<b>Liquidacao:</b> apurar quanto pagar e efetuar o pagamento. Responde a pergunta: pagar quanto?",
          "<b>Salvados:</b> o que sobra do bem sinistrado. Pagando a indenizacao integral, os salvados passam a pertencer a seguradora.",
          "<b>Prazo de pagamento:</b> a regra geral do mercado e de 30 dias contados da entrega da documentacao completa, e o pedido de documento adicional suspende esse prazo."
        ]},
        {t:"a", x:"Regulacao e liquidacao nao sao sinonimos, e a troca dos dois e questao de prova. Regular e investigar se ha cobertura. Liquidar e calcular e pagar."}
      ]
    }
  ],

  flashcards: [
    {id:"c1",  peso:"alto", p:"De onde sai o dinheiro da indenizacao paga ao segurado?", r:"Do <b>fundo mutuo</b> formado pelos premios de todos os segurados, e nao do patrimonio ou do lucro da seguradora. A seguradora administra esse fundo."},
    {id:"c2",  peso:"alto", p:"O que e mutualismo?", r:"O principio de que muitos contribuem com pouco para que os poucos atingidos pelo sinistro recebam muito. E a base economica do seguro."},
    {id:"c3",  peso:"alto", p:"Quais sao os cinco elementos essenciais do seguro?", r:"<b>Risco, segurado, segurador, premio e indenizacao.</b> Faltando qualquer um, nao ha contrato de seguro."},
    {id:"c4",  peso:"alto", p:"Qual a diferenca entre risco e sinistro?", r:"<b>Risco</b> e a possibilidade do evento acontecer. <b>Sinistro</b> e o evento ja ocorrido. Uma vez ocorrido, aquele risco deixou de existir como risco."},
    {id:"c5",  peso:"alto", p:"Qual a diferenca entre risco, perigo e agravacao?", r:"<b>Risco</b> e a possibilidade do dano. <b>Perigo</b> e a causa do dano (incendio, colisao). <b>Agravacao</b> e a circunstancia que aumenta a chance ou a gravidade."},
    {id:"c6",  peso:"alto", p:"O que e premio, em uma frase?", r:"O valor pago pelo segurado como <b>preco da garantia</b>. Nao e o preco do bem nem uma poupanca: paga a protecao daquele periodo."},
    {id:"c7",  peso:"medio", p:"Qual a diferenca entre proposta, apolice e endosso?", r:"<b>Proposta</b> e o pedido formal de seguro. <b>Apolice</b> e o documento que formaliza o contrato aceito. <b>Endosso</b> e o documento que altera a apolice durante a vigencia."},
    {id:"c8",  peso:"alto", p:"Cite os cinco principios do seguro.", r:"Mutualismo, maxima boa-fe, interesse seguravel, principio indenitario e sub-rogacao."},
    {id:"c9",  peso:"alto", p:"O que diz o principio indenitario?", r:"O seguro <b>repoe o prejuizo, nunca gera lucro</b>. A indenizacao nao pode ultrapassar o valor do interesse segurado."},
    {id:"c10", peso:"alto", p:"Em quais seguros o principio indenitario e a sub-rogacao NAO se aplicam?", r:"Nos <b>seguros de pessoas</b>. Ali o capital e livremente estipulado, o segurado pode ter varias apolices e receber de todas, e o segurador nao se sub-roga."},
    {id:"c11", peso:"alto", p:"O que e interesse seguravel? Um locatario pode segurar o imovel que aluga?", r:"E o interesse legitimo sobre o bem ou a pessoa. <b>Pode sim</b>: a lei exige interesse legitimo, nao propriedade, e o locatario responde pelo imovel."},
    {id:"c12", peso:"alto", p:"O que e sub-rogacao?", r:"Pago o sinistro, o <b>segurador assume o lugar do segurado</b> para cobrar do terceiro que causou o dano. Existe em seguro de danos e nao existe em seguro de pessoas."},
    {id:"c13", peso:"alto", p:"Quais as caracteristicas de um risco seguravel?", r:"<b>Possivel, futuro, incerto, independente da vontade das partes e mensuravel.</b>"},
    {id:"c14", peso:"alto", p:"Dolo e culpa do segurado tem o mesmo efeito na cobertura?", r:"Nao. O <b>dolo</b> (ato intencional) anula a garantia. A <b>culpa</b> simples, por imprudencia ou negligencia sem intencao, continua coberta. Sem isso, seguro de automovel nao existiria."},
    {id:"c15", peso:"medio", p:"Cite cinco riscos tipicamente excluidos em quase todos os ramos.", r:"Ato doloso do segurado, guerra e convulsao social, risco nuclear, desgaste natural e falta de manutencao, e prejuizo indireto nao contratado a parte."},
    {id:"c16", peso:"medio", p:"O que compoe o premio comercial?", r:"<b>Premio puro (ou de risco) mais carregamento.</b> O premio puro cobre o custo esperado dos sinistros; o carregamento cobre despesas administrativas, comissao de corretagem, custos operacionais e margem."},
    {id:"c17", peso:"medio", p:"Onde esta a comissao do corretor dentro do preco do seguro?", r:"Dentro do <b>carregamento</b>, ou seja, ja embutida no premio comercial que o segurado paga. Nao e cobrada por fora."},
    {id:"c18", peso:"baixo", p:"O que sao provisoes tecnicas?", r:"Reservas contabeis obrigatorias que a seguradora constitui para garantir os compromissos assumidos nas apolices. Sao fiscalizadas pela SUSEP."},
    {id:"c19", peso:"medio", p:"O que e antisselecao (selecao adversa)?", r:"Quando quem tem <b>mais risco</b> procura mais o seguro. Sem selecao de riscos, a seguradora atrai os piores riscos pelo preco medio e o fundo nao fecha."},
    {id:"c20", peso:"alto", p:"O que e cosseguro?", r:"Varias seguradoras dividem o <b>mesmo risco na mesma apolice</b>, cada uma com sua cota, e uma delas e a lider que administra o contrato. O segurado sabe e cada cosseguradora responde pela sua parte."},
    {id:"c21", peso:"alto", p:"O que e resseguro?", r:"E o <b>seguro da seguradora</b>: ela repassa parte do risco assumido a um ressegurador. E contrato entre as duas, e o segurado continua cobrando da sua seguradora."},
    {id:"c22", peso:"alto", p:"O que e retrocessao?", r:"O <b>ressegurador repassa</b> parte do que assumiu a outro ressegurador ou seguradora. E o resseguro do resseguro, o terceiro andar da operacao."},
    {id:"c23", peso:"alto", p:"A frase que separa cosseguro de resseguro.", r:"<b>Cosseguro divide na horizontal</b>, entre seguradoras, na mesma apolice. <b>Resseguro divide na vertical</b>, para cima, em contrato separado."},
    {id:"c24", peso:"medio", p:"Quais as tres categorias de ressegurador no Brasil?", r:"<b>Local</b> (sediado no Brasil), <b>admitido</b> (estrangeiro com escritorio de representacao e cadastro na SUSEP) e <b>eventual</b> (estrangeiro sem escritorio, com mais restricoes)."},
    {id:"c25", peso:"alto", p:"Qual norma criou o Sistema Nacional de Seguros Privados?", r:"O <b>Decreto-Lei 73, de 1966</b>."},
    {id:"c26", peso:"alto", p:"Qual o papel do CNSP?", r:"E o orgao <b>normativo</b>: fixa as diretrizes e normas da politica de seguros privados e edita as Resolucoes. Ele legisla dentro do sistema, nao fiscaliza."},
    {id:"c27", peso:"alto", p:"Qual o papel da SUSEP?", r:"E a autarquia <b>executora e fiscalizadora</b>: autoriza o funcionamento das seguradoras, fiscaliza o mercado, aplica penalidades, edita Circulares e registra os corretores."},
    {id:"c28", peso:"alto", p:"Quem fiscaliza plano de saude e previdencia complementar fechada?", r:"Plano de saude e da <b>ANS</b>. Previdencia complementar fechada (fundos de pensao) e da <b>PREVIC</b>. A SUSEP cuida de seguros, capitalizacao, resseguro e previdencia complementar <b>aberta</b>."},
    {id:"c29", peso:"alto", p:"Quatro diferencas entre seguro de danos e seguro de pessoas.", r:"Danos: indeniza limitado ao prejuizo, aplica o principio indenitario, ha rateio entre apolices e existe sub-rogacao. Pessoas: capital pre-fixado e livre, sem principio indenitario, acumula apolices e nao ha sub-rogacao."},
    {id:"c30", peso:"medio", p:"Seguro de responsabilidade civil por dano corporal a terceiro e seguro de pessoas?", r:"<b>Nao, e seguro de danos.</b> Ele protege o patrimonio de quem causou o dano, e nao a pessoa da vitima."},
    {id:"c31", peso:"medio", p:"O que sao ramos elementares?", r:"O nome tradicional dos <b>seguros de danos</b>: patrimonial, automovel, transportes, responsabilidade civil, riscos de engenharia, rurais e ramos diversos."},
    {id:"c32", peso:"alto", p:"Qual a diferenca entre regulacao e liquidacao de sinistro?", r:"<b>Regulacao</b> apura o que aconteceu e se ha cobertura (cabe pagar?). <b>Liquidacao</b> apura o valor e efetua o pagamento (pagar quanto?)."},
    {id:"c33", peso:"medio", p:"A quem pertencem os salvados apos a indenizacao integral?", r:"A <b>seguradora</b>. Pago o valor integral, ela fica com o que restou do bem, sob pena de o segurado receber duas vezes."},
    {id:"c34", peso:"baixo", p:"Qual o prazo geral para a seguradora pagar a indenizacao?", r:"<b>30 dias</b> contados da entrega da documentacao completa. Pedido de documento adicional suspende a contagem."},
    {id:"c35", peso:"medio", p:"Por que seguro nao e aposta?", r:"Na aposta voce <b>cria</b> um risco que nao existia e pode lucrar com ele. No seguro voce apenas <b>transfere</b> um risco que ja existe, e o segurado nunca lucra com o sinistro."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"O dinheiro utilizado para o pagamento das indenizacoes aos segurados tem origem:",
     alts:["No capital social e no lucro acumulado da sociedade seguradora.","No fundo mutuo formado pelos premios pagos pelo conjunto dos segurados.","Nas provisoes constituidas pelo ressegurador contratado pela seguradora.","Em recursos aportados pela SUSEP para garantia do mercado."],
     correta:1,
     explicacao:"A indenizacao sai do fundo comum formado pelos premios. Esse e o significado pratico do mutualismo. O patrimonio da seguradora e garantia de solvencia, nao a fonte ordinaria da indenizacao.",
     erro:"Origem do dinheiro da indenizacao: fundo mutuo, nao patrimonio da seguradora."},

    {id:"q2", peso:"alto",
     enunciado:"Sao caracteristicas exigidas de um risco para que ele seja seguravel:",
     alts:["Possivel, futuro, certo quanto a data e mensuravel.","Possivel, passado, incerto e independente da vontade das partes.","Possivel, futuro, incerto, independente da vontade das partes e mensuravel.","Provavel, futuro, certo e dependente da conduta do segurado."],
     correta:2,
     explicacao:"O risco seguravel precisa ser possivel, futuro, incerto, alheio a vontade das partes e mensuravel. Se ja ocorreu nao e risco, e se depende da vontade do segurado e dolo.",
     erro:"Caracteristicas do risco seguravel: possivel, futuro, incerto, independente da vontade, mensuravel."},

    {id:"q3", peso:"alto",
     enunciado:"Sobre a distincao entre cosseguro e resseguro, e correto afirmar que:",
     alts:["No cosseguro varias seguradoras dividem o mesmo risco na mesma apolice; no resseguro a seguradora transfere parte do risco a um ressegurador.","No cosseguro a seguradora transfere o risco ao IRB; no resseguro divide com outra seguradora.","Ambos sao a mesma operacao, mudando apenas o nome conforme o ramo.","No cosseguro o segurado desconhece a operacao; no resseguro ela consta obrigatoriamente da apolice."],
     correta:0,
     explicacao:"Cosseguro divide na horizontal, entre seguradoras, dentro da mesma apolice e com uma lider. Resseguro divide na vertical, em contrato proprio entre seguradora e ressegurador. O segurado enxerga o cosseguro na apolice, e nao precisa enxergar o resseguro.",
     erro:"Cosseguro divide na horizontal (mesma apolice); resseguro na vertical (contrato proprio)."},

    {id:"q4", peso:"alto",
     enunciado:"A operacao pela qual o ressegurador repassa a outro ressegurador parte dos riscos que assumiu denomina-se:",
     alts:["Cosseguro.","Retrocessao.","Sub-rogacao.","Coparticipacao."],
     correta:1,
     explicacao:"Retrocessao e o resseguro do resseguro, o terceiro degrau da pulverizacao do risco.",
     erro:"Retrocessao e o ressegurador repassando risco a outro ressegurador."},

    {id:"q5", peso:"alto",
     enunciado:"No Sistema Nacional de Seguros Privados, compete ao CNSP e a SUSEP, respectivamente:",
     alts:["Fiscalizar as seguradoras e fixar as diretrizes da politica de seguros.","Fixar as diretrizes e normas da politica de seguros e fiscalizar a constituicao e o funcionamento das seguradoras.","Registrar os corretores e julgar recursos de sinistro.","Autorizar planos de saude e fiscalizar fundos de pensao."],
     correta:1,
     explicacao:"O CNSP normatiza, editando Resolucoes. A SUSEP executa e fiscaliza, autorizando funcionamento, aplicando penalidades e editando Circulares. E a inversao mais cobrada da prova.",
     erro:"CNSP normatiza (Resolucoes); SUSEP fiscaliza e executa (Circulares)."},

    {id:"q6", peso:"alto",
     enunciado:"A fiscalizacao dos planos privados de assistencia a saude e das entidades fechadas de previdencia complementar cabe, respectivamente:",
     alts:["A SUSEP e ao CNSP.","A ANS e a PREVIC.","A PREVIC e a ANS.","A SUSEP em ambos os casos."],
     correta:1,
     explicacao:"Saude suplementar e da ANS e previdencia fechada e da PREVIC. A SUSEP fica com seguros, capitalizacao, resseguro e previdencia complementar aberta.",
     erro:"Saude e ANS, previdencia fechada e PREVIC, aberta e SUSEP."},

    {id:"q7", peso:"alto",
     enunciado:"O principio segundo o qual a indenizacao nao pode ultrapassar o valor do interesse segurado, de modo que o seguro nao gere lucro ao segurado, e o principio:",
     alts:["Do mutualismo.","Da maxima boa-fe.","Indenitario.","Da dispersao de riscos."],
     correta:2,
     explicacao:"O principio indenitario limita a indenizacao ao prejuizo. Vale nos seguros de danos e nao se aplica aos seguros de pessoas, em que o capital e livremente estipulado.",
     erro:"Principio indenitario: indenizacao limitada ao prejuizo, so em seguros de danos."},

    {id:"q8", peso:"alto",
     enunciado:"Assinale a alternativa correta sobre seguros de pessoas:",
     alts:["Aplica-se o principio indenitario, limitando o capital ao prejuizo economico comprovado.","O segurador sub-roga-se nos direitos do segurado contra o causador do dano.","O segurado pode contratar mais de um seguro sobre o mesmo interesse e receber o capital de todos.","Havendo mais de uma apolice, procede-se ao rateio entre as seguradoras."],
     correta:2,
     explicacao:"Em seguros de pessoas o capital e livremente estipulado, nao ha principio indenitario, nao ha rateio entre apolices e nao ha sub-rogacao. Por isso o segurado acumula e recebe de todas.",
     erro:"Seguro de pessoas: acumula apolices, sem rateio, sem sub-rogacao, sem principio indenitario."},

    {id:"q9", peso:"medio",
     enunciado:"O premio comercial de um seguro corresponde:",
     alts:["Apenas ao custo esperado dos sinistros daquele grupo de risco.","Ao premio puro acrescido do carregamento, que cobre despesas administrativas, comissao de corretagem e margem.","Ao valor do bem segurado, ajustado pela taxa de risco.","A importancia segurada dividida pelo prazo de vigencia."],
     correta:1,
     explicacao:"Premio puro cobre o custo esperado dos sinistros. Somado ao carregamento, onde estao despesas, comissao e margem, forma o premio comercial, que e o valor apresentado ao cliente.",
     erro:"Premio comercial = premio puro + carregamento (onde esta a comissao)."},

    {id:"q10", peso:"alto",
     enunciado:"Joao, locatario de um imovel, pretende contratar seguro sobre o bem que aluga. Nessa situacao:",
     alts:["Nao pode contratar, pois nao e proprietario do imovel.","Pode contratar, pois possui interesse legitimo sobre o bem.","So pode contratar com anuencia expressa da SUSEP.","Pode contratar, mas a apolice sera nula por falta de interesse seguravel."],
     correta:1,
     explicacao:"O que a lei exige e interesse legitimo, nao propriedade. O locatario responde pelo imovel e por isso tem interesse seguravel.",
     erro:"Interesse seguravel exige interesse legitimo, nao propriedade."},

    {id:"q11", peso:"medio",
     enunciado:"Sobre o efeito da conduta do segurado na cobertura, e correto afirmar:",
     alts:["Tanto o dolo quanto a culpa simples do segurado afastam a garantia.","O dolo afasta a garantia, mas a culpa simples permanece coberta.","A culpa simples afasta a garantia, mas o dolo e coberto se houver clausula expressa.","Nenhuma conduta do segurado afeta a cobertura contratada."],
     correta:1,
     explicacao:"O ato doloso do segurado e risco excluido e torna nulo o contrato para aquele evento. A culpa simples, por imprudencia ou negligencia, continua coberta, e e justamente ela que faz o seguro de automovel existir.",
     erro:"Dolo afasta a garantia; culpa simples permanece coberta."},

    {id:"q12", peso:"medio",
     enunciado:"A etapa do processo de sinistro destinada a apurar as causas do evento e verificar se ha cobertura na apolice denomina-se:",
     alts:["Liquidacao.","Regulacao.","Subscricao.","Retrocessao."],
     correta:1,
     explicacao:"Regular e investigar o que houve e se cabe pagar. Liquidar e apurar o quanto e efetuar o pagamento. Subscricao e a aceitacao do risco, la no inicio da operacao.",
     erro:"Regulacao apura cobertura; liquidacao apura valor e paga."},

    {id:"q13", peso:"medio",
     enunciado:"Apos indenizar integralmente o segurado por um veiculo sinistrado, a seguradora:",
     alts:["Deve devolver os salvados ao segurado, que ja recebeu a indenizacao.","Passa a ser proprietaria dos salvados.","Divide os salvados com o segurado, na proporcao da franquia.","Deve entregar os salvados a SUSEP para leilao."],
     correta:1,
     explicacao:"Pago o valor integral, os salvados pertencem a seguradora. Se ficassem com o segurado, ele receberia duas vezes pelo mesmo bem, o que viola o principio indenitario.",
     erro:"Salvados pertencem a seguradora apos indenizacao integral."},

    {id:"q14", peso:"medio",
     enunciado:"O fenomeno pelo qual as pessoas com maior exposicao ao risco tendem a procurar mais o seguro, prejudicando o equilibrio da carteira, e conhecido como:",
     alts:["Agravacao do risco.","Antisselecao ou selecao adversa.","Pulverizacao.","Sub-rogacao."],
     correta:1,
     explicacao:"Antisselecao e o motivo pelo qual existe subscricao. Sem selecionar, a seguradora atrai os piores riscos pelo preco medio e o fundo mutuo deixa de fechar.",
     erro:"Antisselecao: quem tem mais risco procura mais o seguro."},

    {id:"q15", peso:"medio",
     enunciado:"O Sistema Nacional de Seguros Privados foi instituido por:",
     alts:["Lei 4.594, de 1964.","Decreto-Lei 73, de 1966.","Lei Complementar 126, de 2007.","Codigo Civil de 2002."],
     correta:1,
     explicacao:"O Decreto-Lei 73 de 1966 criou o Sistema Nacional de Seguros Privados. A Lei 4.594 de 1964 regula a profissao do corretor, e a Lei Complementar 126 de 2007 abriu o mercado de resseguro.",
     erro:"Decreto-Lei 73/1966 criou o SNSP. Lei 4.594/1964 e o corretor. LC 126/2007 e o resseguro."}
  ]
};

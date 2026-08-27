/* ETAPA 1 - Disciplina 1 de 20: Teoria Geral do Seguro (10 questões, 1o dia) */

window.CONTEUDO["teoria-geral"] = {
  abertura: "Esta é a gramática da prova inteira. Todas as outras 19 disciplinas usam o vocabulário que você fixa aqui. Se um conceito desta pagina ficar solto, ele vai voltar para te derrubar lá no 4o dia.",

  aulas: [
    {
      id:"a1", peso:"alto", titulo:"O que é seguro, e por que ele funciona",
      blocos:[
        {t:"p", x:"Seguro é a operação em que uma pessoa transfere um risco para um segurador, pagando por isso um valor chamado <b>prêmio</b>. O segurador aceita esse risco porque não está apostando com uma pessoa: ele junta milhares de pessoas expostas ao mesmo tipo de risco e forma um fundo comum."},
        {t:"d", x:"<b>A ideia central é o mutualismo.</b> Muitos pagam pouco para que os poucos que sofrerem o sinistro recebam muito. O dinheiro da indenização não sai do bolso da seguradora, sai do fundo formado por todos os segurados. A seguradora administra esse fundo, calcula quanto cada um deve contribuir e garante que ele seja suficiente."},
        {t:"p", x:"Por isso o seguro exige <b>massa</b>. Quanto mais gente no grupo, mais previsível fica o número de sinistros, e mais precisa fica a conta. Isso se chama lei dos grandes números, e é o que separa seguro de aposta: na aposta você cria um risco que não existia; no seguro você apenas transfere um risco que já existe."},
        {t:"l", x:[
          "<b>Não é aposta:</b> o segurado não quer que o sinistro aconteça, e não lucra com ele.",
          "<b>Não é poupança:</b> na maioria dos ramos, se nada acontecer, o prêmio não volta. Ele pagou a garantia daquele período.",
          "<b>Não é favor da seguradora:</b> a indenização é obrigação contratual, paga com dinheiro do próprio grupo."
        ]},
        {t:"a", x:"A banca gosta de perguntar de onde sai o dinheiro da indenização. A resposta não é o patrimônio da seguradora nem o lucro dela: sai do fundo mutuo formado pelos prêmios dos segurados."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"Os elementos essenciais",
      blocos:[
        {t:"p", x:"Sem qualquer um destes cinco, não existe contrato de seguro. Guarde-os como uma lista fechada, porque a prova cobra exatamente isso."},
        {t:"tab", head:["Elemento","O que e"], rows:[
          ["<b>Risco</b>","O evento futuro e incerto contra o qual se busca proteção. E o objeto do contrato."],
          ["<b>Segurado</b>","Quem tem o interesse legítimo a proteger e transfere o risco."],
          ["<b>Segurador</b>","Quem assume o risco, em troca do prêmio. So pode ser sociedade autorizada."],
          ["<b>Prêmio</b>","O valor pago pelo segurado. E o preço da garantia, não o preço do bem."],
          ["<b>Indenização</b>","O que o segurador paga quando o risco vira sinistro."]
        ]},
        {t:"p", x:"Em volta desses cinco circulam os termos operacionais que você vai ver o tempo todo:"},
        {t:"l", x:[
          "<b>Proposta:</b> o pedido formal de seguro, assinado pelo proponente. E o documento que da início a tudo.",
          "<b>Apólice:</b> o documento que formaliza o contrato aceito. E prova, não é o contrato em si.",
          "<b>Endosso:</b> o documento que altera a apólice durante a vigência (mudança de endereco, inclusão de cobertura, aumento de importância segurada).",
          "<b>Vigência:</b> o período em que a garantia está de pé.",
          "<b>Importância segurada:</b> o valor máximo contratado para uma cobertura.",
          "<b>Sinistro:</b> a realização do risco. O risco é a possibilidade, o sinistro é o fato consumado.",
          "<b>Franquia:</b> a parte do prejuízo que fica com o segurado."
        ]},
        {t:"a", x:"Risco e sinistro não são sinônimos e a prova troca os dois de propósito. Risco é o que <i>pode</i> acontecer. Sinistro é o que <i>aconteceu</i>. Uma vez ocorrido, aquele risco deixou de ser risco."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"Os princípios que sustentam tudo",
      blocos:[
        {t:"p", x:"Cinco princípios explicam praticamente toda regra estranha que você vai encontrar nos ramos. Quando não souber responder uma questão de outro dia de prova, volte mentalmente para eles."},
        {t:"tab", head:["Princípio","O que significa na prática"], rows:[
          ["<b>Mutualismo</b>","O fundo é coletivo. Um recebe porque todos pagaram."],
          ["<b>Máxima boa-fé</b>","O contrato exige sinceridade total dos dois lados, acima do padrão dos outros contratos. O segurado declara o risco como ele e, o segurador redige com clareza."],
          ["<b>Interesse segurável</b>","So se pode segurar aquilo em que você tem interesse legítimo. Não da para segurar a casa do vizinho, porque você não perde nada se ela queimar."],
          ["<b>Princípio indenitário</b>","O seguro repoe o prejuízo, nunca gera lucro. A indenização não pode ultrapassar o valor do interesse segurado."],
          ["<b>Sub-rogação</b>","Pagando a indenização, o segurador assume o lugar do segurado para cobrar do causador do dano."]
        ]},
        {t:"d", x:"<b>Guarde esta ponte para o futuro:</b> o princípio indenitário e a sub-rogação valem nos <b>seguros de danos</b> e <b>não valem nos seguros de pessoas</b>. Em pessoas o capital é livremente estipulado, a pessoa pode ter várias apólices e receber de todas, e o segurador não pode se sub-rogar. Essa única frase resolve muita questão do 2o dia."},
        {t:"a", x:"A pegadinha clássica de interesse segurável: um locatário pode segurar o imóvel alugado? Pode, porque ele tem interesse legítimo (responde pelo bem), mesmo não sendo o dono. O que a lei exige é interesse legítimo, não propriedade."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"O risco: o que da e o que não da para segurar",
      blocos:[
        {t:"p", x:"Nem todo risco é segurável. Para entrar numa apólice, ele precisa de características específicas."},
        {t:"l", x:[
          "<b>Possível:</b> tem que poder acontecer. Risco impossível não se segura.",
          "<b>Futuro:</b> se já aconteceu, não é mais risco.",
          "<b>Incerto:</b> incerto quanto a ocorrer, ou quanto a quando vai ocorrer. A morte é certa, mas a data não, e por isso o seguro de vida existe.",
          "<b>Independente da vontade das partes:</b> se o segurado provoca, é dolo, não risco.",
          "<b>Mensurável:</b> tem que dar para calcular a probabilidade e o custo, senão não há como precificar."
        ]},
        {t:"p", x:"Tres palavras que a prova adora separar:"},
        {t:"tab", head:["Termo","Significado"], rows:[
          ["<b>Risco</b>","A possibilidade de um evento danoso acontecer."],
          ["<b>Perigo</b>","A causa do dano em si (incêndio, colisão, roubo)."],
          ["<b>Agravação</b>","A circunstância que aumenta a chance ou a gravidade do dano (estocar material inflamável no deposito, por exemplo)."]
        ]},
        {t:"d", x:"<b>Riscos tipicamente excluidos em quase todo ramo:</b> ato doloso do segurado, guerra e convulsão social, risco nuclear e radioativo, desgaste natural e falta de manutenção, e prejuízo indireto quando não contratado a parte. Guardar essa lista rende ponto em vários dias de prova."},
        {t:"a", x:"Dolo e culpa não são a mesma coisa. O <b>dolo</b> do segurado (ele provocou de propósito) anula a garantia. A <b>culpa</b> simples, ou seja, imprudência e negligência sem intenção, continua coberta. Se culpa não fosse coberta, seguro de automóvel não existiria."}
      ]
    },
    {
      id:"a5", peso:"medio", titulo:"Como nasce o prêmio",
      blocos:[
        {t:"p", x:"O preço do seguro não é um chute nem uma tabela fixa. Ele é construído em camadas, e a prova cobra o nome de cada camada."},
        {t:"l", x:[
          "<b>Seleção e subscrição do risco:</b> a seguradora analisa quem está entrando no grupo. Aceitar risco ruim pelo preço de risco bom quebra o fundo.",
          "<b>Taxa:</b> o percentual aplicado sobre a importância segurada, definido pela probabilidade e severidade daquele risco.",
          "<b>Prêmio puro (ou prêmio de risco):</b> a parte que cobre estritamente o custo esperado dos sinistros.",
          "<b>Carregamento:</b> o que se soma ao prêmio puro para cobrir despesas administrativas, comissão de corretagem, despesas de operação e margem de lucro.",
          "<b>Prêmio comercial:</b> prêmio puro mais carregamento. E o que aparece na proposta, antes de impostos e custo de apólice."
        ]},
        {t:"d", x:"<b>Sua comissão está dentro do carregamento.</b> A comissão de corretagem não é um valor cobrado por fora do segurado: ela já está embutida no prêmio comercial que ele paga. Vale entender isso, porque cai em Legislação e em Gestão de uma Corretora também."},
        {t:"p", x:"Além disso, a seguradora é obrigada a constituir <b>provisões técnicas</b>, que são reservas contabeis para garantir os compromissos assumidos. Elas existem para que a promessa da apólice tenha lastro, e são fiscalizadas."},
        {t:"a", x:"Antisseleção (ou seleção adversa) é quando quem tem mais risco procura mais o seguro. Se a seguradora não seleciona, ela atrai justamente os piores riscos pelo preço médio, e o fundo não fecha."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"Pulverização do risco: cosseguro, resseguro e retrocessão",
      blocos:[
        {t:"p", x:"Uma seguradora não aguenta sozinha um risco gigante, como uma plataforma de petroleo ou uma obra de bilhões. Existem três mecanismos para diluir isso, e a prova cobra a diferença entre eles em praticamente toda edição."},
        {t:"tab", head:["Mecanismo","Quem divide com quem","O segurado sabe?"], rows:[
          ["<b>Cosseguro</b>","Várias seguradoras dividem o MESMO risco na MESMA apólice, cada uma com sua cota. Uma delas é a lider e administra o contrato.","Sim. Aparece na apólice, e cada cosseguradora responde diretamente pela sua parte."],
          ["<b>Resseguro</b>","A seguradora repassa parte do risco a um ressegurador. E o seguro da seguradora.","Não necessariamente. E contrato entre seguradora e ressegurador; o segurado continua cobrando da sua seguradora."],
          ["<b>Retrocessão</b>","O ressegurador repassa parte do que assumiu para outro ressegurador ou seguradora. E o resseguro do resseguro.","Não. E o terceiro andar da operação."]
        ]},
        {t:"d", x:"<b>A frase que fixa:</b> cosseguro divide na horizontal, entre iguais, na mesma apólice. Resseguro divide na vertical, para cima. Retrocessão é mais um degrau para cima."},
        {t:"p", x:"No Brasil o resseguro foi monopolio do IRB até a abertura do mercado. Hoje existem três categorias de ressegurador: <b>local</b> (sediado no Brasil), <b>admitido</b> (estrangeiro com escritório de representação e cadastro na SUSEP) e <b>eventual</b> (estrangeiro sem escritório, com restrições maiores)."},
        {t:"a", x:"Cosseguro não é o mesmo que apólices concorrentes. No cosseguro existe um único contrato, com várias seguradoras dividindo cotas. Em apólices concorrentes existem contratos separados, feitos pelo segurado, cobrindo o mesmo bem."}
      ]
    },
    {
      id:"a7", peso:"alto", titulo:"A estrutura do mercado segurador brasileiro",
      blocos:[
        {t:"p", x:"O Sistema Nacional de Seguros Privados foi criado pelo Decreto-Lei 73, de 1966. Saber quem faz o que dentro dele é das questões mais garantidas do 1o dia."},
        {t:"tab", head:["Órgão ou figura","Papel"], rows:[
          ["<b>CNSP</b>, Conselho Nacional de Seguros Privados","O órgão <b>normativo</b>. Fixa as diretrizes e edita as Resoluções. E o conselho que legisla dentro do sistema."],
          ["<b>SUSEP</b>, Superintendência de Seguros Privados","A autarquia <b>executora e fiscalizadora</b>. Autoriza o funcionamento das seguradoras, fiscaliza, aplica penalidades e edita Circulares. E onde o corretor se registra."],
          ["<b>Sociedades seguradoras</b>","Assumem os riscos. Precisam de autorização da SUSEP e só podem operar em seguros."],
          ["<b>Resseguradores</b>","Aceitam risco das seguradoras, nas três categorias já vistas."],
          ["<b>Sociedades de capitalização e EAPCs</b>","Títulos de capitalização e previdência complementar aberta, também sob SUSEP."],
          ["<b>Corretores de seguros</b>","Os intermediários habilitados e registrados. Fazem parte do sistema por lei, não por costume de mercado."]
        ]},
        {t:"d", x:"<b>O que NAO é SUSEP, e cai muito:</b> plano de saúde é da <b>ANS</b>, Agência Nacional de Saúde Suplementar. Previdência complementar <b>fechada</b>, os fundos de pensão, é da <b>PREVIC</b>. A SUSEP cuida de seguros, capitalização, resseguro e previdência complementar <b>aberta</b>."},
        {t:"a", x:"A inversão mais cobrada da prova inteira: quem <b>normatiza</b> é o CNSP, quem <b>fiscaliza</b> é a SUSEP. Se a questão disser que a SUSEP edita as diretrizes da política de seguros, está errada. Se disser que o CNSP fiscaliza a seguradora e aplica multa, também está errada."}
      ]
    },
    {
      id:"a8", peso:"medio", titulo:"Os ramos e a grande divisão",
      blocos:[
        {t:"p", x:"Todo produto de seguro cai em um de dois mundos, e essa divisão muda as regras aplicáveis."},
        {t:"tab", head:["","Seguros de danos","Seguros de pessoas"], rows:[
          ["Objeto","Patrimônio e responsabilidades","A vida e a integridade física"],
          ["Valor pago","Indenização, limitada ao prejuízo","Capital segurado, valor pré-fixado"],
          ["Princípio indenitário","Aplica","Não aplica"],
          ["Várias apólices","Não acumula, há rateio entre elas","Acumula, recebe de todas"],
          ["Sub-rogação","Existe","Não existe"]
        ]},
        {t:"p", x:"Os seguros de danos também são chamados de <b>ramos elementares</b>, expressão antiga que ainda aparece na prova e no próprio nome da habilitação. Dentro deles ficam patrimonial, automóvel, transportes, responsabilidade civil, riscos de engenharia, rurais e os ramos diversos, onde mora o seguro garantia."},
        {t:"a", x:"Seguro de acidentes pessoais é seguro de pessoas, mesmo pagando por evento. Já o seguro de responsabilidade civil, que cobre dano corporal causado a terceiro, é seguro de <b>danos</b>, porque o que ele protege é o patrimônio do causador, não a pessoa da vítima."}
      ]
    },
    {
      id:"a9", peso:"medio", titulo:"O ciclo do sinistro",
      blocos:[
        {t:"p", x:"Da ocorrência ao pagamento existem etapas com nomes próprios, e a prova cobra o nome certo de cada uma."},
        {t:"l", x:[
          "<b>Aviso de sinistro:</b> a comunicação do segurado a seguradora, que deve ser feita logo que ele toma conhecimento. Ele também tem o dever de tomar providências para reduzir as consequências.",
          "<b>Regulação:</b> apurar o que aconteceu, a causa, e se o evento tem cobertura na apólice. Responde a pergunta: cabe pagar?",
          "<b>Liquidação:</b> apurar quanto pagar e efetuar o pagamento. Responde a pergunta: pagar quanto?",
          "<b>Salvados:</b> o que sobra do bem sinistrado. Pagando a indenização integral, os salvados passam a pertencer a seguradora.",
          "<b>Prazo de pagamento:</b> a regra geral do mercado é de 30 dias contados da entrega da documentação completa, e o pedido de documento adicional suspende esse prazo."
        ]},
        {t:"a", x:"Regulação e liquidação não são sinônimos, e a troca dos dois é questão de prova. Regular é investigar se há cobertura. Liquidar é calcular e pagar."}
      ]
    }
  ],

  flashcards: [
    {id:"c1",  peso:"alto", p:"De onde sai o dinheiro da indenização paga ao segurado?", r:"Do <b>fundo mutuo</b> formado pelos prêmios de todos os segurados, e não do patrimônio ou do lucro da seguradora. A seguradora administra esse fundo."},
    {id:"c2",  peso:"alto", p:"O que é mutualismo?", r:"O princípio de que muitos contribuem com pouco para que os poucos atingidos pelo sinistro recebam muito. E a base econômica do seguro."},
    {id:"c3",  peso:"alto", p:"Quais são os cinco elementos essenciais do seguro?", r:"<b>Risco, segurado, segurador, prêmio e indenização.</b> Faltando qualquer um, não há contrato de seguro."},
    {id:"c4",  peso:"alto", p:"Qual a diferença entre risco e sinistro?", r:"<b>Risco</b> é a possibilidade do evento acontecer. <b>Sinistro</b> é o evento já ocorrido. Uma vez ocorrido, aquele risco deixou de existir como risco."},
    {id:"c5",  peso:"alto", p:"Qual a diferença entre risco, perigo e agravação?", r:"<b>Risco</b> é a possibilidade do dano. <b>Perigo</b> é a causa do dano (incêndio, colisão). <b>Agravação</b> é a circunstância que aumenta a chance ou a gravidade."},
    {id:"c6",  peso:"alto", p:"O que é prêmio, em uma frase?", r:"O valor pago pelo segurado como <b>preço da garantia</b>. Não é o preço do bem nem uma poupança: paga a proteção daquele período."},
    {id:"c7",  peso:"medio", p:"Qual a diferença entre proposta, apólice e endosso?", r:"<b>Proposta</b> é o pedido formal de seguro. <b>Apólice</b> é o documento que formaliza o contrato aceito. <b>Endosso</b> é o documento que altera a apólice durante a vigência."},
    {id:"c8",  peso:"alto", p:"Cite os cinco princípios do seguro.", r:"Mutualismo, máxima boa-fé, interesse segurável, princípio indenitário e sub-rogação."},
    {id:"c9",  peso:"alto", p:"O que diz o princípio indenitário?", r:"O seguro <b>repoe o prejuízo, nunca gera lucro</b>. A indenização não pode ultrapassar o valor do interesse segurado."},
    {id:"c10", peso:"alto", p:"Em quais seguros o princípio indenitário e a sub-rogação NAO se aplicam?", r:"Nos <b>seguros de pessoas</b>. Ali o capital é livremente estipulado, o segurado pode ter várias apólices e receber de todas, e o segurador não se sub-roga."},
    {id:"c11", peso:"alto", p:"O que é interesse segurável? Um locatário pode segurar o imóvel que aluga?", r:"E o interesse legítimo sobre o bem ou a pessoa. <b>Pode sim</b>: a lei exige interesse legítimo, não propriedade, e o locatário responde pelo imóvel."},
    {id:"c12", peso:"alto", p:"O que é sub-rogação?", r:"Pago o sinistro, o <b>segurador assume o lugar do segurado</b> para cobrar do terceiro que causou o dano. Existe em seguro de danos e não existe em seguro de pessoas."},
    {id:"c13", peso:"alto", p:"Quais as características de um risco segurável?", r:"<b>Possível, futuro, incerto, independente da vontade das partes e mensurável.</b>"},
    {id:"c14", peso:"alto", p:"Dolo e culpa do segurado tem o mesmo efeito na cobertura?", r:"Não. O <b>dolo</b> (ato intencional) anula a garantia. A <b>culpa</b> simples, por imprudência ou negligência sem intenção, continua coberta. Sem isso, seguro de automóvel não existiria."},
    {id:"c15", peso:"medio", p:"Cite cinco riscos tipicamente excluidos em quase todos os ramos.", r:"Ato doloso do segurado, guerra e convulsão social, risco nuclear, desgaste natural e falta de manutenção, e prejuízo indireto não contratado a parte."},
    {id:"c16", peso:"medio", p:"O que compoe o prêmio comercial?", r:"<b>Prêmio puro (ou de risco) mais carregamento.</b> O prêmio puro cobre o custo esperado dos sinistros; o carregamento cobre despesas administrativas, comissão de corretagem, custos operacionais e margem."},
    {id:"c17", peso:"medio", p:"Onde está a comissão do corretor dentro do preço do seguro?", r:"Dentro do <b>carregamento</b>, ou seja, já embutida no prêmio comercial que o segurado paga. Não é cobrada por fora."},
    {id:"c18", peso:"baixo", p:"O que são provisões técnicas?", r:"Reservas contabeis obrigatorias que a seguradora constitui para garantir os compromissos assumidos nas apólices. São fiscalizadas pela SUSEP."},
    {id:"c19", peso:"medio", p:"O que é antisseleção (seleção adversa)?", r:"Quando quem tem <b>mais risco</b> procura mais o seguro. Sem seleção de riscos, a seguradora atrai os piores riscos pelo preço médio e o fundo não fecha."},
    {id:"c20", peso:"alto", p:"O que é cosseguro?", r:"Várias seguradoras dividem o <b>mesmo risco na mesma apólice</b>, cada uma com sua cota, e uma delas é a lider que administra o contrato. O segurado sabe e cada cosseguradora responde pela sua parte."},
    {id:"c21", peso:"alto", p:"O que é resseguro?", r:"E o <b>seguro da seguradora</b>: ela repassa parte do risco assumido a um ressegurador. E contrato entre as duas, e o segurado continua cobrando da sua seguradora."},
    {id:"c22", peso:"alto", p:"O que é retrocessão?", r:"O <b>ressegurador repassa</b> parte do que assumiu a outro ressegurador ou seguradora. E o resseguro do resseguro, o terceiro andar da operação."},
    {id:"c23", peso:"alto", p:"A frase que separa cosseguro de resseguro.", r:"<b>Cosseguro divide na horizontal</b>, entre seguradoras, na mesma apólice. <b>Resseguro divide na vertical</b>, para cima, em contrato separado."},
    {id:"c24", peso:"medio", p:"Quais as três categorias de ressegurador no Brasil?", r:"<b>Local</b> (sediado no Brasil), <b>admitido</b> (estrangeiro com escritório de representação e cadastro na SUSEP) e <b>eventual</b> (estrangeiro sem escritório, com mais restrições)."},
    {id:"c25", peso:"alto", p:"Qual norma criou o Sistema Nacional de Seguros Privados?", r:"O <b>Decreto-Lei 73, de 1966</b>."},
    {id:"c26", peso:"alto", p:"Qual o papel do CNSP?", r:"E o órgão <b>normativo</b>: fixa as diretrizes e normas da política de seguros privados e edita as Resoluções. Ele legisla dentro do sistema, não fiscaliza."},
    {id:"c27", peso:"alto", p:"Qual o papel da SUSEP?", r:"E a autarquia <b>executora e fiscalizadora</b>: autoriza o funcionamento das seguradoras, fiscaliza o mercado, aplica penalidades, edita Circulares e registra os corretores."},
    {id:"c28", peso:"alto", p:"Quem fiscaliza plano de saúde e previdência complementar fechada?", r:"Plano de saúde é da <b>ANS</b>. Previdência complementar fechada (fundos de pensão) é da <b>PREVIC</b>. A SUSEP cuida de seguros, capitalização, resseguro e previdência complementar <b>aberta</b>."},
    {id:"c29", peso:"alto", p:"Quatro diferenças entre seguro de danos e seguro de pessoas.", r:"Danos: indeniza limitado ao prejuízo, aplica o princípio indenitário, há rateio entre apólices e existe sub-rogação. Pessoas: capital pré-fixado e livre, sem princípio indenitário, acumula apólices e não há sub-rogação."},
    {id:"c30", peso:"medio", p:"Seguro de responsabilidade civil por dano corporal a terceiro é seguro de pessoas?", r:"<b>Não, é seguro de danos.</b> Ele protege o patrimônio de quem causou o dano, e não a pessoa da vítima."},
    {id:"c31", peso:"medio", p:"O que são ramos elementares?", r:"O nome tradicional dos <b>seguros de danos</b>: patrimonial, automóvel, transportes, responsabilidade civil, riscos de engenharia, rurais e ramos diversos."},
    {id:"c32", peso:"alto", p:"Qual a diferença entre regulação e liquidação de sinistro?", r:"<b>Regulação</b> apura o que aconteceu e se há cobertura (cabe pagar?). <b>Liquidação</b> apura o valor e efetua o pagamento (pagar quanto?)."},
    {id:"c33", peso:"medio", p:"A quem pertencem os salvados após a indenização integral?", r:"A <b>seguradora</b>. Pago o valor integral, ela fica com o que restou do bem, sob pena de o segurado receber duas vezes."},
    {id:"c34", peso:"baixo", p:"Qual o prazo geral para a seguradora pagar a indenização?", r:"<b>30 dias</b> contados da entrega da documentação completa. Pedido de documento adicional suspende a contagem."},
    {id:"c35", peso:"medio", p:"Por que seguro não é aposta?", r:"Na aposta você <b>cria</b> um risco que não existia e pode lucrar com ele. No seguro você apenas <b>transfere</b> um risco que já existe, e o segurado nunca lucra com o sinistro."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"O dinheiro utilizado para o pagamento das indenizações aos segurados tem origem:",
     alts:["No fundo mutuo formado pelos prêmios pagos pelo conjunto dos segurados.","No capital social e no lucro acumulado da sociedade seguradora.","Nas provisões constituidas pelo ressegurador contratado pela seguradora.","Em recursos aportados pela SUSEP para garantia do mercado."],
     correta:0,
     explicacao:"A indenização sai do fundo comum formado pelos prêmios. Esse é o significado prático do mutualismo. O patrimônio da seguradora é garantia de solvência, não a fonte ordinária da indenização.",
     erro:"Origem do dinheiro da indenização: fundo mutuo, não patrimônio da seguradora."},

    {id:"q2", peso:"alto",
     enunciado:"São características exigidas de um risco para que ele seja segurável:",
     alts:["Possível, futuro, certo quanto a data e mensurável.","Possível, passado, incerto e independente da vontade das partes.","Possível, futuro, incerto, independente da vontade das partes e mensurável.","Provável, futuro, certo e dependente da conduta do segurado."],
     correta:2,
     explicacao:"O risco segurável precisa ser possível, futuro, incerto, alheio a vontade das partes e mensurável. Se já ocorreu não é risco, e se depende da vontade do segurado é dolo.",
     erro:"Características do risco segurável: possível, futuro, incerto, independente da vontade, mensurável."},

    {id:"q3", peso:"alto",
     enunciado:"Sobre a distinção entre cosseguro e resseguro, é correto afirmar que:",
     alts:["No cosseguro a seguradora transfere o risco ao IRB; no resseguro divide com outra seguradora.","Ambos são a mesma operação, mudando apenas o nome conforme o ramo.","No cosseguro o segurado desconhece a operação; no resseguro ela consta obrigatoriamente da apólice.","No cosseguro várias seguradoras dividem o mesmo risco na mesma apólice; no resseguro a seguradora transfere parte do risco a um ressegurador."],
     correta:3,
     explicacao:"Cosseguro divide na horizontal, entre seguradoras, dentro da mesma apólice e com uma lider. Resseguro divide na vertical, em contrato próprio entre seguradora e ressegurador. O segurado enxerga o cosseguro na apólice, e não precisa enxergar o resseguro.",
     erro:"Cosseguro divide na horizontal (mesma apólice); resseguro na vertical (contrato próprio)."},

    {id:"q4", peso:"alto",
     enunciado:"A operação pela qual o ressegurador repassa a outro ressegurador parte dos riscos que assumiu denomina-se:",
     alts:["Cosseguro.","Retrocessão.","Sub-rogação.","Coparticipação."],
     correta:1,
     explicacao:"Retrocessão é o resseguro do resseguro, o terceiro degrau da pulverização do risco.",
     erro:"Retrocessão é o ressegurador repassando risco a outro ressegurador."},

    {id:"q5", peso:"alto",
     enunciado:"No Sistema Nacional de Seguros Privados, compete ao CNSP e a SUSEP, respectivamente:",
     alts:["Fiscalizar as seguradoras e fixar as diretrizes da política de seguros.","Registrar os corretores e julgar recursos de sinistro.","Fixar as diretrizes e normas da política de seguros e fiscalizar a constituição e o funcionamento das seguradoras.","Autorizar planos de saúde e fiscalizar fundos de pensão."],
     correta:2,
     explicacao:"O CNSP normatiza, editando Resoluções. A SUSEP executa e fiscaliza, autorizando funcionamento, aplicando penalidades e editando Circulares. E a inversão mais cobrada da prova.",
     erro:"CNSP normatiza (Resoluções); SUSEP fiscaliza e executa (Circulares)."},

    {id:"q6", peso:"alto",
     enunciado:"A fiscalização dos planos privados de assistência a saúde e das entidades fechadas de previdência complementar cabe, respectivamente:",
     alts:["A ANS e a PREVIC.","A SUSEP e ao CNSP.","A PREVIC e a ANS.","A SUSEP em ambos os casos."],
     correta:0,
     explicacao:"Saúde suplementar é da ANS e previdência fechada é da PREVIC. A SUSEP fica com seguros, capitalização, resseguro e previdência complementar aberta.",
     erro:"Saúde é ANS, previdência fechada é PREVIC, aberta é SUSEP."},

    {id:"q7", peso:"alto",
     enunciado:"O princípio segundo o qual a indenização não pode ultrapassar o valor do interesse segurado, de modo que o seguro não gere lucro ao segurado, é o princípio:",
     alts:["Do mutualismo.","Indenitário.","Da máxima boa-fé.","Da dispersão de riscos."],
     correta:1,
     explicacao:"O princípio indenitário limita a indenização ao prejuízo. Vale nos seguros de danos e não se aplica aos seguros de pessoas, em que o capital é livremente estipulado.",
     erro:"Princípio indenitário: indenização limitada ao prejuízo, só em seguros de danos."},

    {id:"q8", peso:"alto",
     enunciado:"Assinale a alternativa correta sobre seguros de pessoas:",
     alts:["Aplica-se o princípio indenitário, limitando o capital ao prejuízo econômico comprovado.","O segurador sub-roga-se nos direitos do segurado contra o causador do dano.","Havendo mais de uma apólice, procede-se ao rateio entre as seguradoras.","O segurado pode contratar mais de um seguro sobre o mesmo interesse e receber o capital de todos."],
     correta:3,
     explicacao:"Em seguros de pessoas o capital é livremente estipulado, não há princípio indenitário, não há rateio entre apólices e não há sub-rogação. Por isso o segurado acumula e recebe de todas.",
     erro:"Seguro de pessoas: acumula apólices, sem rateio, sem sub-rogação, sem princípio indenitário."},

    {id:"q9", peso:"medio",
     enunciado:"O prêmio comercial de um seguro corresponde:",
     alts:["Apenas ao custo esperado dos sinistros daquele grupo de risco.","Ao prêmio puro acrescido do carregamento, que cobre despesas administrativas, comissão de corretagem e margem.","Ao valor do bem segurado, ajustado pela taxa de risco.","A importância segurada dividida pelo prazo de vigência."],
     correta:1,
     explicacao:"Prêmio puro cobre o custo esperado dos sinistros. Somado ao carregamento, onde estão despesas, comissão e margem, forma o prêmio comercial, que é o valor apresentado ao cliente.",
     erro:"Prêmio comercial = prêmio puro + carregamento (onde está a comissão)."},

    {id:"q10", peso:"alto",
     enunciado:"João, locatário de um imóvel, pretende contratar seguro sobre o bem que aluga. Nessa situação:",
     alts:["Não pode contratar, pois não é proprietário do imóvel.","So pode contratar com anuência expressa da SUSEP.","Pode contratar, mas a apólice será nula por falta de interesse segurável.","Pode contratar, pois possui interesse legítimo sobre o bem."],
     correta:3,
     explicacao:"O que a lei exige é interesse legítimo, não propriedade. O locatário responde pelo imóvel e por isso tem interesse segurável.",
     erro:"Interesse segurável exige interesse legítimo, não propriedade."},

    {id:"q11", peso:"medio",
     enunciado:"Sobre o efeito da conduta do segurado na cobertura, é correto afirmar:",
     alts:["O dolo afasta a garantia, mas a culpa simples permanece coberta.","Tanto o dolo quanto a culpa simples do segurado afastam a garantia.","A culpa simples afasta a garantia, mas o dolo é coberto se houver cláusula expressa.","Nenhuma conduta do segurado afeta a cobertura contratada."],
     correta:0,
     explicacao:"O ato doloso do segurado é risco excluído e torna nulo o contrato para aquele evento. A culpa simples, por imprudência ou negligência, continua coberta, e é justamente ela que faz o seguro de automóvel existir.",
     erro:"Dolo afasta a garantia; culpa simples permanece coberta."},

    {id:"q12", peso:"medio",
     enunciado:"A etapa do processo de sinistro destinada a apurar as causas do evento e verificar se há cobertura na apólice denomina-se:",
     alts:["Liquidação.","Subscrição.","Regulação.","Retrocessão."],
     correta:2,
     explicacao:"Regular é investigar o que houve e se cabe pagar. Liquidar é apurar o quanto e efetuar o pagamento. Subscrição é a aceitação do risco, lá no início da operação.",
     erro:"Regulação apura cobertura; liquidação apura valor e paga."},

    {id:"q13", peso:"medio",
     enunciado:"Após indenizar integralmente o segurado por um veiculo sinistrado, a seguradora:",
     alts:["Deve devolver os salvados ao segurado, que já recebeu a indenização.","Divide os salvados com o segurado, na proporção da franquia.","Deve entregar os salvados a SUSEP para leilão.","Passa a ser proprietária dos salvados."],
     correta:3,
     explicacao:"Pago o valor integral, os salvados pertencem a seguradora. Se ficassem com o segurado, ele receberia duas vezes pelo mesmo bem, o que viola o princípio indenitário.",
     erro:"Salvados pertencem a seguradora após indenização integral."},

    {id:"q14", peso:"medio",
     enunciado:"O fenomeno pelo qual as pessoas com maior exposição ao risco tendem a procurar mais o seguro, prejudicando o equilíbrio da carteira, é conhecido como:",
     alts:["Agravação do risco.","Antisseleção ou seleção adversa.","Pulverização.","Sub-rogação."],
     correta:1,
     explicacao:"Antisseleção é o motivo pelo qual existe subscrição. Sem selecionar, a seguradora atrai os piores riscos pelo preço médio e o fundo mutuo deixa de fechar.",
     erro:"Antisseleção: quem tem mais risco procura mais o seguro."},

    {id:"q15", peso:"medio",
     enunciado:"O Sistema Nacional de Seguros Privados foi instituido por:",
     alts:["Lei 4.594, de 1964.","Lei Complementar 126, de 2007.","Decreto-Lei 73, de 1966.","Código Civil de 2002."],
     correta:2,
     explicacao:"O Decreto-Lei 73 de 1966 criou o Sistema Nacional de Seguros Privados. A Lei 4.594 de 1964 regula a profissão do corretor, e a Lei Complementar 126 de 2007 abriu o mercado de resseguro.",
     erro:"Decreto-Lei 73/1966 criou o SNSP. Lei 4.594/1964 é o corretor. LC 126/2007 é o resseguro."}
  ]
};

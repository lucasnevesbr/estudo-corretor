/* ETAPA 1 - Disciplina 3 de 20: Lei Geral de Proteção de Dados (10 questões, 1o dia)
   Base: Lei 13.709/2018, com as alterações da Lei 13.853/2019 e da Lei 14.460/2022. */

window.CONTEUDO["lgpd"] = {
  abertura: "São 10 questões sobre uma lei só, e ela é curta. Isso torna a LGPD a disciplina de melhor retorno por hora do 1o dia inteiro: quem lê a lei responde, quem lê resumo de resumo erra nos detalhes que a banca cobra. E há um bônus fora da prova: metade do que cai aqui é exatamente o que você precisa para não expor a corretora, porque uma carteira de seguros é um depósito de dado sensível.",

  aulas: [
    {
      id:"a1", peso:"alto", titulo:"O que é dado pessoal, e o que é dado sensível",
      blocos:[
        {t:"p", x:"A LGPD é a <b>Lei 13.709, de 14 de agosto de 2018</b>. Entrou em vigor em setembro de 2020, mas as <b>sanções só passaram a valer em 1o de agosto de 2021</b>. Esse descompasso de datas já foi questão."},
        {t:"p", x:"Tudo na lei gira em torno de uma classificação em três degraus. Errar o degrau é errar a base legal, e errar a base legal é errar a questão."},
        {t:"tab", head:["Categoria","Definição (artigo 5o)","Exemplo na corretora"], rows:[
          ["<b>Dado pessoal</b>","Informação relacionada a pessoa natural <b>identificada ou identificável</b>.","Nome, CPF, telefone, placa do carro, endereço do imóvel segurado."],
          ["<b>Dado pessoal sensível</b>","Origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização religiosa, filosófica ou política, dado referente à <b>saúde</b> ou à <b>vida sexual</b>, dado <b>genético</b> ou <b>biométrico</b>, quando vinculado a uma pessoa natural.","Declaração pessoal de saúde, laudo de perícia, biometria facial no aplicativo."],
          ["<b>Dado anonimizado</b>","Dado que perdeu a possibilidade de associação a um indivíduo, considerando meios técnicos razoáveis e disponíveis.","Base de sinistralidade por faixa etária, sem identificação."]
        ]},
        {t:"d", x:"<b>O dado anonimizado não é dado pessoal e, em regra, está fora da LGPD.</b> Mas o artigo 12 traz a virada: se a anonimização puder ser <b>revertida</b> com esforço razoável, ou se o dado for usado para <b>formação do perfil comportamental</b> de determinada pessoa natural, ele volta a ser dado pessoal. Anonimizado também não é o mesmo que pseudonimizado: no pseudonimizado a chave de identificação existe em algum lugar, então ele continua sendo dado pessoal."},
        {t:"a", x:"Dois erros comuns de prova. Primeiro: <b>CPF sozinho é dado pessoal</b>, e não sensível. Segundo: <b>dado de saúde é sensível mesmo quando a pessoa contou espontaneamente</b>. A categoria é da informação, não da forma como ela chegou."},
        {t:"p", x:"Sobre a extensão da lei, o artigo 3o diz que ela se aplica a qualquer tratamento feito por pessoa natural ou jurídica, pública ou privada, <b>independentemente do país da sede</b> ou de onde estejam os dados, desde que a operação ocorra no território nacional, ou tenha por objetivo ofertar bens e serviços a indivíduos aqui, ou os dados tenham sido coletados aqui."},
        {t:"p", x:"E o artigo 4o lista o que fica <b>de fora</b>: tratamento por pessoa natural para fins <b>exclusivamente particulares e não econômicos</b>; fins exclusivamente <b>jornalístico, artístico ou acadêmico</b>; e fins exclusivos de <b>segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais</b>."},
        {t:"a", x:"Repare na palavra <b>exclusivamente</b> em cada exceção do artigo 4o. A agenda de contatos do seu celular está fora da lei. A mesma agenda usada para prospectar seguro tem fim econômico e está dentro."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"Os personagens: quem é quem no tratamento",
      blocos:[
        {t:"p", x:"A lei distribui papéis, e cada papel carrega deveres diferentes. A pergunta que sempre cai é <b>quem decide</b>, porque quem decide é o controlador."},
        {t:"tab", head:["Papel","Quem é","Como identificar"], rows:[
          ["<b>Titular</b>","A pessoa natural a quem se referem os dados.","Só pessoa natural é titular. Empresa não tem dado pessoal."],
          ["<b>Controlador</b>","Pessoa natural ou jurídica a quem competem as <b>decisões</b> sobre o tratamento.","Quem define a finalidade e os meios."],
          ["<b>Operador</b>","Quem realiza o tratamento <b>em nome do controlador</b>.","Executa instrução alheia. Não escolhe a finalidade."],
          ["<b>Encarregado</b>","Pessoa indicada pelo controlador e operador para ser o <b>canal de comunicação</b> entre controlador, titulares e ANPD.","É função, e a lei não exige que seja advogado nem empregado."],
          ["<b>ANPD</b>","Autoridade Nacional de Proteção de Dados.","Órgão que fiscaliza, edita normas e aplica as sanções."]
        ]},
        {t:"p", x:"<b>Controlador e operador juntos são chamados de agentes de tratamento</b> (artigo 5o, inciso IX). Guarde esse termo guarda-chuva: a lei usa ele o tempo todo para dizer que a regra vale para os dois."},
        {t:"d", x:"<b>A pegadinha do encarregado.</b> A LGPD manda o <b>controlador</b> indicar encarregado (artigo 41). A ANPD pode dispensar a indicação conforme a natureza e o porte da entidade, e para o <b>agente de tratamento de pequeno porte</b> essa dispensa existe. Mas quem for dispensado tem de manter um <b>canal de comunicação</b> com o titular assim mesmo. A identidade e o contato do encarregado devem ser <b>divulgados publicamente</b>, de forma clara e objetiva, de preferência no site."},
        {t:"p", x:"E a definição de <b>tratamento</b> é larga de propósito (artigo 5o, inciso X): coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, controle, modificação, comunicação, transferência, difusão ou extração."},
        {t:"a", x:"<b>Guardar é tratar.</b> Uma planilha antiga de leads parada num computador está em tratamento na modalidade armazenamento, e continua sujeita a princípio, base legal e prazo. Não existe dado em repouso fora da lei."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"Os dez princípios do artigo 6o",
      blocos:[
        {t:"p", x:"O artigo 6o traz a boa-fé como cláusula geral e depois <b>dez princípios</b>. A banca costuma dar a definição e pedir o nome, ou inventar um princípio que não existe."},
        {t:"tab", head:["Princípio","O que exige"], rows:[
          ["<b>Finalidade</b>","Propósitos legítimos, específicos, explícitos e informados ao titular, <b>sem possibilidade de tratamento posterior incompatível</b>."],
          ["<b>Adequação</b>","Compatibilidade do tratamento com a finalidade informada."],
          ["<b>Necessidade</b>","Limitação ao <b>mínimo necessário</b> para atingir a finalidade. É o princípio da minimização."],
          ["<b>Livre acesso</b>","Consulta facilitada e gratuita sobre a forma, a duração e a integralidade dos dados."],
          ["<b>Qualidade dos dados</b>","Exatidão, clareza, relevância e atualização."],
          ["<b>Transparência</b>","Informações claras, precisas e facilmente acessíveis sobre o tratamento e os agentes."],
          ["<b>Segurança</b>","Medidas técnicas e administrativas contra acesso não autorizado e situações acidentais ou ilícitas."],
          ["<b>Prevenção</b>","Adoção de medidas <b>para evitar</b> danos. É o princípio que olha para a frente."],
          ["<b>Não discriminação</b>","Impossibilidade de tratamento para fins discriminatórios ilícitos ou abusivos."],
          ["<b>Responsabilização e prestação de contas</b>","Demonstrar a adoção de medidas eficazes e capazes de comprovar a observância da lei. É o <b>accountability</b>."]
        ]},
        {t:"d", x:"<b>Segurança e prevenção não são a mesma coisa.</b> Segurança é a medida contra o acesso indevido. Prevenção é a postura de antecipar o dano antes que ele exista. A questão que separa os dois costuma usar a palavra <b>evitar</b> para prevenção."},
        {t:"a", x:"O par que mais cai junto é <b>necessidade</b> e <b>finalidade</b>. Pedir o CPF do cônjuge para cotar um seguro de automóvel viola necessidade. Usar o telefone coletado para cotação a fim de oferecer outro produto viola finalidade."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"As bases legais: por que o consentimento não é a regra",
      blocos:[
        {t:"p", x:"Todo tratamento precisa de <b>uma</b> base legal, e só uma. O artigo 7o lista <b>dez hipóteses para dado pessoal comum</b>, e o consentimento é apenas a primeira delas."},
        {t:"tab", head:["Artigo 7o","Base legal"], rows:[
          ["I","<b>Consentimento</b> do titular."],
          ["II","Cumprimento de <b>obrigação legal ou regulatória</b> pelo controlador."],
          ["III","Execução de <b>políticas públicas</b> pela administração pública."],
          ["IV","Realização de <b>estudos por órgão de pesquisa</b>, garantida a anonimização sempre que possível."],
          ["V","<b>Execução de contrato</b> ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido dele."],
          ["VI","<b>Exercício regular de direitos</b> em processo judicial, administrativo ou arbitral."],
          ["VII","Proteção da <b>vida</b> ou da incolumidade física do titular ou de terceiro."],
          ["VIII","<b>Tutela da saúde</b>, exclusivamente em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária."],
          ["IX","<b>Legítimo interesse</b> do controlador ou de terceiro, salvo quando prevalecerem direitos e liberdades fundamentais do titular."],
          ["X","<b>Proteção do crédito</b>."]
        ]},
        {t:"d", x:"<b>O ponto que decide a questão mais difícil da disciplina:</b> para <b>dado sensível</b> valem outras hipóteses, as do artigo 11, e nelas <b>não existe legítimo interesse nem proteção do crédito</b>. Se a alternativa disser que a seguradora pode tratar dados de saúde com base no legítimo interesse, está errada."},
        {t:"p", x:"O artigo 11 permite tratar dado sensível em duas situações. <b>Com consentimento</b>, que aqui precisa ser <b>específico e destacado</b>, para finalidades específicas. Ou <b>sem consentimento</b>, quando for indispensável para: cumprimento de obrigação legal ou regulatória; políticas públicas; estudos por órgão de pesquisa; exercício regular de direitos; proteção da vida; tutela da saúde por profissional de saúde; e <b>garantia da prevenção à fraude e à segurança do titular</b> nos processos de identificação e autenticação."},
        {t:"p", x:"O consentimento, quando é a base escolhida, tem regras próprias (artigos 8o e 9o): deve ser <b>por escrito ou por outro meio que demonstre a manifestação de vontade</b>, destacado das demais cláusulas, referente a finalidades determinadas, e é <b>revogável a qualquer momento, por procedimento gratuito e facilitado</b>. Consentimento genérico é <b>nulo</b>, e o ônus de provar que ele existiu é do controlador."},
        {t:"a", x:"Na prática do seguro, a base mais comum não é consentimento, é <b>execução de contrato</b> (inciso V) para o que a apólice exige, e <b>obrigação legal ou regulatória</b> (inciso II) para o que a SUSEP e a legislação de prevenção à lavagem obrigam a guardar. Escolher consentimento onde ele não é necessário é um tiro no pé: consentimento pode ser revogado a qualquer momento, obrigação legal não."}
      ]
    },
    {
      id:"a5", peso:"alto", titulo:"Os direitos do titular, e o prazo para responder",
      blocos:[
        {t:"p", x:"O artigo 18 dá ao titular <b>nove direitos</b>, exercíveis a qualquer momento e mediante requisição. Todos são <b>gratuitos</b>."},
        {t:"tab", head:["Inciso","Direito"], rows:[
          ["I","<b>Confirmação</b> da existência de tratamento."],
          ["II","<b>Acesso</b> aos dados."],
          ["III","<b>Correção</b> de dados incompletos, inexatos ou desatualizados."],
          ["IV","<b>Anonimização, bloqueio ou eliminação</b> de dados desnecessários, excessivos ou tratados em desconformidade com a lei."],
          ["V","<b>Portabilidade</b> a outro fornecedor de serviço ou produto, mediante requisição expressa."],
          ["VI","<b>Eliminação</b> dos dados tratados com o consentimento do titular."],
          ["VII","<b>Informação sobre o compartilhamento</b>: com que entidades públicas e privadas o controlador compartilhou os dados."],
          ["VIII","Informação sobre a <b>possibilidade de não fornecer consentimento</b> e sobre as consequências da negativa."],
          ["IX","<b>Revogação do consentimento</b>."]
        ]},
        {t:"d", x:"<b>O prazo do artigo 19.</b> A confirmação de existência e o acesso aos dados são fornecidos: em <b>formato simplificado, imediatamente</b>; ou por <b>declaração clara e completa</b>, indicando origem, critérios e finalidade, em até <b>15 dias</b> contados da requisição. Guarde esse par: imediato para o simplificado, 15 dias para o completo."},
        {t:"p", x:"Dois direitos têm limites que a banca explora. A <b>portabilidade</b> não abrange dados que já tenham sido <b>anonimizados</b> pelo controlador. E a <b>eliminação</b> não é absoluta: o artigo 16 permite a conservação dos dados para cumprimento de obrigação legal ou regulatória, estudo por órgão de pesquisa com anonimização, transferência a terceiro respeitados os requisitos da lei, e uso exclusivo do controlador com <b>vedação de acesso por terceiro</b> e desde que anonimizados."},
        {t:"p", x:"Há ainda o artigo 20, que garante o direito de <b>solicitar revisão de decisões tomadas unicamente com base em tratamento automatizado</b> que afetem interesses do titular, incluindo decisões destinadas a <b>definir perfil pessoal, profissional, de consumo e de crédito</b>. O controlador deve fornecer informações claras sobre os critérios usados, observados o segredo comercial e industrial."},
        {t:"a", x:"O artigo 20 é o artigo do seguro, ainda que não diga a palavra. Precificação por perfil, recusa automática de proposta e negativa de sinistro por sistema entram exatamente nele. E note o que a lei <b>não</b> garante: revisão por pessoa humana. Esse trecho foi retirado no processo legislativo, e a prova cobra isso."}
      ]
    },
    {
      id:"a6", peso:"medio", titulo:"Segurança, incidente e quem paga a conta",
      blocos:[
        {t:"p", x:"Os artigos 46 a 49 tratam de segurança. A exigência é de <b>medidas técnicas e administrativas</b> aptas a proteger os dados de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão."},
        {t:"p", x:"O artigo 48 cuida do <b>incidente de segurança</b>: o controlador deve comunicar à <b>ANPD</b> e ao <b>titular</b> a ocorrência que possa acarretar <b>risco ou dano relevante</b>. A lei fala em <b>prazo razoável</b>, e coube à ANPD fixar o número: a regulamentação de 2024 estabeleceu <b>3 dias úteis</b> a contar do conhecimento do incidente."},
        {t:"d", x:"<b>Nem todo incidente vira comunicação.</b> O gatilho é <b>risco ou dano relevante</b> ao titular. Vazamento de uma base já anonimizada, por exemplo, não aciona o dever. Mas a decisão sobre a relevância pode ser revista pela ANPD, que também pode determinar a <b>ampla divulgação em meios de comunicação</b> e medidas para reverter ou mitigar os efeitos."},
        {t:"p", x:"O <b>relatório de impacto à proteção de dados pessoais</b> (artigo 5o, inciso XVII) é a documentação com a descrição dos processos de tratamento que podem gerar riscos, e as medidas de mitigação. A ANPD <b>pode determinar</b> que o controlador o elabore, inclusive quando o tratamento tiver por base o legítimo interesse."},
        {t:"p", x:"A responsabilidade está no artigo 42: o agente que causar dano <b>patrimonial, moral, individual ou coletivo</b> é obrigado a repará-lo. O <b>operador responde solidariamente</b> quando descumprir as obrigações da lei ou quando não seguir as instruções lícitas do controlador. E os controladores que estiverem diretamente envolvidos respondem solidariamente."},
        {t:"tab", head:["Artigo 43: não há responsabilização quando o agente provar","Observação"], rows:[
          ["Que <b>não realizou</b> o tratamento que lhe é atribuído","Ônus da prova do agente."],
          ["Que, embora tenha realizado, <b>não houve violação</b> à legislação","Ônus da prova do agente."],
          ["Que o dano decorre de <b>culpa exclusiva do titular</b> ou de terceiro","Culpa concorrente não exclui."]
        ]},
        {t:"a", x:"Repare que em todas as três hipóteses <b>quem prova é o agente</b>, não o titular. A lei inverte o ônus da prova, e a questão costuma inverter de volta para ver se você percebe."}
      ]
    },
    {
      id:"a7", peso:"alto", titulo:"A ANPD e as sanções do artigo 52",
      blocos:[
        {t:"p", x:"A <b>ANPD</b> foi criada pela Lei 13.853/2019 e hoje é <b>autarquia de natureza especial</b>, com autonomia técnica e decisória, após a Lei 14.460/2022. É o <b>único órgão competente para aplicar as sanções da LGPD</b>, e cabe a ela editar normas e fiscalizar."},
        {t:"tab", head:["Sanção (artigo 52)","Detalhe que cai"], rows:[
          ["<b>Advertência</b>","Com indicação de <b>prazo</b> para adoção de medidas corretivas."],
          ["<b>Multa simples</b>","Até <b>2% do faturamento</b> da pessoa jurídica, grupo ou conglomerado <b>no Brasil</b>, no último exercício, <b>excluídos os tributos</b>, limitada a <b>R$ 50 milhões por infração</b>."],
          ["<b>Multa diária</b>","Observado o mesmo limite total."],
          ["<b>Publicização da infração</b>","Depois de apurada e confirmada."],
          ["<b>Bloqueio</b> dos dados","Até a regularização."],
          ["<b>Eliminação</b> dos dados","Dos dados a que se refere a infração."],
          ["<b>Suspensão parcial do banco de dados</b>","Até <b>6 meses</b>, prorrogável por igual período."],
          ["<b>Suspensão da atividade de tratamento</b>","Até <b>6 meses</b>, prorrogável por igual período."],
          ["<b>Proibição parcial ou total</b> do exercício de atividades de tratamento","A mais grave da lista."]
        ]},
        {t:"d", x:"<b>Os dois números que a banca troca:</b> a multa é de até <b>2%</b> do faturamento, não 4%, e o teto é <b>R$ 50 milhões por infração</b>, não por ano nem por titular. Os 4% são do regulamento europeu, e é justamente por isso que aparecem como distrator."},
        {t:"p", x:"As sanções são aplicadas após <b>procedimento administrativo</b> que possibilite a ampla defesa, e de forma <b>gradativa, isolada ou cumulativa</b>. O artigo 52 lista os critérios de dosimetria, entre eles a gravidade e a natureza da infração, a boa-fé do infrator, a vantagem auferida, a condição econômica, a reincidência, a cooperação do infrator e a <b>adoção de política de boas práticas e governança</b>."},
        {t:"a", x:"O último critério vale ouro na prática: manter programa de governança documentado é atenuante expressa na lei. Não é só burocracia, é redução de multa."}
      ]
    },
    {
      id:"a8", peso:"alto", titulo:"Onde isso aterrissa numa corretora de seguros",
      blocos:[
        {t:"p", x:"Esta aula amarra a disciplina no resto da prova. A LGPD reaparece em <b>Seguros de Pessoas</b> e em <b>Gestão de uma Corretora</b>, e o raciocínio é sempre o mesmo: identificar o papel, achar a base legal, respeitar o prazo."},
        {t:"tab", head:["Situação real","Papel do corretor","Base legal"], rows:[
          ["Cadastro de cliente na própria carteira","<b>Controlador</b>: ele decide guardar e para quê.","Execução de contrato (7o, V) e obrigação legal (7o, II)."],
          ["Cotação enviada à seguradora","<b>Controlador</b> do que é dele; a seguradora é controladora do que é dela.","Procedimentos preliminares a contrato, a pedido do titular (7o, V)."],
          ["Tratamento feito por instrução da seguradora","<b>Operador</b>.","A base é a do controlador; o operador segue instrução lícita."],
          ["Declaração pessoal de saúde em seguro de vida","Controlador de <b>dado sensível</b>.","Artigo 11, e <b>nunca</b> legítimo interesse."],
          ["Prospecção ativa de lead frio","<b>Controlador</b>.","Legítimo interesse (7o, IX), com teste de balanceamento, e só para dado comum."]
        ]},
        {t:"d", x:"<b>A regra que resolve quase toda questão aplicada:</b> quem <b>decide a finalidade</b> é controlador. O corretor quase nunca é mero operador da seguradora, porque ele mantém carteira própria e decide sozinho o que fazer com ela. Marcar operador por reflexo, só porque a seguradora é maior, é o erro clássico."},
        {t:"p", x:"Três pontos de atrito que já viraram questão no contexto de seguro: o <b>compartilhamento</b> de dados entre corretora e seguradora exige informação ao titular (artigo 18, VII); a <b>recusa automatizada</b> de proposta cai no artigo 20; e a <b>retenção depois do fim da apólice</b> só se sustenta em obrigação legal ou regulatória, nunca em costume comercial."},
        {t:"a", x:"Uma pergunta de bolso para a prova e para a vida: <b>se o cliente revogar o consentimento agora, o que a corretora ainda pode guardar?</b> Tudo o que estiver amparado em outra base legal, principalmente obrigação legal e exercício regular de direitos. Nada do que estava amparado só no consentimento."}
      ]
    }
  ],

  flashcards: [
    {id:"c1", peso:"alto", p:"Qual é o número e a data da LGPD?", r:"<b>Lei 13.709, de 14 de agosto de 2018</b>. Vigência geral em setembro de 2020, mas as <b>sanções só a partir de 1o de agosto de 2021</b>."},
    {id:"c2", peso:"alto", p:"Defina dado pessoal.", r:"Informação relacionada a pessoa natural <b>identificada ou identificável</b> (artigo 5o, I). Só pessoa natural tem dado pessoal."},
    {id:"c3", peso:"alto", p:"Liste as categorias de dado pessoal sensível.", r:"Origem <b>racial ou étnica</b>, convicção <b>religiosa</b>, opinião <b>política</b>, filiação a <b>sindicato</b> ou a organização religiosa, filosófica ou política, dado referente à <b>saúde</b> ou à <b>vida sexual</b>, dado <b>genético</b> ou <b>biométrico</b>, quando vinculado a pessoa natural."},
    {id:"c4", peso:"alto", p:"Dado anonimizado está sujeito à LGPD?", r:"Em regra <b>não</b>. Mas volta a ser dado pessoal se a anonimização for <b>reversível</b> com esforço razoável, ou se for usado para <b>formação de perfil comportamental</b> de pessoa determinada (artigo 12)."},
    {id:"c5", peso:"medio", p:"Anonimizado e pseudonimizado são a mesma coisa?", r:"<b>Não.</b> No pseudonimizado a chave que reidentifica ainda existe, então ele <b>continua sendo dado pessoal</b>."},
    {id:"c6", peso:"medio", p:"Quais tratamentos ficam fora da LGPD (artigo 4o)?", r:"Por pessoa natural para fins <b>exclusivamente particulares e não econômicos</b>; fins exclusivamente <b>jornalístico, artístico ou acadêmico</b>; e fins exclusivos de <b>segurança pública, defesa nacional, segurança do Estado e investigação penal</b>."},
    {id:"c7", peso:"alto", p:"Quem é o controlador?", r:"Pessoa natural ou jurídica a quem competem as <b>decisões</b> sobre o tratamento. Quem define <b>finalidade e meios</b>."},
    {id:"c8", peso:"alto", p:"Quem é o operador?", r:"Quem realiza o tratamento <b>em nome do controlador</b>. Executa instrução alheia, não escolhe a finalidade."},
    {id:"c9", peso:"medio", p:"O que são agentes de tratamento?", r:"<b>Controlador e operador</b>, juntos (artigo 5o, IX)."},
    {id:"c10", peso:"alto", p:"O que faz o encarregado?", r:"É o <b>canal de comunicação</b> entre controlador, titulares e ANPD. Indicado pelo controlador, com identidade e contato <b>divulgados publicamente</b>."},
    {id:"c11", peso:"medio", p:"Todo controlador é obrigado a indicar encarregado?", r:"Não. A <b>ANPD pode dispensar</b> conforme natureza e porte, e há dispensa para o <b>agente de pequeno porte</b>, que ainda assim deve manter <b>canal de comunicação</b> com o titular."},
    {id:"c12", peso:"medio", p:"Armazenar um dado sem usar é tratamento?", r:"<b>Sim.</b> Armazenamento está na lista do artigo 5o, X. Guardar é tratar."},
    {id:"c13", peso:"alto", p:"Quantos são os princípios do artigo 6o e qual a cláusula geral?", r:"São <b>dez princípios</b>, precedidos pela <b>boa-fé</b>."},
    {id:"c14", peso:"alto", p:"O que exige o princípio da necessidade?", r:"Limitação ao <b>mínimo necessário</b> para a finalidade: dados pertinentes, proporcionais e não excessivos. É a minimização."},
    {id:"c15", peso:"alto", p:"Qual princípio proíbe usar o dado para finalidade nova e incompatível?", r:"O da <b>finalidade</b>: propósitos legítimos, específicos, explícitos e informados, sem tratamento posterior incompatível."},
    {id:"c16", peso:"medio", p:"Diferencie segurança de prevenção.", r:"<b>Segurança</b> é a medida técnica e administrativa contra acesso não autorizado. <b>Prevenção</b> é adotar medidas <b>para evitar</b> o dano."},
    {id:"c17", peso:"medio", p:"Qual princípio corresponde ao accountability?", r:"<b>Responsabilização e prestação de contas</b>: demonstrar medidas eficazes e comprovar a observância da lei."},
    {id:"c18", peso:"alto", p:"Quantas bases legais existem para dado pessoal comum, e qual é a primeira?", r:"<b>Dez</b>, no artigo 7o. A primeira é o <b>consentimento</b>, que é apenas uma delas e não a regra."},
    {id:"c19", peso:"alto", p:"Quais duas bases do artigo 7o NÃO existem para dado sensível?", r:"<b>Legítimo interesse</b> e <b>proteção do crédito</b>. É o ponto mais cobrado da disciplina."},
    {id:"c20", peso:"alto", p:"Como o consentimento deve ser para dado sensível?", r:"<b>Específico e destacado</b>, para finalidades específicas (artigo 11, I)."},
    {id:"c21", peso:"alto", p:"Que base do artigo 11 cobre a análise de fraude em sinistro?", r:"Garantia da <b>prevenção à fraude e à segurança do titular</b>, nos processos de identificação e autenticação (artigo 11, II, g)."},
    {id:"c22", peso:"medio", p:"O consentimento genérico é válido?", r:"<b>Não, é nulo</b> (artigo 8o, parágrafo 4o). E o ônus de provar que houve consentimento é do <b>controlador</b>."},
    {id:"c23", peso:"medio", p:"O consentimento pode ser revogado?", r:"Sim, <b>a qualquer momento</b>, por manifestação expressa, em procedimento <b>gratuito e facilitado</b>. Os tratamentos feitos antes continuam válidos."},
    {id:"c24", peso:"alto", p:"Quantos são os direitos do titular e onde estão?", r:"<b>Nove</b>, no <b>artigo 18</b>, todos gratuitos e exercíveis a qualquer momento."},
    {id:"c25", peso:"alto", p:"Qual o prazo para atender pedido de confirmação e acesso?", r:"<b>Imediatamente</b>, em formato simplificado; ou por <b>declaração clara e completa</b> em até <b>15 dias</b> (artigo 19)."},
    {id:"c26", peso:"medio", p:"A portabilidade alcança dados anonimizados?", r:"<b>Não.</b> O artigo 18, V, exclui os dados já anonimizados pelo controlador."},
    {id:"c27", peso:"medio", p:"A eliminação a pedido do titular é absoluta?", r:"<b>Não.</b> O artigo 16 permite conservar para obrigação legal ou regulatória, estudo por órgão de pesquisa, transferência a terceiro nos termos da lei, e uso exclusivo do controlador, anonimizado e vedado o acesso por terceiro."},
    {id:"c28", peso:"alto", p:"O que garante o artigo 20?", r:"O direito de <b>solicitar revisão de decisão tomada unicamente por tratamento automatizado</b> que afete interesses do titular, inclusive definição de perfil. A lei <b>não</b> exige que a revisão seja feita por pessoa humana."},
    {id:"c29", peso:"alto", p:"Quando um incidente de segurança deve ser comunicado, e em quanto tempo?", r:"Quando puder acarretar <b>risco ou dano relevante</b> ao titular. A lei fala em prazo razoável; a ANPD fixou <b>3 dias úteis</b> do conhecimento."},
    {id:"c30", peso:"alto", p:"Qual o valor máximo da multa simples da LGPD?", r:"<b>2% do faturamento no Brasil</b> no último exercício, excluídos os tributos, limitada a <b>R$ 50 milhões por infração</b>. Os 4% são do regulamento europeu."},
    {id:"c31", peso:"medio", p:"Por quanto tempo pode durar a suspensão do banco de dados?", r:"Até <b>6 meses</b>, prorrogável por igual período."},
    {id:"c32", peso:"medio", p:"Quando o operador responde solidariamente?", r:"Quando <b>descumprir as obrigações da legislação</b> ou quando <b>não seguir as instruções lícitas</b> do controlador (artigo 42)."},
    {id:"c33", peso:"medio", p:"Quais as excludentes de responsabilidade do artigo 43?", r:"Provar que <b>não realizou</b> o tratamento; que <b>não houve violação</b> à lei; ou que o dano decorre de <b>culpa exclusiva do titular ou de terceiro</b>. O ônus da prova é do agente."},
    {id:"c34", peso:"medio", p:"Qual a natureza jurídica da ANPD hoje?", r:"<b>Autarquia de natureza especial</b>, com autonomia técnica e decisória (Lei 14.460/2022). É a <b>única competente</b> para aplicar as sanções da LGPD."},
    {id:"c35", peso:"alto", p:"A corretora que mantém carteira própria é controladora ou operadora?", r:"<b>Controladora</b>, porque decide a finalidade do tratamento da própria carteira. Só é operadora no que faz por instrução da seguradora."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"De acordo com a Lei 13.709/2018, considera-se dado pessoal sensível:",
     alts:["O dado referente à saúde, quando vinculado a uma pessoa natural.","O CPF e o número da carteira de habilitação do titular.","O endereço residencial e o telefone de contato.","Qualquer dado cuja divulgação cause constrangimento ao titular."],
     correta:0,
     explicacao:"O artigo 5o, inciso II, traz rol fechado: origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa, filosófica ou política, dado referente à saúde ou à vida sexual, dado genético ou biométrico. CPF, habilitação, endereço e telefone são dados pessoais comuns. E o critério não é o constrangimento, é o enquadramento na lista.",
     erro:"Dado sensível é rol fechado do artigo 5o, II. CPF e endereço são dados comuns."},

    {id:"q2", peso:"alto",
     enunciado:"Uma seguradora pretende tratar dados de saúde de proponentes de seguro de vida. Assinale a base legal que NÃO pode ser invocada:",
     alts:["Consentimento específico e destacado do titular.","Tutela da saúde, em procedimento realizado por profissionais de saúde.","Legítimo interesse do controlador.","Exercício regular de direitos em contrato."],
     correta:2,
     explicacao:"Dado de saúde é dado sensível, e as bases legais dos sensíveis estão no artigo 11, não no artigo 7o. O rol do artigo 11 não contempla legítimo interesse nem proteção do crédito. As outras três alternativas constam expressamente do artigo 11.",
     erro:"Dado sensível NÃO admite legítimo interesse nem proteção do crédito. Artigo 11, não artigo 7o."},

    {id:"q3", peso:"alto",
     enunciado:"O titular solicitou ao controlador a confirmação da existência de tratamento e o acesso aos seus dados. Nos termos do artigo 19 da LGPD, o controlador deve fornecer:",
     alts:["Sempre em até 30 dias, prorrogáveis por igual período mediante justificativa.","Em até 5 dias úteis, sob pena de multa diária.","No prazo que constar da política de privacidade, por ser matéria de livre pactuação.","Em formato simplificado, imediatamente; ou por declaração clara e completa, em até 15 dias."],
     correta:3,
     explicacao:"O artigo 19 estabelece duas vias: a resposta em formato simplificado é imediata, e a declaração clara e completa, indicando origem, critérios e finalidade do tratamento, tem prazo de 15 dias contados da requisição. Não há prazo de 30 dias nesse dispositivo, e o prazo é legal, não contratual.",
     erro:"Artigo 19: imediato no simplificado, 15 dias na declaração completa."},

    {id:"q4", peso:"alto",
     enunciado:"Sobre as sanções administrativas previstas no artigo 52 da LGPD, é correto afirmar que a multa simples pode alcançar:",
     alts:["4% do faturamento global do grupo, limitada a 20 milhões de euros.","2% do faturamento no Brasil no último exercício, excluídos os tributos, limitada a R$ 50 milhões por infração.","10% do faturamento bruto do último exercício, sem limite de valor.","O dobro da vantagem econômica obtida, sem qualquer teto."],
     correta:1,
     explicacao:"A LGPD fixa multa simples de até 2% do faturamento da pessoa jurídica, grupo ou conglomerado no Brasil, no último exercício, excluídos os tributos, limitada no total a R$ 50 milhões por infração. Os percentuais de 4% e o teto em euros pertencem ao regulamento europeu e aparecem como distrator recorrente.",
     erro:"Multa: 2% do faturamento no Brasil, teto de R$ 50 milhões POR INFRAÇÃO."},

    {id:"q5", peso:"alto",
     enunciado:"Uma corretora contrata empresa de tecnologia para hospedar sua base de clientes, definindo ela própria quais dados serão guardados e para qual finalidade. Nessa relação:",
     alts:["A corretora é controladora e a empresa de tecnologia é operadora.","A corretora é operadora e a empresa de tecnologia é controladora.","Ambas são controladoras, pois compartilham a base.","Não há tratamento de dados, pois a hospedagem é mero armazenamento."],
     correta:0,
     explicacao:"Controlador é quem toma as decisões sobre o tratamento, ou seja, quem define finalidade e meios. Quem apenas executa em nome do controlador é operador. E armazenamento é modalidade expressa de tratamento no artigo 5o, inciso X, então a última alternativa também está errada.",
     erro:"Quem decide a finalidade é CONTROLADOR. Armazenar é tratar."},

    {id:"q6", peso:"alto",
     enunciado:"São princípios expressos no artigo 6o da LGPD, EXCETO:",
     alts:["Necessidade.","Prevenção.","Onerosidade do acesso.","Não discriminação."],
     correta:2,
     explicacao:"O artigo 6o consagra o livre acesso, que assegura consulta facilitada e gratuita. Onerosidade do acesso é o oposto do que a lei determina, e não figura entre os dez princípios. Necessidade, prevenção e não discriminação estão todos no rol.",
     erro:"O acesso é livre e GRATUITO. Não existe princípio de onerosidade."},

    {id:"q7", peso:"medio",
     enunciado:"O titular revogou o consentimento antes dado a uma corretora. Nessa situação:",
     alts:["Todos os dados devem ser imediatamente eliminados, sem exceção.","Os tratamentos realizados antes da revogação tornam-se ilícitos retroativamente.","A revogação só produz efeitos após 15 dias e mediante pagamento de taxa administrativa.","A corretora pode conservar os dados amparados em outra base legal, como obrigação legal ou regulatória."],
     correta:3,
     explicacao:"A revogação é gratuita, facilitada e produz efeitos a partir dela, ratificados os tratamentos realizados sob amparo do consentimento anterior. Além disso, o artigo 16 permite a conservação para cumprimento de obrigação legal ou regulatória, entre outras hipóteses. A eliminação total e a cobrança de taxa contrariam a lei.",
     erro:"Revogar consentimento não apaga o que outra base legal sustenta. E é gratuito."},

    {id:"q8", peso:"medio",
     enunciado:"Quanto ao encarregado pelo tratamento de dados pessoais, é correto afirmar:",
     alts:["Deve obrigatoriamente ser advogado inscrito na Ordem dos Advogados do Brasil.","Atua como canal de comunicação entre o controlador, os titulares e a ANPD, e sua identidade e contato devem ser divulgados publicamente.","É indicado pela ANPD para fiscalizar o controlador.","Sua indicação é obrigatória para todos os controladores, sem qualquer exceção."],
     correta:1,
     explicacao:"O artigo 5o, VIII, e o artigo 41 definem o encarregado como canal de comunicação, indicado pelo controlador, com identidade e informações de contato divulgadas publicamente e de forma clara. A lei não exige formação jurídica, ele não é indicado pela ANPD, e a própria autoridade pode dispensar a indicação conforme a natureza e o porte do agente.",
     erro:"Encarregado é canal de comunicação, indicado pelo CONTROLADOR, com contato público."},

    {id:"q9", peso:"medio",
     enunciado:"Ocorre incidente de segurança em uma corretora, com possibilidade de risco relevante aos titulares. Segundo a LGPD:",
     alts:["O controlador deve comunicar à ANPD e ao titular, e a autoridade pode determinar ampla divulgação do fato.","Não há dever de comunicar, bastando registrar internamente o ocorrido.","A comunicação é devida apenas ao Ministério Público.","A obrigação de comunicar recai exclusivamente sobre o operador."],
     correta:0,
     explicacao:"O artigo 48 impõe ao controlador comunicar à ANPD e ao titular a ocorrência de incidente que possa acarretar risco ou dano relevante. A autoridade pode determinar a ampla divulgação em meios de comunicação e medidas para reverter ou mitigar os efeitos. O dever é do controlador, não do operador.",
     erro:"Incidente com risco relevante: comunicar à ANPD E ao titular. Dever do CONTROLADOR."},

    {id:"q10", peso:"medio",
     enunciado:"A respeito da responsabilidade prevista nos artigos 42 e 43 da LGPD, assinale a alternativa correta:",
     alts:["O operador nunca responde, pois apenas cumpre ordens do controlador.","O titular deve provar a culpa do controlador para obter reparação.","A reparação alcança apenas dano patrimonial, excluído o dano moral.","O agente se exime provando culpa exclusiva do titular ou de terceiro, cabendo a ele o ônus dessa prova."],
     correta:3,
     explicacao:"O artigo 43 lista as excludentes e atribui o ônus da prova ao agente de tratamento. O operador responde solidariamente quando descumprir a lei ou não seguir instruções lícitas do controlador. E o artigo 42 abrange dano patrimonial, moral, individual ou coletivo.",
     erro:"Ônus da prova é do AGENTE. O dano reparável inclui o moral e o coletivo."},

    {id:"q11", peso:"alto",
     enunciado:"Uma corretora deseja usar a base de clientes de seguro de automóvel para oferecer seguro de vida, sem novo aviso ao titular. Essa conduta viola principalmente o princípio da:",
     alts:["Segurança.","Qualidade dos dados.","Finalidade.","Livre acesso."],
     correta:2,
     explicacao:"O princípio da finalidade exige propósitos legítimos, específicos, explícitos e informados ao titular, vedado o tratamento posterior de forma incompatível com aquelas finalidades. Usar dado coletado para uma finalidade em outra, sem informar, é exatamente o desvio de finalidade.",
     erro:"Usar o dado para fim diferente do informado = princípio da FINALIDADE."},

    {id:"q12", peso:"medio",
     enunciado:"Sobre o âmbito de aplicação da LGPD, é correto afirmar que a lei NÃO se aplica ao tratamento de dados pessoais realizado:",
     alts:["Por empresa estrangeira que oferta serviços a pessoas localizadas no Brasil.","Por pessoa natural para fins exclusivamente particulares e não econômicos.","Por corretora de seguros sediada no Brasil.","Por controlador que armazena os dados em servidor fora do país."],
     correta:1,
     explicacao:"O artigo 4o, inciso I, afasta a lei do tratamento feito por pessoa natural para fins exclusivamente particulares e não econômicos. Já o artigo 3o alcança o tratamento independentemente do país da sede do controlador ou do local dos dados, bastando que a operação ocorra no território nacional, que a atividade tenha por objetivo ofertar bens ou serviços a indivíduos aqui, ou que os dados tenham sido coletados no Brasil.",
     erro:"Fora da lei só o particular NÃO econômico. Servidor fora do país continua dentro."},

    {id:"q13", peso:"alto",
     enunciado:"Proposta de seguro é recusada por sistema automatizado de análise de perfil. Nos termos do artigo 20 da LGPD, o titular tem direito a:",
     alts:["Solicitar a revisão da decisão, que deve obrigatoriamente ser feita por pessoa natural.","Exigir a aceitação da proposta, uma vez comprovado o uso de sistema automatizado.","Nada, pois decisões negociais estão fora do alcance da lei.","Solicitar a revisão da decisão e receber informações claras sobre os critérios utilizados, observados o segredo comercial e industrial."],
     correta:3,
     explicacao:"O artigo 20 assegura o direito de solicitar revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem os interesses do titular, inclusive as destinadas a definir perfil pessoal, profissional, de consumo e de crédito. O controlador deve fornecer informações claras e adequadas sobre os critérios, observados o segredo comercial e industrial. A exigência de revisão por pessoa natural não permaneceu no texto legal.",
     erro:"Artigo 20 dá revisão e explicação dos critérios, mas NÃO exige revisor humano."},

    {id:"q14", peso:"medio",
     enunciado:"A Autoridade Nacional de Proteção de Dados, após a Lei 14.460/2022, é:",
     alts:["Autarquia de natureza especial, dotada de autonomia técnica e decisória.","Órgão da administração pública federal integrante da Presidência da República, sem autonomia.","Entidade privada de autorregulação do setor.","Conselho vinculado ao Ministério da Justiça, sem poder sancionatório."],
     correta:0,
     explicacao:"A ANPD nasceu como órgão da administração pública federal e foi transformada em autarquia de natureza especial, com autonomia técnica e decisória, patrimônio próprio e mandato fixo para os diretores. Ela é o único órgão competente para aplicar as sanções da LGPD.",
     erro:"ANPD hoje é AUTARQUIA de natureza especial, e é a única que sanciona."},

    {id:"q15", peso:"alto",
     enunciado:"Assinale a alternativa que apresenta hipótese em que o tratamento de dados pessoais dispensa o consentimento do titular:",
     alts:["Envio de publicidade de produtos não relacionados ao contrato firmado.","Compartilhamento da base de clientes com empresa parceira, para uso comercial próprio.","Cumprimento de obrigação legal ou regulatória pelo controlador.","Divulgação de dados de saúde do segurado a familiares interessados."],
     correta:2,
     explicacao:"O artigo 7o, inciso II, autoriza o tratamento para cumprimento de obrigação legal ou regulatória pelo controlador, independentemente de consentimento. As demais alternativas descrevem tratamentos sem base legal adequada: publicidade estranha ao contrato e compartilhamento para uso comercial de terceiro exigem base própria e informação ao titular, e divulgar dado de saúde a familiares não encontra amparo no artigo 11.",
     erro:"Obrigação legal ou regulatória (7o, II) dispensa consentimento."}
  ]
};

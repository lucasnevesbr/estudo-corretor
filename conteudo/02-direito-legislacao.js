/* ETAPA 1 - Disciplina 2 de 20: Direito e Legislação do Seguro (10 questões, 1o dia) */

window.CONTEUDO["direito-legislacao"] = {
  abertura: "⚠️ REESCRITA EM 27/08/2026. Se você leu esta disciplina antes dessa data, releia: a base legal mudou. A Lei 15.040, de 09/12/2024, revogou os artigos 757 a 802 do Código Civil e o artigo 206, parágrafo 1o, inciso II, e está em vigor desde 11/12/2025. O contrato de seguro agora tem lei própria. || Aqui a resposta certa não se deduz por lógica, ela está escrita em algum lugar. É a disciplina mais decoreba do 1o dia, e também a que mais recompensa quem estuda pela lei em vez de estudar por resumo. E agora há um bônus: como a lei é nova, quase todo resumo que circula por aí está desatualizado.",

  aulas: [
    {
      id:"a1", peso:"alto", titulo:"Onde o seguro está na lei brasileira, depois de 2025",
      blocos:[
        {t:"d", x:"<b>A mudança que reorganiza a disciplina inteira.</b> Até 10/12/2025, o contrato de seguro era regido pelos artigos 757 a 802 do <b>Código Civil</b>. A <b>Lei 15.040, de 9 de dezembro de 2024</b>, revogou todos eles, mais o artigo 206, parágrafo 1o, inciso II, e ainda os artigos 9o a 14 do Decreto-Lei 73/1966. Ela entrou em vigor em <b>11/12/2025</b>."},
        {t:"p", x:"Hoje o mapa é este, e saber qual norma responde o quê já resolve boa parte das questões:"},
        {t:"tab", head:["Norma","Responde a pergunta"], rows:[
          ["<b>Lei 15.040/2024</b>","Como funciona o <b>contrato</b> entre segurado e seguradora. É a lei própria do seguro."],
          ["<b>Decreto-Lei 73, de 1966</b>","Como se organiza o <b>mercado</b>: cria o Sistema Nacional de Seguros Privados."],
          ["<b>Lei 4.594, de 1964</b>","Quem é o <b>corretor</b>, o que ele pode e o que ele não pode."],
          ["<b>Código de Defesa do Consumidor</b>","Como se protege o segurado enquanto <b>consumidor</b>."],
          ["<s>Código Civil, artigos 757 a 802</s>","<b>REVOGADOS.</b> Só valem para contratos celebrados <b>até 10/12/2025</b>."]
        ]},
        {t:"d", x:"<b>O regime de transição é questão pronta.</b> Contrato assinado <b>até 10/12/2025</b> continua regido pelo Código Civil. Contrato assinado <b>a partir de 11/12/2025</b> segue a Lei 15.040. Não é que o Código Civil morreu: ele virou direito intertemporal, e ainda governa apólices em vigor."},
        {t:"p", x:"Abaixo das leis vêm as <b>Resoluções do CNSP</b> e as <b>Circulares da SUSEP</b>, que detalham a operação. A <b>Lei Complementar 126, de 2007</b>, cuida do resseguro, e a <b>Lei Complementar 213, de 2025</b>, alterou o Decreto-Lei 73."},
        {t:"d", x:"<b>A hierarquia continua valendo na prova:</b> lei vem antes de Resolução, e Resolução vem antes de Circular. Uma Circular da SUSEP não pode contrariar uma Resolução do CNSP, e nenhuma das duas pode contrariar a Lei 15.040."},
        {t:"a", x:"Cuidado com material antigo, inclusive apostila de 2024 e resumo de internet. Se o texto fala em <b>artigo 757</b> como vigente, ele é anterior a dezembro de 2025. O conceito costuma continuar certo; o <b>número do artigo</b> é que ficou errado."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"O contrato de seguro na Lei 15.040",
      blocos:[
        {t:"d", x:"<b>Artigo 1o.</b> Pelo contrato de seguro, a <b>seguradora</b> obriga-se, mediante o pagamento do <b>prêmio equivalente</b>, a garantir <b>interesse legítimo</b> do segurado <b>ou do beneficiário</b> contra <b>riscos predeterminados</b>."},
        {t:"p", x:"Compare com o antigo artigo 757 e veja o que mudou, porque é aí que a banca monta o distrator:"},
        {t:"tab", head:["Elemento","Artigo 757 (revogado)","Artigo 1o (vigente)"], rows:[
          ["Quem garante","<b>segurador</b>","<b>seguradora</b>"],
          ["Prêmio","pagamento do prêmio","pagamento do prêmio <b>equivalente</b>"],
          ["Quem é protegido","interesse legítimo <b>do segurado</b>","interesse legítimo do segurado <b>ou do beneficiário</b>"],
          ["Objeto","relativo a <b>pessoa ou coisa</b>","a lei não repete a fórmula pessoa ou coisa"],
          ["Risco","riscos predeterminados","riscos predeterminados"]
        ]},
        {t:"p", x:"O <b>artigo 2o</b> mantém a regra dura de sempre: somente podem pactuar contratos de seguro <b>entidades devidamente autorizadas na forma da lei</b>. Quem opera seguro sem autorização não está fazendo seguro."},
        {t:"p", x:"As características do contrato seguem as mesmas, e a prova continua pedindo em lista:"},
        {t:"tab", head:["Característica","Significado"], rows:[
          ["<b>Bilateral</b>","Gera obrigações para os dois lados: pagar o prêmio e garantir o risco."],
          ["<b>Oneroso</b>","Há vantagem econômica para ambos."],
          ["<b>Aleatório</b>","A prestação da seguradora depende de evento incerto."],
          ["<b>Consensual</b>","Forma-se pelo acordo de vontades. A apólice prova o contrato, não o cria."],
          ["<b>De adesão</b>","As cláusulas são previamente redigidas. Por isso a dúvida se interpreta a favor do segurado."],
          ["<b>De boa-fé</b>","O <b>artigo 37</b> obriga os intervenientes a agir com <b>lealdade e boa-fé</b> e a prestar informações completas e verídicas."]
        ]},
        {t:"d", x:"<b>Dois artigos novos que não tinham equivalente claro e caem justamente por isso:</b> o <b>artigo 11</b> declara <b>nulo</b> o contrato quando qualquer das partes souber, na conclusão, que o risco é <b>impossível ou já se realizou</b>, e quem sabia e mesmo assim contratou paga à outra <b>o dobro do valor do prêmio</b>. O <b>artigo 10</b> permite contrato para toda classe de risco, salvo vedação legal, e declara nulas as garantias de <b>multas e penalidades</b> por atos pessoais."},
        {t:"a", x:"Consensual não quer dizer informal. O contrato se forma pelo consenso e já existe antes da apólice sair. Emitir a apólice depois não significa que não havia contrato antes, e isso não mudou com a lei nova."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"O que faz o segurado perder a garantia",
      blocos:[
        {t:"p", x:"Este era o bloco mais cobrado da disciplina, e é o que mais mudou de endereço. Os conceitos sobreviveram, os números não."},
        {t:"tab", head:["Situação","Era","Agora","Consequência"], rows:[
          ["<b>Agravamento intencional</b> e relevante do risco","768","<b>Art. 13</b>","<b>Perde a garantia.</b> Relevante é o que aumenta de forma significativa e continuada a probabilidade do risco."],
          ["Não <b>comunicar</b> agravamento relevante","769","<b>Art. 14</b>","Ciente, a seguradora tem <b>20 dias</b> para cobrar diferença de prêmio ou, se não for tecnicamente possível garantir, resolver o contrato."],
          ["<b>Mora</b> no prêmio","763","<b>Art. 20</b>","Ver o quadro abaixo: o efeito depende de qual parcela."],
          ["Não avisar o <b>sinistro</b> nem minorar efeitos","771","<b>Art. 66</b>","O segurado deve tomar providências para evitar ou minorar efeitos e <b>avisar prontamente</b> a seguradora."],
          ["Risco <b>impossível ou já realizado</b>, sabendo","-","<b>Art. 11</b>","Contrato <b>nulo</b>, e quem sabia paga <b>o dobro do prêmio</b>."]
        ]},
        {t:"d", x:"<b>A mora do prêmio ficou mais favorável ao segurado, e a distinção é questão certa.</b> A mora da <b>prestação única ou da primeira parcela</b> <b>resolve de pleno direito</b> o contrato. A mora das <b>demais parcelas</b> apenas <b>SUSPENDE a garantia</b>, e ainda assim <b>só depois de notificação</b> concedendo prazo ao segurado. Não é mais a perda automática do antigo artigo 763."},
        {t:"p", x:"Sobre agravamento, há uma regra própria dos seguros de pessoas no <b>artigo 17</b>: mesmo havendo relevante agravamento do risco, a seguradora <b>somente poderá cobrar a diferença de prêmio</b>. Não pode resolver o contrato."},
        {t:"p", x:"E o inverso também vale: pelo <b>artigo 18</b>, havendo <b>relevante redução</b> do risco, o prêmio é <b>proporcionalmente reduzido</b>."},
        {t:"a", x:"Guarde o par do agravamento: <b>13 é agravar, 14 é avisar</b>. E o número que decide a questão do 14 é <b>20 dias</b> para a seguradora reagir."},
        {t:"a", x:"O <b>artigo 67</b> traz uma regra generosa que não existia com essa clareza: as <b>despesas de contenção ou salvamento</b>, mesmo feitas por terceiros, correm por conta da seguradora até o limite pactuado, <b>sem reduzir a garantia</b> do seguro."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"Seguro de dano e seguro de pessoa na lei nova",
      blocos:[
        {t:"p", x:"A separação continua, e as regras seguem quase opostas. Fixar esta tabela resolve questões aqui e no 2o dia de prova."},
        {t:"tab", head:["Tema","Seguro de dano","Seguro sobre a vida e a integridade física"], rows:[
          ["Valor","A indenização não pode gerar enriquecimento: vale o princípio indenitário.","O capital é <b>livremente estipulado</b> pelo proponente (<b>art. 112</b>)."],
          ["Várias apólices","Limitado pelo valor do interesse.","<b>Pode</b> contratar mais de um seguro sobre o mesmo interesse, com a mesma ou diversas seguradoras (<b>art. 112</b>)."],
          ["Sub-rogação","<b>Existe</b> (<b>art. 94</b>): paga a indenização, a seguradora sub-roga-se nos direitos do segurado.","<b>Não existe.</b>"],
          ["Beneficiário","Não se aplica da mesma forma.","<b>Livre indicação</b> (<b>art. 113</b>) e <b>livre substituição</b>, por ato entre vivos ou declaração de última vontade (<b>art. 114</b>)."]
        ]},
        {t:"d", x:"<b>A mudança mais comercial da lei inteira está no artigo 91: acabou o rateio automático do infrasseguro.</b> No <b>sinistro parcial</b>, a indenização <b>não será objeto de rateio</b> por o seguro ter sido contratado por valor inferior ao do interesse, <b>salvo disposição em contrário</b>. Se o rateio for expressamente pactuado, a seguradora tem de <b>exemplificar na apólice a fórmula de cálculo</b>."},
        {t:"a", x:"Pare nesse artigo 91. Antes, quem segurava a menos sofria rateio proporcional por padrão. Agora o padrão inverteu: <b>sem cláusula expressa, não há rateio</b>. Alternativa que aplique rateio automático em sinistro parcial está errada."},
        {t:"p", x:"Sobre a <b>sub-rogação</b>, o artigo 94 acrescenta duas regras que caem: é <b>ineficaz qualquer ato do segurado</b> que diminua ou extinga a sub-rogação, e o segurado é <b>obrigado a colaborar</b> no exercício desse direito, respondendo pelos prejuízos que causar."},
        {t:"d", x:"<b>O suicídio continua com prazo, e o prazo continua sendo 2 anos, agora no artigo 120.</b> O beneficiário não tem direito ao capital se o suicídio voluntário ocorrer <b>antes de completados 2 anos</b> de vigência. E há um detalhe novo: se o segurado <b>aumentar o capital</b>, o beneficiário não terá direito à <b>quantia acrescida</b> se o suicídio ocorrer dentro do mesmo prazo contado do aumento."},
        {t:"a", x:"A regra do suicídio nunca foi sobre premeditação, é sobre <b>prazo</b>. Dentro de 2 anos não paga; depois paga. O que a lei nova acrescentou foi o prazo <b>recontado sobre o aumento de capital</b>."}
      ]
    },
    {
      id:"a5", peso:"alto", titulo:"Prescrição e os prazos da regulação de sinistro",
      blocos:[
        {t:"d", x:"<b>A prescrição saiu do Código Civil e virou o artigo 126 da Lei 15.040.</b> O prazo de 1 ano sobreviveu, mas <b>o marco inicial mudou</b>, e é isso que a banca vai cobrar."},
        {t:"tab", head:["Quem cobra","Prazo","Contado de"], rows:[
          ["<b>Seguradora</b> contra segurado ou estipulante (inclusive prêmio)","<b>1 ano</b>","Ciência do fato gerador"],
          ["<b>Corretor</b>, agente ou representante, para cobrar remuneração","<b>1 ano</b>","Ciência do fato gerador"],
          ["<b>Cosseguradoras entre si</b>; e entre seguradoras, resseguradoras e retrocessionárias","<b>1 ano</b>","Ciência do fato gerador"],
          ["<b>Segurado</b>, para exigir indenização, capital, reserva ou restituição de prêmio","<b>1 ano</b>","<b>Ciência da recepção da recusa expressa e motivada</b> da seguradora"],
          ["<b>Beneficiários</b> ou <b>terceiros prejudicados</b>","<b>3 anos</b>","Ciência do fato gerador"]
        ]},
        {t:"d", x:"<b>O ponto que decide a questão:</b> o prazo do segurado <b>não corre do sinistro</b>, e sim da <b>ciência da recusa expressa e motivada</b>. Enquanto a seguradora não recusa formalmente, o relógio do segurado não começa. Isso substitui, com outro desenho, a lógica da antiga Súmula 229 do STJ."},
        {t:"p", x:"A regra de bolso antiga continua servindo de apoio: <b>quem é parte do contrato</b> prescreve em <b>1 ano</b>; <b>quem está fora dele</b>, como beneficiário e terceiro prejudicado, prescreve em <b>3 anos</b>."},
        {t:"p", x:"E a lei fixou <b>prazos para a seguradora</b>, que antes eram matéria de circular:"},
        {t:"tab", head:["Artigo","Prazo","O que acontece"], rows:[
          ["<b>86</b>","<b>30 dias</b> para se manifestar sobre a cobertura","Contado da reclamação ou aviso de sinistro com todos os elementos. <b>Sob pena de decair do direito de recusar.</b>"],
          ["<b>87</b>","<b>30 dias</b> para pagar","Contado do reconhecimento da cobertura."]
        ]},
        {t:"d", x:"<b>O artigo 86 é a novidade mais forte da lei para o segurado.</b> Se a seguradora ficar em silêncio por 30 dias com o processo completo em mãos, ela <b>perde o direito de recusar</b> a cobertura. Não é multa, é decadência."},
        {t:"p", x:"Duas regras de regulação que completam o quadro: o <b>artigo 81</b> manda adotar, havendo dúvida sobre critérios e fórmulas, aqueles <b>mais favoráveis ao segurado</b>, vedado o enriquecimento sem causa; e o <b>artigo 82</b> declara o <b>relatório de regulação documento comum às partes</b>, que pelo artigo 83 deve ser entregue quando a cobertura for negada."},
        {t:"a", x:"Três trintas para não confundir: <b>30 dias</b> para a seguradora se manifestar (art. 86), <b>30 dias</b> para pagar depois de reconhecida a cobertura (art. 87) e <b>20 dias</b> para reagir ao agravamento do risco (art. 14)."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"O Sistema Nacional de Seguros Privados",
      blocos:[
        {t:"p", x:"Criado pelo <b>Decreto-Lei 73, de 1966</b>, o sistema tem composição definida no <b>artigo 8o</b>. A questão clássica pede quem o integra, e a redação mudou duas vezes."},
        {t:"tab", head:["Artigo 8o","Quem é","Observação"], rows:[
          ["<b>a</b>","<b>CNSP</b>, Conselho Nacional de Seguros Privados","Órgão normativo. Edita <b>Resoluções</b>."],
          ["<b>b</b>","<b>SUSEP</b>, Superintendência de Seguros Privados","Autarquia executora e fiscalizadora. Edita <b>Circulares</b>."],
          ["<b>c</b>","<b>os resseguradores</b>","Redação dada pela <b>Lei Complementar 126, de 2007</b>."],
          ["<b>d</b>","<b>as instituições autorizadas a operar</b> nos mercados de seguros privados e de <b>proteção patrimonial mutualista</b>","Redação dada pela <b>Lei Complementar 213, de 2025</b>."],
          ["<b>e</b>","<b>os corretores habilitados</b>","Você, depois da prova."]
        ]},
        {t:"d", x:"<b>Duas atualizações que material antigo não tem.</b> Primeira: a alínea c dizia <b>IRB</b>, e desde a Lei Complementar 126/2007 diz apenas <b>resseguradores</b>. O IRB deixou de ser órgão do sistema e virou uma resseguradora entre outras. Segunda: a alínea d falava em <b>sociedades seguradoras</b> e desde 2025 fala em <b>instituições autorizadas a operar nos mercados de seguros privados e de proteção patrimonial mutualista</b>."},
        {t:"p", x:"A <b>composição do CNSP</b> está no artigo 33, e também mudou. Hoje são <b>cinco</b> membros:"},
        {t:"tab", head:["Inciso","Membro"], rows:[
          ["I","<b>Ministro de Estado da Fazenda</b>, ou seu representante"],
          ["II","Representante do <b>Ministério da Justiça</b>"],
          ["III","Representante do <b>Ministério da Previdência</b>"],
          ["IV","<b>Superintendente da SUSEP</b>"],
          ["V","Representante do <b>Banco Central do Brasil</b>"],
          ["<s>VI</s>","<s>Representante da CVM</s> <b>REVOGADO</b> pela Lei 14.711, de 2023"]
        ]},
        {t:"d", x:"<b>Quem preside:</b> o CNSP é presidido pelo <b>Ministro de Estado da Fazenda</b> e, na ausência dele, pelo <b>Superintendente da SUSEP</b>. Guarde os dois nomes: presidente e substituto. E note que a <b>CVM saiu em 2023</b>, então alternativa que a inclua está errada, mesmo que a apostila ainda a liste."},
        {t:"p", x:"A divisão de trabalho entre os dois órgãos é o outro eixo de questão:"},
        {t:"tab", head:["CNSP: normatiza","SUSEP: executa e fiscaliza"], rows:[
          ["Fixa diretrizes da política de seguros","Autoriza a constituição e o funcionamento das sociedades"],
          ["Regula a constituição, organização e funcionamento","Fiscaliza as operações e a <b>solvência</b>"],
          ["Fixa as <b>características gerais</b> dos contratos","Aprova <b>limites de operação</b> e autoriza movimentação de ativos garantidores"],
          ["Disciplina a <b>corretagem</b> e a profissão de corretor","Procede à <b>liquidação</b> das sociedades"]
        ]},
        {t:"p", x:"O sistema não cuida só de seguro. As <b>entidades abertas de previdência complementar</b> e as <b>sociedades de capitalização</b> também são normatizadas pelo CNSP e fiscalizadas pela SUSEP, por força da legislação própria de cada uma. Por isso o programa da disciplina se chama Sistema Nacional de Regulação, Supervisão e Fiscalização de Seguros Privados, de <b>Previdência Complementar Aberta</b>, <b>Capitalização</b> e <b>Corretagem</b>."},
        {t:"a", x:"⚠️ Não confunda com a <b>PREVIC</b>: ela fiscaliza a previdência complementar <b>fechada</b>, os fundos de pensão, e está fora do sistema da SUSEP. Aberta é SUSEP, fechada é PREVIC. É distrator garantido."},
        {t:"a", x:"A SUSEP <b>não julga sinistro</b> e não obriga seguradora a pagar indenização a um segurado específico. Ela fiscaliza a conduta e pode punir a seguradora, mas quem decide o pagamento é o Judiciário. Questão que coloca a SUSEP condenando a seguradora a indenizar está errada."}
      ]
    },
    {
      id:"a7", peso:"alto", titulo:"O corretor de seguros: registro e impedimentos",
      blocos:[
        {t:"p", x:"A profissão é regida pela <b>Lei 4.594, de 1964</b>, e o registro pela <b>Circular SUSEP 510/2015</b>. Esta é a parte da prova que fala diretamente do que você vai ser, e é a que mais rende questão decorada."},
        {t:"l", x:[
          "<b>Definição:</b> intermediário legalmente autorizado a angariar e promover contratos de seguro entre as seguradoras e as pessoas físicas ou jurídicas de direito privado.",
          "<b>Natureza:</b> pessoa física ou jurídica, profissional autônomo. <b>Não é empregado nem preposto da seguradora.</b>",
          "<b>Habilitação:</b> aprovação em exame <b>ou</b> curso de habilitação, mais registro na SUSEP.",
          "<b>Remuneração:</b> comissão de corretagem, que só pode ser paga a corretor habilitado e registrado.",
          "<b>Responsabilidade:</b> responde civilmente perante segurados e seguradoras pelos prejuízos causados por <b>omissão, imperícia ou negligência</b>."
        ]},
        {t:"p", x:"Os <b>requisitos para o registro</b> formam lista fechada, e a banca gosta de inventar um a mais ou tirar um:"},
        {t:"tab", head:["#","Requisito"], rows:[
          ["I","Ser brasileiro, ou estrangeiro com <b>residência permanente</b> no País."],
          ["II","Estar quite com o <b>serviço militar</b> e a <b>justiça eleitoral</b>, sendo brasileiro entre 18 e 45 anos."],
          ["III","Não haver sido <b>condenado</b> pelos crimes que a norma relaciona no Código Penal."],
          ["IV","<b>Não ser falido.</b>"],
          ["V","<b>Não exercer cargo ou emprego</b> em pessoa jurídica de Direito Público."],
          ["VI","Não manter relação de <b>emprego ou de direção</b> com sociedade seguradora."]
        ]},
        {t:"p", x:"Antes disso tudo vem um requisito de entrada: a <b>Resolução CNSP 249/2012, artigo 6o</b>, exige comprovação prévia de <b>conclusão do ensino médio</b> para se inscrever no exame ou no curso de habilitação."},
        {t:"d", x:"<b>Os impedimentos, no artigo 17 da Lei 4.594/1964 e no artigo 125 do Decreto-Lei 73/1966.</b> É vedado ao corretor <b>e aos seus prepostos</b>: aceitar ou exercer emprego de pessoa jurídica de Direito Público, <b>inclusive de entidade paraestatal</b>; e ser sócio, administrador, procurador, despachante ou empregado de empresa de seguros."},
        {t:"d", x:"<b>O detalhe que decide a questão difícil:</b> o parágrafo único diz que esses impedimentos são <b>extensivos aos sócios e diretores de empresas de corretagem</b>. Não basta o corretor pessoa física estar limpo: quem está no comando da corretora também está impedido."},
        {t:"p", x:"A <b>Circular SUSEP 510/2015</b> dispõe sobre o registro do corretor de <b>seguros, de capitalização e de previdência</b>, pessoa física e jurídica. O parágrafo 2o do artigo 1o deixa expresso que ela se aplica ao corretor de seguros de pessoas, de capitalização e de previdência, físicos ou jurídicos. Uma norma de registro, três atividades."},
        {t:"p", x:"As <b>penalidades</b> aplicáveis pela SUSEP, em escala crescente: <b>multa</b>, <b>suspensão temporária</b> do exercício da profissão e <b>cancelamento do registro</b>."},
        {t:"a", x:"O corretor <b>representa o segurado</b>, não a seguradora, ainda que quem pague a comissão seja a seguradora. Questão que descreve o corretor como representante ou preposto da seguradora está errada, e essa é a pegadinha mais repetida da disciplina."},
        {t:"a", x:"Servidor público não pode ser corretor, e a vedação alcança <b>entidade paraestatal</b>. Se a questão colocar um empregado de autarquia ou de empresa pública se registrando como corretor, está errada."}
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
    },
    {
      id:"a9", peso:"alto", titulo:"Resseguro, cosseguro e retrocessão",
      blocos:[
        {t:"p", x:"Três palavras que a prova adora trocar entre si. A diferença está em <b>quem divide o risco com quem</b>."},
        {t:"tab", head:["Instituto","Quem divide","O segurado sabe?"], rows:[
          ["<b>Cosseguro</b>","<b>Duas ou mais seguradoras</b> dividem o mesmo risco, cada uma assumindo uma cota, numa <b>única apólice</b>.","<b>Sim.</b> A apólice indica as cosseguradoras e a cota de cada uma. Há uma <b>líder</b>, que administra o contrato."],
          ["<b>Resseguro</b>","A <b>seguradora</b> transfere parte do risco a um <b>ressegurador</b>.","<b>Não.</b> É contrato entre seguradora e ressegurador. O segurado continua com a seguradora."],
          ["<b>Retrocessão</b>","O <b>ressegurador</b> repassa parte do que aceitou a outro ressegurador.","Não. É o resseguro do resseguro."]
        ]},
        {t:"d", x:"<b>A regra de ouro:</b> no <b>cosseguro</b> o segurado tem relação com todas as seguradoras; no <b>resseguro</b> ele não tem nenhuma relação com o ressegurador. Alternativa que der ao segurado ação direta contra o ressegurador está errada, salvo a hipótese excepcional de insolvência prevista em lei."},
        {t:"p", x:"O mercado de resseguro foi <b>monopólio do IRB</b> por décadas. A <b>Lei Complementar 126, de 15 de janeiro de 2007</b>, abriu o mercado e criou <b>três categorias de ressegurador</b>:"},
        {t:"tab", head:["Categoria","Onde tem sede","Escritório no Brasil"], rows:[
          ["<b>Local</b>","Sediado <b>no País</b>, constituído como sociedade anônima com objeto exclusivo de resseguro e retrocessão.","É empresa brasileira."],
          ["<b>Admitido</b>","Sede <b>no exterior</b>, com <b>escritório de representação</b> no País, registrado na SUSEP.","<b>Sim.</b>"],
          ["<b>Eventual</b>","Sede <b>no exterior</b>, <b>sem</b> escritório de representação, apenas cadastrado na SUSEP.","<b>Não.</b>"]
        ]},
        {t:"d", x:"<b>O que separa admitido de eventual é uma coisa só: o escritório de representação no Brasil.</b> Admitido tem, eventual não tem. Guarde por aí e você acerta a questão."},
        {t:"p", x:"Os requisitos mínimos para admitido e eventual: estar constituído segundo a lei do país de origem para subscrever resseguro <b>local e internacional</b> nos ramos pretendidos, tendo <b>iniciado essas operações há mais de 5 anos</b>; ter capacidade econômica e financeira não inferior ao mínimo fixado; e possuir <b>classificação de solvência</b> de agência reconhecida, igual ou superior ao mínimo exigido. O <b>admitido</b> ainda mantém conta em moeda estrangeira vinculada à SUSEP e apresenta demonstrações financeiras periódicas."},
        {t:"a", x:"Depois da abertura, o <b>IRB deixou de integrar o Sistema Nacional de Seguros Privados como órgão</b>. A alínea c do artigo 8o passou a dizer apenas <b>resseguradores</b>. Material antigo ainda escreve IRB ali, e isso hoje está errado."},
        {t:"a", x:"Não confunda resseguro com <b>cosseguro</b> nem com <b>seguro em grupo</b>. Grupo é um contrato coletivo com vários segurados; cosseguro é um risco com várias seguradoras."}
      ]
    },
    {
      id:"a10", peso:"alto", titulo:"O Código de Defesa do Consumidor: prazos e ônus da prova",
      blocos:[
        {t:"p", x:"A aula 8 deu os princípios. Esta dá o que a banca cobra: <b>números e quem prova o quê</b>."},
        {t:"p", x:"O enquadramento vem do <b>artigo 3o, parágrafo 2o</b>, que define serviço como qualquer atividade fornecida no mercado mediante remuneração, <b>inclusive as de natureza bancária, financeira, de crédito e securitária</b>. O seguro está expressamente lá."},
        {t:"tab", head:["Prazo","Quanto","Natureza"], rows:[
          ["<b>Vício</b> de produto ou serviço <b>não durável</b> (art. 26, I)","<b>30 dias</b>","Decadência"],
          ["<b>Vício</b> de produto ou serviço <b>durável</b> (art. 26, II)","<b>90 dias</b>","Decadência"],
          ["Reparação por <b>fato</b> do produto ou serviço (art. 27)","<b>5 anos</b>","Prescrição"],
          ["<b>Segurado</b> contra seguradora (<b>Lei 15.040, art. 126, II</b>)","<b>1 ano</b> da recusa","Prescrição"]
        ]},
        {t:"d", x:"<b>O conflito de prazos continua existindo, mas mudou de fundamento.</b> Antes se dizia prazo ânuo do Código Civil, apoiado na Súmula 101 do STJ. Hoje o prazo de 1 ano é da <b>lei própria do seguro</b>, o artigo 126, II, da Lei 15.040, e conta <b>da recusa</b>, não do sinistro. Os 5 anos do artigo 27 do CDC seguem valendo para reparação por <b>fato</b> do serviço, que é outra coisa."},
        {t:"a", x:"Se a questão citar a <b>Súmula 101 do STJ</b>, ela se apoiava no artigo 206 do Código Civil, que foi <b>revogado</b>. Para contratos novos, o fundamento correto é o artigo 126 da Lei 15.040. Para apólice antiga, a súmula ainda tem serventia."},
        {t:"p", x:"Sobre o <b>contrato de adesão</b>, o artigo 54 traz duas exigências de forma que caem juntas:"},
        {t:"l", x:[
          "<b>Parágrafo 3o:</b> redação em termos claros, com caracteres ostensivos e legíveis, cujo tamanho da fonte <b>não será inferior ao corpo doze</b>.",
          "<b>Parágrafo 4o:</b> as cláusulas que implicarem <b>limitação de direito</b> do consumidor deverão ser redigidas <b>com destaque</b>, permitindo sua imediata e fácil compreensão."
        ]},
        {t:"d", x:"<b>A inversão do ônus da prova</b> está no <b>artigo 6o, inciso VIII</b>, e não é automática: depende de decisão do <b>juiz</b>, quando for <b>verossímil a alegação</b> <b>ou</b> quando o consumidor for <b>hipossuficiente</b>. A conjunção é <b>ou</b>, não <b>e</b>."},
        {t:"p", x:"A responsabilidade do fornecedor por fato do serviço é <b>objetiva</b>: independe de culpa, bastando defeito, dano e nexo. As excludentes são a inexistência do defeito e a <b>culpa exclusiva</b> do consumidor ou de terceiro."},
        {t:"a", x:"<b>Culpa concorrente não exclui</b> a responsabilidade, nem no CDC nem na LGPD. Só a culpa <b>exclusiva</b> quebra o nexo, e esse padrão se repete nas três leis."}
      ]
    }
  ],

  flashcards: [
    {id:"c1", peso:"alto", p:"Qual lei rege o contrato de seguro hoje?", r:"A <b>Lei 15.040, de 09/12/2024</b>, em vigor desde <b>11/12/2025</b>. Ela revogou os artigos <b>757 a 802 do Código Civil</b>. Contrato firmado até 10/12/2025 ainda segue o Código Civil."},
    {id:"c2", peso:"alto", p:"O que diz o artigo 1o da Lei 15.040?", r:"A <b>seguradora</b> obriga-se, mediante pagamento do <b>prêmio equivalente</b>, a garantir <b>interesse legítimo</b> do segurado <b>ou do beneficiário</b> contra <b>riscos predeterminados</b>."},
    {id:"c3", peso:"alto", p:"Liste as características do contrato de seguro.", r:"<b>Bilateral, oneroso, aleatório, consensual, de adesão e de boa-fé.</b>"},
    {id:"c4", peso:"alto", p:"A apólice cria o contrato de seguro?", r:"Não. O contrato é <b>consensual</b>, forma-se pelo acordo de vontades. Pelo <b>artigo 55</b>, a seguradora tem até <b>30 dias da aceitação</b> para entregar o <b>documento probatório</b> do contrato."},
    {id:"c5", peso:"medio", p:"Em quanto tempo a seguradora deve entregar o documento probatório do contrato?", r:"Até <b>30 dias contados da aceitação</b> (artigo 55). O documento traz a qualificação da seguradora, o nome do segurado e os demais elementos que a lei lista."},
    {id:"c6", peso:"alto", p:"Artigo 11: qual o efeito de contratar sabendo que o risco é impossível ou já ocorreu?", r:"O contrato é <b>nulo</b>, e a parte que sabia e mesmo assim contratou paga à outra <b>o dobro do valor do prêmio</b>."},
    {id:"c7", peso:"alto", p:"Artigo 20: qual o efeito da mora no pagamento do prêmio?", r:"<b>Primeira parcela ou prestação única:</b> resolve o contrato <b>de pleno direito</b>. <b>Demais parcelas:</b> apenas <b>SUSPENDE a garantia</b>, e só <b>após notificação</b> concedendo prazo ao segurado."},
    {id:"c8", peso:"alto", p:"Artigo 44: qual a diferença entre descumprir o dever de informar com DOLO e com CULPA?", r:"<b>Doloso:</b> <b>perda da garantia</b>, mais a dívida de prêmio e o ressarcimento das despesas. <b>Culposo:</b> <b>redução da garantia proporcional</b> à diferença entre o prêmio pago e o devido. Se a garantia for tecnicamente impossível, o contrato é <b>extinto</b>."},
    {id:"c9", peso:"alto", p:"Artigo 13: o que acontece se o segurado agrava o risco?", r:"<b>Perde a garantia</b>, se o agravamento for <b>intencional e relevante</b>. Relevante é o que aumenta de forma <b>significativa e continuada</b> a probabilidade do risco descrito no questionário."},
    {id:"c10", peso:"alto", p:"Artigo 66: quais os deveres do segurado ao tomar ciência do sinistro?", r:"<b>Tomar as providências</b> necessárias e úteis para evitar ou minorar os efeitos, e <b>avisar prontamente</b> a seguradora por meio idôneo, seguindo suas instruções."},
    {id:"c11", peso:"alto", p:"Artigo 91: no sinistro parcial, há rateio quando o seguro foi contratado por valor inferior ao interesse?", r:"<b>Não, salvo disposição em contrário.</b> O rateio deixou de ser automático. Se for pactuado, a seguradora tem de <b>exemplificar na apólice a fórmula de cálculo</b>."},
    {id:"c12", peso:"alto", p:"Artigo 112: quem define o capital nos seguros sobre a vida e a integridade física?", r:"O <b>proponente</b>, livremente. E ele <b>pode contratar mais de um seguro</b> sobre o mesmo interesse, com a mesma ou com diversas seguradoras."},
    {id:"c13", peso:"alto", p:"Em que tipo de seguro existe sub-rogação?", r:"Só no <b>seguro de dano</b> (artigo 94). Nos seguros sobre a vida e a integridade física <b>não há</b>. É <b>ineficaz</b> qualquer ato do segurado que diminua ou extinga a sub-rogação."},
    {id:"c14", peso:"medio", p:"Artigo 115: não havendo beneficiário indicado, a quem se paga o capital?", r:"<b>Metade ao cônjuge</b>, se houver, e <b>o restante aos demais herdeiros</b>. A indicação é ineficaz se o beneficiário falecer antes da ocorrência do sinistro."},
    {id:"c15", peso:"alto", p:"Artigo 116: o capital do seguro de vida entra no inventário?", r:"<b>Não é considerado herança para nenhum efeito.</b> A regra se estende à garantia de risco de morte do participante em planos de previdência complementar."},
    {id:"c16", peso:"alto", p:"Artigo 120: qual a regra do suicídio no seguro de vida?", r:"Sem direito ao capital se o suicídio voluntário ocorrer <b>antes de completados 2 anos</b> de vigência. Se o segurado <b>aumentou o capital</b>, a quantia acrescida tem prazo próprio, contado do aumento."},
    {id:"c17", peso:"medio", p:"Artigos 98 e 100: o que o seguro de responsabilidade civil garante, e o que o segurado não deve fazer?", r:"Garante o interesse do segurado contra os efeitos da <b>imputação de responsabilidade</b> e o dos <b>terceiros prejudicados</b> à indenização. O responsável que <b>não colaborar</b> com a seguradora ou <b>praticar atos em detrimento dela</b> responde por isso."},
    {id:"c18", peso:"alto", p:"Prazo de prescrição do segurado contra o segurador?", r:"<b>1 ano.</b>"},
    {id:"c19", peso:"alto", p:"Prazo de prescrição do beneficiário e do terceiro prejudicado contra o segurador?", r:"<b>3 anos.</b> A regra de bolso: quem é parte do contrato tem 1 ano, quem está fora tem 3."},
    {id:"c20", peso:"medio", p:"Artigo 86: o que acontece se a seguradora ficar em silêncio sobre a cobertura?", r:"Ela tem <b>30 dias</b> para se manifestar, contados da reclamação ou aviso com todos os elementos, <b>sob pena de decair do direito de recusar</b> a cobertura. Reconhecida a cobertura, tem mais <b>30 dias para pagar</b> (artigo 87)."},
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
    {id:"c33", peso:"baixo", p:"Qual norma trata do resseguro e da abertura daquele mercado?", r:"A <b>Lei Complementar 126, de 2007</b>."},
    {id:"c34", peso:"alto", p:"Quem constitui o Sistema Nacional de Seguros Privados (artigo 8o)?", r:"<b>CNSP</b>, <b>SUSEP</b>, os <b>resseguradores</b>, as <b>instituições autorizadas a operar</b> nos mercados de seguros privados e de proteção patrimonial mutualista, e os <b>corretores habilitados</b>."},
    {id:"c35", peso:"alto", p:"O IRB ainda integra o Sistema Nacional de Seguros Privados?", r:"<b>Não.</b> A Lei Complementar 126/2007 trocou a alínea c de IRB para <b>resseguradores</b>. Material antigo ainda escreve IRB ali."},
    {id:"c36", peso:"alto", p:"Quantos e quais são os membros do CNSP hoje?", r:"<b>Cinco</b>: Ministro da Fazenda, representante do Ministério da Justiça, representante do Ministério da Previdência, Superintendente da SUSEP e representante do Banco Central. O representante da <b>CVM foi revogado</b> pela Lei 14.711/2023."},
    {id:"c37", peso:"alto", p:"Quem preside o CNSP, e quem substitui na ausência?", r:"Preside o <b>Ministro de Estado da Fazenda</b>. Na ausência dele, o <b>Superintendente da SUSEP</b>."},
    {id:"c38", peso:"alto", p:"CNSP edita o quê? E a SUSEP?", r:"CNSP edita <b>Resoluções</b> e normatiza. SUSEP edita <b>Circulares</b>, executa e fiscaliza."},
    {id:"c39", peso:"alto", p:"Previdência complementar aberta e fechada: quem fiscaliza cada uma?", r:"<b>Aberta é SUSEP.</b> <b>Fechada</b>, os fundos de pensão, é <b>PREVIC</b>. Distrator garantido."},
    {id:"c40", peso:"alto", p:"Liste os requisitos para o registro de corretor.", r:"Residência permanente no País; quite com <b>serviço militar</b> e <b>justiça eleitoral</b> (18 a 45 anos); não ter <b>condenação</b> pelos crimes relacionados; <b>não ser falido</b>; não exercer cargo em <b>pessoa jurídica de Direito Público</b>; não ter <b>emprego ou direção</b> em sociedade seguradora."},
    {id:"c41", peso:"alto", p:"A quem se estendem os impedimentos do corretor?", r:"Aos <b>prepostos</b> e, pelo parágrafo único, aos <b>sócios e diretores de empresas de corretagem</b>. Não basta o corretor pessoa física estar limpo."},
    {id:"c42", peso:"medio", p:"Qual a escolaridade mínima para se inscrever no exame?", r:"<b>Ensino médio</b> concluído, por exigência do artigo 6o da <b>Resolução CNSP 249/2012</b>."},
    {id:"c43", peso:"alto", p:"Diferencie cosseguro, resseguro e retrocessão.", r:"<b>Cosseguro</b>: várias seguradoras dividem o mesmo risco numa única apólice, e o segurado sabe. <b>Resseguro</b>: a seguradora repassa risco ao ressegurador, e o segurado não tem relação com ele. <b>Retrocessão</b>: o ressegurador repassa a outro ressegurador."},
    {id:"c44", peso:"alto", p:"Quais as três categorias de ressegurador?", r:"<b>Local</b> (sede no País, objeto exclusivo), <b>Admitido</b> (sede no exterior <b>com</b> escritório de representação no Brasil) e <b>Eventual</b> (sede no exterior <b>sem</b> escritório)."},
    {id:"c45", peso:"alto", p:"O que separa ressegurador admitido de eventual?", r:"Uma coisa só: o <b>escritório de representação no Brasil</b>. Admitido tem, eventual não tem."},
    {id:"c46", peso:"alto", p:"Prazo para o segurado exigir a indenização: quanto, e contado de quando?", r:"<b>1 ano</b>, pelo <b>artigo 126, II</b> da Lei 15.040, contado da <b>ciência da recepção da recusa expressa e motivada</b> da seguradora. <b>Não conta do sinistro.</b> Beneficiários e terceiros prejudicados têm <b>3 anos</b>."},
    {id:"c47", peso:"alto", p:"Quais os prazos de decadência do artigo 26 do CDC?", r:"<b>30 dias</b> para produto ou serviço <b>não durável</b> e <b>90 dias</b> para <b>durável</b>. São decadenciais, não prescricionais."},
    {id:"c48", peso:"alto", p:"Quando o juiz pode inverter o ônus da prova no CDC?", r:"Artigo 6o, VIII: quando for <b>verossímil a alegação</b> <b>OU</b> quando o consumidor for <b>hipossuficiente</b>. É <b>ou</b>, não <b>e</b>, e depende de decisão do juiz."},
    {id:"c49", peso:"medio", p:"Qual o tamanho mínimo de fonte no contrato de adesão?", r:"<b>Corpo doze</b> (artigo 54, parágrafo 3o). E as cláusulas que limitam direito vão <b>com destaque</b> (parágrafo 4o)."},
    {id:"c50", peso:"medio", p:"Culpa concorrente do consumidor exclui a responsabilidade do fornecedor?", r:"<b>Não.</b> Só a <b>culpa exclusiva</b> do consumidor ou de terceiro. Mesmo raciocínio da LGPD."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"Segundo o artigo 1o da Lei 15.040/2024, pelo contrato de seguro a seguradora obriga-se, mediante o pagamento do prêmio equivalente, a garantir:",
     alts:["Interesse legítimo do segurado ou do beneficiário contra riscos predeterminados.","Qualquer prejuízo sofrido pelo segurado durante a vigência.","O valor de mercado do bem, independentemente de previsão contratual.","A recomposição integral do patrimônio do segurado, sem limite de valor."],
     correta:0,
     explicacao:"O artigo 1o exige interesse legítimo, riscos predeterminados e o pagamento do prêmio equivalente, e estendeu a proteção ao beneficiário, e não apenas ao segurado. Não existe garantia genérica contra qualquer prejuízo.",
     erro:"Artigo 1o da Lei 15.040: interesse legítimo do segurado OU DO BENEFICIÁRIO, contra riscos predeterminados."},

    {id:"q2", peso:"alto",
     enunciado:"O segurado descumpriu culposamente o dever de informar no questionário de avaliação de risco, o que influiu na taxa do prêmio. Nos termos do artigo 44 da Lei 15.040/2024, a consequência é:",
     alts:["A perda integral da garantia, com obrigação de pagar o prêmio vencido.","A nulidade automática do contrato, sem devolução de valores.","A redução da garantia proporcionalmente à diferença entre o prêmio pago e o que seria devido.","Nenhuma, pois só o descumprimento doloso produz efeitos."],
     correta:2,
     explicacao:"O artigo 44 separa os cenários pela intenção. O descumprimento doloso importa perda da garantia, mais a dívida de prêmio e o ressarcimento de despesas. O culposo implica redução proporcional da garantia. E se a garantia for tecnicamente impossível diante dos fatos não revelados, o contrato é extinto.",
     erro:"Art. 44: DOLOSO perde a garantia; CULPOSO reduz a garantia proporcionalmente."},

    {id:"q3", peso:"alto",
     enunciado:"Sobre os seguros sobre a vida e a integridade física na Lei 15.040/2024, é correto afirmar que:",
     alts:["O capital é limitado ao valor comprovado do interesse do proponente.","É vedada a contratação de mais de um seguro sobre o mesmo interesse.","A seguradora sub-roga-se nos direitos do beneficiário contra o causador do dano.","O capital é livremente estipulado pelo proponente, que pode contratar mais de um seguro sobre o mesmo interesse."],
     correta:3,
     explicacao:"O artigo 112 assegura a livre estipulação do capital e permite a contratação de mais de um seguro sobre o mesmo interesse, com a mesma ou com diversas seguradoras. A sub-rogação existe apenas nos seguros de dano, pelo artigo 94.",
     erro:"Art. 112: capital LIVRE e vários seguros permitidos. Sub-rogação só em seguro de DANO."},

    {id:"q4", peso:"alto",
     enunciado:"Segurado contrata seguro de vida e, no vigésimo mês de vigência, comete suicídio voluntário. Nos termos do artigo 120 da Lei 15.040/2024, o beneficiário:",
     alts:["Terá direito ao capital, desde que prove ausência de premeditação.","Não terá direito ao capital, por não terem se completado 2 anos de vigência.","Terá direito a metade do capital, a título de reserva.","Não terá direito a nada, nem à devolução de valores, em qualquer hipótese."],
     correta:1,
     explicacao:"O critério é objetivo e temporal: dentro dos 2 primeiros anos de vigência não há direito ao capital, independentemente de prova sobre premeditação. Há ainda a regra do parágrafo, que reconta o prazo sobre a quantia acrescida quando o segurado aumenta o capital.",
     erro:"Suicídio: critério é PRAZO de 2 anos, não premeditação. Art. 120."},

    {id:"q5", peso:"alto",
     enunciado:"Os prazos prescricionais da pretensão do segurado contra o segurador e do terceiro prejudicado em seguro de responsabilidade civil obrigatório são, respectivamente:",
     alts:["3 anos e 1 ano.","1 ano e 1 ano.","1 ano e 3 anos.","5 anos e 3 anos."],
     correta:2,
     explicacao:"Quem é parte do contrato prescreve em 1 ano. Quem está fora do contrato, como o terceiro prejudicado e o beneficiário, prescreve em 3 anos.",
     erro:"Prescrição: parte do contrato 1 ano, terceiro e beneficiário 3 anos."},

    {id:"q6", peso:"alto",
     enunciado:"O corretor de seguros, nos termos da Lei 4.594 de 1964, e:",
     alts:["Intermediário legalmente autorizado a angariar e promover contratos de seguro, atuando de forma autônoma.","Preposto da sociedade seguradora, a quem representa perante o segurado.","Empregado da seguradora, remunerado por comissão.","Servidor delegado da SUSEP para fiscalizar contratos de seguro."],
     correta:0,
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
     alts:["Fixar as diretrizes e normas da política de seguros privados.","Editar Resoluções disciplinando as características gerais dos contratos.","Julgar recursos de segurados sobre negativa de sinistro, determinando o pagamento.","Autorizar a constituição e o funcionamento das sociedades seguradoras e fiscalizar suas operações."],
     correta:3,
     explicacao:"Fixar diretrizes e editar Resoluções é do CNSP. Determinar pagamento de sinistro específico é do Judiciário. A SUSEP autoriza, fiscaliza, pune administrativamente e liquida sociedades.",
     erro:"SUSEP autoriza e fiscaliza. CNSP fixa diretrizes e edita Resolução. Sinistro específico é do Judiciário."},

    {id:"q9", peso:"medio",
     enunciado:"Assinale a alternativa correta sobre a formação e a prova do contrato de seguro:",
     alts:["O contrato somente se forma com a emissão da apólice pela seguradora.","O contrato é consensual, e a seguradora tem até 30 dias da aceitação para entregar o documento probatório.","O contrato é solene, exigindo instrumento público para sua validade.","A ausência do documento probatório torna o contrato inexistente."],
     correta:1,
     explicacao:"O contrato de seguro é consensual: forma-se pelo acordo de vontades e já existe antes de qualquer documento. O artigo 55 impõe à seguradora o dever de entregar o documento probatório do contrato em até 30 dias contados da aceitação, com os elementos que a lei relaciona.",
     erro:"Consensual. E o documento probatório vem em até 30 dias da aceitação (art. 55)."},

    {id:"q10", peso:"alto",
     enunciado:"Ao tomar ciência do sinistro, são deveres do segurado previstos no artigo 66 da Lei 15.040/2024:",
     alts:["Aguardar a vistoria da seguradora antes de qualquer providência.","Comunicar o fato exclusivamente por escrito e com firma reconhecida.","Contratar perito independente às suas expensas antes de acionar a cobertura.","Tomar as providências para evitar ou minorar os efeitos e avisar prontamente a seguradora."],
     correta:3,
     explicacao:"O artigo 66 impõe ao segurado agir para evitar ou minorar os efeitos e avisar prontamente a seguradora, por qualquer meio idôneo, seguindo suas instruções. A lei não exige forma solene para o aviso, nem impõe perícia prévia por conta do segurado. E o artigo 67 coloca as despesas de contenção e salvamento por conta da seguradora, sem reduzir a garantia.",
     erro:"Art. 66: minorar os efeitos E avisar prontamente, por qualquer meio idôneo."},

    {id:"q11", peso:"medio",
     enunciado:"O segurado agrava intencionalmente e de forma relevante o risco garantido. Nos termos do artigo 13 da Lei 15.040/2024:",
     alts:["O segurado perde a garantia.","Nada ocorre, pois o risco integra a álea do contrato.","A seguradora poderá apenas cobrar diferença de prêmio, em qualquer modalidade.","O contrato é nulo desde a origem."],
     correta:0,
     explicacao:"O agravamento intencional e relevante acarreta a perda da garantia. Relevante é o agravamento que conduz ao aumento significativo e continuado da probabilidade de realização do risco. Atenção à exceção do artigo 17: nos seguros sobre a vida e a integridade física, mesmo havendo agravamento relevante, a seguradora somente pode cobrar a diferença de prêmio.",
     erro:"Art. 13: agravamento intencional e relevante = PERDE a garantia. Exceção do art. 17 em vida."},

    {id:"q12", peso:"medio",
     enunciado:"Nos seguros sobre a vida, não havendo indicação de beneficiário, o capital segurado será pago:",
     alts:["Integralmente ao cônjuge sobrevivente.","Integralmente ao espólio, para partilha no inventário.","Metade ao cônjuge, se houver, e o restante aos demais herdeiros do segurado.","À seguradora, que fica desobrigada do pagamento."],
     correta:2,
     explicacao:"O artigo 115 determina o pagamento por metade ao cônjuge, se houver, e o restante aos demais herdeiros. Note ainda o artigo 116: o capital devido em razão de morte não é considerado herança para nenhum efeito, o que afasta a ideia de partilha no inventário.",
     erro:"Art. 115: metade ao cônjuge, restante aos herdeiros. E o capital NÃO é herança (art. 116)."},

    {id:"q13", peso:"medio",
     enunciado:"Sobre a hierarquia das normas do mercado segurador, é correto afirmar:",
     alts:["Circular da SUSEP prevalece sobre Resolução do CNSP, por ser mais específica.","Resolução do CNSP pode contrariar o Código Civil, por regular materia técnica.","Resolução e Circular tem a mesma hierarquia, prevalecendo a mais recente.","Circular da SUSEP não pode contrariar Resolução do CNSP, e nenhuma delas contraria a lei."],
     correta:3,
     explicacao:"A ordem é lei, depois Resolução do CNSP, depois Circular da SUSEP. Norma inferior detalha a superior e não pode contrariá-la.",
     erro:"Hierarquia: lei, depois Resolução do CNSP, depois Circular da SUSEP."},

    {id:"q14", peso:"medio",
     enunciado:"No seguro de responsabilidade civil regido pela Lei 15.040/2024, o segurado que não colabora com a seguradora ou pratica atos em detrimento dela:",
     alts:["Nada sofre, pois a obrigação de defesa é exclusiva da seguradora.","Responde por isso, nos termos do artigo 100.","Tem direito a indenização em dobro, por quebra da boa-fé da seguradora.","Fica automaticamente sub-rogado nos direitos da seguradora."],
     correta:1,
     explicacao:"O artigo 98 define que o seguro de responsabilidade civil garante o interesse do segurado contra os efeitos da imputação de responsabilidade e também o dos terceiros prejudicados à indenização. O artigo 100 impõe consequência ao responsável garantido que não colabora com a seguradora ou pratica atos em detrimento dela.",
     erro:"Art. 100: não colaborar ou agir em detrimento da seguradora gera responsabilidade."},

    {id:"q15", peso:"medio",
     enunciado:"A aplicação do Código de Defesa do Consumidor ao contrato de seguro implica, entre outros efeitos:",
     alts:["A interpretação das cláusulas ambiguas em favor do segurador, que redigiu o contrato.","A dispensa do pagamento do prêmio em caso de duvida sobre a cobertura.","A interpretação mais favorável ao segurado e a exigência de destaque para cláusulas limitativas de direito.","A vedação de qualquer cláusula de exclusão de risco."],
     correta:2,
     explicacao:"Sendo contrato de adesão, a ambiguidade se resolve a favor de quem aderiu, e as cláusulas que limitam direito precisam de destaque que permita compreensão imediata. Exclusões continuam válidas, desde que claras e destacadas.",
     erro:"CDC no seguro: interpretação a favor do segurado e destaque nas cláusulas limitativas."},
{id:"q16", peso:"alto",
     enunciado:"Segundo o artigo 8o do Decreto-Lei 73/1966, com a redação vigente, integram o Sistema Nacional de Seguros Privados:",
     alts:["O CNSP, a SUSEP, os resseguradores, as instituições autorizadas a operar e os corretores habilitados.","O CNSP, a SUSEP, o IRB, as sociedades seguradoras e o Banco Central.","O CNSP, a SUSEP, a PREVIC, as seguradoras e os corretores habilitados.","Apenas o CNSP e a SUSEP, por serem os únicos órgãos públicos do sistema."],
     correta:0,
     explicacao:"A redação atual traz cinco alíneas: CNSP, SUSEP, resseguradores, instituições autorizadas a operar nos mercados de seguros privados e de proteção patrimonial mutualista, e corretores habilitados. O IRB saiu da alínea c em 2007, quando a Lei Complementar 126 abriu o resseguro. Banco Central e PREVIC nunca integraram o sistema.",
     erro:"Artigo 8o hoje: CNSP, SUSEP, RESSEGURADORES, instituições autorizadas e corretores. Sem IRB."},

    {id:"q17", peso:"alto",
     enunciado:"O Conselho Nacional de Seguros Privados é presidido:",
     alts:["Pelo Ministro de Estado da Fazenda e, na sua ausência, pelo Superintendente da SUSEP.","Pelo Superintendente da SUSEP, em caráter permanente.","Pelo Presidente do Banco Central do Brasil.","Por representante da Comissão de Valores Mobiliários, eleito pelos pares."],
     correta:0,
     explicacao:"O parágrafo 1o do artigo 33 do Decreto-Lei 73/1966 estabelece que o CNSP é presidido pelo Ministro de Estado da Fazenda e, na ausência dele, pelo Superintendente da SUSEP. Note ainda que o representante da CVM foi revogado da composição pela Lei 14.711/2023, de modo que hoje o colegiado tem cinco membros.",
     erro:"CNSP: preside o Ministro da Fazenda; substitui o Superintendente da SUSEP. CVM saiu em 2023."},

    {id:"q18", peso:"alto",
     enunciado:"Sobre os impedimentos ao exercício da profissão de corretor de seguros, é correto afirmar que:",
     alts:["Alcançam apenas o corretor pessoa física, não seus prepostos.","Não impedem o exercício de emprego em entidade paraestatal.","Permitem que o corretor seja procurador de sociedade seguradora, desde que sem remuneração.","Estendem-se aos prepostos e também aos sócios e diretores de empresas de corretagem."],
     correta:3,
     explicacao:"O artigo 17 da Lei 4.594/1964 e o artigo 125 do Decreto-Lei 73/1966 vedam ao corretor e aos seus prepostos aceitar ou exercer emprego de pessoa jurídica de Direito Público, inclusive de entidade paraestatal, e ser sócio, administrador, procurador, despachante ou empregado de empresa de seguros. O parágrafo único estende os impedimentos aos sócios e diretores de empresas de corretagem.",
     erro:"Impedimentos alcançam prepostos E sócios e diretores da corretora. Paraestatal está incluída."},

    {id:"q19", peso:"alto",
     enunciado:"Uma seguradora sediada no Brasil transfere parte do risco assumido a uma resseguradora com sede no exterior, que mantém escritório de representação no País. Essa resseguradora é classificada como:",
     alts:["Ressegurador local.","Ressegurador admitido.","Ressegurador eventual.","Cossegurador estrangeiro."],
     correta:1,
     explicacao:"A Lei Complementar 126/2007 define três categorias. Local é o sediado no País, com objeto exclusivo de resseguro e retrocessão. Admitido tem sede no exterior e escritório de representação no Brasil, registrado na SUSEP. Eventual tem sede no exterior sem escritório de representação. O que separa admitido de eventual é justamente o escritório.",
     erro:"COM escritório de representação = admitido. SEM = eventual."},

    {id:"q20", peso:"alto",
     enunciado:"O prazo para o segurado exigir judicialmente a indenização, na Lei 15.040/2024, é de:",
     alts:["5 anos, contados do sinistro, por aplicação do Código de Defesa do Consumidor.","3 anos, contados do sinistro, como todo terceiro interessado.","1 ano, contado da ciência da recepção da recusa expressa e motivada da seguradora.","10 anos, por ser o prazo geral do Código Civil."],
     correta:2,
     explicacao:"O artigo 126, II, mantém o prazo de um ano, mas mudou o marco inicial: ele corre da ciência da recepção da recusa expressa e motivada, e não do sinistro. Enquanto não houver recusa formal, o prazo do segurado não começa. Beneficiários e terceiros prejudicados têm 3 anos, contados da ciência do fato gerador, pelo inciso III.",
     erro:"Art. 126, II: 1 ano da RECUSA expressa e motivada, não do sinistro. Terceiros: 3 anos."},

    {id:"q21", peso:"medio",
     enunciado:"A inversão do ônus da prova em favor do consumidor, prevista no artigo 6o, VIII, do Código de Defesa do Consumidor:",
     alts:["É automática em toda demanda de consumo, independentemente de decisão judicial.","Exige, cumulativamente, verossimilhança da alegação e hipossuficiência do consumidor.","Depende de decisão do juiz e ocorre quando for verossímil a alegação ou quando o consumidor for hipossuficiente.","Não se aplica a contratos de seguro, por serem regidos pelo Código Civil."],
     correta:2,
     explicacao:"A inversão não é automática: depende de decisão do juiz, a seu critério, quando for verossímil a alegação ou quando o consumidor for hipossuficiente. Os requisitos são alternativos, ligados pela conjunção ou, e não cumulativos. E o CDC incide sobre o seguro, porque a atividade securitária consta expressamente do artigo 3o, parágrafo 2o.",
     erro:"Inversão: decisão do JUIZ, e verossimilhança OU hipossuficiência. Nunca as duas juntas."}
  ]
};

/* ETAPA 2 - Disciplina 5 de 20: Capitalização (10 questões, 1o dia)
   Base normativa: Decreto-Lei 261/1967 e Circular SUSEP 576/2018.
   Números conferidos na fonte em 27/08/2026, em duas bases de legislação. */

window.CONTEUDO["capitalizacao"] = {
  abertura: "Capitalização não é seguro e não é investimento, e a prova cobra exatamente isso. É um contrato próprio, com norma própria, e quase toda questão sai de um punhado de números da Circular SUSEP 576/2018. Vem logo depois de Matemática Financeira de propósito: o título capitaliza a juros compostos, e o que você acabou de aprender sobre montante e taxa real reaparece aqui inteiro.",

  aulas: [
    {
      id:"a1", peso:"alto", titulo:"O que é um título de capitalização, e o que ele não é",
      blocos:[
        {t:"p", x:"Título de capitalização é um <b>contrato</b> pelo qual o subscritor faz pagamentos a uma sociedade de capitalização e recebe, ao final do prazo, o <b>capital constituído</b> corrigido, tendo ainda o direito de concorrer a <b>sorteios</b> durante a vigência."},
        {t:"p", x:"A base legal é o <b>Decreto-Lei 261, de 28 de fevereiro de 1967</b>, que definiu a operação e submeteu as sociedades de capitalização ao <b>CNSP</b> e à <b>SUSEP</b>. A norma que rege os produtos hoje é a <b>Circular SUSEP 576, de 28 de agosto de 2018</b>, e é dela que sai a maioria das questões."},
        {t:"tab", head:["Capitalização não é","Por quê"], rows:[
          ["<b>Seguro</b>","Não há risco predeterminado nem indenização. Ninguém precisa sofrer sinistro para receber."],
          ["<b>Investimento</b>","Parte do pagamento vai para sorteio e carregamento, e não retorna. O produto não promete rentabilidade competitiva."],
          ["<b>Poupança</b>","A poupança devolve 100% mais rendimento desde o primeiro dia. O título tem carência, penalidade e quotas."],
          ["<b>Loteria</b>","O sorteio é acessório. O núcleo do contrato é a constituição de capital, que é restituível."]
        ]},
        {t:"d", x:"<b>A frase que resolve a questão conceitual:</b> quem compra título de capitalização está comprando <b>a devolução do próprio dinheiro no futuro, mais o direito de concorrer a sorteios</b>. O sorteio é o atrativo comercial; a capitalização é o contrato."},
        {t:"p", x:"O vocabulário oficial é cobrado com precisão. <b>Subscritor</b> é quem adquire o título e assume os pagamentos. <b>Titular</b> é quem detém os direitos, e pode ser outra pessoa, por cessão. <b>Sociedade de capitalização</b> é a empresa autorizada a emitir, e só ela pode."},
        {t:"a", x:"Cuidado com a troca subscritor e titular. Eles coincidem na maioria dos casos, mas a norma os separa justamente porque os direitos do título podem ser <b>cedidos</b>. É assim que funciona a modalidade Filantropia Premiável, em que o subscritor cede o direito de resgate a uma entidade beneficente."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"As três quotas: para onde vai cada real",
      blocos:[
        {t:"p", x:"Todo pagamento feito ao título é repartido em <b>três quotas</b>, e a soma delas é sempre <b>100%</b>. Entender essa divisão é o que permite responder metade das questões numéricas da disciplina."},
        {t:"tab", head:["Quota","Para onde vai","Volta para o cliente?"], rows:[
          ["<b>Quota de capitalização</b>","Constitui a <b>Provisão Matemática para Capitalização</b>. É o dinheiro que vira capital do titular.","<b>Sim.</b> É o que ele resgata."],
          ["<b>Quota de sorteio</b>","Custeia os prêmios dos sorteios da série.","Só para quem for sorteado."],
          ["<b>Quota de carregamento</b>","Cobre despesas: corretagem, colocação, administração e lucro da sociedade.","<b>Não.</b>"]
        ]},
        {t:"d", x:"<b>Os percentuais mínimos de quota de capitalização (Circular 576):</b> em <b>pagamento único</b>, no mínimo <b>70%</b> nas modalidades Tradicional e Instrumento de Garantia, e <b>50%</b> na modalidade Popular. Em <b>pagamentos mensais ou periódicos</b>, no mínimo <b>10% nos três primeiros meses</b> e <b>70% a partir do quarto mês</b>, sendo que a <b>média aritmética até o fim da vigência não pode ficar abaixo de 70%</b>."},
        {t:"a", x:"A regra dos três primeiros meses existe porque é ali que a corretagem é paga. Por isso, quem resgata cedo recebe muito pouco: nos primeiros meses, até 90% do que ele pagou foi para carregamento e sorteio. Essa é a explicação real por trás da fama do produto, e cai como questão aplicada."},
        {t:"p", x:"A norma <b>não fixa um teto direto para o carregamento</b>. Ela fixa o piso da capitalização, e o teto das outras duas quotas nasce por subtração: se a capitalização tem de ser no mínimo 70%, sobram no máximo <b>30% para sorteio e carregamento somados</b>."},
        {t:"a", x:"Essa inversão é um bom distrator de prova. Se a alternativa disser que a Circular limita a quota de carregamento a um percentual expresso, desconfie: o que a norma limita expressamente é o <b>mínimo da quota de capitalização</b>."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"As seis modalidades",
      blocos:[
        {t:"p", x:"A Circular 576 prevê <b>seis modalidades</b>, cada uma com anexo próprio. Decorar a lista e o traço distintivo de cada uma resolve pelo menos uma questão."},
        {t:"tab", head:["Modalidade","O que a define"], rows:[
          ["<b>Tradicional</b>","Restitui, ao final da vigência, <b>no mínimo o valor total dos pagamentos</b> efetuados. É a modalidade de referência."],
          ["<b>Instrumento de Garantia</b>","O título é dado em <b>garantia de obrigação assumida em contrato principal</b>. É o que garante aluguel."],
          ["<b>Compra-Programada</b>","O resgate pode ser convertido em <b>bem ou serviço</b>, por acordo com fornecedor. Também restitui no mínimo o total pago."],
          ["<b>Popular</b>","Foco no <b>sorteio</b>. Restitui, ao final, <b>valor inferior</b> ao total dos pagamentos. É a única que assume isso na definição."],
          ["<b>Incentivo</b>","Vinculado a <b>evento promocional</b> de caráter comercial. Quem contrata é a empresa promotora, que cede a participação nos sorteios."],
          ["<b>Filantropia Premiável</b>","O subscritor <b>cede o direito de resgate a entidade beneficente</b> certificada, ficando apenas com o direito ao sorteio."]
        ]},
        {t:"d", x:"<b>O percentual que separa as modalidades no resgate final:</b> Tradicional e Compra-Programada devolvem <b>no mínimo 100%</b> do total pago. Instrumento de Garantia devolve <b>no mínimo 95%</b>. Popular devolve <b>menos que 100%</b> por definição. Esse trio de números é questão pronta."},
        {t:"p", x:"A <b>taxa de juros efetiva real mensal mínima</b> também varia por modalidade: <b>0,35%</b> para Tradicional, Instrumento de Garantia e Compra-Programada; e <b>0,16%</b> para Popular, Incentivo e Filantropia Premiável."},
        {t:"a", x:"Repare no critério por trás dos dois grupos. Quem promete devolver o dinheiro inteiro remunera mais (0,35%); quem vende sorteio remunera menos (0,16%). Não é número solto, é consequência do desenho do produto."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"Vigência, carência e resgate",
      blocos:[
        {t:"p", x:"São três prazos diferentes, e a prova troca um pelo outro."},
        {t:"tab", head:["Prazo","O que é"], rows:[
          ["<b>Prazo de vigência</b>","Período entre o início e o fim da constituição do capital. É a vida do título."],
          ["<b>Prazo de pagamento</b>","Período em que o subscritor efetua os pagamentos. Pode ser menor que a vigência."],
          ["<b>Prazo de carência</b>","Período inicial em que o resgate <b>não pode</b> ser exigido."]
        ]},
        {t:"d", x:"<b>A carência tem teto: no máximo 24 meses</b>, contados do início de vigência, e <b>nunca pode ser superior ao prazo de vigência</b> do título. Ou seja, num título de 12 meses a carência não passa de 12."},
        {t:"a", x:"⚠️ <b>Ponto em que muito resumo erra:</b> a Circular 576 <b>não fixa um prazo mínimo geral de vigência</b>. Se você encontrar a afirmação de que todo título tem no mínimo 12 meses, trate como suspeita e confira na apostila da ENS antes de decorar. O prazo que a norma limita expressamente é o de <b>carência</b>, com teto de 24 meses."},
        {t:"p", x:"O <b>resgate antecipado</b>, feito antes do fim da vigência, sujeita o titular a receber apenas o saldo da provisão matemática, que nos primeiros meses é pequeno pela regra das quotas. Já o <b>resgate ao final</b> devolve o capital pelo percentual mínimo da modalidade, corrigido."},
        {t:"p", x:"O <b>pagamento do prêmio de sorteio</b> tem prazo próprio: <b>15 dias corridos</b> contados da entrega da documentação completa pelo contemplado."},
        {t:"a", x:"Guarde o par de números da disciplina: <b>24 meses</b> é o teto da carência, <b>15 dias corridos</b> é o prazo para pagar o sorteio. São os dois prazos que mais aparecem."}
      ]
    },
    {
      id:"a5", peso:"medio", titulo:"Sorteios: como a norma controla o atrativo",
      blocos:[
        {t:"p", x:"O sorteio é o que vende o produto, e por isso é o que a SUSEP mais vigia. As regras existem para garantir que o prêmio prometido seja pagável e que o sorteio seja honesto."},
        {t:"tab", head:["Regra","Conteúdo"], rows:[
          ["<b>Limite de exposição</b>","O somatório de todos os sorteios previstos, por série e em cada mês, deve ser <b>igual ou inferior a 10% do patrimônio líquido</b> auditado da sociedade."],
          ["<b>Aleatoriedade</b>","Exige-se parecer de auditoria atestando <b>aleatoriedade e equiprobabilidade</b>, além de sigilo do processo."],
          ["<b>Pagamento</b>","<b>15 dias corridos</b> após a entrega da documentação completa."],
          ["<b>Transparência</b>","Divulgação na internet, em até <b>90 dias</b>, do quantitativo de contemplados por sorteio."]
        ]},
        {t:"p", x:"O sorteio é organizado por <b>série</b>, que é o conjunto de títulos com as mesmas características comercializados num período. A probabilidade de contemplação é calculada dentro da série, não sobre a carteira inteira da sociedade."},
        {t:"d", x:"<b>O limite de 10% do patrimônio líquido é o coração da solvência aqui.</b> Ele impede que a sociedade prometa um prêmio que não consiga pagar. Se a questão falar em limite percentual em capitalização, na maior parte das vezes é este."},
        {t:"a", x:"Em títulos de pagamento único, os sorteios podem ocorrer <b>após o 12o mês</b>. É um detalhe que aparece pouco, mas quando aparece decide a questão."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"Título de capitalização como garantia de aluguel",
      blocos:[
        {t:"p", x:"Este tópico está <b>expressamente no conteúdo programático da ENS</b>, e não é acaso: é a aplicação comercial mais relevante da modalidade Instrumento de Garantia, e o corretor convive com ela."},
        {t:"p", x:"O <b>artigo 37 da Lei 8.245, de 1991</b>, a Lei do Inquilinato, lista as garantias admitidas na locação: <b>caução</b>, <b>fiança</b>, <b>seguro de fiança locatícia</b> e <b>cessão fiduciária de quotas de fundo de investimento</b>. O título de capitalização opera como <b>caução</b>, por ser bem móvel dado em garantia."},
        {t:"d", x:"<b>O parágrafo único do artigo 37 é questão certa:</b> é <b>vedada, sob pena de nulidade, mais de uma das modalidades de garantia num mesmo contrato de locação</b>. Ou seja, o locador escolhe uma. Não pode exigir fiador e título de capitalização ao mesmo tempo."},
        {t:"tab", head:["Garantia","Como funciona","Quem paga"], rows:[
          ["<b>Título de capitalização</b>","O inquilino compra o título e o dá em garantia. No fim da locação, se nada foi devido, ele resgata.","O inquilino, e o dinheiro volta para ele."],
          ["<b>Seguro de fiança locatícia</b>","Seguradora garante o pagamento ao locador em caso de inadimplência.","O inquilino paga prêmio, que <b>não volta</b>."],
          ["<b>Fiança</b>","Terceiro assume a obrigação subsidiária ou solidária.","Ninguém paga antecipado, mas exige fiador."],
          ["<b>Caução em dinheiro</b>","Depósito em caderneta de poupança, limitado a <b>3 meses de aluguel</b> (artigo 38).","O inquilino, e o dinheiro volta corrigido."]
        ]},
        {t:"a", x:"A comparação que cai: no <b>título de capitalização o dinheiro volta</b> ao inquilino ao fim da locação; no <b>seguro fiança o prêmio não volta</b>, porque ele comprou proteção, não constituiu capital. É a diferença entre capitalizar e transferir risco, que é o mesmo eixo da Teoria Geral do Seguro."}
      ]
    },
    {
      id:"a7", peso:"medio", titulo:"Provisões, fiscalização e o corretor",
      blocos:[
        {t:"p", x:"A sociedade de capitalização é obrigada a constituir <b>provisões técnicas</b>, que são o lastro contábil das obrigações assumidas. As que mais aparecem:"},
        {t:"tab", head:["Provisão","Cobre"], rows:[
          ["<b>Provisão Matemática para Capitalização</b>","O capital em formação dos títulos ativos."],
          ["<b>Provisão para Resgates</b>","Os valores já exigíveis, de títulos vencidos ou resgatados e ainda não pagos."],
          ["<b>Provisão para Sorteios a Realizar</b>","Os prêmios de sorteios ainda não ocorridos."],
          ["<b>Provisão para Sorteios a Pagar</b>","Os prêmios já sorteados e ainda não pagos ao contemplado."],
          ["<b>Provisão para Despesas Administrativas</b>","As despesas de administração dos títulos em vigor."]
        ]},
        {t:"d", x:"<b>Não confunda as duas de sorteio.</b> A <b>Realizar</b> é para sorteio que ainda vai acontecer. A <b>a Pagar</b> é para sorteio que já aconteceu e o contemplado ainda não recebeu. A troca dessas duas é distrator recorrente."},
        {t:"p", x:"Quem comercializa título de capitalização precisa de <b>registro na SUSEP como corretor de capitalização</b>, nos termos da <b>Circular SUSEP 510/2015</b>, que trata do registro do corretor de seguros, de capitalização e de previdência. É a mesma norma que você viu em Direito e Legislação."},
        {t:"a", x:"É por isso que Capitalização é o <b>1o dia</b> e é a modalidade que não exige aprovação anterior: ela é a porta de entrada da habilitação. Quem passa só nela já pode intermediar título de capitalização."}
      ]
    },
    {
      id:"a8", peso:"medio", titulo:"A conta do título: onde a Matemática Financeira reaparece",
      blocos:[
        {t:"p", x:"Esta aula amarra a disciplina na anterior. O capital do título cresce por <b>juros compostos</b>, aplicados sobre a parcela capitalizada, e ainda leva <b>atualização por índice</b>."},
        {t:"p", x:"O caminho de um pagamento único é este: do valor pago, aplica-se a <b>quota de capitalização</b>; sobre esse valor incide a <b>atualização monetária</b> pelo índice previsto nas condições gerais; e sobre o valor atualizado incide a <b>taxa de juros efetiva real</b> da modalidade."},
        {t:"d", x:"<b>Exemplo de prova.</b> Título Tradicional de pagamento único, R$ 1.000,00, quota de capitalização de 70%, taxa efetiva real de 0,35% ao mês, vigência de 12 meses, sem atualização no período. O capital inicial é <b>R$ 700,00</b>. O montante ao fim de 12 meses é 700 vezes 1,0035 elevado a 12, que dá cerca de <b>R$ 730,00</b>."},
        {t:"a", x:"Mas atenção ao que a modalidade Tradicional promete: <b>no mínimo o valor total dos pagamentos</b>, ou seja, R$ 1.000,00. Como R$ 730,00 é menos que isso, a sociedade tem de complementar. É por isso que na prática a quota de capitalização da Tradicional fica bem acima do piso de 70%: o piso normativo e a promessa de devolução integral puxam em direções opostas."},
        {t:"p", x:"Repare no adjetivo <b>real</b> na taxa. Ela é aplicada <b>além</b> da atualização monetária, e não no lugar dela. Confundir taxa real com taxa nominal aqui é o mesmo erro que você viu em Matemática Financeira, agora num contexto novo."},
        {t:"a", x:"Se a questão der índice de atualização e taxa de juros juntos, <b>não some os dois percentuais</b>. Atualize primeiro pelo índice, depois capitalize pela taxa real. Somar é o erro que o distrator espera."}
      ]
    }
  ],

  flashcards: [
    {id:"c1", peso:"alto", p:"Qual norma criou a operação de capitalização no Brasil?", r:"O <b>Decreto-Lei 261, de 28 de fevereiro de 1967</b>, que submeteu as sociedades de capitalização ao <b>CNSP</b> e à <b>SUSEP</b>."},
    {id:"c2", peso:"alto", p:"Qual a Circular SUSEP que rege os títulos de capitalização hoje?", r:"A <b>Circular SUSEP 576, de 28 de agosto de 2018</b>."},
    {id:"c3", peso:"alto", p:"Título de capitalização é seguro?", r:"<b>Não.</b> Não há risco predeterminado nem indenização. É contrato de constituição de capital, com direito a concorrer a sorteios."},
    {id:"c4", peso:"alto", p:"Diferencie subscritor e titular.", r:"<b>Subscritor</b> adquire o título e assume os pagamentos. <b>Titular</b> detém os direitos, e pode ser outra pessoa, por cessão."},
    {id:"c5", peso:"alto", p:"Quais são as três quotas de um título, e quanto somam?", r:"<b>Capitalização</b>, <b>sorteio</b> e <b>carregamento</b>. Somam sempre <b>100%</b> do pagamento."},
    {id:"c6", peso:"alto", p:"O que faz a quota de capitalização?", r:"Constitui a <b>Provisão Matemática para Capitalização</b>. É a única parcela que vira capital do titular e volta no resgate."},
    {id:"c7", peso:"alto", p:"O que cobre a quota de carregamento?", r:"Despesas de <b>corretagem, colocação, administração</b> e o lucro da sociedade. <b>Não volta</b> para o cliente."},
    {id:"c8", peso:"alto", p:"Quota de capitalização mínima em pagamento único?", r:"<b>70%</b> nas modalidades Tradicional e Instrumento de Garantia; <b>50%</b> na Popular."},
    {id:"c9", peso:"alto", p:"Quota de capitalização mínima em pagamentos mensais ou periódicos?", r:"<b>10% nos três primeiros meses</b> e <b>70% a partir do quarto</b>, com <b>média aritmética de no mínimo 70%</b> até o fim da vigência."},
    {id:"c10", peso:"medio", p:"A Circular fixa teto expresso para a quota de carregamento?", r:"<b>Não.</b> Ela fixa o <b>piso da quota de capitalização</b>. O teto das outras duas nasce por subtração: no máximo 30% para sorteio e carregamento somados, quando o piso é 70%."},
    {id:"c11", peso:"alto", p:"Quantas e quais são as modalidades de título de capitalização?", r:"<b>Seis</b>: Tradicional, Instrumento de Garantia, Compra-Programada, Popular, Incentivo e Filantropia Premiável."},
    {id:"c12", peso:"alto", p:"O que define a modalidade Tradicional?", r:"Restitui, ao final da vigência, <b>no mínimo o valor total dos pagamentos</b> efetuados."},
    {id:"c13", peso:"alto", p:"O que define a modalidade Instrumento de Garantia?", r:"O título é dado em <b>garantia de obrigação assumida em contrato principal</b>. Restitui no mínimo <b>95%</b> do total pago."},
    {id:"c14", peso:"alto", p:"O que define a modalidade Popular?", r:"Foco no <b>sorteio</b>. Restitui, ao final da vigência, <b>valor inferior</b> ao total dos pagamentos."},
    {id:"c15", peso:"medio", p:"O que define a modalidade Compra-Programada?", r:"O resgate pode ser convertido em <b>bem ou serviço</b>, por acordo com fornecedor. Restitui no mínimo o total pago."},
    {id:"c16", peso:"medio", p:"O que define a modalidade Incentivo?", r:"É <b>vinculada a evento promocional</b> de caráter comercial. A empresa promotora contrata e cede a participação nos sorteios."},
    {id:"c17", peso:"medio", p:"O que define a modalidade Filantropia Premiável?", r:"O subscritor <b>cede o direito de resgate a entidade beneficente</b> certificada, ficando só com o direito ao sorteio."},
    {id:"c18", peso:"alto", p:"Qual a taxa de juros efetiva real mensal mínima, e para quem?", r:"<b>0,35%</b> para Tradicional, Instrumento de Garantia e Compra-Programada. <b>0,16%</b> para Popular, Incentivo e Filantropia Premiável."},
    {id:"c19", peso:"alto", p:"Qual o prazo máximo de carência para resgate?", r:"<b>24 meses</b> contados do início de vigência, e <b>nunca superior ao prazo de vigência</b> do título."},
    {id:"c20", peso:"alto", p:"Diferencie prazo de vigência e prazo de pagamento.", r:"<b>Vigência</b> é o período de constituição do capital, do início ao fim do título. <b>Pagamento</b> é o período em que o subscritor paga, e pode ser menor que a vigência."},
    {id:"c21", peso:"medio", p:"A Circular 576 fixa prazo mínimo geral de vigência?", r:"<b>Não.</b> O prazo que ela limita expressamente é o de <b>carência</b>, com teto de 24 meses. Resumo que afirma mínimo de 12 meses para todo título merece conferência."},
    {id:"c22", peso:"alto", p:"Em quanto tempo o prêmio de sorteio deve ser pago?", r:"<b>15 dias corridos</b> contados da entrega da documentação completa pelo contemplado."},
    {id:"c23", peso:"alto", p:"Qual o limite de exposição a sorteios?", r:"O somatório de todos os sorteios previstos, <b>por série e em cada mês</b>, deve ser <b>igual ou inferior a 10% do patrimônio líquido</b> auditado da sociedade."},
    {id:"c24", peso:"medio", p:"O que é série, em capitalização?", r:"O conjunto de títulos com as <b>mesmas características</b> comercializados num período. A probabilidade de contemplação é calculada <b>dentro da série</b>."},
    {id:"c25", peso:"medio", p:"O que a auditoria do sorteio precisa atestar?", r:"<b>Aleatoriedade e equiprobabilidade</b>, além do sigilo do processo."},
    {id:"c26", peso:"medio", p:"Em título de pagamento único, a partir de quando pode haver sorteio?", r:"Após o <b>12o mês</b>."},
    {id:"c27", peso:"alto", p:"Quais garantias a Lei do Inquilinato admite (artigo 37)?", r:"<b>Caução</b>, <b>fiança</b>, <b>seguro de fiança locatícia</b> e <b>cessão fiduciária de quotas de fundo de investimento</b>. O título de capitalização entra como caução."},
    {id:"c28", peso:"alto", p:"Pode haver mais de uma garantia no mesmo contrato de locação?", r:"<b>Não.</b> O parágrafo único do artigo 37 da Lei 8.245/1991 veda, <b>sob pena de nulidade</b>, mais de uma modalidade de garantia no mesmo contrato."},
    {id:"c29", peso:"alto", p:"Diferença de fundo entre título de capitalização e seguro fiança na locação.", r:"No <b>título</b>, o dinheiro <b>volta</b> ao inquilino ao fim da locação: ele constituiu capital. No <b>seguro fiança</b>, o prêmio <b>não volta</b>: ele transferiu risco."},
    {id:"c30", peso:"medio", p:"Qual o limite da caução em dinheiro na locação?", r:"<b>3 meses de aluguel</b>, depositada em caderneta de poupança (artigo 38 da Lei 8.245/1991)."},
    {id:"c31", peso:"medio", p:"Diferencie Provisão para Sorteios a Realizar e a Pagar.", r:"<b>A Realizar</b>: sorteio que ainda vai acontecer. <b>A Pagar</b>: sorteio que já ocorreu e o contemplado ainda não recebeu."},
    {id:"c32", peso:"medio", p:"Qual provisão cobre o capital em formação?", r:"A <b>Provisão Matemática para Capitalização</b>."},
    {id:"c33", peso:"medio", p:"Que norma trata do registro do corretor de capitalização?", r:"A <b>Circular SUSEP 510/2015</b>, que dispõe sobre o registro do corretor de seguros, de capitalização e de previdência."},
    {id:"c34", peso:"alto", p:"Num título de R$ 1.000 com quota de capitalização de 70%, qual o capital inicial?", r:"<b>R$ 700,00</b>. Os outros R$ 300,00 foram para sorteio e carregamento e não constituem capital."},
    {id:"c35", peso:"alto", p:"Havendo índice de atualização e taxa de juros, como se calcula?", r:"<b>Atualiza primeiro pelo índice, depois capitaliza pela taxa real.</b> Nunca somar os dois percentuais: a taxa é <b>real</b>, aplicada além da atualização."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"São quotas que compõem o pagamento de um título de capitalização:",
     alts:["Quota de risco, quota de sorteio e quota de resgate.","Quota de prêmio, quota de comissão e quota de reserva.","Quota de capitalização, quota de sorteio e quota de carregamento.","Quota de poupança, quota de administração e quota de contingência."],
     correta:2,
     explicacao:"A Circular SUSEP 576/2018 reparte cada pagamento em três quotas: capitalização, que constitui a provisão matemática e vira capital do titular; sorteio, que custeia os prêmios; e carregamento, que cobre corretagem, colocação, administração e lucro. A soma é sempre 100%.",
     erro:"As três quotas são capitalização, sorteio e carregamento. Somam 100%."},

    {id:"q2", peso:"alto",
     enunciado:"Em um título de capitalização com pagamentos mensais, o percentual mínimo da quota de capitalização é de:",
     alts:["10% nos três primeiros meses e 70% a partir do quarto mês, com média de no mínimo 70% até o fim da vigência.","70% desde o primeiro pagamento, sem exceção.","50% em todos os meses de vigência.","Livremente definido pela sociedade na nota técnica atuarial."],
     correta:0,
     explicacao:"A norma admite quota reduzida no início, justamente porque é ali que se paga a corretagem, mas impõe 70% a partir do quarto mês e ainda exige que a média aritmética de todas as contribuições até o fim da vigência não fique abaixo de 70%. Não é livre, e não é 70% desde o primeiro mês.",
     erro:"PM e PP: 10% nos 3 primeiros meses, 70% do 4o em diante, média mínima de 70%."},

    {id:"q3", peso:"alto",
     enunciado:"A modalidade de título de capitalização que restitui, ao final da vigência, valor inferior ao total dos pagamentos efetuados é a:",
     alts:["Tradicional.","Compra-Programada.","Instrumento de Garantia.","Popular."],
     correta:3,
     explicacao:"A modalidade Popular é estruturada com ênfase no sorteio e assume, na própria definição, que devolve menos do que foi pago. Tradicional e Compra-Programada restituem no mínimo 100% do total pago, e Instrumento de Garantia restitui no mínimo 95%.",
     erro:"Popular devolve MENOS que 100%. Tradicional e Compra-Programada: mínimo 100%. Garantia: 95%."},

    {id:"q4", peso:"alto",
     enunciado:"Sobre o prazo de carência para resgate de título de capitalização, é correto afirmar que:",
     alts:["É sempre de 12 meses, por determinação da SUSEP.","Não pode ser superior a 24 meses, nem superior ao prazo de vigência do título.","Não existe, pois o resgate é livre a qualquer tempo.","É definido pelo subscritor no ato da contratação."],
     correta:1,
     explicacao:"A fixação de carência é facultativa, mas quando existe fica limitada a 24 meses contados do início de vigência e nunca pode ultrapassar o próprio prazo de vigência do título. Não é prazo fixo de 12 meses nem escolha do subscritor.",
     erro:"Carência: teto de 24 meses, e nunca maior que a vigência."},

    {id:"q5", peso:"alto",
     enunciado:"A taxa de juros efetiva real mensal mínima aplicável às modalidades Tradicional, Instrumento de Garantia e Compra-Programada é de:",
     alts:["0,16%.","0,50%.","0,35%.","1,00%."],
     correta:2,
     explicacao:"A Circular 576 fixa 0,35% ao mês como taxa efetiva real mínima para as modalidades que prometem devolução integral ou quase integral. Para Popular, Incentivo e Filantropia Premiável, o piso cai para 0,16%, coerente com o fato de essas modalidades privilegiarem o sorteio.",
     erro:"0,35% para Tradicional, Garantia e Compra-Programada. 0,16% para Popular, Incentivo e Filantropia."},

    {id:"q6", peso:"alto",
     enunciado:"Um locador exige do inquilino, no mesmo contrato de locação, fiador e título de capitalização em garantia. Essa exigência é:",
     alts:["Nula, pois é vedada mais de uma modalidade de garantia no mesmo contrato de locação.","Válida, desde que conste expressamente do contrato.","Válida, pois título de capitalização não é garantia locatícia.","Válida apenas se o valor somado não ultrapassar 3 aluguéis."],
     correta:0,
     explicacao:"O parágrafo único do artigo 37 da Lei 8.245/1991 veda, sob pena de nulidade, mais de uma das modalidades de garantia num mesmo contrato de locação. O locador escolhe uma. O título de capitalização é admitido, na forma de caução, e o limite de três aluguéis é regra da caução em dinheiro, do artigo 38.",
     erro:"Lei 8.245, artigo 37, parágrafo único: uma garantia por contrato, sob pena de nulidade."},

    {id:"q7", peso:"medio",
     enunciado:"O prêmio de sorteio de título de capitalização deve ser pago ao contemplado no prazo de:",
     alts:["30 dias úteis contados do sorteio.","15 dias corridos contados da entrega da documentação completa.","5 dias úteis contados da divulgação do resultado.","60 dias corridos contados do sorteio."],
     correta:1,
     explicacao:"A norma fixa 15 dias corridos, e o marco inicial não é o sorteio, e sim a entrega da documentação completa pelo contemplado. As duas informações são cobradas juntas: o número e o termo inicial.",
     erro:"Sorteio: 15 dias CORRIDOS, contados da documentação completa, não do sorteio."},

    {id:"q8", peso:"medio",
     enunciado:"Sobre o limite de exposição a sorteios das sociedades de capitalização, a Circular SUSEP 576/2018 determina que o somatório de todos os sorteios previstos, por série e em cada mês, seja:",
     alts:["Igual ou inferior a 1% do capital social integralizado.","Igual ou inferior a 50% das provisões técnicas constituídas.","Livremente definido, desde que informado nas condições gerais.","Igual ou inferior a 10% do patrimônio líquido auditado da sociedade."],
     correta:3,
     explicacao:"O limite é de 10% do patrimônio líquido auditado, apurado por série e por mês. A regra existe para impedir que a sociedade prometa prêmios que não consiga honrar, e é o principal limite percentual de solvência cobrado nesta disciplina.",
     erro:"Sorteios: teto de 10% do PATRIMÔNIO LÍQUIDO auditado, por série e por mês."},

    {id:"q9", peso:"alto",
     enunciado:"Assinale a alternativa que corretamente distingue título de capitalização de aplicação em poupança:",
     alts:["No título, parte do pagamento é destinada a sorteio e carregamento e não retorna ao titular, além de poder haver carência para resgate.","O título rende mais que a poupança por determinação normativa.","A poupança, ao contrário do título, está sujeita à fiscalização da SUSEP.","O título é isento de qualquer prazo de carência, como a poupança."],
     correta:0,
     explicacao:"A diferença estrutural está na repartição do pagamento: na poupança todo o valor depositado constitui saldo e rende desde o início, enquanto no título apenas a quota de capitalização vira capital, podendo ainda haver carência de até 24 meses. Quem fiscaliza o título é a SUSEP, e a norma não garante rendimento superior ao da poupança.",
     erro:"Só a quota de capitalização vira capital. E o título pode ter carência de até 24 meses."},

    {id:"q10", peso:"medio",
     enunciado:"A provisão técnica destinada a cobrir os prêmios de sorteios que já ocorreram, mas ainda não foram pagos aos contemplados, é a Provisão para:",
     alts:["Sorteios a Realizar.","Despesas Administrativas.","Sorteios a Pagar.","Resgates."],
     correta:2,
     explicacao:"Sorteios a Pagar cobre o prêmio já sorteado e ainda não quitado. Sorteios a Realizar cobre os sorteios futuros ainda não ocorridos, e a Provisão para Resgates cobre valores de títulos já exigíveis e não pagos. A troca entre as duas de sorteio é distrator recorrente.",
     erro:"A Realizar = sorteio futuro. A Pagar = sorteio já ocorrido, contemplado ainda não recebeu."},

    {id:"q11", peso:"alto",
     enunciado:"Um título de capitalização Tradicional, de pagamento único de R$ 2.000,00, tem quota de capitalização de 70%. O capital inicialmente constituído é de:",
     alts:["R$ 2.000,00.","R$ 1.400,00.","R$ 600,00.","R$ 1.000,00."],
     correta:1,
     explicacao:"A quota de capitalização incide sobre o valor pago: 70% de R$ 2.000,00 resulta em R$ 1.400,00, que é o valor que ingressa na Provisão Matemática para Capitalização. Os R$ 600,00 restantes correspondem às quotas de sorteio e de carregamento, e não constituem capital do titular.",
     erro:"Capital inicial = pagamento x quota de capitalização. 2.000 x 0,70 = 1.400."},

    {id:"q12", peso:"medio",
     enunciado:"Na modalidade Filantropia Premiável, o subscritor:",
     alts:["Recebe o capital ao final e doa apenas os prêmios eventualmente sorteados.","Não tem direito a sorteio, apenas ao resgate integral.","Contrata o título em nome de empresa promotora de evento comercial.","Cede o direito de resgate a entidade beneficente certificada, permanecendo com o direito de concorrer aos sorteios."],
     correta:3,
     explicacao:"Na Filantropia Premiável a cessão é do direito de resgate, em favor de entidade beneficente de assistência social certificada, e o subscritor permanece concorrendo aos sorteios. A vinculação a evento promocional comercial é característica da modalidade Incentivo, não desta.",
     erro:"Filantropia Premiável: cede o RESGATE à entidade, mantém o SORTEIO."},

    {id:"q13", peso:"medio",
     enunciado:"A operação de capitalização foi disciplinada e submetida ao Sistema Nacional de Seguros Privados por meio do:",
     alts:["Decreto-Lei 261, de 1967.","Decreto-Lei 73, de 1966.","Código Civil, artigos 757 a 802.","Lei 4.594, de 1964."],
     correta:0,
     explicacao:"O Decreto-Lei 261/1967 dispõe sobre as operações de capitalização e submete as sociedades de capitalização ao CNSP e à SUSEP. O Decreto-Lei 73/1966 organiza o Sistema Nacional de Seguros Privados de forma geral, o Código Civil trata do contrato de seguro e a Lei 4.594/1964 regula a profissão de corretor.",
     erro:"Capitalização: Decreto-Lei 261/1967. Não confundir com o DL 73/1966."},

    {id:"q14", peso:"alto",
     enunciado:"Sobre a natureza do título de capitalização, é correto afirmar que:",
     alts:["É modalidade de seguro, pois há transferência de risco à sociedade emissora.","É título de crédito ao portador, negociável em bolsa.","É contrato de constituição de capital, restituível nos termos pactuados, com direito a concorrer a sorteios.","É aplicação financeira de renda fixa, com rentabilidade garantida por lei."],
     correta:2,
     explicacao:"O título é contrato próprio: o subscritor faz pagamentos, constitui capital restituível ao final e concorre a sorteios durante a vigência. Não há risco predeterminado nem indenização, o que o afasta do seguro, e a norma não garante rentabilidade competitiva, o que o afasta da aplicação financeira.",
     erro:"Capitalização é constituição de capital restituível mais sorteio. Não é seguro nem investimento."},

    {id:"q15", peso:"alto",
     enunciado:"Um título prevê atualização por índice de preços e taxa de juros efetiva real de 0,35% ao mês. Para calcular o capital ao final do período, deve-se:",
     alts:["Somar o índice do período à taxa de juros acumulada e aplicar o total sobre o valor pago.","Aplicar apenas a taxa de juros, pois ela já embute a inflação.","Aplicar apenas o índice de atualização, pois a taxa real é meramente referencial.","Atualizar o capital pelo índice e, sobre o valor atualizado, aplicar a taxa de juros real."],
     correta:3,
     explicacao:"A taxa é expressamente real, ou seja, incide além da atualização monetária. O procedimento correto é atualizar primeiro pelo índice e depois capitalizar pela taxa real sobre o valor já atualizado. Somar os percentuais é o erro que o distrator espera, e é o mesmo equívoco de confundir taxa real com taxa nominal em Matemática Financeira.",
     erro:"Taxa REAL incide sobre o valor JÁ atualizado. Nunca somar índice com taxa."}
  ]
};

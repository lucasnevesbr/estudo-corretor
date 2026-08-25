/* ETAPA 2 - Disciplina 3 de 20: Matematica Financeira (10 questoes, 1o dia)
   Conteudo programatico (Regulamento 83o EHCS, Anexo 2, referencia 16a edicao/2026):
   Conceitos Basicos. Juros Simples. Juros Compostos. Desconto e Operacoes de Curto
   e Longo Prazos. Series de pagamentos. */

window.CONTEUDO["matematica"] = {
  abertura: "Esta é a única disciplina do 1º dia que não se resolve lendo, se resolve fazendo conta. A boa notícia é que ela não muda: juros são juros desde sempre, e apostila nenhuma vai te contar algo diferente do que está aqui. A má notícia é que ela pune quem decora fórmula sem entender o que cada letra significa. Faça as contas no papel, não só leia.",

  aulas: [
    {
      id:"a1", peso:"alto", titulo:"O vocabulário: capital, juros, taxa, prazo e montante",
      blocos:[
        {t:"p", x:"Toda questão desta disciplina é a mesma cena: um dinheiro fica parado um tempo e volta maior. Só existem cinco personagens, e a prova só troca qual deles está escondido."},
        {t:"tab", head:["Símbolo","Nome","O que é"], rows:[
          ["<b>C</b>","Capital, ou principal","O dinheiro no começo. Também aparece como VP (valor presente) ou PV."],
          ["<b>J</b>","Juros","O quanto ele cresceu. É o aluguel do dinheiro."],
          ["<b>i</b>","Taxa","O percentual de crescimento por período. De <i>interest</i>."],
          ["<b>n</b>","Prazo","Quantos períodos o dinheiro ficou aplicado."],
          ["<b>M</b>","Montante","O dinheiro no fim. Também aparece como VF (valor futuro) ou FV."]
        ]},
        {t:"d", x:"<b>A relação que nunca muda:</b> M = C + J. O montante é sempre o capital mais os juros. Se a questão te der dois desses três, o terceiro sai por subtração, sem fórmula nenhuma."},
        {t:"p", x:"A taxa sempre entra na conta como <b>número decimal</b>, não como percentual. 5% vira 0,05. Dividir por 100 é o passo que mais gente esquece sob pressão de tempo."},
        {t:"a", x:"<b>Taxa e prazo têm que estar na mesma unidade.</b> Taxa ao mês pede prazo em meses. Taxa ao ano pede prazo em anos. Uma questão que dá 2% ao mês e pergunta o montante em 2 anos está te testando nisso: n vale 24, não 2. Essa é a pegadinha mais barata e mais frequente da prova inteira."}
      ]
    },
    {
      id:"a2", peso:"alto", titulo:"Juros simples: só o capital rende",
      blocos:[
        {t:"p", x:"Em juros simples, os juros de cada período são sempre calculados <b>sobre o capital inicial</b>. Os juros que já foram ganhos ficam parados de lado, não rendem nada. O crescimento é uma linha reta."},
        {t:"d", x:"<b>J = C · i · n</b><br>e portanto<br><b>M = C · (1 + i · n)</b>"},
        {t:"p", x:"Exemplo. R$ 10.000,00 a 2% ao mês por 6 meses, em juros simples:"},
        {t:"l", x:[
          "J = 10.000 × 0,02 × 6 = <b>R$ 1.200,00</b>",
          "M = 10.000 + 1.200 = <b>R$ 11.200,00</b>",
          "Repare: são R$ 200,00 por mês, sempre os mesmos R$ 200,00, todo mês."
        ]},
        {t:"p", x:"É isso que significa dizer que os juros simples são <b>lineares</b>. O ganho mensal nunca muda, porque a base de cálculo nunca muda."},
        {t:"d", x:"<b>Como isolar cada letra</b>, sem decorar quatro fórmulas: parta de J = C · i · n e passe dividindo o que estiver multiplicando.<br>C = J ÷ (i · n) &nbsp;·&nbsp; i = J ÷ (C · n) &nbsp;·&nbsp; n = J ÷ (C · i)"},
        {t:"a", x:"Quando a questão pede <b>os juros</b> e você responde <b>o montante</b>, você acerta a conta e erra a questão. Leia a última linha do enunciado antes de marcar. As alternativas costumam trazer os dois números de propósito."}
      ]
    },
    {
      id:"a3", peso:"alto", titulo:"Juros compostos: os juros também rendem",
      blocos:[
        {t:"p", x:"Em juros compostos, no fim de cada período os juros se incorporam ao capital. No período seguinte, o crescimento incide sobre esse valor maior. É o famoso juros sobre juros, e é como funciona quase tudo no mundo real: poupança, financiamento, cartão e as reservas de uma seguradora."},
        {t:"d", x:"<b>M = C · (1 + i)ⁿ</b><br>e, como sempre, <b>J = M − C</b>"},
        {t:"p", x:"Repare na diferença estrutural: em juros simples o n <b>multiplica</b>; em juros compostos o n é <b>expoente</b>. Multiplicar cresce em linha reta, elevar cresce em curva."},
        {t:"p", x:"Exemplo. R$ 1.000,00 a 10% ao ano por 2 anos, em juros compostos:"},
        {t:"l", x:[
          "M = 1.000 × (1,10)² = 1.000 × 1,21 = <b>R$ 1.210,00</b>",
          "J = 1.210 − 1.000 = <b>R$ 210,00</b>",
          "No 1º ano rendeu R$ 100,00. No 2º rendeu R$ 110,00, porque incidiu sobre R$ 1.100,00."
        ]},
        {t:"d", x:"<b>Não existe fórmula separada para achar os juros compostos.</b> Você acha o montante e subtrai o capital. Quem procura uma fórmula de J em juros compostos perde tempo numa prova cronometrada."},
        {t:"a", x:"Não confunda (1 + i)ⁿ com (1 + i · n). O primeiro é composto, o segundo é simples. Numa alternativa de múltipla escolha os dois resultados costumam aparecer lado a lado."}
      ]
    },
    {
      id:"a4", peso:"alto", titulo:"Simples ou composto: qual rende mais, e quando",
      blocos:[
        {t:"p", x:"A intuição diz que composto é sempre maior. Está errado, e a prova sabe disso. Depende do prazo, e a comparação tem três zonas."},
        {t:"tab", head:["Prazo","Quem é maior","Por quê"], rows:[
          ["<b>n < 1 período</b>","<b>Juros simples</b>","Dentro de um período ainda não houve capitalização nenhuma, e a reta do simples fica acima da curva."],
          ["<b>n = 1 período</b>","<b>Empatam</b>","Um único período, uma única incidência. Os dois dão exatamente o mesmo resultado."],
          ["<b>n > 1 período</b>","<b>Juros compostos</b>","A partir do 2º período o composto passa a render sobre juros, e a curva dispara."]
        ]},
        {t:"d", x:"<b>O ponto de encontro é n = 1.</b> Guarde a imagem: uma reta e uma curva que se cruzam em 1. Antes de 1 a reta está por cima, depois de 1 a curva está por cima. Isso responde a questão sem nenhuma conta."},
        {t:"p", x:"Exemplo do caso contraintuitivo. R$ 1.000,00 a 12% ao ano, por <b>meio ano</b> (n = 0,5):"},
        {t:"l", x:[
          "Simples: 1.000 × (1 + 0,12 × 0,5) = <b>R$ 1.060,00</b>",
          "Composto: 1.000 × (1,12)⁰·⁵ = <b>R$ 1.058,30</b>",
          "O simples rendeu mais, e é por isso que operações de curto prazo no mercado usam juros simples."
        ]},
        {t:"a", x:"A questão pode não citar prazo nenhum e perguntar em tese qual regime é mais vantajoso. A resposta correta é <b>depende do prazo</b>, com o corte em um período. Alternativa que crava sempre composto é armadilha."}
      ]
    },
    {
      id:"a5", peso:"alto", titulo:"Taxas: proporcional, equivalente, nominal e efetiva",
      blocos:[
        {t:"p", x:"Esta aula é a que mais derruba gente. Quatro nomes, e o erro é sempre o mesmo: aplicar a regra do regime errado."},
        {t:"d", x:"<b>Proporcional é do mundo dos juros simples. Equivalente é do mundo dos juros compostos.</b> São a mesma ideia, converter taxa entre unidades de tempo, resolvida por regimes diferentes."},
        {t:"p", x:"<b>Taxa proporcional</b> se resolve dividindo ou multiplicando, direto:"},
        {t:"l", x:[
          "12% ao ano → ao mês: 12 ÷ 12 = <b>1% ao mês</b>",
          "2% ao mês → ao ano: 2 × 12 = <b>24% ao ano</b>"
        ]},
        {t:"p", x:"<b>Taxa equivalente</b> exige potência ou raiz, porque tem que respeitar a capitalização:"},
        {t:"d", x:"<b>(1 + i<sub>maior</sub>) = (1 + i<sub>menor</sub>)^k</b>, onde k é quantos períodos menores cabem no maior."},
        {t:"l", x:[
          "21% ao ano → ao semestre: √1,21 = 1,10, logo <b>10% ao semestre</b>",
          "Confere: 1,10 × 1,10 = 1,21. Dois semestres de 10% dão 21% no ano, não 20%.",
          "Aqueles 1% a mais são exatamente os juros sobre juros."
        ]},
        {t:"p", x:"Agora o par que aparece em todo contrato: <b>nominal e efetiva</b>."},
        {t:"tab", head:["Taxa","O que é","Exemplo"], rows:[
          ["<b>Nominal</b>","A taxa anunciada, cuja unidade de tempo <b>não bate</b> com a da capitalização. É informação de fachada.","24% ao ano <b>capitalizados mensalmente</b>"],
          ["<b>Efetiva</b>","A taxa que realmente incide, na mesma unidade da capitalização.","24 ÷ 12 = <b>2% ao mês</b>, que é a que de fato roda"]
        ]},
        {t:"p", x:"A frase <b>capitalizados mensalmente</b> é o gatilho. Ao vê-la, divida a nominal pelo número de períodos para achar a taxa efetiva do período, de forma proporcional. Só depois, se a questão pedir a efetiva anual, componha:"},
        {t:"l", x:[
          "Nominal: <b>24% ao ano</b>, capitalizados mensalmente",
          "Efetiva mensal: 24 ÷ 12 = <b>2% ao mês</b>",
          "Efetiva anual: (1,02)¹² − 1 = <b>26,82% ao ano</b>"
        ]},
        {t:"d", x:"<b>Guarde este desfecho:</b> a efetiva anual (26,82%) é <b>maior</b> que a nominal anunciada (24%). Sempre que houver capitalização em prazo menor que o da taxa anunciada, a efetiva supera a nominal."},
        {t:"a", x:"Dividir a nominal usa regra de juros simples, e isso não é erro, é a definição de taxa nominal. Mas converter <b>efetiva para efetiva</b> entre prazos diferentes tem que ser por potência. Quem divide 26,82 por 12 para achar a mensal erra: a mensal é 2%, não 2,235%."}
      ]
    },
    {
      id:"a6", peso:"alto", titulo:"Desconto: comercial e racional",
      blocos:[
        {t:"p", x:"Desconto é a mesma matemática vista de trás para frente. Alguém tem um título que vale R$ 10.000,00 daqui a três meses e quer o dinheiro hoje. Recebe menos que os R$ 10.000,00, e essa diferença é o desconto."},
        {t:"tab", head:["Termo","Significa"], rows:[
          ["<b>Valor nominal (N)</b>","O valor de face do título, o que ele vale na data do vencimento."],
          ["<b>Valor atual (A)</b>","O que a pessoa recebe hoje, antecipando."],
          ["<b>Desconto (D)</b>","N − A. O custo de receber antes."]
        ]},
        {t:"p", x:"Existem duas formas de calcular, e a diferença entre elas é <b>sobre qual valor a taxa incide</b>."},
        {t:"d", x:"<b>Desconto comercial</b>, também chamado bancário ou <b>por fora</b>: a taxa incide sobre o <b>valor nominal</b>.<br><b>D<sub>c</sub> = N · d · n</b> &nbsp;→&nbsp; A = N · (1 − d · n)"},
        {t:"d", x:"<b>Desconto racional</b>, também chamado real ou <b>por dentro</b>: a taxa incide sobre o <b>valor atual</b>.<br><b>D<sub>r</sub> = (N · i · n) ÷ (1 + i · n)</b> &nbsp;→&nbsp; A = N ÷ (1 + i · n)"},
        {t:"p", x:"Exemplo com os mesmos números. Título de R$ 10.000,00, taxa de 5% ao mês, antecipado em 1 mês:"},
        {t:"tab", head:["","Comercial (por fora)","Racional (por dentro)"], rows:[
          ["Desconto","10.000 × 0,05 = <b>R$ 500,00</b>","(10.000 × 0,05) ÷ 1,05 = <b>R$ 476,19</b>"],
          ["Valor atual","<b>R$ 9.500,00</b>","<b>R$ 9.523,81</b>"]
        ]},
        {t:"d", x:"<b>O desconto comercial é sempre maior que o racional</b>, para a mesma taxa e o mesmo prazo. Faz sentido: ele cobra sobre o valor cheio, e o racional cobra sobre o valor menor. Por isso o banco prefere o comercial. Isso cai direto, na forma de qual é maior."},
        {t:"a", x:"O <b>racional</b> é o único que é matematicamente coerente com os juros: o valor atual dele, aplicado à mesma taxa e prazo, volta a dar exatamente o valor nominal. Confira: 9.523,81 × 1,05 = 10.000,00. Já 9.500,00 × 1,05 = 9.975,00, e não fecha. Daí o nome <b>real</b>."}
      ]
    },
    {
      id:"a7", peso:"medio", titulo:"Séries de pagamentos: postecipada e antecipada",
      blocos:[
        {t:"p", x:"Até aqui foi um pagamento só. Série de pagamentos é a parcela que se repete: o financiamento, o consórcio, o plano de previdência e o prêmio de seguro fracionado. Cada parcela igual chama-se <b>PMT</b>, ou termo."},
        {t:"p", x:"A prova cobra menos a conta e mais a <b>classificação</b>. Decore os eixos:"},
        {t:"tab", head:["Critério","Tipos"], rows:[
          ["Quando a 1ª parcela cai","<b>Postecipada</b> (vencida): a 1ª cai no fim do 1º período. É o padrão.<br><b>Antecipada</b>: a 1ª cai hoje, na assinatura. É a entrada."],
          ["Se as parcelas são iguais","<b>Uniforme</b> (todas iguais) ou <b>variável</b>."],
          ["Se tem fim","<b>Temporária</b> (número definido) ou <b>perpétua</b> (sem fim)."],
          ["Se há carência","<b>Imediata</b> (começa já) ou <b>diferida</b> (tem carência antes da 1ª)."]
        ]},
        {t:"d", x:"<b>Para o mesmo número de parcelas do mesmo valor, a série antecipada tem valor presente MAIOR que a postecipada.</b> O motivo é simples: o dinheiro chega mais cedo, então é descontado por menos tempo. Na prática, a antecipada equivale à postecipada multiplicada por (1 + i)."},
        {t:"p", x:"No mundo do seguro isso aparece o tempo todo. O prêmio à vista é um pagamento único. O prêmio fracionado em 4 vezes com a 1ª no ato é uma <b>série antecipada</b>, e é por isso que o fracionado custa mais que o à vista: a seguradora deixa de receber e reinvestir o valor cheio hoje."},
        {t:"a", x:"Antecipada não significa pagar adiantado por vontade própria. É um termo técnico: significa que a <b>primeira parcela cai no início do período</b>, no instante zero. Postecipada é o padrão do mercado, e quando o enunciado não disser nada, assuma postecipada."}
      ]
    },
    {
      id:"a8", peso:"medio", titulo:"Taxa real, taxa aparente e a inflação",
      blocos:[
        {t:"p", x:"Se a sua aplicação rendeu 10% no ano e a inflação foi de 5%, você não ganhou 5%. Ganhou um pouco menos, e a prova gosta exatamente dessa diferença."},
        {t:"d", x:"<b>(1 + aparente) = (1 + real) × (1 + inflação)</b><br>logo<br><b>real = [(1 + aparente) ÷ (1 + inflação)] − 1</b>"},
        {t:"l", x:[
          "Aparente 10%, inflação 5%: 1,10 ÷ 1,05 = 1,0476, ou seja <b>4,76% de taxa real</b>",
          "A subtração ingênua daria 5%. O certo é 4,76%.",
          "Se a inflação superar o rendimento, a taxa real fica <b>negativa</b>: o dinheiro cresceu, mas comprou menos."
        ]},
        {t:"d", x:"<b>Taxa aparente</b> é a nominal do dia a dia, o número que aparece no extrato. <b>Taxa real</b> é o ganho de poder de compra, já limpo da inflação. Não confunda taxa real com desconto racional (também chamado real): mesma palavra, assuntos diferentes."},
        {t:"a", x:"Somar e subtrair taxas percentuais é errado sempre que houver composição. Não some 10% + 5%, não subtraia 10% − 5%. Multiplique e divida os fatores (1 + i). Essa regra vale para inflação, para taxas equivalentes e para ganhos em sequência."}
      ]
    },
    {
      id:"a9", peso:"medio", titulo:"Onde essa conta aparece no seguro",
      blocos:[
        {t:"p", x:"Esta aula não é fórmula nova, é o mapa de por que esta disciplina está no 1º dia, junto com Capitalização."},
        {t:"l", x:[
          "<b>Fracionamento do prêmio.</b> Parcelar o prêmio é uma série de pagamentos. A diferença entre o prêmio à vista e a soma das parcelas é juro, e a Circular SUSEP exige que o custo do fracionamento seja informado ao segurado.",
          "<b>Capitalização.</b> O título de capitalização é literalmente uma aplicação a juros compostos com regras de resgate e carência. A disciplina de Capitalização, no mesmo 1º dia, usa tudo daqui.",
          "<b>Provisões técnicas.</b> A seguradora guarda hoje o dinheiro para pagar sinistros amanhã, e esse valor é trazido a valor presente. É desconto racional aplicado em escala.",
          "<b>Previdência complementar.</b> Acumulação é juros compostos por décadas; a renda mensal depois é uma série de pagamentos. Cai de novo no 2º dia.",
          "<b>Seguro garantia.</b> O prêmio é calculado sobre o valor garantido e a vigência da apólice, então prazo e taxa entram direto na precificação."
        ]},
        {t:"d", x:"<b>O retorno prático:</b> as fórmulas desta semana voltam na Capitalização (1º dia), em Previdência Complementar (2º dia) e em Mercado Financeiro (2º dia). São 50 questões que ficam mais fáceis se estas 10 estiverem sólidas. É o melhor investimento de tempo da Etapa 2."}
      ]
    }
  ],

  flashcards: [
    {id:"c1",  peso:"alto", p:"Qual a relação entre montante, capital e juros?", r:"<b>M = C + J</b>. O montante é sempre o capital mais os juros, em qualquer regime. Se a questão der dois, o terceiro sai por subtração."},
    {id:"c2",  peso:"alto", p:"Qual a fórmula dos juros simples?", r:"<b>J = C · i · n</b>, e portanto <b>M = C · (1 + i · n)</b>. O prazo <b>multiplica</b>."},
    {id:"c3",  peso:"alto", p:"Qual a fórmula do montante em juros compostos?", r:"<b>M = C · (1 + i)ⁿ</b>. O prazo é <b>expoente</b>. Os juros saem por J = M − C, não existe fórmula direta de J."},
    {id:"c4",  peso:"alto", p:"Em juros simples, sobre o que incidem os juros de cada período?", r:"Sempre sobre o <b>capital inicial</b>. Os juros já ganhos não rendem. Por isso o ganho por período é sempre o mesmo valor e o crescimento é linear."},
    {id:"c5",  peso:"alto", p:"Em juros compostos, sobre o que incidem os juros de cada período?", r:"Sobre o <b>montante do período anterior</b>, ou seja, capital mais os juros já incorporados. É o juros sobre juros, e o crescimento é exponencial."},
    {id:"c6",  peso:"alto", p:"Para n menor que 1 período, qual regime rende mais?", r:"<b>Juros simples.</b> Dentro do primeiro período ainda não houve capitalização, e a reta fica acima da curva."},
    {id:"c7",  peso:"alto", p:"Para n igual a 1 período, qual regime rende mais?", r:"<b>Nenhum, empatam.</b> Uma única incidência de juros dá exatamente o mesmo resultado nos dois regimes. É o ponto onde a reta e a curva se cruzam."},
    {id:"c8",  peso:"alto", p:"Para n maior que 1 período, qual regime rende mais?", r:"<b>Juros compostos.</b> A partir do 2º período passa a haver juros sobre juros e a curva se descola da reta."},
    {id:"c9",  peso:"alto", p:"Taxa proporcional pertence a qual regime, e como se calcula?", r:"Aos <b>juros simples</b>. Divide-se ou multiplica-se direto: 12% ao ano = 1% ao mês."},
    {id:"c10", peso:"alto", p:"Taxa equivalente pertence a qual regime, e como se calcula?", r:"Aos <b>juros compostos</b>. Por potência ou raiz: (1 + i<sub>maior</sub>) = (1 + i<sub>menor</sub>)^k."},
    {id:"c11", peso:"alto", p:"Qual a taxa semestral equivalente a 21% ao ano?", r:"<b>10% ao semestre.</b> √1,21 = 1,10. Confere: 1,10 × 1,10 = 1,21. Não é 10,5%."},
    {id:"c12", peso:"alto", p:"O que é taxa nominal?", r:"A taxa anunciada cuja unidade de tempo <b>não coincide</b> com a da capitalização. Exemplo: 24% ao ano capitalizados mensalmente. É informação de fachada, não é a que incide."},
    {id:"c13", peso:"alto", p:"O que é taxa efetiva?", r:"A taxa que <b>realmente incide</b>, na mesma unidade de tempo da capitalização. Em 24% ao ano capitalizados mensalmente, a efetiva é 2% ao mês."},
    {id:"c14", peso:"alto", p:"Qual expressão no enunciado indica que a taxa é nominal?", r:"<b>Capitalizados</b> (mensalmente, trimestralmente, semestralmente). Ao ver isso, divida a nominal pelo número de períodos para achar a efetiva do período."},
    {id:"c15", peso:"alto", p:"Numa taxa nominal de 24% ao ano capitalizados mensalmente, qual a efetiva anual?", r:"<b>26,82% ao ano.</b> Primeiro a efetiva mensal: 24 ÷ 12 = 2%. Depois compõe: (1,02)¹² − 1 = 0,2682."},
    {id:"c16", peso:"alto", p:"A taxa efetiva anual é maior ou menor que a nominal anunciada?", r:"<b>Maior</b>, sempre que a capitalização ocorrer em prazo menor que o da taxa anunciada. É o efeito dos juros sobre juros dentro do ano."},
    {id:"c17", peso:"alto", p:"No desconto, o que é valor nominal e o que é valor atual?", r:"<b>Valor nominal (N)</b> é o valor de face na data do vencimento. <b>Valor atual (A)</b> é o que se recebe hoje ao antecipar. O desconto é D = N − A."},
    {id:"c18", peso:"alto", p:"No desconto comercial, sobre qual valor incide a taxa?", r:"Sobre o <b>valor nominal</b>. Por isso também se chama <b>por fora</b> ou bancário. D<sub>c</sub> = N · d · n."},
    {id:"c19", peso:"alto", p:"No desconto racional, sobre qual valor incide a taxa?", r:"Sobre o <b>valor atual</b>. Por isso também se chama <b>por dentro</b> ou real. A = N ÷ (1 + i · n)."},
    {id:"c20", peso:"alto", p:"Qual desconto é maior, o comercial ou o racional?", r:"O <b>comercial</b> é sempre maior, para a mesma taxa e prazo, porque incide sobre o valor cheio. Logo o valor atual do comercial é sempre menor."},
    {id:"c21", peso:"alto", p:"Por que o desconto racional é chamado de real?", r:"Porque é coerente com os juros: o valor atual dele, aplicado à mesma taxa e prazo, volta exatamente ao valor nominal. O comercial não fecha essa volta."},
    {id:"c22", peso:"alto", p:"Título de R$ 10.000,00, 5% ao mês, 1 mês. Qual o desconto comercial e o racional?", r:"Comercial: 10.000 × 0,05 = <b>R$ 500,00</b>, valor atual R$ 9.500,00.<br>Racional: 500 ÷ 1,05 = <b>R$ 476,19</b>, valor atual R$ 9.523,81."},
    {id:"c23", peso:"medio", p:"O que diferencia uma série postecipada de uma antecipada?", r:"<b>Postecipada</b> (vencida): a 1ª parcela cai no fim do 1º período, e é o padrão quando o enunciado nada diz. <b>Antecipada</b>: a 1ª cai no instante zero, na assinatura."},
    {id:"c24", peso:"medio", p:"Entre duas séries iguais, qual tem maior valor presente, a antecipada ou a postecipada?", r:"A <b>antecipada</b>. O dinheiro chega mais cedo, é descontado por menos tempo. Equivale à postecipada multiplicada por (1 + i)."},
    {id:"c25", peso:"medio", p:"Quais são os quatro eixos de classificação das séries de pagamentos?", r:"<b>Postecipada ou antecipada</b> (quando cai a 1ª); <b>uniforme ou variável</b> (valor das parcelas); <b>temporária ou perpétua</b> (tem fim ou não); <b>imediata ou diferida</b> (há carência ou não)."},
    {id:"c26", peso:"medio", p:"Como se calcula a taxa real a partir da aparente e da inflação?", r:"<b>real = [(1 + aparente) ÷ (1 + inflação)] − 1</b>. Nunca por subtração simples."},
    {id:"c27", peso:"medio", p:"Rendimento de 10% com inflação de 5%. Qual a taxa real?", r:"<b>4,76%</b>, não 5%. 1,10 ÷ 1,05 = 1,0476."},
    {id:"c28", peso:"medio", p:"Quando a taxa real fica negativa?", r:"Quando a <b>inflação supera o rendimento</b>. O dinheiro cresce em número, mas perde poder de compra."},
    {id:"c29", peso:"alto", p:"A taxa de 2% ao mês por 2 anos: qual o valor de n?", r:"<b>n = 24.</b> Taxa e prazo têm que estar na mesma unidade. Taxa mensal pede prazo em meses."},
    {id:"c30", peso:"alto", p:"Como isolar o capital na fórmula de juros simples?", r:"<b>C = J ÷ (i · n)</b>. Parte de J = C · i · n e passa dividindo o que multiplica. Mesma lógica para i e para n."},
    {id:"c31", peso:"medio", p:"Por que o prêmio de seguro fracionado custa mais que o à vista?", r:"Porque o fracionamento é uma <b>série de pagamentos</b>: a seguradora deixa de receber e reinvestir o valor cheio hoje. A diferença é juro, e a SUSEP exige que esse custo seja informado ao segurado."},
    {id:"c32", peso:"medio", p:"Onde a matemática financeira reaparece no restante da prova?", r:"Em <b>Capitalização</b> (1º dia), <b>Previdência Complementar</b> e <b>Mercado Financeiro</b> (2º dia). São 50 questões que ficam mais fáceis com esta base sólida."},
    {id:"c33", peso:"alto", p:"Qual erro se comete ao dividir uma taxa efetiva anual por 12?", r:"Achar que dá a efetiva mensal. Conversão entre <b>taxas efetivas</b> é por potência: 26,82% ao ano equivale a <b>2% ao mês</b>, não a 2,235%. Dividir só vale para taxa nominal."},
    {id:"c34", peso:"medio", p:"Podem-se somar ou subtrair taxas percentuais?", r:"<b>Não</b>, sempre que houver composição. Multiplique e divida os fatores (1 + i). Vale para inflação, taxas equivalentes e ganhos em sequência."},
    {id:"c35", peso:"alto", p:"Numa questão, como a taxa entra na conta: como percentual ou como decimal?", r:"Como <b>decimal</b>. 5% vira 0,05. Dividir por 100 antes de tudo é o passo que mais se esquece sob pressão."}
  ],

  simulado: [
    {id:"q1", peso:"alto",
     enunciado:"Um capital de R$ 10.000,00 é aplicado à taxa de 2% ao mês, em regime de juros simples, durante 6 meses. Os juros produzidos e o montante final são, respectivamente:",
     alts:["R$ 1.200,00 e R$ 11.200,00","R$ 1.261,62 e R$ 11.261,62","R$ 2.400,00 e R$ 12.400,00","R$ 1.200,00 e R$ 10.000,00"],
     correta:0,
     explicacao:"J = C · i · n = 10.000 × 0,02 × 6 = R$ 1.200,00. M = C + J = R$ 11.200,00. A alternativa com R$ 1.261,62 é o resultado em juros compostos, colocada ali para pegar quem troca o regime.",
     erro:"Juros simples: J = C · i · n. Prazo multiplica, não é expoente."},

    {id:"q2", peso:"alto",
     enunciado:"Um capital de R$ 1.000,00 é aplicado a 10% ao ano, em juros compostos, por 2 anos. O montante e os juros são, respectivamente:",
     alts:["R$ 1.200,00 e R$ 200,00","R$ 1.210,00 e R$ 210,00","R$ 1.100,00 e R$ 100,00","R$ 1.221,00 e R$ 221,00"],
     correta:1,
     explicacao:"M = 1.000 × (1,10)² = 1.000 × 1,21 = R$ 1.210,00. J = M − C = R$ 210,00. Em juros simples daria R$ 1.200,00, e a diferença de R$ 10,00 é exatamente o juro sobre o juro do 1º ano.",
     erro:"Juros compostos: M = C · (1 + i)ⁿ, e J sai por M − C."},

    {id:"q3", peso:"alto",
     enunciado:"Comparando os regimes de juros simples e compostos, para um mesmo capital, mesma taxa e prazo INFERIOR a um período, é correto afirmar que:",
     alts:["O montante em juros compostos é maior.","O montante em juros simples é maior.","Os montantes são sempre iguais.","A comparação é impossível sem conhecer o capital."],
     correta:1,
     explicacao:"Para n menor que 1 o montante em juros simples é maior, porque ainda não houve capitalização. Os dois se igualam em n = 1 e, a partir daí, o composto passa a ser maior. É por isso que operações de curtíssimo prazo no mercado usam juros simples.",
     erro:"n < 1: simples é maior. n = 1: empatam. n > 1: composto é maior."},

    {id:"q4", peso:"alto",
     enunciado:"A taxa mensal proporcional a uma taxa de 18% ao ano é:",
     alts:["1,50% ao mês","1,39% ao mês","0,15% ao mês","2,25% ao mês"],
     correta:0,
     explicacao:"Taxa proporcional pertence ao regime de juros simples e se obtém por divisão direta: 18 ÷ 12 = 1,5% ao mês. Já a taxa mensal equivalente (regime composto) seria menor, cerca de 1,39% ao mês, e está na alternativa seguinte de propósito.",
     erro:"Proporcional é divisão direta (simples). Equivalente é raiz (composto)."},

    {id:"q5", peso:"alto",
     enunciado:"A taxa semestral equivalente a 21% ao ano, em regime de juros compostos, é:",
     alts:["10,50% ao semestre","10,00% ao semestre","21,00% ao semestre","11,00% ao semestre"],
     correta:1,
     explicacao:"Taxa equivalente se resolve por raiz: √1,21 = 1,10, ou seja, 10% ao semestre. A prova de que está certo é compor de volta: 1,10 × 1,10 = 1,21. A alternativa de 10,5% é a divisão de 21 por 2, que seria a taxa proporcional, do regime errado.",
     erro:"Equivalente é por potência ou raiz. 21% ao ano = 10% ao semestre, não 10,5%."},

    {id:"q6", peso:"alto",
     enunciado:"Uma instituição anuncia taxa de 24% ao ano, capitalizados mensalmente. A taxa efetiva mensal e a taxa efetiva anual são, respectivamente:",
     alts:["2,00% ao mês e 24,00% ao ano","1,81% ao mês e 24,00% ao ano","2,00% ao mês e 26,82% ao ano","2,24% ao mês e 26,82% ao ano"],
     correta:2,
     explicacao:"A expressão capitalizados mensalmente indica taxa nominal. A efetiva mensal sai por divisão: 24 ÷ 12 = 2% ao mês. A efetiva anual sai por composição: (1,02)¹² − 1 = 26,82%. Note que a efetiva anual supera a nominal anunciada, e é sempre assim quando a capitalização é mais frequente que o prazo da taxa.",
     erro:"Nominal: divide para achar a efetiva do período. Depois compõe para o ano. Efetiva anual > nominal."},

    {id:"q7", peso:"alto",
     enunciado:"Um título de valor nominal de R$ 10.000,00 é descontado 1 mês antes do vencimento, à taxa de 5% ao mês. Pelo desconto comercial (por fora), o valor recebido hoje é:",
     alts:["R$ 9.523,81","R$ 9.500,00","R$ 9.545,45","R$ 10.500,00"],
     correta:1,
     explicacao:"No desconto comercial a taxa incide sobre o valor nominal: D = 10.000 × 0,05 × 1 = R$ 500,00, logo o valor atual é R$ 9.500,00. O valor de R$ 9.523,81 é o resultado pelo desconto racional, colocado ali como distrator.",
     erro:"Desconto comercial (por fora): taxa sobre o VALOR NOMINAL."},

    {id:"q8", peso:"alto",
     enunciado:"Sobre a comparação entre o desconto comercial e o desconto racional, para o mesmo título, mesma taxa e mesmo prazo, é correto afirmar:",
     alts:["O desconto racional é maior, e por isso é o preferido pelos bancos.","Os dois descontos são sempre iguais, mudando apenas o nome.","O desconto comercial é maior, e o valor atual resultante é menor.","O desconto comercial é maior apenas quando o prazo excede 12 meses."],
     correta:2,
     explicacao:"O desconto comercial incide sobre o valor nominal e o racional sobre o valor atual, que é menor. Como a base do comercial é maior, o desconto comercial é sempre maior, e portanto o valor entregue ao cliente é sempre menor. É por isso que a prática bancária adota o comercial.",
     erro:"Comercial > racional, sempre. Logo o valor atual do comercial é o menor."},

    {id:"q9", peso:"alto",
     enunciado:"Um capital produziu R$ 600,00 de juros, aplicado à taxa de 3% ao mês, em juros simples, durante 4 meses. O capital aplicado foi de:",
     alts:["R$ 5.000,00","R$ 4.500,00","R$ 7.200,00","R$ 5.400,00"],
     correta:0,
     explicacao:"Parte de J = C · i · n e isola o capital: C = J ÷ (i · n) = 600 ÷ (0,03 × 4) = 600 ÷ 0,12 = R$ 5.000,00. Confere: 5.000 × 0,03 × 4 = R$ 600,00.",
     erro:"C = J ÷ (i · n). Isolar é passar dividindo o que multiplica."},

    {id:"q10", peso:"alto",
     enunciado:"Um capital de R$ 1.000,00 aplicado a 10% ao ano, em juros compostos, transformou-se em R$ 1.331,00. O prazo da aplicação foi de:",
     alts:["2 anos","3 anos","4 anos","3 anos e 6 meses"],
     correta:1,
     explicacao:"1.331 ÷ 1.000 = 1,331. Basta procurar o expoente que leva 1,10 a 1,331: 1,10 × 1,10 × 1,10 = 1,331, ou seja, 3 anos. Em prova sem calculadora, o caminho é multiplicar sucessivamente, não tentar logaritmo.",
     erro:"Para achar n em juros compostos sem calculadora, multiplique o fator sucessivamente até bater."},

    {id:"q11", peso:"medio",
     enunciado:"Em uma série uniforme de pagamentos, diz-se que a série é ANTECIPADA quando:",
     alts:["O devedor quita as parcelas antes do vencimento contratado.","A primeira parcela é paga no início do primeiro período, no instante zero.","As parcelas sofrem correção monetária no início de cada ano.","O prazo total da série é inferior a doze meses."],
     correta:1,
     explicacao:"Antecipada é termo técnico e nada tem a ver com a vontade do devedor de pagar adiantado. Significa que a primeira parcela ocorre no instante zero, na assinatura, como a entrada de um financiamento. A postecipada, que é o padrão quando o enunciado silencia, tem a primeira parcela no fim do primeiro período.",
     erro:"Antecipada = 1ª parcela no instante zero. Não é quitar antes do vencimento."},

    {id:"q12", peso:"medio",
     enunciado:"Comparando duas séries uniformes com o mesmo número de parcelas, de mesmo valor e mesma taxa, uma antecipada e outra postecipada, o valor presente:",
     alts:["Da antecipada é maior que o da postecipada.","Da postecipada é maior que o da antecipada.","É igual nas duas, pois as parcelas são iguais.","Depende exclusivamente do número de parcelas."],
     correta:0,
     explicacao:"Na série antecipada cada parcela chega um período mais cedo, sendo descontada por menos tempo. Por isso seu valor presente é maior, e equivale ao da postecipada multiplicado por (1 + i).",
     erro:"Antecipada tem valor presente MAIOR. Dinheiro mais cedo é descontado por menos tempo."},

    {id:"q13", peso:"medio",
     enunciado:"Uma aplicação rendeu 10% no ano, período em que a inflação medida foi de 5%. A taxa real de juros do período foi de aproximadamente:",
     alts:["5,00%","4,76%","15,50%","5,26%"],
     correta:1,
     explicacao:"Taxas não se subtraem quando há composição. Real = (1,10 ÷ 1,05) − 1 = 1,0476 − 1 = 4,76%. A alternativa de 5% é justamente a subtração ingênua, que é o erro que a questão procura.",
     erro:"Taxa real = [(1 + aparente) ÷ (1 + inflação)] − 1. Nunca por subtração."},

    {id:"q14", peso:"alto",
     enunciado:"Um capital é aplicado à taxa de 2% ao mês durante 2 anos. Para o cálculo do montante, o valor de n a ser utilizado é:",
     alts:["2","12","24","0,17"],
     correta:2,
     explicacao:"Taxa e prazo precisam estar na mesma unidade de tempo. Como a taxa é mensal, o prazo tem de ser expresso em meses: 2 anos são 24 meses. Usar n = 2 com taxa mensal é o erro de unidade mais frequente da disciplina.",
     erro:"Taxa e prazo SEMPRE na mesma unidade. Taxa ao mês pede n em meses."},

    {id:"q15", peso:"medio",
     enunciado:"Sobre o fracionamento do prêmio de seguro, é correto afirmar que:",
     alts:["O prêmio fracionado equivale financeiramente ao prêmio à vista, pois a soma das parcelas é idêntica.","O fracionamento configura uma série de pagamentos, e a diferença em relação ao prêmio à vista tem natureza de juros, devendo o custo ser informado ao segurado.","O fracionamento é vedado pela regulamentação, que exige pagamento único do prêmio.","O custo do fracionamento é suportado integralmente pelo corretor de seguros."],
     correta:1,
     explicacao:"Parcelar o prêmio cria uma série de pagamentos: a seguradora deixa de receber e reinvestir o valor cheio na data de início da vigência. Essa diferença tem natureza de juros e a regulamentação da SUSEP determina que o custo do fracionamento seja informado ao segurado de forma clara.",
     erro:"Prêmio fracionado é série de pagamentos. A diferença é juro e tem que ser informada ao segurado."}
  ]
};

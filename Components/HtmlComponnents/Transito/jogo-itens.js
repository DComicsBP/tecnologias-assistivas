var itens = [
    {
      "ID":"Jogo01",
      "Imagem":"../../../Assets/Image/Transito/semáfaro.png",
      "Width": 200, 
      "Height":300,
      "Title":"VOCÊ SÓ PODERÁ ATRAVESSAR A RUA SE O SINAL ESTIVER COM QUE COR?",
      "Pergunta": "../../../Assets/Audio/Transito/partida01/questao.mp3", 
      "Opcoes":{
        "opA":{
          "NomeObjeto":"A) SINAL VERDE", 
          "Imagem": "../../../Assets/Image/Transito/sinalVerde.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida01/opA.mp3",
          "Flag": false, 
          "width":63, 
          "height":150
        }, 
        "opB":{
          "NomeObjeto":"B) SINAL VERMELHO", 
          "Imagem": "../../../Assets/Image/Transito/sinalVermelho.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida01/opB.mp3",
          "Flag": true, 
          "width":70, 
          "height":150
        }, 
        "opC":{
          "NomeObjeto":" C) SINAL AMARELO", 
          "Imagem": "../../../Assets/Image/Transito/sinalAmarelo.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida01/opC.mp3",
          "Flag": false,
          "width":70, 
          "height":150
        }
  
      }
    },
     
    {
      "ID":"Jogo02",
      "Imagem":"../../../Assets/Image/Transito/paradaBus.jpg",
      "Width": 100, 
      "Height":250,
      "Title":"QUAL É A PLACA DA PARADA DE ÔNIBUS?",
      "Pergunta": "../../../Assets/Audio/Transito/partida02/questao.mp3", 
      "Opcoes":{
        "opA":{
          "NomeObjeto":"OPÇÃO A", 
          "Imagem": "../../../Assets/Image/Transito/areaPedestres.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida02/opA.mp3",
          "Flag": false, 
          "width":190, 
          "height":200
        }, 
        "opB":{
          "NomeObjeto":"OPÇÃO B", 
          "Imagem": "../../../Assets/Image/Transito/estacione.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida02/opB.mp3",
          "Flag": false, 
          "width":100, 
          "height":100
        }, 
        "opC":{
          "NomeObjeto":"OPÇÃO C", 
          "Imagem": "../../../Assets/Image/Transito/paradaPlaca.png",
          "SomNarracao": "../../../Assets/Audio/Transito/partida02/opC.m4a",
          "Flag": true, 
          "width":100, 
          "height":100
        }
  
      }
    },

    {
      "ID":"Jogo03",
      "Imagem":"../../../Assets/Image/Transito/ruaMovimentada.jpg",
      "Width": 500, 
      "Height":300,
      "Title":"ONDE VOCÊ DEVE ATRAVESSAR A RUA?",
      "Pergunta": "../../../Assets/Audio/Transito/partida03/questao.mp3", 
      "Opcoes":{
        "opA":{
          "NomeObjeto":"A) FAIXA DE PEDESTRE", 
          "Imagem": "../../../Assets/Image/Transito/beatlesjpg.jpg",
          "ImgHeight":"",
          "ImgWidth":"",
          "SomNarracao": "../../../Assets/Audio/Transito/partida03/opA.mp3",
          "Flag": true, 
          "width":250, 
          "height":200
        }, 
        "opB":{
          "NomeObjeto":"B) EM QUALQUER PARTE DA RUA", 
          "Imagem": "../../../Assets/Image/Transito/atravessarForaDaFaixa.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida03/opB.mp3",
          "Flag": false, 
          "width":250, 
          "height":160
        }
      }
    },

    {
      "ID":"Jogo04",
      "Imagem":"",
      "Width": 100, 
      "Height":100,
      "Title":"QUAL PLACA NOS ALERTA QUE É PRECISO TER CUIDADO COM ANIMAIS NA PISTA?",
      "Pergunta": "../../../Assets/Audio/Transito/partida04/questao.m4a", 
      "Opcoes":{
        "opA":{
          "NomeObjeto":"A) PLACA COM A SILUETA DE UM ANIMAL", 
          "Imagem": "../../../Assets/Image/Transito/animaisNaPista.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida04/opA.mp3",
          "Flag": true, 
          "width":100, 
          "height":100
        }, 
        "opB":{
          "NomeObjeto":"B) PLACA ESCRITO 'PARE'. ", 
          "Imagem": "../../../Assets/Image/Transito/pare.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida04/opB.mp3",
          "Flag": true, 
          "width":120, 
          "height":130
        }, 
        "opC":{
          "NomeObjeto":" C) PLACA DE CUIDADO COM A LOMBADA", 
          "Imagem": "../../../Assets/Image/Transito/lombada.jpg",
          "SomNarracao": "../../../Assets/Audio/Transito/partida04/opC.mp3",
          "Flag": true, 
          "width":120, 
          "height":130
        }
  
      }
    }, 
    
    {
      "ID":"Jogo05",
      "Imagem":"",
      "Width": 100, 
      "Height":100,
      "Title":"EXISTE UMA PLACA QUE PEDE PARA O MOTORISTA CUIDAR COM CRIANÇAS. QUE PLACA É ESSA?",
      "Pergunta": "../../../Assets/Audio/Transito/partida05/questao.mp3", 
      "Opcoes":{
        "opA":{
          "NomeObjeto":"A) PLACA COM A IMAGEM DE UM BONECO", 
          "Imagem": "../../../Assets/Image/Transito/criancas.png",
          "SomNarracao": "../../../Assets/Audio/Transito/partida05/opA.mp3",
          "Flag": true, 
          "width":200, 
          "height":200
        }, 
        "opB":{
          "NomeObjeto":"B) PLACA COM A IMAGEM DE UM BONECO EM CIMA DE LISTRAS", 
          "Imagem": "../../../Assets/Image/Transito/fixaSegurança.png",
          "SomNarracao": "../../../Assets/Audio/Transito/partida05/opB.mp3",
          "Flag": true, 
          "width":175, 
          "height":180
        }
  
      }
    }

  ]
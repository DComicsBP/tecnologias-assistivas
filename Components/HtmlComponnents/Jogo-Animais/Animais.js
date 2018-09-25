// import * as itens  from './info-jogo.js';
import  * as itens  from './info-jogo.js';

var Animais = ()=>{
    console.log(itens)
}

Animais();
/*
: import declarations may only appear at top level of a module
var questions = [];
var question = "Teste maroto"
var imageSrc = null; 
var opcaoA; 
var opcaoB;
var title = null;  
window.onload = function(){
    loadGames();
}
function loadGames() {
    $.getJSON("./info-jogo.json", function(data) {
        data.forEach(element => {
          questions.push(element)
      });
      console.log(questions)

      title = data[0].Title; 
      opcaoA= data[0].Opcoes.opA
      opcaoB = data[0].Opcoes.opB
        $("#principalImage").attr("src", function(){
            this.src = data[0].Image; 
        }); 

        $("#titleA").attr("id", function(){
            console.log('OpA ==> ',opcaoA.Imagem)
            this.innerHTML = opcaoA.NomeObjeto
        });

        $("#titleB").attr("id", function(){
            this.innerHTML = opcaoB.NomeObjeto

        });

        $("#opA").attr("id", function(){
            // console.log('OpA IMAGEM ==> ', opcaoA.Imagem);
            const src = opcaoA.Imagem;
            // console.log('SRC --> ', src);
            // console.log('opA ==> ', this)
            this.src = src;
        })
        $("#opB").attr("id", function(){
            // console.log('opB ==> ', this)
            // console.log('OPC B --> ', opcaoB.Imagem);
            const src = opcaoB.Imagem
            this.src = src;
            
        })

    });
  }
  */
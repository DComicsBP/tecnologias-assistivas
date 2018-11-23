
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
   var questions  = teste; 
   
    console.log(questions)

      title = questions[0].Title; 
      opcaoA= questions[0].Opcoes.opA
      opcaoB = questions[0].Opcoes.opB
       
        $("#principalImage").attr("src", function(){
            this.src = questions[0].Image; 
        }); 
        $("#titleA").attr("id", function(){
            console.log('OpA ==> ',opcaoA.Imagem)
            this.innerHTML = opcaoA.NomeObjeto
        });
        $("#titleB").attr("id", function(){
            this.innerHTML = opcaoB.NomeObjeto
        });
        $("#opA").attr("id", function(){
            const src = opcaoA.Imagem;
            this.src = src;
        });
        $("#opB").attr("id", function(){
            const src = opcaoB.Imagem
            this.src = src;
        });
  }
  var onMouseLeave = function (element) {
    var audio = $(element).find("audio");
    $(audio)[0].pause();
    audio[0].currentTime = 0;
    $(element).css('background-color', '#CCCCFF');
}
var onMouseEnter = function (element) {
    debugger;
    var audio = $(element).find("audio");
    $(audio)[0].play();
    $(element).css('background-color', '#FFCC33');

}
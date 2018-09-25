var Animais =  ()=>{
    console.log('Teste Animais III')
    loadGames();

}
var questions = [];
var question = "Teste maroto"
var imageSrc = null; 


function loadGames() {
    $.getJSON("./info-jogo.json", function(data) {
        data.forEach(element => {
          questions.push(element)
  
      });
        $("#principalImage").attr("src", function(){
            this.src = data[0].Image; 
                    
        }); 
    });
  }
Animais(); 
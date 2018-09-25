var Animais =  ()=>{
    console.log('Teste Animais III')
}
function loadGames() {
  
    var saida = '';
    
    var bands = [];
    
    $.getJSON("./info-jogo.json", function(data) {
      
      console.log("DATA ===>", data);
    });
  }
  
  loadGames();
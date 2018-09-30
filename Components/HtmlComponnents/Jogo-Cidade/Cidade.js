
var Cidade = (data)=>{
    console.log(data)
    var sortedID = Math.floor(Math.random() * 10); 

    console.log('Sorted ID ===>', sortedID)

      debugger; 
      loadGames();
    
}
function loadGames() {
    $.getJSON("./info-jogo.json", function(data) {
        data.forEach(element => {
          questions.push(element)
  
      });
      document.getElementById("title").innerHTML = data[1].Title; 
    });
  }

Cidade(); 
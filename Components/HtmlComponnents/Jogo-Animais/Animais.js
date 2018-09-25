var Animais =  ()=>{
    console.log('Teste Animais III')
}
var questions = [];
var question = "Teste maroto"

function loadGames() {
    $.getJSON("./info-jogo.json", function(data) {
        data.forEach(element => {
          questions.push(element)
  
      });
      document.getElementById("title").innerHTML = data[1].Title; 
    });
  }
  debugger; 
  loadGames();
  console.log(questions)
  question = questions.toString();
  $(document).ready(function() {
    $('.gallerythumbnail').on('click', function() {
        var img = $('<img />', {src    : '/Assets/Image/Animais/baleiaJubarte.png',
                                'class': 'fullImage'
                  });

        $('.showimagediv').html(img).show();
    });
});
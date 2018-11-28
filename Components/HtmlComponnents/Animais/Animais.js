    var animais = function () {
        var data = "";
    
    
        this.init = function () {
            debugger;
    
            var dados = "";
            for (let index = 0; index < itens.length; index++) {
    
                data += `
                <br />
                <br />
                <section id="$${itens[index].id}" onmouseenter="onMouseEnter(this)" onmouseleave="onMouseLeave(this)">
                    <hr>
                    <h2>${itens[index].nomeAnimal}</h2>
                    <img src="${itens[index].imagemAnimal}" id=Animais>
                    <audio src="${itens[index].audio}" loop></audio><hr>
                </section>

                    `;
            }
    
            $("#render").append(data);
        }
        
        init();
    }
    animais();

var onMouseLeave = function(element){ 
    var audio = $(element).find("audio");
    $(audio)[0].pause();
    audio[0].currentTime = 0;
    $(element).css('background-color', 'white');
    $(element).css('background-color', '#CCCCFF');
}
var onMouseEnter = function (element) {
    debugger;
    var audio = $(element).find("audio");
    $(audio)[0].play();
    
    $(element).css('background-color', '#FFCC33');
}
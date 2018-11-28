
var animais = function () {
    var data = "";
    this.init = function () {
        debugger;

        var dados = "";
        for (let index = 0; index < itens.length; index++) {

            data += `
             <br />
             <br />
                <section onmouseenter="onMouseEnter(this)" onmouseleave="onMouseLeave(this)">
                    <h2>${itens[index].nome}</h2>
                    <img src="${itens[index].imagem}" width="500" heigth="500">
                    <audio src="${itens[index].audio}"  loop></audio><br><br/>
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

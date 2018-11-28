var objeto = 
`

`

var letras = function () {
    var data = "";


    this.init = function () {
        debugger;

        var dados = "";
        for (let index = 0; index < itens.length; index++) {

            data += `
            <br />
            <br />
            <section id="${index}" onmouseenter="onMouseEnter(this)" onmouseleave="onMouseLeave(this)">
                <hr><br>
                <img src="${itens[index].Imagem}" width="${itens[index].Width}" heigth="${itens[index].Heigth}"><br><br>
                <h2>${itens[index].Nome}</h2>
                <audio src="${itens[index].Audio}"loop></audio><br><br><br>
                <hr>
            
            </section>

                `;
        }

        $("#render").append(data);
    }
    
    init();
}
letras();


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
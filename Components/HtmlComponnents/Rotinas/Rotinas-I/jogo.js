var j = 0//ath.floor(Math.random() * 3) + 0;
var count = 0;
var dados = '';
var opcoes = '';

var rotinas = function (j) {
    var count = 0;


    var carregaDados = function (j) {

        dados += `<div class="opcoes", id="${itens[j].ID}">`;

        const element = itens[j];

        for (let k = 0; k < element.Imagens.length; k++) {

            const images = element.Imagens[k];

            for (let x = 0; x < images.Imagem.length; x++) {

                const image = images.Imagem[x];

                    dados+=`<div class="row" id="${image.ID}">`
                    dados+=    `<div class="col-sm-3">`
                    dados+=      `<div class="card">`
                    dados+=        `<div class="card-body">`
                    dados+=          `<img src="${image.src}" width="150" height="200" alt="">`
                    dados+=          `<audio src="${image.narracao}"></audio>` 
                    dados+=        `</div>`
                    dados+=      `</div>`      
                    dados+=    `</div>`     
            }
        }
        dados += `</div>`;


    }

    this.init = function () {
        carregaDados(j);

        $(".sequencia").append(dados);
        $(".grupoB").hide();

        $(document).ready(function () {
            setTimeout(function () {
                $('#sequencia').hide();
            }, 7000);
        });
       // $("#sequencia").removeClass("preload");
    }

    init();
}
    ;
rotinas(j);

$("a").attr('class', function () {

    $(this).on("click", function () {
        var flag = $(this).attr('data');
        if ($(this).attr('class') === 'grupoA') {
            if (flag === 'true') {
                $(".sequencia").append(this.innerHTML)
                $(".grupoB").show();
                $(".grupoA").hide();

            }
        } else {
            if (flag === 'true') {
                $(".sequencia").append(this.innerHTML)
                $(".grupoB").hide();
             
            }


        }

    });
});
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
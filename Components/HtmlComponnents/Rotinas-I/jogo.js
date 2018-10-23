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

                dados += `<div id="${image.ID}">`
                dados += `<audio src="${image.narracao}"></audio>`
                dados += ` <img src="${image.src}" alt="">`;
                dados += `</div>`
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

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

        for (let k = 0; k < element.grupos.length; k++) {
            const ops = element.grupos[k];
            opcoes += `<div class="${ops.class}">`;

            for (let l = 0; l < ops.opcoes.length; l++) {
                count++;
                const op = ops.opcoes[l];

                console.log('Element', ops)
                opcoes += `<a href='#' class="${ops.class}" id="${op.op[5].id}" data="${op.op[1].flag}">`
                opcoes += `<div >`;
                opcoes += `<h4>`;
                opcoes += count;
                opcoes += `</h4>`;
                opcoes += `<img src="${op.op[0].src}" alt="">`;
                opcoes += `</div>`;
                opcoes += `</a>`;

            }
            opcoes += `</div>`;


        }

    }

    this.init = function () {
        carregaDados(j);
        $(".opcoes").append(opcoes);

        $(".sequencia").append(dados);
        $(".grupoB").hide();


    }

    init();
}

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

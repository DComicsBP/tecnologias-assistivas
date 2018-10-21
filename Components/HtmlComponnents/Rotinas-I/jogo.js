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
        if($(this).attr('class') === 'grupoA'){
            if($(this).attr('data') === 'true'){
                $(".sequencia").append(this.innerHTML)
                $(".grupoB").show();
                $(".grupoA").hide();

            }
        }else{
            $(".sequencia").append(this.innerHTML)
            $(".grupoB").hide();
               
        }

    });
});

    $(".grupoB").attr('class', function () {
        $(this).on("click", function () {
            debugger;
            console.log('THIS ==>', this)
        });
    });



var checkValue = function (element) {
    debugger;

    var valor = false;
    if (element === 'opABox')
        valor = itens[j].Opcoes.opA.Flag;
    else if (element === 'opBBox')
        valor = itens[j].Opcoes.opB.Flag;
    else if (element === 'opCBox')
        valor = itens[j].Opcoes.opC.Flag;
    else
        return;

    if (!valor) {
        $('#modalTitulo').attr('id', function () { this.innerHTML = "Não foi dessa vez, tentenovamente!!"; });
        $("#ImagemModal").attr("id", function () { this.src = "../../../../Assets/Image/DepoisDasRespostas/ramtaro.gif" });
    }
    if (valor) {
        $('#modalTitulo').attr('id', function () { this.innerHTML = "Parabéns, Muito Bem!!" });
        $("#ImagemModal").attr("id", function () { this.src = "../../../../Assets/Image/DepoisDasRespostas/comemoracao01.gif" });

    }
    $('#myModal').modal('show');
    setTimeout(function () {


        $('#myModal1').modal('hide')
        i = 2;
        carregaDados(i);
    }, 2000);
}
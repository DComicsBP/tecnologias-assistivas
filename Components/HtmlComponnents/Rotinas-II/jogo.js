var j = 0//ath.floor(Math.random() * 3) + 0;
var dados = '';
var opcoes = '';

var rotinas = function (j) {

    var carregaDados = function (j) {

        dados += `<div id="${itens[j].ID}" class="row">`;

        const element = itens[j];

        for (let k = 0; k < element.Imagens.length; k++) {

            const images = element.Imagens[k];

                dados += `<div class="" id="${images.Imagem.ID}" class="col-xs-6">`;
                dados += `<audio src="${images.Imagem.narracao}"></audio>`;
                dados += ` <img src="${images.Imagem.src}" alt="">`;
                dados += `</div>`;
        }
        dados += `</div>`;

        for (let k = 0; k < element.grupos.length; k++) {
            const ops = element.grupos[k];
            opcoes += `<div class="row">`;
            
            for (let l = 0; l < ops.opcoes.length; l++) {
                const op = ops.opcoes[l];
                opcoes += `<div class="${ops.class} col-xs-6">`;
                opcoes += `<a href='#' class="${ops.class}" id="${op.op.id}" data="${op.op.flag}" onclick="remove(event)">`
                opcoes +=   `<div data="${op.op.flag}">`;
                opcoes +=       `<h4>`;
                opcoes +=       `</h4>`;
                opcoes +=       `<img src="${op.op.src}" alt="">`;
                opcoes +=   `</div>`;
                opcoes += `</a>`;
                opcoes += `</div>`;

            }
            opcoes += `</div>`;


        }

    }

    this.init = function () {
            
        
        carregaDados(j);
            render(); 

            j++; 
    
    }

    init();
}

rotinas(j);

 function render(j){
     
    $(".opcoes").append(opcoes);
    $(".sequencia").append(dados);
    $(".grupoB").hide();

}

function remove(event){
    console.log('Event ===> ', event);
    var flag =  $("#"+event.currentTarget.attributes.id.value).attr("data");

    if ($("#"+event.currentTarget.attributes.id.value).attr("class") === 'grupoA') {
        if (flag === 'true') {
            $(".sequencia").append(event.currentTarget.innerHTML);
            $(".grupoB").show();
            $(".grupoA").hide();

        }
    } else {
        if (flag === 'true') {
            $(".sequencia").append(event.currentTarget.innerHTML);
            opcoes = ""; 
            dados = "";  

            $(".grupoA").show();
            $(".grupoB").show();
            $(".grupoA").remove();
            $(".grupoB").remove();
            $(".sequencia").empty();
            init(j); 
        }


    }

}


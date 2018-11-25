var count = 0;
let i = 0;

var checkSection = function () {

}
var regrasTransito = function () {


    this.init = function () {

        itens.forEach(item => {
            carregaDados(item);

        });
    }

    function carregaDados(item) {
          

        var display = 'none';
        if (count == 0) {
            display = 'block';
        }
        count++;

        var dados = `
        <section>
        <h1>
            AO CHEGAR À ESCOLA VOCÊ SE DESPEDE DA MAMÃE, GUARDA A MOCHILA, ESPERA OS COLEGAS CHEGAREM E
        </h1>

        <div class="container" style="position: relative; top: 100px;">
            <div class="card-columns d-flex justify-content-center" style="width: 1000px; height: 500px;">
                <div class="card" style=" 
                            border: 1px solid black;
                            background: url('../../../../Assets/Image/Rotina/Almoco/almoco.jpg'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                        ">
                </div>
                <div class="card" style=" 
                            border: 1px solid black;
                            background: url('../../../../Assets/Image/Rotina/Almoco/almoco.jpg'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                        ">
                </div>

                <div class="card" style=" 
                            border: 1px solid black;
                            background: url('../../../../Assets/Image/Rotina/Almoco/almoco.jpg'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                        ">
                </div>
            </div>
        </div>
        </div>

        <div class="container" style="position: relative; top: -200px;">
            <div class="card-columns d-flex justify-content-center" style="width: 1000px; height: 500px;">
                <div class="card" style=" 
                            border: 1px solid black;
                            background: url('../../../../Assets/Image/Rotina/Almoco/almoco.jpg'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                        ">
                </div>
                <div class="card" style=" 
                            border: 1px solid black;
                            background: url('../../../../Assets/Image/Rotina/Almoco/almoco.jpg'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                        ">
                </div>
            </div>
        </div>
        <br>

    </section>
    `;

        i++;

        $("#render").append(dados.trim());


    }
    init();
}
regrasTransito();
var isHide = function () {
    $(element).is(":visible");

}
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
var checkValue = function (e) {
    console.log(e);

    var modals = "";
    var idJogo = "";
    var root = e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (typeof root.children[0].children[0] === "undefined") {
        root = e.parentElement.parentElement.parentElement.parentElement.parentElement;
        modals = root.children[1];
    } else {
        modals = root.children[0].children[1];

    }
    var jogo = root.children[0].children[0];
    var idJogo = jogo.id;
    var idModals = modals.id;
    var modalTrue = modals.children[0].id;
    var modalFalse = modals.children[1].id;

    $("#" + idJogo).hide();
    $("#" + idModals).show();

    let valor = e.attributes[3].value;
    if (valor == 'true') {
        $("#" + modalTrue).show();
        $("#" + modalFalse).hide();
    } else {
        $("#" + modalFalse).show();
        $("#" + modalTrue).hide();

    }
}
var renderizaPartidaAnterior = function (event) {
    console.log(event);
    var path = event.path || (event.composedPath && event.composedPath());
    var foundSection; 
    var foundDiv;
    path.forEach(function (element) {
        if(element.tagName == "SECTION"){
            foundSection = element; 
        }
    });

    if(typeof foundSection.children[0].children[1] == "undefined"){
        $("#"+foundSection.children[1].id ).hide();      
    }else{
        $("#"+foundSection.children[0].children[1].children[1].id ).hide();
    }
    $("#" +foundSection.children[0].children[0].id).show(); 
}
var renderizaPartidaPosterior = function (event) {
    var idNextSection = "";
    var index = 5;
    var path = event.path || (event.composedPath && event.composedPath());

    if (path[5].nextElementSibling.nextElementSibling == null || typeof path[5].nextElementSibling.nextElementSibling === "undefined") {
        if (path[4].nextElementSibling == null) {
            idNextSection = path[5].nextElementSibling.id;
        } else {
            idNextSection = path[4].nextElementSibling.nextElementSibling.nextElementSibling.id;
        }

        index = 4;
    } else {
        idNextSection = path[5].nextElementSibling.nextElementSibling.nextElementSibling.id
    }
    if (typeof idNextSection !== "undefined") {
        $("#" + idNextSection).show();
    }

    var idCurrentlySection = path[index].id;
    $("#" + idCurrentlySection).hide();
}


/*var j = 0//ath.floor(Math.random() * 3) + 0;
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
}*/ 


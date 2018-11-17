var arraySound = [$("#opAAudio"), $("#opBAudio"), $("#opCAudio"), $("#questaoAudio")];
debugger;
var count = 0; 
let i = 0; 
/*
*/ 
var checkSection = function(){

}

var regrasTransito = function () {
   

    this.init = function () {
        
        itens.forEach(item => {
            carregaDados(item); 
            // events(); 
           
        });
    }

    function carregaDados(item) {
        let opcaoC = "";
        if (typeof item.Opcoes.opC !== "undefined") {

            opcaoC = `<div class="card questionCard opC" style="width: 18rem; cursor: pointer;" id="opCBox" data-flag="${item.Opcoes.opC.Flag}" data-modal ="${ item.Opcoes.opC.Modal}" onclick="checkValue(this)" onmouseenter="onMouseEnter(this)" onmouseleave="onMouseLeave(this)">
                                <audio id="opCAudio" controls autoplay src="${item.Opcoes.opC.SomNarracao}" hidden>
                                </audio>    
                                <h4 id="opCTexto">${item.Opcoes.opC.NomeObjeto}</h4>
                                <img class="" src="${item.Opcoes.opC.Imagem}" height="${item.Opcoes.opC.height}" width="${item.Opcoes.opC.width}" id="opC">
                                <br>
                                <br>
                            </div>`;

        }

        let imagemPrincipal =
            `<div class="card" style="width: 28rem;">
                <img class="card-img-top" src="${item.Imagem}" id="principalImage" height="${item.Height}" width="${item.Width}"> 
             <div />`;

        if (typeof item.Imagem === "undefined" || item.Imagem === "" || item.Imagem === null) {
            imagemPrincipal = "";
        }
        var display = 'none';
        if(count == 0){
            display = 'block'; 
        }
         count ++;

        var dados = `
    <br /> <br />
    <section id="${item.ID}" data-indice = "${i}" style="display:${display};">
        <div class="container" id="${item.IDJogoDiv}">
            <div class="row" id="ToHide${i}">
                <div class="card-body">
                    <div class="">
                        <audio id=""  src="${item.Pergunta}"></audio>

                        <h1 id="title">${item.Title}</h1>
                            `+ imagemPrincipal + `
                    </div>
                    <br>
                    <br>
                    <div style="display: table-row" class="card-columns options">
                        <div class="card questionCard opA" style="width: 18rem; cursor: pointer" id="opABox" data-flag="${item.Opcoes.opA.Flag}" data-modal ="${ item.Opcoes.opA.Modal}" onclick="checkValue(this)" onmouseenter="onMouseEnter(this)" onmouseleave="onMouseLeave(this)">
                            <h4 id="titleA" id="opATexto">${item.Opcoes.opA.NomeObjeto}</h4>
                            <img class="" src="${item.Opcoes.opA.Imagem}" id="opA" height="${item.Opcoes.opA.height}" width="${item.Opcoes.opA.width}">
                            <audio id="opAAudio" controls="controls" src="${item.Opcoes.opA.SomNarracao}" hidden></audio>
                            <br>
                            <br>
                        </div>
                        <div class="card questionCard opB" style="width: 18rem; cursor: pointer;" id="opBBox" data-flag="${item.Opcoes.opB.Flag}" data-modal ="${ item.Opcoes.opB.Modal}" onclick="checkValue(this)" onmouseenter="onMouseEnter(this)" onmouseleave="onMouseLeave(this)">
                            <audio id="opBAudio" controls autoplay src="${item.Opcoes.opB.SomNarracao}" hidden>
                            </audio>
                            <h4 id="opBTexto">${item.Opcoes.opB.NomeObjeto}</h4>
                            <img class="" src="${item.Opcoes.opB.Imagem}" height="${item.Opcoes.opB.height}" width="${item.Opcoes.opB.width}" id="opB">
                            <br>
                            <br>
                        </div>` + opcaoC + ` 
                    </div>
                </div>
            </div>
        </div>
        
    <div id="modals${i}"> 
        <div id="${item.IDModal}_TRUE${i}" style="display:none;" data-flag="true" class="myModal"> 
            <div>
                <h1>PARABÉNS!, JOGUEA PRÓXIMA PARTIDA</h1>
                <img src="../../../Assets/Image/DepoisDasRespostas/aligator.gif">
                <audio src="" autoplay ></audio>  
                <br />
                <br />
                <button type="button" class="btn btn-success" id="voltar${i}" onclick="renderizaPartidaPosterior(event)"> <- VOLTAR</button> 
            </div>
        </div>
        
        <div id="${item.IDModal}_FALSE${i}" style="display:none;" data-flag="false" class="myModal"> 
            <div>
                <h1>NÃO DESISTA, TENTE NOVAMENTE!</h1>
                <img src="../../../Assets/Image/DepoisDasRespostas/aligator.gif" id="">
                <audio src="" autoplay ></audio>
                <br />
                <br />
                <button type="button" class="btn btn-secondary" id="voltar${i}" onclick="renderizaPartidaAnterior(event)"> <- VOLTAR</button> 
            </div>
        </div>
    <div/>
    </section>  
    `;


    $("#render").append(dados.trim()); 
    
      i++; 

    }
    init();
}
regrasTransito();

var onMouseLeave = function(element){
        var audio = $(element).find("audio");
        $(audio)[0].pause();
        audio[0].currentTime = 0;
        $(element).css('background-color', 'white');
}

var onMouseEnter = function(element){
    var audio = $(element).find("audio");
    console.log('Audio ==->', audio)
    $(audio)[0].play();
    $(element).css('background-color', 'blue');
    
}

var checkValue = function (e) {
  console.log(e); 
var root = e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
var idJogo = root.childNodes[1].childNodes[1].id; 
var modals = root.childNodes[1].childNodes[3];
var idModals = modals.id; 
var modalTrue = modals.children[0].id;
var modalFalse = modals.children[1].id;

$("#"+idJogo).hide();
$("#"+idModals).show();
        
    let valor = e.attributes[3].value;
    
    if(valor == 'true')  {
        $("#"+modalTrue).show(); 
    }else{
        $("#"+modalFalse).show();
    }
        
}

var renderizaPartidaAnterior = function (event){
    console.log(event);
    $("#"+ event.path[5].children[0].children[0].id).show();
    $("#"+event.path[2].id).hide();  
    debugger;

}

var renderizaPartidaPosterior = function (event) { 
    var idNextSection  = event.path[5].nextElementSibling.nextElementSibling.nextElementSibling.id ; 
    var idCurrentlySection = event.path[5].id; 
    $("#"+idNextSection).show(); 
    $("#"+ idCurrentlySection).hide(); 
    debugger; 
    
 }
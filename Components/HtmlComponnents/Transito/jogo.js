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
    <br /> <br /><section id="${item.ID}" data-indice = "${i}" style="display:${display};">
        <div class="container" id="div-content">
            <div class="row">
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

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitulo"></h5>

               </div>
                <div class="modal-body">
                    <center>
                        <img src="" alt="" id="ImagemModal" height="" width="">
                    </center>
                </div>
                <div class="modal-footer">
                        <button class="btn btn-danger incorreto" id="${i}">VOLTAR</button>
                       <button class="btn btn-info correto" id="${i}" onclick="proximaPartida(this, ${i})">CONTINUAR</button>
                </div>
            </div>
        </div> 
    </div>
     
    </section>`;

    $("#render").append(dados); 
    
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
    
    debugger;

    let valor = e.attributes[3].value;
        $("#ImagemModal").attr("id", function () { this.src = `${e.attributes[4].value}` });

        $('.myModal').modal({
            backdrop: 'static',
            keyboard: false  // to prevent closing with Esc button (if you want this too)
        }).show(); 
  

}

var proximaPartida = function (element, i) { 
    console.log(element)
    debugger; 
    
    if($('#.yModal').modal('hide')){
        $('.myModal').modal('hide')
    }

    $('.myModal').modal('hide'); 
    $(`[data-indice="${i+1}"]`).show(); 
    $(`[data-indice="${i}"]`).hide(); 
    
    
    

 }
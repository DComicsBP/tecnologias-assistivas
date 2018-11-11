var arraySound = [$("#opAAudio"), $("#opBAudio"), $("#opCAudio"), $("#questaoAudio")];
debugger;


var regrasTransito = function () {
    
    this.init = function(i){
    itens.forEach(item => {
            carregaDados(item)

    });
}
    function carregaDados(item){
        let opcaoC = ""; 
        if(typeof item.Opcoes.opC !== "undefined"){
        
            opcaoC = ` <div class="card questionCard opC" style="width: 18rem; cursor: pointer;" id="opCBox" data-flag="${item.Opcoes.opC.Flag}" onclick="checkValue(this)">
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

        if(typeof item.Imagem === "undefined" || item.Imagem === "" || item.Imagem === null){
            imagemPrincipal = "";         
        }
        var dados = `<section id="${item.ID}">
        <div class="container" id="div-content">
            <div class="row">
                <div class="card-body">

                    <div class="">
                        <audio id=""  src="${item.Pergunta}"></audio>

                        <h1 id="title">${item.Title}</h1>
                            `+imagemPrincipal + `
                       
                    </div>
                    <br>
                    <br>
                    <div style="display: table-row" class="card-columns options">
                        <div class="card questionCard opA" style="width: 18rem; cursor: pointer" id="opABox" data-flag="${item.Opcoes.opA.Flag}" onclick="checkValue(this)">
                            <h4 id="titleA" id="opATexto">${item.Opcoes.opA.NomeObjeto}</h4>
                            <img class="" src="${item.Opcoes.opA.Imagem}" id="opA" height="${item.Opcoes.opA.height}" width="${item.Opcoes.opA.width}">
                            <audio id="opAAudio" controls="controls" src="${item.Opcoes.opA.SomNarracao}" hidden></audio>
                            <br>
                            <br>
                        </div>
                        <div class="card questionCard opB" style="width: 18rem; cursor: pointer;" id="opBBox" data-flag="${item.Opcoes.opB.Flag}" onclick="checkValue(this)">
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

    </section>`; 

    $("#render").append(dados); 
    }

    init();
    

}
regrasTransito(); 

var checkValue = function (e) {
    console.log(e); 
    var element = e.id; 
    debugger;

    let valor = e.attributes[3].value; 

       
    if (valor == "false") {   
        $('#modalTitulo').attr('id', function () { this.innerHTML = "Não foi dessa vez, tentenovamente!!"; });
        $("#ImagemModal").attr("id", function () { this.src = "../../../Assets/Image/DepoisDasRespostas/ramtaro.gif" });
    }
    if (valor == "true") {
        $('#modalTitulo').attr('id', function () { this.innerHTML = "Parabéns, Muito Bem!!" });
        $("#ImagemModal").attr("id", function () { this.src = "../../../Assets/Image/DepoisDasRespostas/comemoracao01.gif" });
   
    }
    $('#myModal').modal('show');
    setTimeout(function () {
       

        $('#myModal1').modal('hide')
        i = 2; 
        carregaDados(i);
    }, 2000);

}
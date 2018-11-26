var count = 0;
let i = 0;

var regrasTransito = function () {


    this.init = function () {

        itens.forEach(item => {
            carregaDados(item);

        });
    }

    var lista = function(item,i){
        return `
        <section id=${item.id}>
            <h1>${item.title}</h1>
            <div class="container" style="position: relative; top: 100px;">
                <div class="card-columns d-flex justify-content-center" style="width: 1000px; height: 500px;">
                <div class="card" style=" 
                                border: 5px solid white;
                                background: url('${item.imagens[0].src}'); 
                                background-repeat: no-repeat;
                                background-position: center; 
                                background-size: ${item.imagens[0].width} ${item.imagens[0].width};
                                width: 300px; 
                                height: 150px;
                    ">
                    </div>
                    <div class="card" style=" 
                                border: 5px solid white;
                                background: url('${item.imagens[1].src}'); 
                                background-repeat: no-repeat;
                                background-position: center; 
                                background-size: ${item.imagens[1].width} ${item.imagens[1].width};
                                width: 300px; 
                                height: 150px;
                            ">
                    </div>

                    <div class="card" style=" 
                                border: 5px solid white;
                                background: url('${item.imagens[2].src}'); 
                                background-repeat: no-repeat;
                                background-position: center; 
                                background-size: ${item.imagens[2].width} ${item.imagens[2].width};
                                width: 300px; 
                                height: 150px;
                            ">
                    </div>
                    <div class="card" style=" 
                                border: 5px solid white;
                                background: url('${item.imagens[3].src}'); 
                                background-repeat: no-repeat;
                                background-position: center; 
                                background-size: ${item.imagens[3].width} ${item.imagens[3].width};
                                width: 300px; 
                                height: 150px;
                            ">
                    </div>
                </div>
                <div style="position: relative; top:-350px;left:-100px;">`+ opcoes(item) +`</div>

            </div>
           `+ model(item,i) +`
        </section>
    `;

    }

   var opcoes = function(item,i){
    return  `
    <div id="opcoes${i}">
    <div class="container" style="position: relative; top: 100px;">
        <div class="card-columns d-flex justify-content-center" style="width: 1000px; height: 500px;">
            <div class="card" id="card" style=" 
                            border: 5px solid white;
                            background: url('${item.opcoes.opA.src}'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                "data-flag="${item.opcoes.opA.flag}" onclick="checkValue(event)">
            </div>

            <div class="card" id="card" style=" 
                            border: 5px solid white;
                            background: url('${item.opcoes.opB.src}'); 
                            background-repeat: no-repeat;
                            background-position: center; 
                            background-size: 300px 150px;
                            width: 300px; 
                            height: 150px;
                "data-flag="${item.opcoes.opA.flag}" onclick="checkValue(event)>
            </div>
        </div>
    </div>
    `; 

   };  

   var model = function(item, i){
    return `
    <div id="modRespostaCorreta${i}">
            <h1>MUITO BEM! CONTINUE A JOGAR!</h1>
            <div class="container" style="position: relative; top: 100px;">
                <div class="card-columns d-flex justify-content-center" style="width: 1000px; height: 500px;">
                    <div class="card" style=" 
                                            border: 5px solid white;
                                            background: url('${item.imagens[0].src}'); 
                                            background-repeat: no-repeat;
                                            background-position: center; 
                                            background-size: ${item.imagens[0].width} ${item.imagens[0].height};
                                            width: 300px; 
                                            height: 150px;
                    ">
                    </div>
                    <div class="card" style=" 
                                            border: 5px solid white;
                                            background: url('${item.imagens[0].src}'); 
                                            background-repeat: no-repeat;
                                            background-position: center; 
                                            background-size: ${item.imagens[0].width} ${item.imagens[0].height};
                                            width: 300px; 
                                            height: 150px;
                    ">
                    </div>
                    <div class="card" style=" 
                                border: 5px solid white;
                                background: url('${item.imagens[0].src}'); 
                                background-repeat: no-repeat;
                                background-position: center; 
                                background-size: ${item.imagens[0].width} ${item.imagens[0].height};
                                width: 300px; 
                                height: 150px;
                    ">
                    </div>
                    <div class="card" style=" 
                                    border: 5px solid white;
                                    background: url('${item.imagens[0].src}'); 
                                    background-repeat: no-repeat;
                                    background-position: center; 
                                    background-size: ${item.imagens[0].width} ${item.imagens[0].height};
                                    width: 300px; 
                                    height: 150px;
                    ">
                    </div>
                </div>
            </div>
            <img src="../../../../Assets/Image/DepoisDasRespostas/emojiCorreto.jpg" alt="" srcset="" style="position:relative; top:-200px;">

            <button type="button" class="btn btn-success" style="position:relative; left:-150px" width="100" heigth="100">CONTINUAR</button>
        </div>
        <div id="modRespostaIncorreta">
            <h1>NÃO FOI DESSA VEZ. TENTE NOVAMENTE, VOCÊ CONSEGUE!</h1>
            <img src="../../../../Assets/Image/DepoisDasRespostas/emojiPensativo.jpeg" alt="" srcset="" style="position:relative; top: 50px; left: 50px">
            <button type="button" class="btn btn-secondary" style="position:relative; left:-170px;top: 250px" width="100"
            heigth="100">VOLTAR</button>
        </div> 
    `; 
   }; 

   function carregaDados(item) {
        count++;
        
        $("#render").append(lista(item,i).trim());
        i++;
    }
    init();
}

regrasTransito();

var onMouseLeave = function (element) {
    var audio = $(element).find("audio");
    $(audio)[0].pause();
    audio[0].currentTime = 0;
    $(element).css('background-color', 'white');
    $(element).css('background-color', '#CCCCFF');
};

var onMouseEnter = function (element) {
    debugger;
    var audio = $(element).find("audio");
    $(audio)[0].play();

    $(element).css('background-color', '#FFCC33');
};

var checkValue = function (e) {
    console.log('Event ==>', e)
    var flag = e.target.attributes[3]; 
        if (flag === 'true') {

        } else if (flag === 'false') {
        
    }
    
};

var renderizaPartidaAnterior = function (event) {
    console.log(event);
    var path = event.path || (event.composedPath && event.composedPath());
    var foundSection;
    var foundDiv;
    path.forEach(function (element) {
        if (element.tagName == "SECTION") {
            foundSection = element;
        }
    });

    if (typeof foundSection.children[0].children[1] == "undefined") {
        $("#" + foundSection.children[1].id).hide();
    } else {
        $("#" + foundSection.children[0].children[1].children[1].id).hide();
    }
    $("#" + foundSection.children[0].children[0].id).show();
};

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
};


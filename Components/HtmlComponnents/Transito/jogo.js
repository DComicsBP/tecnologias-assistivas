var arraySound = [$("#opAAudio"), $("#opBAudio"), $("#opCAudio"), $("#questaoAudio")];
var j = 3//ath.floor(Math.random() * 3) + 0;
debugger;


var regrasTransito = function (i) {
    
    function carregaDados(i){
        var dados = `<section id="${itens[i].ID}">
        <div class="container" id="div-content">
            <div class="row">
                <div class="card-body">

                    <div class="">
                        <audio id="${itens[i].Pergunta}" controls autoplay src=""></audio>

                        <h1 id="title"></h1>
                        <div class="card" style="width: 28rem;">
                            <img class="card-img-top" src="${itens[i].Imagem}" id="principalImage" height="" width="">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div style="display: table-row" class="card-columns options">
                        <div class="card questionCard opA" style="width: 18rem; cursor: pointer" id="opABox" onclick="checkValue(this.id)">

                            <h4 id="titleA" id="opATexto"></h4>
                            <img class="" src="" id="opA" height="" width="">
                            <audio id="opAAudio" controls="controls" src="" hidden></audio>
                            <br>
                            <br>
                        </div>

                        <div class="card questionCard opB" style="width: 18rem; cursor: pointer;" id="opBBox" onclick="checkValue(this.id)">
                            <audio id="opBAudio" autoplpay="" controls="controls" src="" hidden>
                            </audio>
                            <h4 id="opBTexto"></h4>
                            <img class="" src="" height="" width="" id="opB">
                            <br>
                            <br>
                        </div>

                        <div class="card questionCard opC" style="width: 18rem; cursor: pointer;" id="opCBox" onclick="checkValue(this.id)">
                            <audio id="opCAudio" autoplpay="" controls="controls" src="" hidden>
                            </audio>
                            <h4 id="opCTexto"></h4>
                            <img class="" src="" id="opC" height="" width="">
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>`; 



    }
    
    var count = 0;
    $(".questionCard").on("mouseenter", function () {
        var audio = $(this).find("audio");
        if ($("#opAAudio")[0].paused && $("#opBAudio")[0].paused && $("#opCAudio")[0].paused && $("#questaoAudio")[0].paused) {
            $(this).css('background-color', 'blue');
            $(audio)[0].play();
        }
    });

    $(".questionCard").on("mouseleave", function () {
        var audio = $(this).find("audio");
        $(audio)[0].pause();
        audio[0].currentTime = 0;
        $(this).css('background-color', 'white');
    });
    var carregaDados = function (j) {
        $("#questaoAudio").attr("id", function () {
            
            this.src = itens[j].Pergunta;
        });
        $("#title").attr("id", function () {
            this.innerHTML = itens[j].Title;
        });
        $("#principalImage").attr("id", function () {
            
            if(itens[j].Imagem== ''){
                $(this).hide()
            }else{
                this.src = itens[j].Imagem;
                this.width = itens[j].Width; 
                this.height = itens[j].Height;
            }
             
        });
        $(".opA").attr("class", function () {

            $("#opA").attr("id", function () {
                this.src = itens[j].Opcoes.opA.Imagem;
                this.width = itens[j].Opcoes.opA.width;
            });

            $("#titleA").attr("id", function () {
                this.innerHTML = itens[j].Opcoes.opA.NomeObjeto;
            });
            $("#opAAudio").attr("id", function () {
                this.src = itens[j].Opcoes.opA.SomNarracao;
            });
        });

        $(".opB").attr("class", function (param) {

            $("#opB").attr("id", function () {
                this.src = itens[j].Opcoes.opB.Imagem;
                this.width = itens[j].Opcoes.opB.width;
                this.height = itens[j].Opcoes.opB.height;
            });

            $("#opBTexto").attr("id", function () {
                this.innerHTML = itens[i].Opcoes.opB.NomeObjeto;
            })
            $("#opBAudio").attr("id", function () {
                this.src = itens[j].Opcoes.opB.SomNarracao;
            });


        });

        if (typeof itens[j].Opcoes.opC === 'undefined') {
            $("#opCBox").hide();
        }
        else {
            $(".opC").attr("class", function () {
                console.log('This ===>', this)

                $("#opC").attr("id", function () {

                    this.src = itens[j].Opcoes.opC.Imagem;
                    this.width = itens[j].Opcoes.opC.width;
                    this.height = itens[j].Opcoes.opC.height;
                });

                $("#opCTexto").attr("id", function () {
                    this.innerHTML = itens[j].Opcoes.opC.NomeObjeto;
                })

                $("#opCAudio").attr("id", function () {
                    this.src = itens[j].Opcoes.opC.SomNarracao;
                });
            });

        }

    }

    this.init = function () {
    
    for (let index = 0; index < itens.length; index++) {
        carregaDados(index);
    }
        

    }

    init();
}

regrasTransito(j);

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
        $("#ImagemModal").attr("id", function () { this.src = "../../../Assets/Image/DepoisDasRespostas/ramtaro.gif" });
    }
    if (valor) {
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
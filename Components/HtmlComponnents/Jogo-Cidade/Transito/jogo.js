var i = 1;
var arraySound = [$("#opAAudio"), $("#opBAudio"), $("#opCAudio"), $("#questaoAudio")];

var regrasTransito = function () {
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
   
    var carregaDados = function () {

        $("#questaoAudio").attr("id", function () {
            this.src = itens[i].Pergunta;
        });

        $("#title").attr("id", function () {
            this.innerHTML = itens[i].Title;
        });
        $("#principalImage").attr("id", function () {
            this.src = itens[i].Imagem;
        });
        $(".opA").attr("class", function () {

            $("#opA").attr("id", function () {
                this.src = itens[i].Opcoes.opA.Imagem;
            });

            $("#titleA").attr("id", function () {
                this.innerHTML = itens[i].Opcoes.opA.NomeObjeto;
            })
            $("#opAAudio").attr("id", function () {
                this.src = itens[i].Opcoes.opA.SomNarracao;
            });
        });

        $(".opB").attr("class", function (param) {

            $("#opB").attr("id", function () {
                this.src = itens[i].Opcoes.opB.Imagem;
            });

            $("#opBTexto").attr("id", function () {
                this.innerHTML = itens[i].Opcoes.opB.NomeObjeto;
            })
            $("#opBAudio").attr("id", function () {
                this.src = itens[i].Opcoes.opB.SomNarracao;
            });

        });

        if (typeof itens[i].Opcoes.opC === 'undefined') {
            $("#opCBox").hide();
        }
        else {
            $(".opC").attr("class", function () {
                console.log('This ===>', this)

                $("#opC").attr("id", function () {

                    this.src = itens[i].Opcoes.opC.Imagem;
                });

                $("#opCTexto").attr("id", function () {
                    this.innerHTML = itens[i].Opcoes.opC.NomeObjeto;
                })

                $("#opCAudio").attr("id", function () {
                    this.src = itens[i].Opcoes.opC.SomNarracao;
                });
            });

        }

    }
    this.init = function () {
        carregaDados();

    }

    init();
}

regrasTransito();

var checkValue = function (element) {
    debugger;

    var valor = false;
    if (element === 'opABox') {
        valor = itens[i].Opcoes.opA.Flag;
    }
    else if (element === 'opBBox')
        valor = itens[i].Opcoes.opB.Flag;

    else if (element === 'opCBox')
        valor = itens[i].Opcoes.opC.Flag;
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
    }, 2000);

}
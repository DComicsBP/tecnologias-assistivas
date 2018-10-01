var regrasTransito = function () {

    var carregaDados = function () {
        $(".questionCard").on("mouseenter", function () {
            $("audio").attr("id", () => {

            });
        });
        $("#questaoAudio").attr("id", function () {
            this.src = itens[0].Pergunta;
        });
        $("#title").attr("id", function () {
            this.innerHTML = itens[0].Title;
        });
        $("#principalImage").attr("id", function () {
            this.src = itens[0].Imagem;
        });
        $(".opA").attr("class", function () {

            $("#opA").attr("id", function () {
                this.src = itens[0].Opcoes.opA.Imagem;
            });

            $("#titleA").attr("id", function () {
                this.innerHTML = itens[0].Opcoes.opA.NomeObjeto;
            })
            $("#opAAudio").attr("id", function () {
                this.src = itens[0].Opcoes.opA.SomNarracao;
            });
        });

        $(".opB").attr("class", function (param) {
            $("#opB").attr("id", function () {
                this.src = itens[0].Opcoes.opB.Imagem;
            });

            $("#opBTexto").attr("id", function () {
                this.innerHTML = itens[0].Opcoes.opB.NomeObjeto;
            })
            $("#opBAudio").attr("id", function () {
                this.src = itens[0].Opcoes.opB.SomNarracao;
            });

        });

        $(".opC").attr("class", function (param) {
            $("#opC").attr("id", function () {
                this.src = itens[0].Opcoes.opC.Imagem;
            });

            $("#opCTexto").attr("id", function () {
                this.innerHTML = itens[0].Opcoes.opC.NomeObjeto;
            })
            $("#opCAudio").attr("id", function () {
                this.src = itens[0].Opcoes.opC.SomNarracao;
            });


        });
    }

   

    this.init = function () {
        carregaDados(); 
    }

    init();
}


regrasTransito(); 

var checkValue = function (element) {
    debugger; 
    console.log(element); 
    var valor; 
    if(element === 'opABox'){
        valor = itens[0].Opcoes.opA.Flag;
    }
    else if(element === 'opBBox')
        valor = itens[0].Opcoes.opB.Flag;
    else if(element === 'opCBox')
        valor = itens[0].Opcoes.opC.Flag;
    else
        return; 
   
    if(!valor){
        $('#modalTitulo').attr('id', function(){ this.innerHTML = "Não foi dessa vez, tentenovamente!!";});
        $("#ImagemModal").attr("id", function(){this.src = "../../../../Assets/Image/DepoisDasRespostas/ramtaro.gif"});
    }
    if(valor){
        $('#modalTitulo').attr('id', function(){ this.innerHTML = "Parabéns, Muito Bem!!"});
        $("#ImagemModal").attr("id", function(){this.src = "../../../../Assets/Image/DepoisDasRespostas/happydog.gif"});
  
    }
    $('#myModal').modal('show');
        setTimeout(function () {
            $('#myModal1').modal('hide')
        }, 2000);

}
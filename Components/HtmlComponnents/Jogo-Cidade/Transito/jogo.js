var regrasTransito = function () {
var i = 0;
    var carregaDados = function () {
        $(".questionCard").on("mouseenter", function () {
            $("audio").attr("id", () => {

            });
        });
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

        
        if(typeof itens[i].Opcoes.opC === 'undefined'){
            $("#opCBox").hide();                
        }
       else{
            $(".opC").attr("class", function (param) {
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
    console.log(element); 
    var valor; 
    if(element === 'opABox'){
        valor = itens[2].Opcoes.opA.Flag;
    }
    else if(element === 'opBBox')
        valor = itens[2].Opcoes.opB.Flag;
    else if(element === 'opCBox')
        valor = itens[2].Opcoes.opC.Flag;
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
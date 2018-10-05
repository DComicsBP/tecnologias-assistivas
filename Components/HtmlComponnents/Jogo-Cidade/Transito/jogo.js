var i = 0;
var arraySound  = [$ ("#opAAudio").attr("id"), $("#opBAudio").attr("id"), $("#opCAudio").attr("id"), $("#questaoAudio").attr("id") ];  
var regrasTransito = function () {
    var count = 0; 
    $(".questionCard").on("mouseenter", function () {
        var isPaused = false;
            debugger;  
            var  audio = $(this).find("audio"); 
            console.log(audio)
             $(audio)[0].play()

             console.log('AUDIO ===>',$(audio)) 

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

        
        if(typeof itens[i].Opcoes.opC === 'undefined'){
            $("#opCBox").hide();                
        }
       else{
            $(".opC").attr("class", function () {
                console.log('This ===>', this)
               
                $("#opC").attr("id", function ()    {

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
    if(element === 'opABox'){
        valor = itens[i].Opcoes.opA.Flag;
    }
    else if(element === 'opBBox')
        valor = itens[i].Opcoes.opB.Flag;

    else if(element === 'opCBox')
        valor = itens[i].Opcoes.opC.Flag;
    else
        return; 
        
    if(!valor){
        $('#modalTitulo').attr('id', function(){ this.innerHTML = "Não foi dessa vez, tentenovamente!!";});
        $("#ImagemModal").attr("id", function(){this.src = "../../../../Assets/Image/DepoisDasRespostas/ramtaro.gif"});
    }
    if(valor){
        $('#modalTitulo').attr('id', function(){ this.innerHTML = "Parabéns, Muito Bem!!"});
        $("#ImagemModal").attr("id", function(){this.src = "../../../../Assets/Image/DepoisDasRespostas/comemoracao01.gif"});
  
    }
    $('#myModal').modal('show');
        setTimeout(function () {
            $('#myModal1').modal('hide')
        }, 2000);

}
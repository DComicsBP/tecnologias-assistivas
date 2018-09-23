$("a").on("click", (data)=>{
    var id = data.currentTarget.id; 

    if(id === "Animais"){
        console.log(id)
        Animais()

    }else if(id === "Estacoes"){
        console.log(id)
        Estacoes()

    }else if(id === "Cidade"){
        console.log(id)
        Cidade()
    }
   
});


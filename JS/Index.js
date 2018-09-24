$("a").on("click", (data)=>{
    var id = data.currentTarget.id; 
    switch(id){
        case "Animais": Animais(); break; 
        case "Estacoes": Estacoes(); break; 
        case "Cidade": Cidade(); break; 
        default: break; 
    }
});


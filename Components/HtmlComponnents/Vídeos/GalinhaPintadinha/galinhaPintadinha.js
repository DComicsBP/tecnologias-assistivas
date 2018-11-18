var galinhaPintadinha = function () {

    
    this.init = function () {
        var data = ""; 
       for (let index = 0; index < itens.length; index++) {
        data  += carregaDados(index);        
           
       }

    }

    $("#render").append("data")
    init();
}

var carregaDados = function (index) {
    var dados = 
    `
    <section id="${itens[index].id}" onmouseenter="" onmouseover="">
        <h4 id="${itens[index].Título}">Titulo</h4>
            <video width="720" height="540" controls>
                <source src="${itens[index].src}" type="video/mp4">
                Seu Browser não suporta a tag Vídeo. 
             </video>
    </section>
    `; 
    return dados; 
}

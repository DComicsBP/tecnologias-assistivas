var mundoBita = function () {
    var data = "";


    this.init = function () {
        debugger;

        var dados = "";
        for (let index = 0; index < itens.length; index++) {

            data += `
            <br />
            <br />
            <section id="${itens[index].id}" onmouseenter="" onmouseover="">
                <hr>
                <h1 id="tituloG${index}" class="galinhaPintadinha">${itens[index].Título}</h1>
                <hr>   
                <video width="720" height="540" controls>
                        <source src="${itens[index].src}" type="video/mp4">
                        Seu Browser não suporta a tag Vídeo. 
                    </video>
            </section>
    `;
        }

        $("#render").append(data);
    }
    
    init();
}
mundoBita();

var carregaDados = function () {


}

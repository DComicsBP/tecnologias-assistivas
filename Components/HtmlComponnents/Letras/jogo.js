var objeto = 
`

`

var animais = function () {
    var data = "";


    this.init = function () {
        debugger;

        var dados = "";
        for (let index = 0; index < itens.length; index++) {

            data += `
            <br />
            <br />
            <section id="${index}">
                <img src="${itens[index].Imagem}" width="${itens[index].Width}" heigth="${itens[index].Heigth}"><br>
                <h2>${itens[index].Nome}</h2>
                <h3>Ouvir</h3><audio src="${itens[index].Audio}" controls controls loop></audio><br><br>
                <hr>
            </section>

                `;
        }

        $("#render").append(data);
    }
    
    init();
}
animais();


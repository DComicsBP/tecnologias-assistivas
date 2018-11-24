    var animais = function () {
        var data = "";
    
    
        this.init = function () {
            debugger;
    
            var dados = "";
            for (let index = 0; index < itens.length; index++) {
    
                data += `
                <br />
                <br />
                <section id="$${itens[index].id}">
                    <h2>${itens[index].nomeAnimal}</h2>
                    <img src="${itens[index].imagemAnimal}" id=Animais>
                    <h3>Ouvir</h3> 
                    <audio src="${itens[index].audio}" controls controls loop></audio><hr>
                </section>

                    `;
            }
    
            $("#render").append(data);
        }
        
        init();
    }
    animais();
    
    
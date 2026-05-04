document.addEventListener('DOMContentLoaded', (evento)=>{

    let bloco = document.createElement("div");
    bloco.innerHTML = "<strong>Bloco</strong>";

    bloco.style.backgroundColor = "darkblue";
    bloco.style.fontSize ="16px";
    bloco.style.color = "white";
    bloco.style.width = "100px";
    bloco.style.height = "100px";
    bloco.style.display = "flex";
    bloco.style.justifyContent = "center";
    bloco.style.alignItems = "center";

    document.body.appendChild(bloco);

    bloco.addEventListener('click', evento => {
        evento.preventDefault();
        bloco.textContent = "Clicado";
        bloco.style.backgroundColor = "lightblue";
        bloco.style.color = "darkblue"
    })
    bloco.addEventListener('dbclick', evento => {
        evento.preventDefault();
        bloco.textContent = "Entrou";
        bloco.style.backgroundColor = "gray";
        bloco.style.color = "darkblue"
    })
    bloco.addEventListener('dblclick', evento => {
        evento.preventDefault();
        bloco.textContent = "Clique duplo";
        bloco.style.backgroundColor = "red";
        bloco.style.color = "white";
    });

    bloco.addEventListener('mouseover', evento => {
        evento.preventDefault();
        bloco.textContent = "Entrou";
        bloco.style.backgroundColor = "gray";
        bloco.style.color = "white";
    });

    bloco.addEventListener('mouseout', evento => {
        evento.preventDefault();
        bloco.textContent = "Saiu";
        bloco.style.backgroundColor = "black";
        bloco.style.color = "white";
    });

});

document.addEventListener('DOMContentLoaded', (evento) =>{
    let caixa_de_texto = document.createElement("input");
    let caixa_de_texto2 = document.createElement("input");
    let informacao = document.createElement("h5")    //adiciona como primeiro filho
    informacao.textContent = "Informação"

    document.body.prepend(caixa_de_texto);
    document.body.prepend(informacao);

    //adiciona como o ultimo filho
    //document.body.append(caixa_de_texto)
    caixa_de_texto.addEventListener('focus', (evento) =>{
        evento.preventDefault();//Evitar o carregamento automático
        informacao.textContent = "Caixa de texto com foco."
    });

    caixa_de_texto.addEventListener('blur', (evento) =>{
        evento.preventDefault();//Evitar o carregamento automático
        informacao.textContent = "Caixa de texto liberada."
    });
//adiciona depois da referência
    caixa_de_texto.after(caixa_de_texto2);

    //adiciona antes da referência
    //caixa_de_texto.before(caixa_de_texto2);
    caixa_de_texto2.addEventListener('keydown', (evento) =>{
        //evento.preventDefault();
        informacao.textContent = "TECLA PRESSIONADA"
    });
    caixa_de_texto2.addEventListener('keyup', (evento) =>{
        //evento.preventDefault();
        informacao.textContent = "TECLA LIBERADA "
    })
});
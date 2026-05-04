document.addEventListener('DOMContentLoaded', (evento) => {

    let quadrado = document.createElement("div");
    quadrado.textContent = "Interaja";

    quadrado.style.borderRadius = "50%";
    quadrado.style.backgroundColor = "purple";
    quadrado.style.fontSize = "16px";
    quadrado.style.color = "white";
    quadrado.style.width = "120px";
    quadrado.style.height = "120px";
    quadrado.style.display = "flex";
    quadrado.style.justifyContent = "center";
    quadrado.style.alignItems = "center";
    quadrado.style.cursor = "pointer";

    document.body.appendChild(quadrado);

    quadrado.addEventListener('mousedown', (evento) => {
        quadrado.textContent = "Segurando";
        quadrado.style.backgroundColor = "orange";
    });

    quadrado.addEventListener('mouseup', (evento) => {
        quadrado.textContent = "Soltou";
        quadrado.style.backgroundColor = "green";
    });

    quadrado.addEventListener('contextmenu', (evento) => {
        evento.preventDefault();
        quadrado.textContent = "Clique direito";
        quadrado.style.backgroundColor = "black";
    });

});

document.addEventListener('DOMContentLoaded', (evento) => {

    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let info = document.createElement("h5");

    info.textContent = "Digite algo";

    document.body.prepend(info);
    document.body.prepend(input1);

    input1.after(input2);

    input1.addEventListener('input', () => {
        info.textContent = "Digitando: " + input1.value;
    });

    input1.addEventListener('change', () => {
        info.textContent = "Texto final: " + input1.value;
    });

    input2.addEventListener('mouseenter', () => {
        info.textContent = "Mouse entrou no segundo campo";
    });

    input2.addEventListener('mouseleave', () => {
        info.textContent = "Mouse saiu do segundo campo";
    });

});
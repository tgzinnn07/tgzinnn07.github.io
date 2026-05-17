let form = document.getElementById("form");

let fila_espera = [];

let resultado_espera = document.getElementById("resultado_espera");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let tipo_atendimento = document.querySelector('input[name="tipo_atendimento"]:checked').value;

    adicionar(nome, tipo_atendimento);
    listar();  
});

function adicionar(param_nome, param_tipo_atendimento){
    let pessoa = {
        nome: param_nome,
        tipo: param_tipo_atendimento
    };

    if(param_tipo_atendimento == "prioridade"){

        fila_espera.unshift(pessoa);

    } else {

        fila_espera.push(pessoa);

    }
}


function listar(){
    resultado_espera.innerHTML = "";
    for(let i = 0;i < fila_espera.length; i++){
        resultado_espera.innerHTML +=`
        Indice: ${i} - Nome: ${fila_espera[i].nome} - Tipo: ${fila_espera[i].tipo} <br/>`;
    }};
    if(fila_espera.length == 0){
        resultado_espera.innerHTML = " Não á nenhuma cliente na fila ! ";
    }

function atender(){
        if(fila_espera.length == 0){
            alert("Não há ninguém na fila!");
            return;
        }
        let pessoa_atendida = fila_espera.shift();
        alert(`Atendendo: ${pessoa_atendida.nome} - Tipo: ${pessoa_atendida.tipo}`);
        listar();
}

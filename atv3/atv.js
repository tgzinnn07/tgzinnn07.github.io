function verificar() {

    let idade = Number(document.getElementById("idade").value);
    let resultado = document.getElementById("resultado");

        if (idade >= 18 && idade < 100) {
            resultado.innerHTML = "Apto para início <br>";

            if (idade < 50) {
                resultado.innerHTML += "Renovação da CNH de 10 em 10 anos .";
            } 
            else if (idade >= 50 && idade <= 69) {
                resultado.innerHTML += "Renovação da CNH de 5 em 5 anos.";
            } 
            else {
                resultado.innerHTML += "Renovação da CNH de 3 em 3 anos.";
            }

        } else {
        resultado.innerHTML = "Inapto para o início do CNH.";
    }
}onclick="verificar()">Verificar
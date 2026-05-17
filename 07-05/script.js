/// Craindo um vetor / literal e atribuindo valores a ele
///          indicie0   indicie1   indicie2     
let turma = ["Talyson", "Levy", "Girão"];

console.log(turma, "tamanho", turma.length);

for (let i = 0; i < turma.length; i++){
    console.log(turma[i]);
}
/// inicializando um vetor vazio
let vetorVazio = [];
vetorVazio[0] = "Teste";//Adicionando
console.log(vetorVazio[0]);

// criando um vetor/ array e atribuindo valores a ele
let turma = ["Talyson", "Levy", "Girão"];
turma[3] = "Zé"; // Adicionando um novo elemento

turma.push("Miguel"); // Adicionando um novo elemento no final do array
turma.unshift("Medeiros"); // Adicionando um novo elemento no início do array

console.log(turma, "tamanho", turma.length);

for (let i = 0; i < turma.length; i++){
    console.log(turma[i]);
//removendo o último elemento e retornando o valor que foi removido
console.log(turma.pop())
console.log(turma);

//removendono primeiro elemento e retornando o valor que foi removido
console.log(turma.shift());
console.log(turma);
}s
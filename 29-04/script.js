//Funções em JavaScript
//Declaração e chamada de funções 

//Declaração de função sem retorno - tipo VOID
function mensagem(parametro, parametro2){
    console.log(`Olá, ${parametro}!
        Tu é o cara , `
    );
}

//função com retorno
function soma(a , b){
    return a + b;
}
//Chamada da função
mensagem("mundo", "Zé Levi");
console.log(soma(1, 3));

mensagem("Ramiro", soma(2, 5));

// Declaração de função na invariavel
//Expressão de função (função anônima atribuida a uma variável) 
let dobro = function(numero){
    return numero * 2 ;
}

// Com Arrow Function()=>{}
    let dobroModerno = (numero) => {
        return numero * 2 ;
    }
// Modo simplificado com Arrow Function
    let = dobroSimples = numero => numero * 2 ;
    //console.log(dobro(3));
    //console.log(dobroModerno(4));
    ///console.log(dobroSimples(2));

console.log("Talyson Guilherme Benicio Da Silva".toUpperCase());
console.log("Talyson Guilherme Benicio Da Silva".toLowerCase());
console.log("Talyson Guilherme Benicio Da Silva".length);
console.log("Talyson Guilherme Benicio Da Silva".indexOf("Guilherme"));
console.log("Talyson Guilherme Benicio Da Silva".includes("Benicio"));
console.log("Talyson Guilherme Benicio Da Silva".slice(7));
console.log("Talyson Guilherme Benicio Da Silva".replace("Talyson", "Miguel"));
console.log("Talyson Guilherme Benicio Da Silva".split(" "));
console.log(" Talyson Guilherme Benicio Da Silva ".trim());
//Metódos matemáticos
console.log(Math.PI);
console.log(Math.round(4.7));
///arredonda para o inteiro mais próximo = 5
console.log(Math.min(2, 5, 1, 8, 3));///minimo = 1
console.log(Math.max(2, 5, 1, 8, 3));///maximo = 8
///potencia e raiz quadrada
console.log(Math.pow(2, 3));///2 elevado a 3 = 8
console.log(Math.sqrt(16));///raiz quadrada de 16 = 4

    
    let agora = new Date();
    console.log(agora);

    let natal = new Date("2026-12-25");
    console.log(natal);
    let aniverario = new Date("2009-09-26");
    console.log(aniverario);


console.log(agora.getFullYear()); ///ANO 
console.log(agora.getMonth());///DIA DO MÊS 
console.log(agora.getDate()); /// DIA DO MÊS
console.log(agora.getDay());/// DIA DA SEMANA (0-6) 0 = DOMINGO, 1 = SEGUNDA, 2 = TERÇA, 3 = QUARTA, 4 = QUINTA, 5 = SEXTA, 6 = SÁBADO
console.log(agora.getHours());///HORA 
console.log(agora.getMinutes());///MINUTOS
console.log(agora.getSeconds());///SEGUNDOS

function sortear(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tentativas = 0;
let maxTentativas = 3;

function moverGoleiro(pos){
  let g = document.getElementById("goleiro");

  let posicoes = {
    1: {left: "10%", top: "60%"},
    2: {left: "10%", top: "20%"},
    3: {left: "40%", top: "40%"},
    4: {left: "70%", top: "20%"},
    5: {left: "70%", top: "60%"}
  };

  g.style.left = posicoes[pos].left;
  g.style.top = posicoes[pos].top;
}

function chutar(chute){
  let msg = document.getElementById("mensagem");

  if (tentativas >= maxTentativas){
    msg.innerText = "🏁 Fim de jogo!";
    return;
  }

  let goleiro = sortear(5,1);
  moverGoleiro(goleiro);

  tentativas++;

  if (chute === goleiro){
    msg.innerText = " QUE DEFESA DO JOÃO RICARDOOOOOOOOOO!";
  } else {
    msg.innerText = " GOOOLAAAAÇOOOOOOOO DO VITINHO!";
  }

  if (tentativas === maxTentativas){
    msg.innerText += "FIM DE PAPO DARONCO ENCERRA O JOGO E O FORTALEZA É CAMPEÃO DA COPA DO NORDESTE 2026!";
  }
}
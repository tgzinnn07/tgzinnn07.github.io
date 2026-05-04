let pedidos = [];

document.getElementById("formPedido").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let massa = document.getElementById("massa").value;

    let ingredientes = [];
    document.querySelectorAll('input[name="ingredientes"]:checked')
        .forEach(el => ingredientes.push(el.value));

    let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');

    if (!nome || ingredientes.length === 0 || !tamanhoSelecionado || !massa || !endereco) {
        alert("Preencha todos os campos!");
        return;
    }

    let tamanho = tamanhoSelecionado.value;

    let resumo = 
`Nome: ${nome}
Ingredientes: ${ingredientes.join(", ")}
Tamanho: ${tamanho}
Massa: ${massa}
Endereço: ${endereco}`;

    // CONFIRMAÇÃO (igual da sua imagem)
    if (confirm("Confirme seu pedido:\n\n" + resumo)) {

        let pedidoTexto = `Nome: ${nome} | Ingredientes: ${ingredientes.join(", ")} | Tamanho: ${tamanho} | Massa: ${massa} | Endereço: ${endereco}`;

        pedidos.push(pedidoTexto);
        atualizarLista();
        this.reset();
    }
});

function atualizarLista() {
    let lista = document.getElementById("listaPedidos");
    lista.innerHTML = "<h2>Pedidos realizados</h2>";

    pedidos.forEach(p => {
        let div = document.createElement("div");
        div.className = "pedido";
        div.textContent = p;
        lista.appendChild(div);
    });
}
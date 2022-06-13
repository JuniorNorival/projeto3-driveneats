function selecionar(elemento, nomeClasse) {

   const escolhido = document.querySelector(`.${nomeClasse} .selecionado `);
  
   if (escolhido !== null) {
      escolhido.classList.remove("selecionado");


   }

   if (escolhido !== elemento) {
      elemento.classList.add("selecionado");
      
   }

   verificarPedido();
}

function check() {
   const check = document.querySelector(".footer .escondido");

   if (check !== null) {
      check.classList.remove("escondido");
   }
   console.log(check);

}

function verificarPedido() {
   let selecionados = document.querySelectorAll(".selecionado");

   const botaoFechamento = document.querySelector(".botao-inferior")
   if (selecionados.length == 3) {

      botaoFechamento.innerHTML = "Fechar pedido";
      botaoFechamento.classList.add("finalizar-pedido");

   }
   if (selecionados.length !== 3) {

      botaoFechamento.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
      botaoFechamento.classList.remove("finalizar-pedido");
   }



}

function enviarWhats() {

   let comida = document.querySelector(".comidas .opcoes h2").textContent;;
   let bebida = document.querySelector(".bebidas .opcoes h2").textContent;;
   let sobremesa = document.querySelector(".sobremesa .opcoes h2").textContent;;

   let precoComida = Number(document.querySelector(".comidas .opcoes .selecionado span").textContent);
   let precoBebida = Number(document.querySelector(".bebidas .opcoes .selecionado span").textContent);
   let precoSobremesa = Number(document.querySelector(".sobremesa .opcoes .selecionado span").textContent);

   const valorTotal = (precoComida + precoBebida + precoSobremesa);
   const total = valorTotal.toFixed(2)

   let nome = prompt("Qual seu nome ?");
   let endereco = prompt("Qual o Endereco");

   let mesg = `Olá, gostaria de fazer o pedido:\n- Prato: ${comida}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\n Total:R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco} `


   window.open(`https://wa.me/5532998376446?text=${encodeURIComponent(mesg)}`, '_blank')

}

function confirmarPedido() {

}
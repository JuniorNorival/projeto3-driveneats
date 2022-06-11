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

function verificarPedido() {
   let selecionados = document.querySelectorAll(".selecionado");
   console.log(selecionados.length)
   const botaoFechamento = document.querySelector(".botao-inferior")
   if (selecionados.length == 3) {

      botaoFechamento.innerHTML = "Fechar pedido";
      botaoFechamento.classList.add("finalizar-pedido");
      enviarWhats();
   }
   if (selecionados.length !== 3) {

      botaoFechamento.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
      botaoFechamento.classList.remove("finalizar-pedido");
   }


}
function enviarWhats(){
   let comida= document.querySelector(".comidas .opcoes h2");
   let bebida= document.querySelector(".bebidas .opcoes h2");
   let sobremesa= document.querySelector(".sobremesa .opcoes h2");

   let precoComida= Number (document.querySelector(".comidas .opcoes h3"));
   let precoBebida= Number (document.querySelector(".bebidas .opcoes h3"));
   let precoSobremesa= Number (document.querySelector(".sobremesa .opcoes h3"));

   valorTotal = (precoComida + precoBebida + precoSobremesa);
   console.log(comida);
}
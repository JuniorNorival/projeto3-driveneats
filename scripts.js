let selecionados;
function selecionar(elemento, nomeClasse) {

   const escolhido = document.querySelector(`.${nomeClasse} .selecionado `);
   console.log(escolhido)
   if (escolhido !== null) {
      escolhido.classList.toggle("selecionado");
   }
   if (escolhido !== elemento) {
      elemento.classList.add("selecionado");
   }
   selecionados = document.querySelector(".selecionado")
}

function verificarPedido(){
if (selecionados.length === 3 ){
   botaoFechamento = document.querySelector(".inferior")
   botafoFechamento.innerHTML = 
}
}


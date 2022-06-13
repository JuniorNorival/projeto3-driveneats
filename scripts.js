let comida;
let bebida;
let sobremesa;
let total;

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

function confirmarPedido() {
   const finalizar = document.querySelector(".pagina-confirmacao");
   finalizar.classList.remove("escondido");

   const opacidade= document.querySelector(".conteudo");
   opacidade.classList.add("transparente");

   comida = document.querySelector(".comidas .opcoes h2").innerHTML;;
   bebida = document.querySelector(".bebidas .opcoes h2").innerHTML;;
   sobremesa = document.querySelector(".sobremesa .opcoes h2").innerHTML;;

   let precoComida = Number(document.querySelector(".comidas .opcoes .selecionado span").innerHTML);
   let precoBebida = Number(document.querySelector(".bebidas .opcoes .selecionado span").innerHTML);
   let precoSobremesa = Number(document.querySelector(".sobremesa .opcoes .selecionado span").innerHTML);

   precoComida = precoComida.toFixed(2);
   precoBebida = precoBebida.toFixed(2);
   precoSobremesa = precoSobremesa.toFixed(2);

   const valorTotal = (Number(precoComida) + Number(precoBebida) + Number(precoSobremesa));
   total = valorTotal.toFixed(2);
   const confirmar = document.querySelector(".pedido");

   confirmar.innerHTML = `<div><div>${comida}</div><div>R$ ${precoComida}</div></div> 
   <div><div>${bebida}</div><div>R$ ${precoBebida}</div></div>
   <div><div>${sobremesa}</div><div>R$ ${precoSobremesa}</div></div> 
   <p>TOTAL:R$ ${total}</p>`


}
function cancelarPedido(){
   const cancelar = document.querySelector(".pagina-confirmacao");
   cancelar.classList.add("escondido");
   
}

function enviarWhats() {

   let nome = prompt("Qual seu nome ?");
   let endereco = prompt("Qual o Endereco");

   let mesg = `Olá, gostaria de fazer o pedido:\n- Prato: ${comida}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\n Total:R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco} `;

   window.open(`https://wa.me/5532998376446?text=${encodeURIComponent(mesg)}`, '_blank')
}
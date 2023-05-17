import { conectaAPI } from "./conectaAPI.js";

async function buscarVideo(evento) { //recebe o evento
  evento.preventDefault() //previne o recarregamento da pagina
  const valorPesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaAPI.buscaVideo(valorPesquisa);
  console.log(busca)
}

const botaoDePesquisa = document.querySelector("[data-botaoDePesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento)); //aguarda o click no botão

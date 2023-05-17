import { conectaAPI } from "./conectaAPI.js"; //exportação de uma variavel com varias funções
import buildCard from "./mostrarVideos.js"; //exportação de apenas uma função

async function buscarVideo(evento) {
  //recebe o evento
  evento.preventDefault(); //previne o recarregamento da pagina
  const valorPesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaAPI.buscaVideo(valorPesquisa);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    //enquanto a lista tiver um primeiro filho, ela continua no while
    lista.removeChild(lista.firstChild); //remove os filhos da lista
  }

  busca.forEach((element) =>
    lista.appendChild(
      buildCard(element.titulo, element.descricao, element.url, element.imagem)
    )
  ); //adiciona os itens da busca na lista que estava esvaziada

  if (busca.length == 0) {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
  }
}

const botaoDePesquisa = document.querySelector("[data-botaoDePesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento)); //aguarda o click no botão

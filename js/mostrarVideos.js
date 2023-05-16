import { conectaAPI } from "./conectaAPI.js"; //importa a variavel exportada do arquivo

const lista = document.querySelector("[data-lista]"); //Seleciona o elemento que possui o data-attribute data-lista

function buildCard(titulo, descricao, url, imagem) { //function para criar o esqueleto dos cards
  const video = document.createElement("li"); //cria o elemento <li>
  video.className = "videos__item"; //atribui a class="videos__item"
  video.innerHTML = ` 
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="${imagem}">
        <h3>${descricao}</h3>
        <p>236 mil visualizações</p>
    </div>`; //define o esqueleto do documento html

  return video; //devolve o esqueleto com as lacunas a serem preenchidas
}

async function listaVideo() {
  const listaAPI = await conectaAPI.listaVideos(); //traz a lista de videos
  listaAPI.forEach((elemento) => //Para cada item da listaAPI ele fará algo
    lista.appendChild( //Adiciona á lista, como filho, o elemento HTML criado na função buildCard()
      buildCard( //cria o elemento e preenche as lacunas de valores determiandas na função buildCard()
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  ); // Para cada elemento da lista de videos da API, se cria um card, que será anexada na UL
}

listaVideo()
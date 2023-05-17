import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const url = document.querySelector("[data-url]").value;
  const descricao = Math.floor(Math.random() * 10).toString(); //gera um numero aleatorio

  await conectaAPI.criaVideo(titulo, descricao, url, imagem); //tem que seguir a ordem implementada no criaVideo() do conectaAPI.js

  window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", (evento) => criarVideo(evento));

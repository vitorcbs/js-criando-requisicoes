async function listaVideos() {
  const conexao= await fetch("http://localhost:3000/videos");
  const conexaoInJson = await conexao.json() //espera a conexão com a url que retornará uma promise
  return conexaoInJson
}

listaVideos()

// const conexaoInJson = (await fetch("http://localhost:3000/videos")).json(); //espera a conexão com a url que retornará uma promise
//   console.log(conexaoInJson)

export const conectaAPI = {
    listaVideos //exporta a função lista videos, que será usada como metodo da variavel conectaAPI
}
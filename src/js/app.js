function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    //console.log(campoFilmeFavorito)
    var filmeFavorito = campoFilmeFavorito.value
    //verificar se o conteudo e uma imagem ou não
    if (filmeFavorito.endsWith('.jpg')){ 
      //.endsWith('.jpg') funcão do Js que se o final da string for (o q estiver aqui)
      //retorn true e entra se nao false
      listarFimesNaTela(filmeFavorito) //chamando outra function
    } else {
      alert("Imagem inválida")
    }
    //limpar deixar o campo vazio depois de um click
    campoFilmeFavorito.value = ""
  }

//inserindo mais uma função
function listarFimesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}




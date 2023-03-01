function toggleMode() {
  const html = document.documentElement
  /* 
    if(html.classList.contains('light')){
      html.classList.remove('light')
    } else {
      html.classList.add('light')
    }
  Outra maneira mais simples de executar a mesma ação */
  html.classList.toggle("light")
  
  /* TROCA DE IMAGENS DO PERFIL*/
  // pega a tag da img
  const img = document.querySelector("#profile img")
  //subtituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  }else{
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar-dark.png')
  }


}
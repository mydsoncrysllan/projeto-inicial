function toggMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}
// pegar a tag img
const img = document.querySelector("#profile img")
//queryselector é uma busca pelo seletor
// substituir a imagem
if (html.classList.contains ("light")) {
  //se a classe de listas html conter o light...
  // se tiver light mode, adicionar a imagem light
  img.setAttribute("src", ".assets/avatar-light.png")
  //setattribute é pra setar em algum seletor e mudar o atributo.
}
else {
 //set tiver sem light mode, manter a imagem normal 
  img.setAttribute("src", ".assets/avatar.png")
}
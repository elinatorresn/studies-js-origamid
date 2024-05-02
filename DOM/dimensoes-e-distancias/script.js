//////////////////////* Exercícios *//////////////////////

// Verifique a distância da primeira imagem em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens;
function somaImgs() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma);
}
window.onload = function() {
  somaImgs();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'ok');
  } else{
    console.log(link,'nok');
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)');
if(small) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
  console.log('Tela menor que 720px. Classe menu-mobile adicionada');
} else {
  console.log('Tela maior que 720px')
}
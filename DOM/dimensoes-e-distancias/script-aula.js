//////////////////////* HEIGHT E WIDTH *//////////////////////
const listaAnimais = document.querySelector('.animais-lista');

// height or widht + padding
console.log(
  listaAnimais.clientHeight,
  listaAnimais.clientWidth
);

// height or widht + padding + border
console.log(
  listaAnimais.offsetHeight,
  listaAnimais.offsetWidth
);

// height total or widht total, mesmo dentro de scroll
console.log(
  listaAnimais.scrollHeight,
  listaAnimais.scrollWidth
);

//////////////////////* OFFSETTOP E OFFSETLEFT *//////////////////////
const h2Animais = document.querySelector('h2');

// Distância entre o topo do elemento e o topo da página
console.log(h2Animais.offsetTop);

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log(h2Animais.offsetLeft);


//////////////////////* GETBOUNDINGCLIENTRECT() *//////////////////////
const animais = document.querySelector('.animais');
const rect = animais.getBoundingClientRect();


console.log(
  rect,
  rect.height, // height do elemento
  rect.width,// width do elemento
  rect.top // distância entre o topo do elemento e o scroll
);

if(rect.top < 0){
  console.log('passou do elemento');
}

//////////////////////* WINDOW *//////////////////////
console.log(
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight, // soma a barra de endereço

  window.pageYOffset, // distância total do scroll vertical
  window.pageXOffset // distância total do scroll horizontal
);


//verificar se a tela do user é menor que 600
if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

//mas o ideial é verificar com matchMedia
const small = window.matchMedia('(max-width: 600px)'); 

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
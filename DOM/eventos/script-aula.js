const img = document.querySelector('img');

//////////////////////* ADDEVENTLISTENER *//////////////////////

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})

//////////////////////* CALLBACK *//////////////////////

function callback() { //pode ser qualquer nome para a função
  console.log('Clicou');
}

function callback2(event) { //pode ser qualquer nome para a função
  console.log(event);
}

img.addEventListener('click', callback); // 🚀

//////////////////////* EVENT *//////////////////////

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


//////////////////////* event.preventDefault *//////////////////////

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);


//////////////////////* THIS *//////////////////////


function callbackthis(event) {
  console.log(this); // retorna a imagem - o mesmo que usar currentTarget
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callbackthis);

//////////////////////* DIFERENTES EVENTOS *//////////////////////

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}
h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


//////////////////////* KEYBOARD *//////////////////////
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);


//////////////////////* FOREACH E EVENTOS *//////////////////////

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});
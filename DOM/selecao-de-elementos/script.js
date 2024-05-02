// Retorne no console todas as imagens do site
const allFotosHTML = document.getElementsByTagName('img');
console.log(allFotosHTML);

const allFotosNode = document.querySelectorAll('img');
console.log(allFotosNode);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const retornImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(retornImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const Animais = document.querySelector('.animais-descricao');
const h2Animais = Animais.querySelector('h2');
console.log(h2Animais);

// Selecione o último p do site
const lastp = document.querySelector('p:last-child');
console.log(lastp);

const lastparagrafo = document.querySelectorAll('p');
console.log(lastparagrafo[--lastparagrafo.length]);
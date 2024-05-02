// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
console.log(animaisSection);

const contatoSection = document.getElementById('contato');
console.log(contatoSection);

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');
console.log(naoExiste);

//////////////////////* *//////////////////////

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

// Retorna o primeiro elemento
console.log(gridSection[0]);

const contato = document.getElementsByClassName('grid-section contato');
console.log(contato);

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');
console.log(ul);

//////////////////////* *//////////////////////

const animais = document.querySelector('.animais');
const contato1 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

//////////////////////* *//////////////////////

const gridSection2 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection2[1]);

//////////////////////* *//////////////////////

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

//////////////////////* *//////////////////////

gridSectionNode.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index); // index do item na array
  console.log(array); // a array completa
});

const arrayGrid = Array.from(gridSectionHTML); //transforma em array
arrayGrid.forEach(function(intem){
  console.log(index);
})
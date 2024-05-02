console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades


//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); // Funciona

const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1
console.log(h1Selecionado);
console.log(h1Selecionado.classList);

console.log(document.body); // Retorna o body

//////////////////////* *//////////////////////

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo
var nome = 'Elina';
nome.length; // 5
nome.charAt(1); // 'n'
nome; // 'Elina'

////////////////////* *////////////////////

var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'

////////////////////* *////////////////////

var btn = document.querySelector('.btn');
btn.classList.add('ativo') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

////////////////////* *////////////////////

// nomeie 3 propriedades ou métodos de strings
var nome2 = 'Cristina';
//fixed 
//length
//slice 

// nomeie 5 propriedades ou métodos de elementos do DOM
var button = document.querySelector('.btn');
console.log(btn);
//addEventListener
//appendChild
//id 
//innerHtml 
//outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
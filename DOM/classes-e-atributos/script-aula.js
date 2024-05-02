//////////////////////* CLASSLIST *//////////////////////
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('vermelho'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); // substituis a classe

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' amarelo';
console.log(menu.className);


//////////////////////* ATTRIBUTES *//////////////////////
const animais = document.querySelector('.animais');
console.log(animais);
console.log(animais.attributes); // arraylike que retorna todos os atributos
console.log(animais.attributes[0]); // arraylike que retorna o primeiro atributo

//////////////////////* GETATTRIBUTE E SETATTRIBUTE *//////////////////////

const img = document.querySelector('img');
console.log(img.getAttribute('src')); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
console.log(img.hasAttribute('id')); // true / false
img.removeAttribute('alt'); // remove o alt
console.log(img.hasAttributes()); // true / false se tem algum atributo

const srcImg = img.getAttribute('alt');
console.log(srcImg);

//////////////////////* READ ONLY VS WRITABLE *//////////////////////
console.log(animais.className); // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

const carro = {
  portas: 4,
  andar: function(km) {
    console.log('Andou ${km}');
  }
}

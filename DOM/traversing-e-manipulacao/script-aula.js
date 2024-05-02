//////////////////////* OUTERHTML, INNERHTML E INNERTEXT *//////////////////////

const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector('.animais-descricao');

h1.innerHTML = '<p>Inner título</p>'; //insere um p dentro do conteudo, nesse caso dentro do h1
h1.outerHTML = '<p>Outer título</p>'; //Substitui totalmente o elemento h1 por um p

console.log(animaisDescricao.innerHTML); //mostra com as tags do HTML
console.log(animaisDescricao.innerText); //mostra sem as tags do HTML, só o texto


//////////////////////* TRASVERSING *//////////////////////

const lista = document.querySelector('.animais-lista')

console.log(lista); //retorna ul
console.log(lista.parentElement); //retorna o pai, o elemento que envolve a ul
console.log(lista.parentElement.parentElement); //retorna o pai do pai, o elemento que envolve a section

console.log(lista.nextElementSibling); //retorna o proximo elemento depois da lista
console.log(lista.previousElementSibling); //retorna o elemento anterior antes da lista

console.log(lista.children); //retorna uma HTMLCollection com os filhos da ul, no caso os lis
console.log(lista.children[0]); //retorna o primeiro filho do ul no HTMLCollection
console.log(lista.children[--lista.children.length]); //retorna o ultimo filho do ul no HTMLCollection

console.log(lista.querySelectorAll('li')); // retorna todas as LI's
console.log(lista.querySelector('li:last-child')); // retorna a ultima li


//////////////////////* ELEMENT VS NODE *//////////////////////
console.log(lista.previousElementSibling); // elemento acima
console.log(lista.previousSibling); // node acima

console.log(lista.firstChild); // primeiro node child
console.log(lista.childNodes); // todos os node child

//////////////////////* MANIPULANDO ELEMENTOS *//////////////////////

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista

//////////////////////* NOVOS ELEMENTOS *//////////////////////

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

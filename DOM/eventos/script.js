//////////////////////* Exercícios *//////////////////////
// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. 
// Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]'); //talvez querySelectorAll('.menu a');

function hundleClick(event) {
  event.preventDefault();

  linksInternos.forEach((item) => {
    item.classList.remove('ativo');
  })
  this.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', hundleClick);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementosBody = document.body.querySelectorAll('*'); // ou document.querySelectorAll('Body *');

todosElementosBody.forEach((elemento) => {
    elemento.addEventListener('click', hundleElemento);
    elemento.addEventListener('click', hundleElemento2);
});

function hundleElemento(event) {
    console.log(event.currentTarget);
}

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
function hundleElemento2(event) {
    event.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeyboardT(event) {
    if(event.key === 't')
    document.body.style.fontSize = '150%';
}

window.addEventListener('keydown', handleKeyboardT);
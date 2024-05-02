function areaQuadrado(lado) {
    console.log('Função ativa');
    return lado * lado;
}
console.log(areaQuadrado(2));

//////////////////////* *//////////////////////

function pi() {
    return 3.14;
}
var total = 5 * pi(); // 15.7
console.log(total);

//////////////////////* *//////////////////////

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(80, 1.80));

//////////////////////* *//////////////////////

function corFavorita(cor) {
    if(cor === 'azul') {
      return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'

//////////////////////* *//////////////////////

addEventListener('click', function() {
    console.log('Clicou');
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

function mostraConsole(){
    console.log('Clicou e executou a função');
}
addEventListener('click', mostraConsole);

//////////////////////* *//////////////////////

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return 'Informe a sua idade!';
    } else if(idade >= 60) {
      return true;
    } else {
      return false;
    }
}
console.log(terceiraIdade(60));

//////////////////////* *//////////////////////

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(precisoVisitar(80));

//////////////////////* *//////////////////////

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'

//////////////////////* *//////////////////////


// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    return !!valor;
}
console.log(isTruthy(10));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}
console.log(nomeCompleto('Elina', 'Torres'));

// Crie uma função que verifica se um número é par


function isEven(number){
    var modulo = number % 2;
    if (modulo === 0){
        return 'Par';
    } else{
        return 'Impar';
    }
}
console.log(isEven(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
    return typeof dado;
}
console.log(tipoDeDado(2));
console.log(tipoDeDado('xarope'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function mostraConsoleScroll(){
    console.log('Scrollou e executou a função');
}
addEventListener('scroll', mostraConsoleScroll);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
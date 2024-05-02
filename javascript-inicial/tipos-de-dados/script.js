////////////*  Aula Tipo de dados *////////////

// Declare uma variável contendo uma string
var time = 'Flamengo';

// Declare uma variável contendo um número dentro de uma string
var ano = '2018';
console.log(ano);

var goals = '1000';
var fraseRomario = 'Romário fez ' + goals + ' goals';
console.log(fraseRomario);

var fraseMelhor = "Esse é o \"melhor\" jogo";
console.log(fraseMelhor);

// Declare uma variável com a sua idade
var idade = 27;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Elina';
var sobrenome = 'Torres';
var nomeCompleto = nome + ' ' + sobrenome;
var nomeCompleto2 = `${nome} ${sobrenome}`;
console.log(nomeCompleto, nomeCompleto2);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome, typeof idade);
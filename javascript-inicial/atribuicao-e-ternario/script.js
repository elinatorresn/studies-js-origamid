var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

////////////////////* *////////////////////

var idade = 17;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false

////////////////////* *////////////////////

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
var possuiFaculdade2 = false;
if(possuiFaculdade2)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

////////////////////* Exercicios *////////////////////

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if(possuiCarro && possuiCasa){
  darCredito = true;
  console.log('Crédito consedido');
}
else{
  console.log('Crédito não consedido');
}

//ou
darCredito = (possuiCarro && possuiCasa) ? 'Crédito consedido' : 'Crédito não consedido';
console.log(darCredito);
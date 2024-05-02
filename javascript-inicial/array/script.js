var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // Xbox

////////////////////* *////////////////////

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

////////////////////* *////////////////////
//O for é usado quando você sabe antecipadamente quantas vezes deseja iterar.
var numero;
for (numero = 0; numero < 10; numero++) {
  console.log(numero);
}

////////////////////* *////////////////////
//O while é usado quando você não sabe quantas vezes deseja iterar e deseja continuar iterando enquanto uma condição específica for verdadeira.
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

////////////////////* *////////////////////
//Looping sobre array
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}

////////////////////* *////////////////////
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

////////////////////* *////////////////////
videoGames.forEach(function(item, index) {
  console.log(item, index);
});
// O argumento item será atribuído dinamicamente

////////////////////* *////////////////////
var minimo = 0;
var maximo = 50;
for(;minimo < maximo;) {
  console.log(numero);
  minimo++;
}

////////////////////*  Exercícios  *////////////////////

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copas = [1959, 1962, 1970, 1994, 2002];
console.log(copas);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copas.length; i++) {
  console.log('O brasil ganhou a copa de '+ copas[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]; // Adiciona ao final da array
console.log(ultimaFruta);
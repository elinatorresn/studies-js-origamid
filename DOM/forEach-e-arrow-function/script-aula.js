const imgs = document.querySelectorAll('img');

//Sintaxe longa
imgs.forEach(function(item, index, array){
  //console.log(item, index, array); // item = item atual no loop, index = posição no array, array = array completo
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

//Sintaxe curta
imgs.forEach((item) => {
  console.log(item);
});
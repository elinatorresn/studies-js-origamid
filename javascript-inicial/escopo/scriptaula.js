//carro = 'Fusca'; Essa declaração daria erro
var carro = 'Fusca';
function mostrarCarro() {
    console.log(carro);
}
  
mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//////////////////////* *//////////////////////

for(let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}
//console.log(i); // i is not defined - pq o let não vaza

//////////////////////* *//////////////////////

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
//data = 'Janeiro'; // erro pq não é possivel mudar para string
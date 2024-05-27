// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;


// 

function Carro2(marcaAtt, precoAtt) {
  this.marca = marcaAtt;
  this.preco = precoAtt;
}

const volks = new Carro2('volkswagen', 50000);
const jeep = new Carro2('Jeep', 300000);

//

function Carro3(marcaInicial, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marcaInicial;
  this.preco = precoFinal;
}

const polo = new Carro3('Polo', 120000);
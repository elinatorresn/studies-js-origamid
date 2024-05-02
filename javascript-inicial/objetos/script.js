var pessoa = {
    nome: 'Elina',
    idade: 27,
}
console.log(pessoa.nome, pessoa.idade);

//////////////////////* *//////////////////////

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//////////////////////* *//////////////////////

console.log(Math.PI); // 3.14
console.log(Math.random()); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

//////////////////////* *//////////////////////

var carro = {};
var pessoa = {};
console.log(typeof carro); // 'object'

//////////////////////* *//////////////////////

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}
menu.backgroundColor = '#000';
menu.color = 'blue';
var bg = menu.backgroundColor; // '#84E'
console.log(menu.backgroundColor); // '#000'

//////////////////////* *//////////////////////

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Elina',
    sobrenome: 'Torres',
    idade: 27,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
console.log(eu.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);
  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(genero){
        if(genero === 'homem'){
            return 'Latir';
        } else{
            return 'Nada';
        }
    }
}
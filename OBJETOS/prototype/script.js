function Pessoa() {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar(function() {
  return 'Pessoa andou';
})

const elina = new Pessoa('Andre', 28)

console.log(Pessoa.prototype) //Erro pq andre é um objeto e não uma função
console.log(andre.prototype)
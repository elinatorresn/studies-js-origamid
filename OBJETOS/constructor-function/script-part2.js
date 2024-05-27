// const Dom = {
//   selector: 'li',
//   element() {
//     return elementoSelecionado = document.querySelector(this.selector);
//   },
//   activ() {
//     this.element().classList.add('Ativar');
//   }
// }
// Dom.selector = 'ul';
// Dom.activ();


// Como fazer com função construtora

function Dom(selector) {
  this.element = function() {
    return document.querySelector(selector);
  }
  this.activ = function() {
    this.element().classList.add('Ativar');
  }
}

const li = new Dom ('li');
const ul = new Dom ('ul');

const lastLi = new Dom ('li:last-child');
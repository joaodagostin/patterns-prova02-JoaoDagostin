// GRASP — Information Expert
class Item {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class Pedido {
  constructor(itens) {
    this.itens = itens;
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => {
      return total + item.preco * item.quantidade;
    }, 0);
  }
}

const pedido = new Pedido([
  new Item("Mouse", 50, 2),
  new Item("Teclado", 150, 1)
]);

console.log(pedido.calcularTotal()); 

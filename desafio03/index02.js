//Open/Closed Principle (OCP)
class Desconto {
  aplicar(valor) {
    throw new Error("Método não implementado");
  }
}

class DescontoBlackFriday extends Desconto {
  aplicar(valor) {
    return valor * 0.5;
  }
}

class DescontoClienteVIP extends Desconto {
  aplicar(valor) {
    return valor * 0.8;
  }
}

class CalculadoraDesconto {
  calcular(strategy, valor) {
    return strategy.aplicar(valor);
  }
}

const calculadora = new CalculadoraDesconto();
console.log(calculadora.calcular(new DescontoBlackFriday(), 100)); // 50

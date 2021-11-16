const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    const teste = productDetails("mascara", "alcool");
    expect(typeof productDetails).toBe("function");
    // Teste se o retorno da função é um array.
    expect(typeof teste).toBe("object");
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(teste.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof teste).toBe("object");
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(teste[0] !== teste[1]).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
    for (let index = 0; index < teste.length; index += 1) {
      let palavra = teste[index].details.productId;
      let quantidade = palavra.length;
      let inicio = quantidade - 3;
      expect(palavra.slice(inicio, quantidade)).toBe("123");
    }
  });
});

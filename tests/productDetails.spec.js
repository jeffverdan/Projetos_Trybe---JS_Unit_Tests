const productDetails = require('../src/productDetails');

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

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
   
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const testa1 = productDetails('alvejante', 'detergente')[0].name;
    const testa2 = productDetails('alvejante', 'detergente')[1].name;
    const diferenca = Object.is(testa1, testa2);
    expect(diferenca).toBe(false);
    // Teste se os dois productIds terminam com 123.
    const ob1 = productDetails('alvejante', 'detergente')[0].details.productId;
    const ob2 = productDetails('alvejante', 'detergente')[1].details.productId;
    expect(ob1.endsWith('123')).toEqual(true) //USAR COMO EXEMPLO
    expect(ob2.endsWith('123')).toEqual(true)

  });
});

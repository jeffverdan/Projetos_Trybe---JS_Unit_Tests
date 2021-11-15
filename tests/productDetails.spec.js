const { TestScheduler } = require('jest');
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
    expect(productDetails('arroz', 'feijão')).toEqual([
      { name: 'arroz', details: { productId: 'arroz123' } },
      { name: 'feijão', details: { productId: 'feijão123' } },
    ]);
  });
  test('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  test('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('arroz', 'feijão'))).toBeTruthy();
  });
  test('Verifica o array retornado pela função contém dois itens dentro', () => {
    expect(Object.keys(productDetails('arroz', 'feijão')).length).toBe(2);
  });
  test('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    const resultado = productDetails('arroz', 'feijão');
    expect(typeof(resultado[0]) && typeof(resultado[1])).toBe('object');
  });
  test('Verifica se quando passado parâmetros diferentes entre sí, os dois objetos também são diferentes entre sí', () => {
    const resultado = productDetails('arroz', 'feijão');
    expect(resultado[0] === resultado[1]).toBeFalsy();
  });
  test('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails()[0].details.productId.slice(-3) && productDetails()[1].details.productId.slice(-3)).toBe('123')
  })
});

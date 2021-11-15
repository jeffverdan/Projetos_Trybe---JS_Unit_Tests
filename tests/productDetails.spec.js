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
    expect(productDetails()).toBeDefined();

    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const testObject1 = productDetails('Alcool gel', 'Máscara')[0]
    const testObject2 = productDetails('Alcool gel', 'Máscara')[1]
    expect(testObject1.details).toEqual({"productId": "Alcool gel123"});
    expect(testObject2.details).toEqual({"productId": "Máscara123"});

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(testObject1).not.toEqual(testObject2);

    // Teste se os dois productIds terminam com 123.
    const test123_1 = testObject1.details.productId;
    const test123_2 = testObject2.details.productId;
    expect(`${test123_1[test123_1.length - 3]}${test123_1[test123_1.length - 2]}${test123_1[test123_1.length - 1]}`).toBe('123');
    expect(`${test123_2[test123_2.length - 3]}${test123_2[test123_2.length - 2]}${test123_2[test123_2.length - 1]}`).toBe('123');
  });
});

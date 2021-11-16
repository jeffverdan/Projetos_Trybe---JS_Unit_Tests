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
    const isFunction = productDetails;
    expect(isFunction).toEqual(expect.any(Function));

    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);

    // Teste se o array retornado pela função contém dois itens dentro.
    const products = productDetails('Alcool gel', 'Máscara');
    expect(products).toEqual(expect.arrayContaining([expect.objectContaining({name: 'Alcool gel'}), expect.objectContaining({name: 'Máscara'})]));

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(products[0]).toEqual(expect.any(Object));
    expect(products[1]).toEqual(expect.any(Object));

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(products[0]).not.toEqual(products[1]);
    
    // Teste se os dois productIds terminam com 123.
    expect(products[0].details.productId.endsWith('123')).toEqual(true);
    expect(products[1].details.productId.endsWith('123')).toEqual(true);
  });
});

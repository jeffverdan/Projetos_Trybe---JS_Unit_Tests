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
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toEqual(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
    const produto=productDetails('Alcool gel', 'Mascara')
    expect(produto[0].details.productId.endsWith('123').toEqual(true))
    expect(produto[1].details.productId.endsWith('123').toEqual(true))
  });
});
// test('funcionamento', ()=>{
//   expect(productDetails()).toEqual(expect.arrayContainig([expect.any(Object), expect.any(Object)])) //testa se o retorno do array contem obejtos
//   const produto=productDetails('Alcool gel', 'Mascara')
//   expect(produto[0].details.productId.endsWith('123').toEqual(true))
//   expect(produto[1].details.productId.endsWith('123').toEqual(true))//saber final das duas
//   expect(produto).toHaveLength(2) //verifica o tamanho do array retornado
// })



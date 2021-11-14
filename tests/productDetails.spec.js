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
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // 'Verifica se productDetails é uma função.'
      expect( typeof productDetails).toBe('function')

      // Teste se o retorno da função é um array. 
      expect(productDetails('produto1','produto 2')).toBeInstanceOf(Array)

      // 'Verifica se o array retornado pela função contém dois itens dentro.'
      expect(productDetails('produto1','produto 2').length).toBe(2)

      // 'Verifica se os dois itens dentro do array retornado pela função são objetos.'
      const produtos = productDetails('produto1', 'produto2');
      for(let i =0;i<produtos.length;i+=1){
      expect(typeof produtos[i]).toBe('object')}
      
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(produtos[0]).not.toEqual(produtos[1]);
    // Teste se os dois productIds terminam com 123.
       expect(produtos[0].details.productId.endsWith('123')).toBeTruthy();
       expect(produtos[1].details.productId.endsWith('123')).toBeTruthy();

  }); 
    
  });
  



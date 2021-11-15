/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { TestScheduler } = require('jest');
const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  test("Verifica se a função numbers retorna false caso receba [1, 2, '3', 4, 5", () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });
  test("Verifica se a função numbers retorna false caso receba [1, 'a', 3]", () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });
  test("Verifica se a função retorna false ao receber [' ']", () => {
    expect(numbers([' '])).toBe(false);
  })
});

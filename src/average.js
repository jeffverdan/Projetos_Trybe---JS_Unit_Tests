/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const verificarENumero = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    // const numberConverted = Number(numbers[index]);
    // if(Number.isNaN(numberConverted)) {
    //   console.log('esse nao é um numero');
    // }
  }
};
// console.log(verificarENumero([1, 2, 3, '4', 5]);

const average = (value) => {
  let result = 0;
  let resultDaDivisao = 0;
  if (value.length === 0) {
    return undefined;
  }
  // verificarENumero(value);
  for (let index = 0; index < value.length; index += 1) {
    if (typeof value[index] !== 'number') {
      // console.log(typeof numbers[index]);
      return undefined;
    }
    result += value[index];
    // console.log(typeof value[index]);
  }
  resultDaDivisao = result / value.length;
  // console.log(result);
  // console.log(resultDaDivisao);
  return Math.round(resultDaDivisao);
};

// average([3, '4', 5]);
module.exports = average;

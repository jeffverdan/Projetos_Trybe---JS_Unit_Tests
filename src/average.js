/* eslint-disable no-inner-declarations */
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
function verifyLenght(arr) {
  if (arr[0] === ' ' || arr.length === 0) {
    console.log('teste');
    return true;
  }
 }
const average = (arr) => {
  let averageresult = 0;
  if (verifyLenght(arr)) {
    return undefined;
  }
 for (let i = 0; i < arr.length; i += 1) {
  if (typeof arr[i] === 'number') {
  averageresult += arr[i];
  } else {
    return undefined;
  }
}
  return Math.round(averageresult / arr.length);
};

module.exports = average;

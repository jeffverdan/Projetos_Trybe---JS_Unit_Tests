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

const arrayIsEmpty = (array) => {
  let isEmpty = false;
  if (array.length === 0) {
    isEmpty = true;
  }
  return isEmpty; 
};

const sum = (number1, number2) => {
  let soma = NaN;
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    soma = number1 + number2;
  }

  return soma;
};

const average = (array) => {
  let retorno = 0;
  for (let i = 0; i < array.length; i += 1) {
    retorno = sum(retorno, array[i]);
    if (Number.isNaN(retorno)) {
      retorno = undefined;
      break;
    }
  }
  
  if (arrayIsEmpty(array)) retorno = undefined;
  if (retorno !== undefined) (retorno /= array.length);

  return retorno;
};

module.exports = average;

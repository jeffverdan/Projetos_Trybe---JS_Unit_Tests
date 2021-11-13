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
const verifyTypeOf = (numArray) => {
  let isItNumber = true;
  for (let index = 0; index < numArray.length; index += 1) {
    let element = numArray[index];
    if (typeof element !== 'number') {
      isItNumber = false;
    }
  }
  return isItNumber;
};

const sum = (numArray) => {
  let actualSum = numArray[0];
  for (let index = 1; index < numArray.length; index += 1) {
    let element = numArray[index];
    actualSum += element;
  }
  return actualSum;
};

const average = (numArray) => {
  if (verifyTypeOf) {
    return sum(numArray) / numArray.length;
  } 
  return undefined;
};

module.exports = average;

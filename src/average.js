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


const average = (numbers) => {
  let sum = 0;                                                        // Criado variável com inicio 0 para ser somado

  if (numbers.length == 0) {                                          // If onde testa se o numero for 0 retornar undefined
    return undefined
  }

  for (let index = 0; index < numbers.length; index += 1) {           // For para verificar cada elemento do array
    if (typeof numbers[index] === "number") {                         // If para verificar se o tipo do dado é um numero
      sum += numbers[index]                                           // Caso true adicionar o numero ao array sum criado anteriormente
    } else {
      return undefined                                                // Caso não retornar undefined 
    }
  }

  return Math.round(sum / numbers.length)                            // Math.round (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round) aprendido função js para arredondamento da média

};

module.exports = average;

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

// Requisito 1
const average = (numbers) => {
  let media;
  if (numbers.length < 1) {
    return undefined;
  }
 for (let i = 0; i < numbers.length; i += 1) {
    if (typeof (numbers[i]) !== 'number') {
  return undefined;
  }
   let soma = numbers.reduce((a, b) => a + b, 0);
   media = soma / numbers.length;
} 
 return Math.round(media);
};
console.log(average([1, '2']));
module.exports = average;

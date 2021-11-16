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

const average = (vetor) => {
  if (vetor.length === 0) { // verifico se a função não está vazia. Se estiver retorna undefined.
    return undefined;
  }
  let soma = 0;
  let media = 0;
  // logica de somatorio, vai somar todos meus elemetos presentes no vetor
  for (let i = 0; i < vetor.length; i += 1) {
    soma += vetor[i];
    if (typeof vetor[i] === 'string') { // vou verificar se existe algum valor não numerico no meu vetor.
      return undefined; // caso estiver me retorna um valor undefined
    }
  }
  media = soma / vetor.length; // faço a media dos valores, pego a soma e divido pelo tamanho do meu vetor.
  return Math.round(media); // retorna a media arredondada, ou seja, 4.5 vai pra 5 e 4.49 vai pra 4.
};

module.exports = average;

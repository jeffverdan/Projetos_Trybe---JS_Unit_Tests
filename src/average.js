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

const average = (listaArray) => {
  // qtdNumArray guarda o tamanho do array;
  const qtdNumArray = listaArray.length;
  // cria a variavel que recebera a soma dos numeros do array;
  let soma = 0;
  // verifica se o array tem menos de 1 item entao nao é um array e retorna undefined;
  if (listaArray.length < 1) {
    return undefined;
  }
  // for para percorrer o array e o if para vericar se dentro do array tem alguma string se sim retorna undefined; se for numeros segue o codigo.
  for (let key of listaArray) {
    if (typeof (key) === 'string') {
      return undefined;
    }
    // variavel soma recebe adiçao do valor do array;
    soma += key;
  }
  // A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
  return Math.round(soma / qtdNumArray);
};

module.exports = average;

/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (a, b) => {
  let text;
  if (typeof a === 'string' || typeof b === 'number') {
    text = `Oi, meu nome é ${a}!
Tenho ${b} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return text;
};
// Achei estranho que se alinhar as quebras de linhas na concatenação, o retorno sai com espaço de alinhamento.
module.exports = vqv;

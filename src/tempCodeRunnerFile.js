const average = (arr) => {
  let soma = 0;
  let media = 0
  for (let i = 0; i < arr.length; i += 1) {
    soma = arr[i];
    soma += soma;
    return soma;
  } media = soma / arr.length;
}; console.log(average([2, 2]));
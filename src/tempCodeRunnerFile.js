const vqv = (name, age) => {
  const string = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return string;
}; console.log(vqv('Vinicius', 22));

module.exports = vqv;
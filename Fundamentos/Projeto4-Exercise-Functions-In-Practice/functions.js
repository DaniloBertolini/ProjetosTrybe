// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  status = (status === 'ligado') ? status = 'desligado' : status = 'ligado';
  let mensagem = (status === 'ligado') ? 'O motor está ligado' : 'O motor está desligado';
  console.log(mensagem);
  return status;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.

const circleArea = (raio) => {
  let numPi = Math.PI.toFixed(2);
  let area = numPi * (raio ** 2);
  let result = (typeof raio === 'number') ? `Essa é a área do círculo: ${area}` : 'O parâmetro radius deve ser um número';
  return result;
};

circleArea('duna');
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (palavra) => {
  let array = palavra.split(' ');
  let resultado = '';
  for (let key in array) {
    let tamanho = 0;
    if (array[key].length > tamanho) {
      tamanho = array[key].length;
      resultado = array[key];
    }
  }
  return resultado;
};

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};

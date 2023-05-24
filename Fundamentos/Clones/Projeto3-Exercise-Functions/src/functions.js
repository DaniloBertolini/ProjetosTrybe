// Requisito 1 - Crie a função verificaPalindromo

function verificaPalindromo(string) {
  let newString = '';
  for (let a = string.length - 1; a >= 0; a -= 1) {
    newString += string[a];
  }
  if (string === newString) {
    return true;
  }
  return false;
}

// Requisito 2 - Crie a função indiceDoMaior

function indiceDoMaior (array) {
  let index = 0;
  let maior = array[0];
  for (let b = 0; b < array.length; b += 1) {
    if (array[b] > maior) {
      index = b;
    }
  }

  return index;
}

// Requisito 3 - Crie a função indiceDoMenor

function indiceDoMenor (array) {
  let index = 0;
  let maior = array[0];
  for (let b = 0; b < array.length; b += 1) {
    if (array[b] < maior) {
      index = b;
    }
  }

  return index;
}

// Requisito 4 - Crie a função maiorPalavra

function maiorPalavra (array) {
  let maior = '';
  for (let c = 0; c < array.length; c += 1) {
    if (array[c].length > maior.length) {
      maior = array[c];
    }
  }
  return maior;
}

// Requisito 5 - Crie a função maisRepetido

function maisRepetido (array) {

  let numero;
  let total = 0;
  for (let d = 0; d < array.length; d += 1) {
    let repeticao = 0;
    for (let e = 0; e < array.length; e += 1) {
      if (array[d] === array[e]) {
        repeticao += 1;
      }
    }
    if (repeticao > total) {
      total = repeticao;
      numero = array[d];
    }
  }
  return numero;
}

console.log(maisRepetido([12, 20, 23, 6, 3, 12, 20, 12, 12, 5]));

// Requisito 6 - Crie a função somatorio

function somatorio (numero) {
  let resultado = 0;
  if (numero < 0) {
    return 'ERRO';
  }
  for (let e = 0; e < numero; e += 1) {
    resultado += e + 1;
  }
  return resultado;
}

// Requisito 7 - Crie a função verificaFimPalavra

function verificaFimPalavra (palavra1, palavra2) {
  let limite = palavra1.length - palavra2.length - 1;
  let f = palavra1.length - 1;
  let g = palavra2.length - 1;
  for (f; f > limite; f -= 1) {
    for (g; g >= 0; g -= 1) {
      if (palavra1[f] !== palavra2[g]) {
        return false;
      }
      g -= 1;
      break;
    }
  }
  return true;
}

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};

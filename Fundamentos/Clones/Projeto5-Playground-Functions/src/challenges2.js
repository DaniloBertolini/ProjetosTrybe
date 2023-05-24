// Desafio 11 - Crie a função generatePhoneNumber

const verificacao = (array) => {
  if (array.length !== 11) {
    return '1'; // 'Array com tamanho incorreto.'
  }
  for (let i in array) {
    if (array[i] < 0 || array[i] > 10) {
      return '2'; // 'não é possível gerar um número de telefone com esses valores'
    }
    let contagem = 0;
    for (let a in array) {
      if (array[i] === array[a]) {
        contagem += 1;
      }
    }
    if (contagem >= 3) {
      return '2';
    }
  }
  return '3';
};
const generatePhoneNumber = (array) => {
  let resultado = verificacao(array);
  switch (resultado) {
  case '1':
    return 'Array com tamanho incorreto.';
  case '2':
    return 'não é possível gerar um número de telefone com esses valores';
  case '3':
    break;
  }
  const ddd = `(${array[0]}${array[1]}) `;
  let numero = '';
  for (let i = 2; i < array.length; i += 1) {
    numero += array[i];
    (i === 6) ? numero += '-' : '';
  }
  let numeroTotal = ddd + numero;
  return numeroTotal;
};

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => {
  let tamA = lineA < lineB + lineC;
  let tamAm = lineA > Math.abs(lineB - lineC);
  let tamB = lineB < lineC + lineA;
  let tamBm = lineB > Math.abs(lineC - lineA);
  let tamC = lineC < lineA + lineB;
  let tamCm = lineC > Math.abs(lineA - lineB);
  if (tamA && tamB && tamC) {
    return true;
  } if ((tamA && tamAm) || (tamB && tamBm) || (tamC && tamCm)) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate

const hydrate = (string) => {
  let conversao = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let soma = 0;
  let soNumero = string.replace(/[^0-9]/g, '');
  for (let key = 0; key < soNumero.length; key += 1) {
    soma += conversao[soNumero[key]];
  }
  let mensagem = (soma === 1) ? `${soma} copo de água` : `${soma} copos de água`;
  return mensagem;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

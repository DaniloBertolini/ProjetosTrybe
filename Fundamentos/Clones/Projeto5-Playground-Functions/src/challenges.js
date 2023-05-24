/* eslint-disable padded-blocks */
// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => {
  let resultado = (parametro1 && parametro2);
  return resultado;
};

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => {
  const array = string.split(' ');
  return array;
};

// Desafio 3 - Crie a função concatName

const concatName = (array) => {
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
};

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let maiorNumero = array[0];
  let contagem = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
      contagem = 1;
    } else if (array[i] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, heigth) => (base * heigth) / 2;
const calcRectangleArea = (base, heigth) => (base * heigth);
const calcAllAreas = (base, heigth, form) => {
  let mensagem;
  if (form === 'triângulo') {
    let valorDaArea = calcTriangleArea(base, heigth);
    mensagem = `O valor da área do triângulo é de: ${valorDaArea}`;
  } else if (form === 'retângulo') {
    let valorDaArea = calcRectangleArea(base, heigth);
    mensagem = `O valor da área do retângulo é de: ${valorDaArea}`;
  } else {
    mensagem = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }

  return mensagem;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let mensagem = '';
  let lenM1 = Math.abs(mouse - cat1);
  let lenM2 = Math.abs(mouse - cat2);
  if (lenM1 === lenM2) {
    mensagem = 'os gatos trombam e o rato foge';
  } else if (lenM1 < lenM2) {
    mensagem = 'cat1';
  } else {
    mensagem = 'cat2';
  }
  return mensagem;
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  const novoArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      novoArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (mensagem) => {
  let novaMensagem = '';
  vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let letra in mensagem) {
    if (vogais[mensagem[letra]] >= 0) {
      novaMensagem += vogais[mensagem[letra]];
    } else {
      novaMensagem += mensagem[letra];
    }
  }
  return novaMensagem;
};
const decode = (mensagem) => {
  let novaMensagem = '';
  vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let letra in mensagem) {
    if (Object.keys(vogais).indexOf(mensagem[letra]) >= 0) {
      novaMensagem += vogais[mensagem[letra]];
    } else {
      novaMensagem += mensagem[letra];
    }
  }
  return novaMensagem;
};

// Desafio 10 - Crie a função techList

const techList = (tecnologias, nome) => {
  let array = [];
  for (let key of tecnologias.sort()) {
    array.push({ tech: key, name: nome });
  }
  return array;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};

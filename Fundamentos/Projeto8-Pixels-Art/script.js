// Criação de Cor Aleatória
const geracaoDeCores = () => {
  const randomColor1 = Math.floor(Math.random() * 255);
  const randomColor2 = Math.floor(Math.random() * 255);
  const randomColor3 = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;

  return randomColor;
};

const paletaDeCores = document.getElementById('color-palette');

// Criação de Paleta

const criacaoPaleta = () => {
  for (let k = 0; k < 4; k += 1) {
    const criarDiv = document.createElement('div');
    criarDiv.classList = 'color';
    if (k === 0) {
      criarDiv.style.backgroundColor = 'black';
      criarDiv.classList.add('selected');
    } else {
      criarDiv.style.backgroundColor = geracaoDeCores();
    }
    paletaDeCores.appendChild(criarDiv);
  }
};
criacaoPaleta();

// Criação de Botões
const divBotao = document.getElementById('color-palette').nextElementSibling;
const criacaoBotaoCores = () => {
  const criarBotao = document.createElement('button');
  criarBotao.id = 'button-random-color';
  criarBotao.innerText = 'Cores aleatórias';
  divBotao.appendChild(criarBotao);
};

const criacaoBotaoLimpar = () => {
  const criarBotao = document.createElement('button');
  criarBotao.id = 'clear-board';
  criarBotao.innerText = 'Limpar';
  divBotao.appendChild(criarBotao);
};

const criacaoBotaoVQV = () => {
  const botaoVQV = document.getElementById('color-palette').nextElementSibling.nextElementSibling;
  const criarBotao = document.createElement('button');
  criarBotao.id = 'generate-board';
  criarBotao.innerText = 'VQV';
  botaoVQV.appendChild(criarBotao);
};

criacaoBotaoCores();
criacaoBotaoLimpar();
criacaoBotaoVQV();

// Clique no botão
const cliqueBotao = () => {
  const botao = document.getElementById('button-random-color');
  botao.addEventListener('click', () => {
    const paletas = document.getElementsByClassName('color');
    for (let k = 1; k < 4; k += 1) {
      paletas[k].style.backgroundColor = geracaoDeCores();
    }
    saveColors();
  });
};
cliqueBotao();

// Salvar Cores
const saveColors = () => {
  const cor1 = document.getElementsByClassName('color')[1].style.backgroundColor;
  const cor2 = document.getElementsByClassName('color')[2].style.backgroundColor;
  const cor3 = document.getElementsByClassName('color')[3].style.backgroundColor;

  const obj = {
    sCor1: cor1,
    sCor2: cor2,
    sCor3: cor3,
  };
  localStorage.setItem('colorPalette', JSON.stringify(obj));
};

// Recuperar Cores
const loadColors = () => {
  const obj = JSON.parse(localStorage.getItem('colorPalette'));
  if (obj !== null) {
    const teste1 = document.getElementsByClassName('color')[1];
    teste1.style.backgroundColor = obj.sCor1;
    const teste2 = document.getElementsByClassName('color')[2];
    teste2.style.backgroundColor = obj.sCor2;
    const teste3 = document.getElementsByClassName('color')[3];
    teste3.style.backgroundColor = obj.sCor3;
  }
};

window.onload = () => {
  loadColors();
  loadPicture();
  getLoadBoardSize();
};

// Quadro de Pixels
let tamanho = 5;
let tamanhoDupla = tamanho ** 2;
const quadroDePixels = document.getElementById('pixel-board');
const criacaoQuadro = () => {
  if (tamanho < 5) {
    tamanho = 5;
  } else if (tamanho > 50) {
    tamanho = 50;
  }
  for (let i = 0; i < tamanho; i += 1) {
    const criarLinha = document.createElement('div');
    criarLinha.classList = 'linha';
    quadroDePixels.appendChild(criarLinha);
    for (let k = 0; k < tamanho; k += 1) {
      const quadroDePixelsFilho = document.getElementById('pixel-board').children[i];
      const criarDiv = document.createElement('div');
      criarDiv.classList = 'pixel';
      criarDiv.style.backgroundColor = 'white';
      quadroDePixelsFilho.appendChild(criarDiv);
    }
  }
};

criacaoQuadro();

// Função selecionar
const classSelected = () => {
  const localCores = document.querySelectorAll('.color');
  for (const local of localCores) {
    local.addEventListener('click', (event) => {
      const selected = document.querySelectorAll('.selected');
      for (const el of selected) {
        el.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};

classSelected();

// Função pincel
const pintarPixel = () => {
  const pixel = document.querySelectorAll('.pixel');
  for (const local of pixel) {
    local.addEventListener('click', () => {
      const cor = document.querySelector('.selected').style.backgroundColor;
      local.style.backgroundColor = cor;
      savePicture();
    });
  }
};

pintarPixel();

// Limpar Cores
const limparCores = () => {
  const quadrados = document.querySelectorAll('#clear-board')[0];
  quadrados.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (const k of pixel) {
      k.style.backgroundColor = 'white';
    }
    localStorage.removeItem('pixelBoard');
  });
};

limparCores();

// Save Desenho
const savePicture = () => {
  const arrayCores = [];
  for (let k = 0; k < tamanhoDupla; k += 1) {
    arrayCores.push(document.querySelectorAll('.pixel')[k].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(arrayCores));
  localStorage.setItem('boardSize', JSON.stringify(tamanho));
};

// Recarregar Desenho
const loadPicture = () => {
  const arrayCores = JSON.parse(localStorage.getItem('pixelBoard'));
  const tam = document.querySelectorAll('.pixel').length;
  if (localStorage.getItem('pixelBoard') !== null) {
    for (let k = 0; k < tam; k += 1) {
      const pixel = document.querySelectorAll('.pixel')[k];
      pixel.style.backgroundColor = arrayCores[k];
    }
  }
};

// Redimensionamento de Quadro
const novoQuadro = () => {
  const valor = document.getElementById('board-size');
  const botao = document.getElementById('generate-board');
  botao.addEventListener('click', () => {
    if (!valor.value) {
      alert('Board inválido!');
      return;
    }
    redimensionar();
    tamanho = valor.value;
    criacaoQuadro();
    pintarPixel();
    localStorage.removeItem('pixelBoard');
    setSaveBoardSize();
  });
};

const setSaveBoardSize = () => {
  localStorage.setItem('boardSize', JSON.stringify(tamanho));
};

const getLoadBoardSize = () => {
  const novoNumero = localStorage.getItem('boardSize');
  if (novoNumero !== null) {
    tamanho = parseInt(JSON.parse(novoNumero));
    redimensionar();
    tamanhoDupla = tamanho ** 2;
    criacaoQuadro();
    pintarPixel();
    loadPicture();
  }
};

novoQuadro();

const redimensionar = () => {
  const local = document.querySelectorAll('.linha');
  for (const k of local) {
    k.remove();
  }
};
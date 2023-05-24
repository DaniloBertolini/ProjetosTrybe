const form = document.querySelector('.trybewarts-login');
const login = form.firstElementChild;
const password = login.nextElementSibling;
const enviar = password.nextElementSibling;
const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');

enviar.addEventListener('click', () => {
  const loginValue = login.value;
  const passwordValue = password.value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked === true) {
    console.log('teste true');
    submitBtn.removeAttribute('disabled');
  } else {
    console.log('teste false');
    submitBtn.setAttribute('disabled', '');
  }
});

textArea.addEventListener('input', () => {
  const texto = textArea.value;
  const quant = 500;
  const total = texto.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = texto.substring(0, quant);
  }
});

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const obs = document.querySelector('#textarea');

const secao = document.createElement('section');
secao.id = 'form-data';

const addNome = () => {
  const criar = document.createElement('p');
  criar.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  secao.append(criar);
};

const addEmail = () => {
  const criar = document.createElement('p');
  criar.innerText = `Email: ${email.value}`;
  secao.append(criar);
};

const addCasa = () => {
  const criar = document.createElement('p');
  criar.innerText = `Casa: ${casa.value}`;
  secao.append(criar);
};

const addFamilia = (familia) => {
  const criar = document.createElement('p');
  criar.innerText = `Família: ${familia.value}`;
  secao.append(criar);
};

const addAvaliacao = (avaliacao) => {
  const criar = document.createElement('p');
  criar.innerText = `Avaliação: ${avaliacao.value}`;
  secao.append(criar);
};

const addObs = () => {
  const criar = document.createElement('p');
  criar.innerText = `Observações: ${obs.value}`;
  secao.append(criar);
};

const addMaterias = (materias) => {
  const criar = document.createElement('p');
  let texto = '';
  for (let j = 0; j < materias.length; j += 1) {
    if (j === materias.length - 1) {
      texto += `${materias[j].value}`;
    } else {
      texto += `${materias[j].value}, `;
    }
  }
  criar.innerText = `Matérias: ${texto}`;
  secao.append(criar);
};

const enviarTudo = () => {
  submitBtn.addEventListener('click', (event) => {
    const familia = document.querySelector('input[name=family]:checked');
    const materias = document.querySelectorAll('input[type="checkbox"]:checked');
    const avaliacao = document.querySelector('input[name=rate]:checked');
    event.preventDefault();
    document.getElementById('evaluation-form').style.display = 'none';
    addNome();
    addEmail();
    addCasa();
    addFamilia(familia);
    addMaterias(materias);
    addAvaliacao(avaliacao);
    addObs();
    document.querySelector('.form-container').append(secao);
  });
};

enviarTudo();

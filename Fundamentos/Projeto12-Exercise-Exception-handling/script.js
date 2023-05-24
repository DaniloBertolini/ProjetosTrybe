const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');

const verificaVazio = () => {
  if (value1.value === '' || value2.value === '') {
    throw new Error('Preencha os campos para realizar a soma');
  }
};

const verificaString = () => {
  const numero1 = Number(value1.value);
  const numero2 = Number(value2.value);
  if ((Number.isNaN(numero1)) || Number.isNaN(numero2)) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

function calculateSum() {
  try {
    verificaVazio();
    verificaString();
    const result = Number(value1.value) + Number(value2.value);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

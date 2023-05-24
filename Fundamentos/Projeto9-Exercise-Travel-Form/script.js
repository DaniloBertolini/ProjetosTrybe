const botaoEnviar = document.getElementById('submit-btn');

const botaoEnviarPrevent = () => {
  botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

botaoEnviarPrevent();

botaoEnviar.disabled = true;
const localAgreement = document.getElementById('agreement');
localAgreement.addEventListener('input', () => {
  if (localAgreement.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});

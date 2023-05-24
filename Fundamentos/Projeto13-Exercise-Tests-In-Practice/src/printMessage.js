let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  // Implemente seu código aqui
  if (!characterInfo.personagem) {
    throw new Error('objeto inválido');
  }

  let result = `Boas vindas, ${characterInfo.personagem}`;

  return result;
};

console.log(printMessage(info));

module.exports = { info, printMessage };
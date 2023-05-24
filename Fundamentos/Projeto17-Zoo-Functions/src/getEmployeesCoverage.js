const data = require('../data/zoo_data');

const { employees, species } = data;
const callback = (acc, curr) => {
  const especies = [];
  const localidade = [];
  curr.responsibleFor.forEach((animais) => {
    const animalAchado = species.find((especie) => especie.id === animais);
    especies.push(animalAchado.name);
    localidade.push(animalAchado.location);
  });

  acc.push({
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: especies,
    locations: localidade,
  });
  return acc;
};

const getEmployeesCoverage = (iden) => {
  const valorInicial = [];
  const acharValor = employees.reduce(callback, valorInicial);

  if (!iden) {
    return acharValor;
  }

  const achei = acharValor.find((element) => {
    const valor = Object.values(iden);
    return element.fullName.includes(valor) || element.id.includes(valor);
  });

  if (achei) {
    return achei;
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;

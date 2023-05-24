const data = require('../data/zoo_data');

const { employees, species } = data;

const callback = (acc, curr) => (acc.age > curr.age ? acc : curr);

const getOldestFromFirstSpecies = (id) => {
  const pessoaEscolhida = employees.find((pessoa) => pessoa.id === id);
  const animalEscolhido = pessoaEscolhida.responsibleFor[0];
  const animaisSelecionados = species.find((animal) => animal.id === animalEscolhido).residents;

  const animalMaisVelho = animaisSelecionados.reduce(callback, 0);
  const { name: nome, sex, age } = animalMaisVelho;

  return [nome, sex, age];
};

module.exports = getOldestFromFirstSpecies;

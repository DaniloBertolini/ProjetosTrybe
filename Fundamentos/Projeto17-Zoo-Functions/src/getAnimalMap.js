const data = require('../data/zoo_data');

const { species } = data;

const sorted = (array, sort) => ((sort) ? array.sort() : array);

const nomes = (residents, sex) => {
  const lista = [];

  if (sex === 'female' || sex === 'male') {
    residents.forEach((animal) => {
      if (animal.sex === sex) lista.push(animal.name);
    });
    return lista;
  }
  residents.forEach((animal) => {
    lista.push(animal.name);
  });

  return lista;
};

const callbackRapida = (acc, curr) => {
  if (!Object.keys(acc).includes(curr.location)) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
};

const getAnimalMap = (options) => {
  const callback = (acc, { location, name, residents }) => {
    if (!Object.keys(acc).includes(location)) acc[location] = [];

    const nomeAnimais = nomes(residents, options.sex);
    const sortedNomeAnimais = sorted(nomeAnimais, options.sorted);
    // console.log(options.sort)
    acc[location].push({ [name]: sortedNomeAnimais });
    return acc;
  };

  const valorInicial = {};

  if (!options || !options.includeNames) {
    return species.reduce(callbackRapida, valorInicial);
  }

  return species.reduce(callback, valorInicial);
};

module.exports = getAnimalMap;

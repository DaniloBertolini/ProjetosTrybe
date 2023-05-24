const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const local = data.species.find((element) => element.name === animal);
  return local.residents.every((idade) => idade.age >= age);
};

module.exports = getAnimalsOlderThan;

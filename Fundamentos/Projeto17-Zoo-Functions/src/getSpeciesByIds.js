const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) { return []; }

  return data.species.filter((element) => ids.includes(element.id));
};

module.exports = getSpeciesByIds;

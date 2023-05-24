const data = require('../data/zoo_data');

// acc = {} curr = 1

const callback = (acc, curr) => {
  const { age } = curr;
  if (age < 18) {
    acc.child += 1;
  } else if (age >= 18 && age < 50) {
    acc.adult += 1;
  } else {
    acc.senior += 1;
  }
  return acc;
};

const countEntrants = (entrants) => {
  const valorInicial = { adult: 0, child: 0, senior: 0 };
  return entrants.reduce(callback, valorInicial);
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;

  const contagem = countEntrants(entrants);
  const { adult, child, senior } = contagem;
  const adultoContagem = adult * data.prices.adult;
  const criancaContagem = child * data.prices.child;
  const senhorContagem = senior * data.prices.senior;

  return adultoContagem + criancaContagem + senhorContagem;
};

module.exports = { calculateEntry, countEntrants };

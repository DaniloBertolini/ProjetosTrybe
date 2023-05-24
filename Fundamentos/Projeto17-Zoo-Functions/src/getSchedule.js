const data = require('../data/zoo_data');

const { species, hours } = data;
const diaMonday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
const diaMonday2 = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const callback = (acc, curr) => {
  const listaArray = [];

  species.forEach((animal) => {
    if (animal.availability.includes(curr)) {
      listaArray.push(animal.name);
    }
  });

  if (curr === 'Monday') {
    acc[curr] = diaMonday;
  } else {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: listaArray,
    };
  }
  return acc;
};

const todosOsDias = (array) => {
  const valorInicial = {};

  return array.reduce(callback, valorInicial);
};

const getSchedule = (scheduleTarget) => {
  const dias = Object.keys(hours);

  const especie = species.find((animais) => animais.name === scheduleTarget);
  if (especie) return especie.availability;

  if (scheduleTarget === 'Monday') return diaMonday2;

  if (dias.indexOf(scheduleTarget) >= 0) return todosOsDias([dias[dias.indexOf(scheduleTarget)]]);

  return todosOsDias(dias);
};

module.exports = getSchedule;

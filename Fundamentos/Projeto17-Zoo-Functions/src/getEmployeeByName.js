const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  const primeiroNome = data.employees.find((obj) => obj.firstName === employeeName);
  const segundoNome = data.employees.find((obj) => obj.lastName === employeeName);

  if (primeiroNome) {
    return primeiroNome;
  }
  if (segundoNome) {
    return segundoNome;
  }
};

// console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;

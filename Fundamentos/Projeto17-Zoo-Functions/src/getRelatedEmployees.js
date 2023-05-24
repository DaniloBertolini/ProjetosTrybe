const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((obj) => obj.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees.filter((obj) => obj.managers.includes(managerId))
      .map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };

const data = require('../data/zoo_data');

const arrayVazio = (animal) => {
  const animais = {};
  if (!animal) {
    data.species.forEach((objeto) => {
      animais[objeto.name] = objeto.residents.length;
    });

    return animais;
  }
};

const speciesSex = (animal) => {
  if (animal.species) {
    let contador = 0;
    data.species.map((objeto) => {
      if (animal.species === objeto.name) {
        contador = objeto.residents.filter((element) => element.sex === animal.sex).length;
      }
      return contador;
    });
    return contador;
  }
};

//   let contagem = 0;
//   data.species.map((el) => {
//     if (specie === el.name) {
//       contagem = el.residents.filter((e) => e.sex === sex).length;
//     }
//     return contagem;
//   });
//   return contagem;
// };

const species = (animal) => {
  if (animal.species) {
    const resultado = data.species.find((objeto) => objeto.name === animal.species);
    const contagem = resultado.residents.length;
    return contagem;
  }
};

const countAnimals = (animal) => {
  if (!animal) {
    return arrayVazio(animal);
  } if (animal.species && animal.sex) {
    return speciesSex(animal);
  } if (animal.species) {
    return species(animal);
  }
};

module.exports = countAnimals;

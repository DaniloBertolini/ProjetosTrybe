const { books } = require('./data/library');

const nameAndAge = () => {
  const array = [];
  books.forEach((element) => {
    const nome = element.author.name;
    const idade = element.releaseYear - element.author.birthYear;
    array.push({ author: nome, age: idade });
  });
  return array.sort((a, b) => a.age - b.age);
};

module.exports = { nameAndAge };

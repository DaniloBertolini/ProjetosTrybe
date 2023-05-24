const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  const array = [];
  books.forEach((element) => {
    const autor = element.author.name;
    const nascimento = element.author.birthYear;
    array.push(`${autor} - ${nascimento}`);
  });
  return array;
};

module.exports = { formatedAuthorNamesBirth };

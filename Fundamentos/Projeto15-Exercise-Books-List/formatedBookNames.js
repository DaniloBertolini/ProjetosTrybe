const { books } = require('./data/library');

// NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const formatedBookNames = () => {
  const array = [];
  books.forEach((element) => {
    const nome = element.name;
    const genero = element.genre;
    const autor = element.author.name;
    array.push(`${nome} - ${genero} - ${autor}`);
  });
  return array;
};

module.exports = { formatedBookNames };

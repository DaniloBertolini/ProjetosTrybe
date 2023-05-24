const { formatedBookNames } = require('../formatedBookNames');
const { resultFormatedBooksName } = require('./expects/expects');

describe('1 - Implemente a função `formatedBookNames`', () => {
  it('A função `formatedBookNames` deve retornar um array de strings com as informações dos livros formatadas ', () => {
    const result  = formatedBookNames();
    expect(result).toMatchObject(resultFormatedBooksName);
  });
});

const { nameAndAge } = require('../nameAndAge');
const { resultNameAndAge } = require('./expects/expects')

describe('3 - Implemente a função `nameAndAge`', () => {
  it('Cada objeto deve conter as chaves `author` e `age`', () => {
    const result = nameAndAge();
    for(let i = 0; i < result.length; i++) {
      expect(result[i]).toHaveProperty('author');
      expect(result[i]).toHaveProperty('age');
    }
  });

  it('A função `nameAndAge` deve retornar um array de objetos contendo o nome e idade que cada pessoa autora tinha ao lançar o livro', () => {
    const result = nameAndAge();
    expect(result).toMatchObject(resultNameAndAge);
  });
});
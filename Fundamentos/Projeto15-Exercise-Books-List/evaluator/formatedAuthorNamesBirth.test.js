const { formatedAuthorNamesBirth } = require('../formatedAuthorNamesBirth');
const { resultFormatedAuthorBirth } = require('./expects/expects')

describe('2 - Implemente a função `formatedAuthorNamesBirth`', () => {
  it('A função `formatedAuthorNamesBirth` deve retornar um array de strings com as informações das pessoas autoras formatadas ', () => {
    const result  = formatedAuthorNamesBirth();
    expect(result).toMatchObject(resultFormatedAuthorBirth);
  });
});
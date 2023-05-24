const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  /* it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
  }); */
  const cardapio = { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } };

  it('verifica se a função createMenu retorna um objeto fetchMenu e outro se o valor da chave fetchMenu é uma função.', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });
  it('Mostrando o cardápio', () => {
    expect(createMenu().fetchMenu()).toHaveProperty('food');
    expect(createMenu().fetchMenu()).toHaveProperty('drinks');
  });
});


// createMenu({ food: {}, drinks: {} }).fetchMenu()
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('tamanho', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('nomes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('idade', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('vazio / nulo', () => {
    expect(handlerElephants('')).toBe(null);
  });
  it('locallidade', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('popularidade', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('avaliabilidade', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('indefinido', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('diferente de string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
});

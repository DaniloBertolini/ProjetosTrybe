// exercise-bonus.test.js

const searchEmployee = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {

  it ('Testa se searchEmployee é uma função', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(typeof searchEmployee).toBe('function');
  });
  
  it ('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
  });
  
  it ('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });
  
  it ('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(searchEmployee('4456-4', 'specialities')).toContain('Context API', 'RTL', 'Bootstrap');
  });
  
  it ('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => searchEmployee('123-2', 'firstName')).toThrowError('ID não identificada')
  });
  
  it ('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => searchEmployee()).toThrowError();
  });
  
  it ('Testa a mensagem do erro para informação inexistente', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => searchEmployee()).toThrowError('Teste vazio!');
  });
});

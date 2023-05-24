const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const funcaoChamada = productDetails('Soldado Ipê', "Deter Gente");
    const funcaoInvertida = productDetails( "Deter Gente", 'Soldado Ipê');
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')

    // Teste se o retorno da função é um array.
    expect(Array.isArray(funcaoChamada)).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(funcaoChamada).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof funcaoChamada[0]).toBe('object');
    expect(typeof funcaoChamada[1]).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(funcaoChamada).not.toEqual(funcaoInvertida);

    // Teste se os dois productIds terminam com 123.
    expect(funcaoChamada[0].details.productId).toMatch('123');
    expect(funcaoChamada[1].details.productId).toMatch('123');

  });
});

// productDetails()
// { name: 'Soldado Ipê', details: { productId: 'Soldado Ipê123' } },
// { name: 'Deter Gente', details: { productId: 'Deter Gente123' } }
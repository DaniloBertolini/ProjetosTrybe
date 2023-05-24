# Requisitos

## 1. Crie uma função que ligue e desligue um motor de um carro

<details>
  <summary>Crie a lógica para ligar e desligar o motor</summary>
  
- Crie a função `ligarDesligar` utilizando arrow functions. Ela receberá uma string como parâmetro, para armazenar o valor de status do seu motor (`'ligado'` ou `'desligado'`);
- Altere o valor do `status`;
- Imprima no terminal a mensagem adequada `'O motor está ligado'` e `'O motor está desligado'` (lembre-se de utilizar o template literals nesse momento).
- Retorne o valor do status atualizado
- Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

> **De olho na dica 👀:** A lógica deverá utilizar uma condicional para ligar e desligar o motor.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- Se para o parâmetro `'ligado'` a função muda para `'desligado'`, chama o `console.log` com o valor `"O motor está desligado"` e retorna como resultado a _string_ `'desligado'`;
- Se para o parâmetro `'desligado'` a função muda para `'ligado'`, chama o `console.log` com o valor `"O motor está ligado"` e retorna como resultado a _string_ `'ligado'`;
  
</details>

## 2. Crie uma função que calcule a área de um círculo

<details>
  <summary>Crie uma função que calcule a área de um círculo</summary>
  
- Crie a função `circleArea`, que recebe o valor do raio como parâmetro, utilizando `arrow functions`;
- Crie uma `variável` para armazenar o valor de PI com duas casas decimais (lembre-se de armazenar o tipo de variável da forma correta);
- Crie a lógica para retornar a área do círculo;
- Retorne a mensagem `'Essa é a área do círculo: <resultado da função>'` (lembre-se de utilizar o template literals nesse momento).
- Retorne a mensagem `'O parâmetro radius deve ser um número'` caso o parâmetro não seja do tipo número.

> **De olho na dica 👀:** Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- Ao receber o parâmetro: `10`, o retorno será: `Essa é a área do círculo: 314`
- Ao receber o parâmetro: `5`, o retorno será: `Essa é a área do círculo: 78.5`
- Ao receber o parâmetro: `'duna'`, o retorno será: `O parâmetro radius deve ser um número`

</details>

## 3. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

<details>
  <summary>Implemente a função <code>longestWord</code> que retornará a maior palavra da frase recebida como parâmetro. </summary>

> **De olho na dica 👀:** Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

</details>
<details>
  <summary><strong>O que será testado</strong></summary>

- A função `longestWord` ao receber a frase `'Antônio foi ao banheiro e não sabemos o que aconteceu'` e o retorno da função longestWord é: `'aconteceu'`;
- Ao receber a frase: `Eu estudo na Trybe com muita dedicação` o retorno será `dedicação`;

</details>


# Requisitos

## 1. Crie uma função que verifica palíndromos

<details>
  <summary>Implemente a função <code>verificaPalindromo</code> que confere se uma palavra é um palíndromo ou não</summary>

- A função `verificaPalindromo` recebe como parâmetro uma `string` e deve retornar `true` se essa `string` for um palídromo, e `false` se não for.
- [Veja aqui](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo) a definição de palíndromo.

> **De olho na dica 👀:** Os métodos `split`, `join` e `reverse` podem ser muito úteis para esse requisito.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `verificaPalindromo` deve retornar `true` quando receber a string `'arara'`;

- A função `verificaPalindromo` deve retornar `false` quando receber a string `'desenvolvimento'`.

</details>

## 2. Crie uma função que retorne o índice do maior valor

<details>
  <summary>Implemente a função <code>indiceDoMaior</code> que retornará o índice do maior número em um array</summary>

- A função `indiceDoMaior` recebe como parâmetro um `array` de inteiros, não repetidos, e deve retornar o índice do array, em formato de número, onde se encontra o maior valor desse `array`.

> **De olho na dica 👀:** Os métodos `Number` ou `parseInt` podem te ajudar para converter tipos no JavaScript.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `indiceDoMaior` deve retornar `4` quando receber o array `[2, 3, 6, 7, 10, 1]`;

- A função `indiceDoMaior` deve retornar `0` quando receber o array `[9, 1, 3, 5, 7]`.

</details>

## 3. Crie uma função que retorne o índice do menor valor

<details>
  <summary>Implemente a função <code>indiceDoMenor</code> que retornará o índice do menor número em um array</summary>

- A função `indiceDoMenor` recebe como parâmetro um `array` de inteiros, não repetidos, e deve retornar o índice do array, em formato de número, onde se encontra o menor valor desse `array`.

> **De olho na dica 👀:** Os métodos `Number` ou `parseInt` podem te ajudar para converter tipos no JavaScript.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `indiceDoMenor` deve retornar `5` quando receber o array `[2, 3, 6, 7, 10, 1]`;

- A função `indiceDoMenor` deve retornar `6` quando receber o array `[2, 4, 6, 7, 10, 0, -3]`.

</details>

## 4. Crie uma função que retorna a maior palavra

<details>
  <summary>Implemente a função <code>maiorPalavra</code> que retornará a maior palavra em um array</summary>

- A função `maiorPalavra` recebe como parâmetro um `array` de `strings`, não repetidas, e deve retornar a palavra com a maior quantidade de caracteres.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `maiorPalavra` deve retornar `Fernanda` quando receber o array `['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']`;

- A função `maiorPalavra` deve retornar `JavaScript` quando receber o array `['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']`;

</details>

## 5. Crie uma função que retorne o número mais frequente

<details>
  <summary>Implemente a função <code>maisRepetido</code> que retornará o número que mais se repete em um array</summary>

- A função `maisRepetido` recebe como parâmetro um `array` de inteiros e deve retornar o número que mais se repete nesse array.

> **De olho nas dicas 👀:**

- Os métodos `Number` ou `parseInt` podem te ajudar para converter tipos no JavaScript;

- Dividir uma função grande em funções menores é uma boa forma de reduzir a complexidade e tornar seu código mais legível.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `maisRepetido` deve retornar `2` quando receber o array `[2, 3, 2, 5, 8, 2, 3]`;

- A função `maisRepetido` deve retornar `3` quando receber o array `[2, 3, -2, 3, -2, 2, 3]`;

</details>

## 6. Crie uma função que retorna o somatório de um número

<details>
  <summary>Implemente a função <code>somatorio</code> que retornará o somatório de um número</summary>

- A função `somatorio` recebe como parâmetro um número natural (número inteiro não negativo) `N` e retorna o somatório de todos os números de 1 até `N`.
- [Veja aqui](https://pt.wikipedia.org/wiki/Somat%C3%B3rio#:~:text=Em%20matem%C3%A1tica%2C%20somat%C3%B3rio%20ou%20somat%C3%B3ria,%C3%A9%20sua%20soma%20ou%20total.) a definição de somatório.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `somatorio` deve retornar `15` quando receber o número `5`;

- A função `somatorio` deve retornar `1` quando receber o número `1`;

- A função `somatorio` deve retornar `"ERRO"` quando receber um número negativo;

</details>

## 7. Crie uma função que verifica se uma `string` é o final de outra

<details>
  <summary>Implemente a função <code>verificaFimPalavra</code> que confere se uma string faz parte do final de outra string</summary>

- A função `verificaFimPalavra` recebe dois parâmetros do tipo `string`, podem ser chamados de `palavra1` e `palavra2`. Se `palavra2` fizer parte do final de `palavra1` a função retorna `true`, caso contrário retorna `false`.

</details>

<details>
  <summary><strong>O que será testado</strong></summary>

- A função `verificaFimPalavra` deve retornar `true` quando receber as strings `'trybe` e `'be'`, nessa ordem;

- A função `verificaFimPalavra` deve retornar `false` quando receber as strings `'joaofernando'` e `'fernan'`, nessa ordem;

</details>

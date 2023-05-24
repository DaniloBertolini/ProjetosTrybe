# Requisitos

Você deve criar erros personalizados para cada exercício, as mudanças devem ser feitas no arquivo `script.js`!

> **Observação:** Adicione o texto dos erros no parágrafo com id `result`, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

## Requisito 1 - Lance um erro em caso de input vazio

<details>

<summary> Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo? Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.</summary><br/>

**O que será testado:**

- Se um erro é lançado quando os dois campos estão em branco;
- Se um erro é lançado quando só um campo está preenchido;
- Se a mensagem de erro para os dois casos é `Preencha os campos para realizar a soma`;

> **De olho na dica 👀:** Utilize o `throw new Error` e o bloco `try/catch`.

</details>

## Requisito 2 - Lance um erro em caso de valores não numéricos

<details>

<summary> Caso os valores inseridos nos `inputs` pela pessoa usuária não sejam números, lance um erro.</summary><br/>

**O que será testado:**

- Se um erro é lançado quando os dois campos não são preenchidos com valores numéricos;
- Se a mensagem de erro é `Informe dois números para realizar a soma`;
- Não retorna erro quando os dois campos estão com valores numéricos.

> **De olho na dica 👀:** Você pode fazer essa verificação utilizando um combo da função [Number(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), que retorna o número convertido para string ou `NaN` caso não consiga fazer a conversão. Em conjunto com a função [Number.isNaN()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), que você pode utilizar para verificar se a conversão feita pela função `Number(value)` foi bem sucedida.

> **De olho na dica 👀:** Lembre-se de que, em JavaScript, para separar a parte inteira da decimal de um número, você deve utilizar o `.`. Exemplo: **1.5**, com ponto, ao invés de **1,5**, com vírgula.

</details>

## Exercício 3 - Apague os inputs ao clicar no botão de realizar a soma

<summary> Ao clicar no botão para realizar a soma os inputs devem ser apagados.</summary><br/>

**O que será testado:**

- Os valores são apagados após o clique;

> Caso queira, utilize o [finally](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause) para apagar os valores dos `inputs` ao final do bloco `try/catch`.

</details>

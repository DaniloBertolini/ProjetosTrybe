# Requisitos

## 1. Crie os casos de teste da funcão `Sum`

<details>
  <summary>A função sum(a, b) retorna a soma do parâmetro <code>a</code> com o <code>b</code>. No arquivo já criado <code>sum.spec.js</code>, adicione os testes a seguir: </summary><br>

  - Teste se o retorno de `sum(4, 5)` é `9`;
  - Teste se o retorno de `sum(0, 0)` é `0`.
  - Teste se a função `sum` lança um erro quando os parâmetros são **number** `4` e **string** `'5'`;
  - Teste se a mensagem de erro é `'parameters must be numbers'` quando realizar a chamada `sum(4, '5')`;

</details>
<details>
  <summary><strong>O que será testado: </strong></summary><br>

- Será validado se, ao receber `4` e `5` como parâmetro, o retorno é 9;
- Será validado se, ao receber `0` e `0` como parâmetro, o retorno é 0.
- Dispara um erro ao receber `4` e `'5'` como parâmetro;
- Verifica se ao receber `4` e `'5'`, a memsagem de erro é `parameters must be numbers`.

</details>

---

## 2. Implemente o caso de teste para a função `printMessage`
<details>
  <summary> Use como base a função <code>printMessage</code> que imprime no terminal uma mensagem de boas-vindas de acordo com as informações de personagem passada. </summary><br>

- Crie um teste para garantir que o objeto passado como parâmetro possui a propriedade personagem.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Verifica se, o objeto passado como parâmetro possui a propriedade `personagem`.

</details>

---

## 3. Ainda sobre a função `printMessage`, adicione os casos de teste a seguir
<details>
<summary> Complementando o teste da função acima que valida a entrada de parâmetro, você pode utilizar o matcher <code>toMatch()</code> para validar a resposta da função. </summary><br>

  - Verifique se a resposta contém a informação Boas vindas, antes de chamar o nome da personagem;
  - Verifique se a resposta contém o nome correto da personagem.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Será validado se, o retorno da função contém a `mensagem de boas vindas`;
- Será validado se, o retorno da função contém o `nome correto da personagem`.

</details>

---

## 4. Crie um fluxo de exceção para a função `printMessage`

<details>
<summary> Para finalizar o teste da função <code>printMessage</code>, você pode ainda criar um fluxo de exceção para possíveis erros.</summary><br>

  - Dentro da função `printMessage` crie um  um fluxo de exceção para criar um erro caso seja enviado um parâmetro que não seja um objeto, ou que não tenha a propriedade personagem;
  - Agora que a função possui um fluxo de exceção, crie um teste para validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.

  > **De olho na dica 👀:**  Aqui você pode relembrar o [toThrow.](https://jestjs.io/pt-BR/docs/expect#tothrowerror).

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Será validado se, no teste da função printMessage, ao receber um objeto inválido
retorna a mensagem: `objeto inválido`.

</details>

---

 # Bônus

 ## 5. Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função

 <details> 
  <summary><strong>Sua função deverá se chamar <code>searchEmployee</code>, ela retorna os resultados da busca pelo id para aquele funcionário e a informação consultada.</strong></summary><br>

  Considere os dados do aquivo <code>searchEmployee</code> localizando dentro da pasta src.
  
  - Crie uma função `searchEmployee` que receba dois parâmetros: o `id` do funcionário e a informação disponível sobre ele (`firstName`, `lastName`, `specialities`);
  - Caso o `id` não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificado"`;
  - Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"`;
  - Crie um teste para checar se, a função `searchEmployee` existe;
  - Crie um teste para checar se, a função `searchEmployee(id, "firstName")` retorna o primeiro nome do usuário da id consultada;
  - Crie um teste para checar se, a função `searchEmployee(id, "lastName")` retorna o segundo nome do usuário da id consultada;
  - Crie um teste para checar se, a função `searchEmployee(id, "specialities")` retorna um array com todas as habilidades do id pesquisado;
  - Crie um teste para checar se, a mensagem `"ID não identificada"` é retornado quando a ID não existir;
  - Crie um teste que verifica o erro quando a informação e o ID são inexistentes;
  - Teste a mensagem do erro para informação inexistente.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

  - Verifica se função `searchEmployee` existe;
  - Verifica se a função `searchEmployee` ao receber como parâmetro `(id, "firstName")` retorna o primeiro nome do usuário da id consultada;
  - Verifica se a função `searchEmployee` ao receber como parâmetro `(id, "lastName")` retorna o segundo nome do usuário da id consultada;
  - Verifica se a função `searchEmployee` ao receber como parâmetro `(id, "specialities")` retorna um array com todas as habilidades do id pesquisado;
  - Verifica se, a mensagem `"ID não identificada"` é retornado quando o ID não existir;
  - Verifica se a função lança um erro, quando a informação e o ID são inexistentes;
  - Verifica a mensagem de erro para informação inexistente.


</details>

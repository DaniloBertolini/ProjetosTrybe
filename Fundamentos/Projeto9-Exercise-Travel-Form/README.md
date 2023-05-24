# Requisitos

## 1. Adicione o título ao formulário.

<details>
  <summary>No arquivo já criado <code>form.html</code> , adicione as informações a seguir </summary><br>

  - Adicione o título, que deverá ficar dentro de uma tag `h1` e possuir o id `title`;
  - O título deve ter o texto `Formulário Trybe Travel`;
  - Crie a tag `form` que deve conter o id `main-form`.

</details>
<details>
  <summary><strong>O que será testado: </strong></summary><br>

- O título deve ser uma tag `h1`;
- O título deve possuir o ID `title`;
- O conteúdo do título deve ser `Formulário Trybe Travel`;
- Existe um elemento form com o id `main-form`.

</details>

## 2. Adicione os campos do formulário.

<details>
  <summary>Dentro do elemento <code>form</code>, adicione as informações a seguir </summary><br>

- Crie os seguintes campos:
- Nome Completo:
  - Limitado entre 10 e 40 caracteres.
  - O input deve ter o id `fullName`.
- E-mail:
  - Limitado entre 10 e 50 caracteres.
  - O input deve ter o id `email`.
- Destino Preferido:
  - Deverá ter 4 opções: Cidade, Campo, Praia, Montanha.
  - Cada opção deverá ser um `input` do tipo `radio` tendo como atributo `name` o valor `'destinations'`.
- Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
  - Limite de 500 caracteres
  - O textarea deve ter o id `question`.
- Qual a melhor data para realizar sua viagem?
  - O input da data deve ficar abaixo do input anterior.
  - O input deve ter o id `date`.
- Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
  - Crie input do tipo checkbox ao fim desta pergunta.
  - O input deve ter o id `promo`.
- Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
  - Crie input do tipo checkbox ao fim desta frase.
  - O input deve ter o id `agreement`.

> **De olho na dica 👀:** Procure saber mais sobre as tags label e fieldset clicando nas documentações a seguir [label](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label) e [fieldset](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset)

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Existe um elemento com o id `fullName`;
- Existe um elemento com o id `email`;
- Existe um elemento com o id `destination`;
- Existe um elemento com o id `question`'.
- Existe um elemento com o id `date`'.
- Existe um elemento com o id `promo`'.
- Existe um elemento com o id `agreement`'.

</details>

## 3. Adicione botões ao formulário.
<details>
<summary>O formulário deverá ter 2 botões </summary><br>

  - Crie um botão para enviar as informações preenchidas;
    - O botão deve ter o id `submit-btn`.
  - Crie um botão para limpar as informações contidas nos campos.
    - O botão deve ter o id `clear-btn`.
</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Existem dois elementos com a tag `button`.
- Verifica se o texto do botão é `Enviar`.
- Existe um elemento com o id `submit-btn`.
- Verifica se o texto do botão é `Limpar`.
- Existe um elemento com o id `clear-btn`.

</details>

## 4. Manipule as informações via Javascript.

<details>
<summary>No arquivo <code>script.js</code> faça as seguintes tarefas</summary>

  - Interrompa o comportamento padrão do botão submit utilizando o método `preventDefault()`;
  - Ao clicar no botão limpar, os campos devem ficar vazios.

  > **De olho na dica 👀:**  Vamos utilizar um pouco de Javascript. Para isso, crie o arquivo script.js e o referencie no HTML.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Ao clicar no botão enviar, as informações contidas nos inputs devem permanecer;
- Ao clicar no botão limpar, os campos devem ficar vazios. 

</details>

---
 
# Bônus

## 5. Validação de imagem

<details>
<summary>Que tal fazer a validação da imagem?</summary>

A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.<br>

- Desabilite o botão caso o checkbox não esteja selecionado.
- Habilite o botão caso o checkbox seja selecionado.

</details>

<details>
<summary><strong>O que será testado</strong></summary><br>

- Existe um elemento do tipo checkbox com o id agreement;
- O botão deve estar inicialmente desabilitado;
- O botão deve se tornar habilitado ao marcar o checkbox com id igual a agreement.

</details>

## 6. Validação dos campos

<details>
<summary>Faça a validação dos campos do formulário </summary><br>

- Faça a validação dos campos com limite de caracteres a seguir; 
- O input Nome completo deve teve ter no máximo 40 caracteres;
- O input E-mail deve teve ter no máximo 50 caracteres;
- O textarea deve ter no máximo 500 caracteres.
</details>

<details>
<summary><strong>O que será testado</strong></summary><br>

- O input Nome completo recebendo o máximo de 40 caracteres;
- O input E-mail recebendo o máximo de 50 caracteres;
- O textarea recebendo o máximo de 500 caracteres.
</details>


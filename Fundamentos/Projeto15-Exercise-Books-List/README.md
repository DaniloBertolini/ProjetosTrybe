## 1. Implemente a função `formatedBookNames`

<details>
  <summary>
  Implemente a função <code>formatedBookNames</code> que irá formatar as informações dos livros da nossa base de dados
  </summary> <br />

- A função `formatedBookNames` deverá ser implementada dentro do arquivo `formatedBookNames.js`

- A função `formatedBookNames` deverá retornar um array de strings no formato: `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`

⚠️ Importante: A estrutura de dados `books` já está importada na linha 1 no arquivo desse exercício.
Para usar, descomente a importação.
<br/>
Esse trecho está comentado para evitar um erro de lint, uma vez que a variável não está sendo utilizada ainda.


**O que será testado:**

- A função `formatedBookNames` deve retornar as informações de todos os livros contidos na base de dados, formatados como indicado: `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`.

</details>

---

## 2. Implemente a função `formatedAuthorNamesBirth`

<details>
  <summary>
  Implemente a função <code>formatedAuthorNamesBirth</code> que irá formatar informações das pessoas autoras da nossa base de dados
  </summary> <br />

- A função `formatedAuthorNamesBirth` deverá ser implementada dentro do arquivo `formatedAuthorNamesBirth.js`

- A função `formatedAuthorNamesBirth` deverá retornar um array de strings no formato: `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`

⚠️ Importante: A estrutura de dados `books` já está importada na linha 1 no arquivo desse exercício.
Para usar, descomente a importação.
<br/>
Esse trecho está comentado para evitar um erro de lint, uma vez que a variável não está sendo utilizada ainda.

**O que será testado:**

- A função `formatedAuthorNamesBirth` deve retornar um array de strings;

- A função `formatedAuthorNamesBirth`, deve retornar as informações de todas as pessoas autoras contidas na base de dados formatados como indicado: `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`.

</details>

---

## 3. Implemente a função `nameAndAge`

<details>
 <summary>
  Implemente a função <code>nameAndAge</code> que deve retornar um array de objetos, os objetos devem conter informações do autor
  </summary> <br />

- A função `nameAndAge` deverá ser implementada dentro do arquivo `nameAndAge.js`

- Retorne um array de objetos, cada objeto deve conter:

  - a chave `author`, e o valor deve ser o nome da pessoa autora
  - a chave `age`, e o valor deve ser a idade da pessoa autora quando lançou o livro

⚠️ Importante: A estrutura de dados `books` já está importada na linha 1 no arquivo desse exercício.
Para usar, descomente a importação.
<br/>
Esse trecho está comentado para evitar um erro de lint, uma vez que a variável não está sendo utilizada ainda.

**O que será testado:**

- A função deve retornar um array de objetos;

- Cada objeto possui as chaves `author` e `age`;

- O array está ordenado corretamente, do autor que fez o lançamento com menor idade para o que fez o lançamento com maior idade.

</details>

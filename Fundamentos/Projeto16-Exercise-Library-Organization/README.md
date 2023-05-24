
# Boas-vindas ao repositório do exercício Organizando a biblioteca!


# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
	<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

  A empresa em que você trabalha fechou um contrato com uma biblioteca e você está responsável por desenvolver o novo sistema para organizar os livros.

  Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros que contém informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

  Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm as funções já criadas no arquivo `src/index.js`.

  Vamos lá?

</details><br />

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git clone git@github.com:tryber/sd-032-b-exercise-library-organization.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd sd-032-b-exercise-library-organization`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Crie uma branch a partir da branch `main`

	* Verifique se você está na branch `main`
	  * Exemplo: `git branch`
	* Se não estiver, mude para a branch `main`
	  * Exemplo: `git checkout main`
	* Agora, crie uma branch para qual você vai submeter os `commits` do seu exercício:
		* Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercício`
		* Exemplo: `git checkout -b renanlf-library-organization`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
	* Verifique que as mudanças ainda não estão no _stage_
	  * Exemplo: `git status` (os arquivos no diretório `src` devem aparecer em vermelho)

	* Adicione o novo arquivo ao _stage_ do Git
	  * Exemplo: `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
	  *  `git status` (deve aparecer listado os arquivos do diretório `src` em verde)

	* Faça o `commit` inicial
	  * Exemplo: `git commit -m 'iniciando o exercício. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
	*  `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

	* Usando o exemplo anterior: `git push -u origin renanlf-library-organization`

6. Crie um novo `Pull Request`  _(PR)_
	* Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-032-b-exercise-library-organization/pulls)
	* Clique no botão verde _"New pull request"_
	* Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
	* Coloque um título para o seu _Pull Request_
    * Exemplo: _"Cria tela de busca"_
	* Clique no botão verde _"Create pull request"_
	* Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
	*  **Não se preocupe em preencher mais nada por enquanto!**
	* Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-032-b-exercise-library-organization/pulls) e confira que o seu _Pull Request_ está criado.

</details>

<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

* Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

2. `git add` _(para adicionar arquivos ao stage do Git)_;

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _'Code Review'_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _'code-review'_ e marque seus colegas:

- No menu à direita, clique no _link_ **'Labels'** e escolha a _label_ **code-review**;

- No menu à direita, clique no _link_ **'Assignees'** e escolha **o seu usuário**;

- No menu à direita, clique no _link_ **'Reviewers'** e digite `students`, selecione o time `tryber/students-sd-032-b`.

Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).

⚠️ **Lembre-se que garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!** ⚠️

</details>

<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Para garantir a qualidade do código, vamos utilizar neste exercício o `ESLint`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

Para poder rodar o `ESLint` certifique-se de ter executado o comando `npm install` dentro do repositório.

Para rodá-los localmente no repositório, execute os comandos abaixo:

```bash
npm run lint
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />

Para que os testes sejam executados localmente, verifique se a versão do node na sua máquina é a `16`:

```bash
node -v
```

Caso a versão seja diferente, você pode utilizar o `nvm` para trocar de versão com o seguinte comando:

```bash
nvm use 16
```

Caso você não tenha o `nvm` instalado na sua máquina, você pode consultar o [conteúdo para instalação do nvm](https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/60b99b90-bcd4-4189-9198-3389f7f742f3/instalacao-do-node-para-linux/156d871d-97f2-4169-b766-85e4e56812ac?use_case=side_bar)

Todos os requisitos do exercício serão testados **automaticamente** por meio do `Jest`.

Para testar todas funções no terminal, basta executar o comando abaixo:

```bash
npm test
```

Caso queira testar apenas uma função rode o comando abaixo:

```bash
npm test nome-do-arquivo
```

Por exemplo:

```bash
npm test fantasyOrScienceFiction
```

⚠️ **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
<summary><strong>🏗 Estrutura do exercício</strong></summary><br />

Na pasta raiz do exercício, temos as pastas `src`, `evaluator` e `data`.

A pasta `src` contém o arquivo `index.js` com cada uma das funções que você irá implementar. 
A pasta `data` contém o arquivo `library.js`, que armazena os dados que você vai utilizar para retornar as informações sobre a biblioteca.
A pasta `evaluator` possui os testes automatizados que avaliarão o seu projeto; os conteúdos desta pasta não devem ser alterados.

<details>
  <summary>
    O arquivo <code>library.js</code> contém um <strong>objeto</strong> no seguinte formato:
  </summary> <br />

```javascript
{
	books: [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
        name: 'Frank Herbert',
        birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
        name: 'Stephen King',
        birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
        },
        releaseYear: 1928,
    },
  ]
}
```

<details>
  <summary>
  O array <code>books</code> guarda as informações de cada livro da biblioteca
  </summary> <br />

  | Chave | Descrição |
  | ------------ | ----------|
  | `id`         | é o identificador do livro |
  | `name`       | é o nome do livro |
  | `genre`      | é o gênero do livro |
  | `releaseYear`| é o ano de lançamento do livro |
  | `author` | é um objeto que representa a pessoa autora do livro |

</details>

<details>
  <summary>
  O objeto <code>author</code> é onde ficam as informações de cada pessoa autora
  </summary> <br />

  | Chave | Descrição |
  | ----------- | ------ |
  | `name`        | é o nome dessa pessoa |
  | `birthYear` | é o ano de nascimento dessa pessoa |

</details>

</details>

<br />

⚠️ **Apenas os arquivos indicados nos requisitos devem ser alterados, caso contrário, sua avaliação poderá ser comprometida.**

Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, **não** sendo necessária a criação de outros arquivos.

</details>

<details>
<summary><strong>🏪 O que você deve desenvolver </strong></summary><br />

Você deve complementar as funções criadas no arquivo `index.js` que está dentro da pasta `src/`.

</details>

<details>
<summary><strong>⚛️ Dica</strong></summary><br />

Ao trabalhar com desenvolvimento, você vai se deparar com vários tipos de desafios, por isso é muito importante que os problemas sejam quebrados em partes menores, para que sejam resolvidos aos poucos. Isso vai te ajudar a encontrar uma solução de maneira mais fácil. Dessa forma, um bom jeito de começar a desenvolver um projeto é lembrar que as funções são compostas por pequenos blocos de lógica que têm um objetivo específico.

Não se esqueça de verificar o que cada parte do seu código retorna! Você pode fazer isso utilizando o `console.log`, que é um ótimo aliado na visualização do seu código! 😉

⚠️ **Atente-se para o retorno de cada parte do seu código**

</details>

<details>

<summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />
Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details><br />

---

# Requisitos

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

## 1. Filtre todos os objetos do gênero ficção científica ou fantasia.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFiction</code> para buscar apenas os livros do gênero ficção científica ou fantasia.
  </summary> <br />

**O que será testado:**

- A função `fantasyOrScienceFiction`, caso não receba nenhum parâmetro, deve retornar o seguinte array:

```js
[
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];
```

</details>

---

## 2. Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

<details>
  <summary>
  Implemente a função <code>oldBooksOrdered</code> que deve retornar um <code>array</code> com os livros publicados há no mínimo 60 anos, a partir de um ano recebido por parâmetro, ordenados do mais velho para o mais novo.
  </summary> <br />

**O que será testado:**

> Use como data limite o ano de 2020, sendo assim, o resultado deve conter todos os livros com mais de 60 anos até 2020.

- A função `oldBooksOrdered`, com o parâmetro `2020`, deve retornar o seguinte array:

```js
[
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];
```

</details>

---

## 3. Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

<details>
  <summary>
  Implemente a função <code>booksByAuthorBirthYear</code> que deve retornar um <code>array</code> com os nomes dos livros escritos por pessoas autoras que nasceram no ano passado, de acordo com o que foi passado por parâmetro.
  </summary> <br />

**O que será testado:**

- A função `booksByAuthorBirthYear`, ao ser executada com o argumento `1920`, deve retornar o seguinte array:

```js
[ 'Fundação', 'Duna' ];
```

</details>

---

## 4. Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFictionAuthors</code> que deve retornar um <code>array</code> com o nome das pessoas autoras de ficção científica ou fantasia, ordenadas alfabeticamente.
  </summary> <br />

**O que será testado:**

- A função `fantasyOrScienceFictionAuthors` deve retornar o seguinte array:

```js
[
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];
```

</details>

---

## 5. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

<details>
  <summary>
  Implemente a função <code>oldBooks</code> que deve retornar um <code>array</code> com o nome dos livros com mais de 60 anos publicados, a partir de um ano recebido por parâmetro.
  </summary> <br />

**O que será testado:**

- A função `oldBooks`, com o parâmetro `2022`, deve retornar o seguinte array:

```js
[
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
```

</details>

---

## 6. Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

<details>
  <summary>
  Implemente a função <code>authorWith3DotsOnName</code> que deve retornar o nome do primeiro livro cuja pessoa autora inicie seu nome com três iniciais.
  </summary> <br />

> **De olho na dica 👀:** cada inicial termina com um ponto.

**O que será testado:**

- A função `authorWith3DotsOnName` deve retornar a `string` "O Senhor dos Anéis";

</details>

---

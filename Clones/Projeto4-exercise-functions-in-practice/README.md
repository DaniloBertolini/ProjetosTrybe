# Boas-vindas ao repositório de exercícios de Funções na Prática.

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ (PR) para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito. Para isso, vamos criar uma série de funções com respostas já definidas e exercitar nossa lógica de programação.

</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar funções em JavaScript;

- Criar loops para percorrer e manipular arrays;

- Utilizar estruturas condicionais;

- Utilizar lógica de programação para estruturar e resolver problemas.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-032-b-exercise-functions-in-practice`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-032-b-exercise-functions-in-practice`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-exercise-functions`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-exercise-functions`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-032-b-exercise-functions-in-practice/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-032-b-exercise-functions-in-practice/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary>
<strong>🏗 Como estruturar seu projeto</strong>
  </summary> <br />

O seu Pull Request deverá conter o arquivo `src/functions.js` com suas funções implementadas.

- Crie as funções no arquivo `functions.js` que está no diretório `src`, usando os mesmos nomes especificados nos comentários. Você pode criar outras funções de auxílio, entretanto, **você deve criar e utilizar as funções com os nomes que estão nos comentários, pois estas que serão avaliadas.**

**De olho na dica 👀:**
- Para verificar se a sua função foi criada corretamente você pode instalar a extensão `code runner` no _VSCode_;

- Utilize `console.log()` para testar as funções localmente, mas remova antes de fazer o `push` 😉.

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-032-b`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

:warning: **NESTE EXERCÍCIO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** :warning:

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

⚠️**AVISO**: Muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser **exatamente igual** ao texto descrito no requisito.

Para verificar a solução proposta, você pode efetuar todos os testes localmente, basta executar:

```bash
npm test
```

**_ou_**

Para executar um arquivo de teste específico, utilize `npm test nomeDoArquivoDeTeste`:

```bash
npm test verificaPalindromo
```

⚠️ Atenção: **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>


<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

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

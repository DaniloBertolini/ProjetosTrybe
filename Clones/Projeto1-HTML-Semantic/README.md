# Boas vindas ao exercício HTML Semântico

O objetivo desses exercícios é colocar em prática o que você aprendeu sobre HTML semântico.

---

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu exercício você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste exercício você vai desenvolver uma página HTML usando as principais tags semânticas.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Utilizar a tag `<header>` de forma semanticamente correta

- Utilizar a tag `<nav>` de forma semanticamente correta

- Utilizar a tag `<article>` de forma semanticamente correta

- Utilizar a tag `<section>` de forma semanticamente correta

- Utilizar a tag `<aside>` de forma semanticamente correta

- Utilizar a tag `<footer>` de forma semanticamente correta

- Utilizar a tag `<a>` com os atributos `href` e `target`

- Utilizar a tag `<img>` com os atributos `src`, `alt` e `width`

- Utilizar as tags de header `<h1>`, `<h2>`, etc.

- Utilizar a tag `<p>`

- Definir `Links Internos`, no HTML, como links para outros locais da própria página

- Utilizar as tag `<ul>`, `<li>`, `<strong>`, `<em>`, `<html>`, `<head>` e `<!DOCTYPE html>` para garantir que o navegador saiba que o documento é do tipo `HTML 5`

</details>

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-032-b-exercise-semantic-html.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-032-b-exercise-semantic-html`

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto:
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`;
  - Exemplo: `git checkout -b maria-soares-exercise-semantic-html`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:

- Verifique que você está na raiz do projeto:
  - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/maria/code/**sd-032-b-exercise-semantic-html**_
- Crie os arquivos index.html e style.css:
  - Exemplo: `touch index.html style.css`

5. Adicione as mudanças ao *stage* do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no *stage*:
  - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
- Adicione o novo arquivo ao *stage* do Git:
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - *que estavam em vermelho* - ao stage do Git)
    - `git status` (devem aparecer listados os arquivos em verde)
- Faça o `commit` inicial:
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo *nothing to commit* )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin maria-soares-exercise-semantic-html`

7. Crie um novo `Pull Request` *(PR)*

- Vá até a página de *Pull Requests* do [repositório no GitHub](https://github.com/tryber/sd-032-b-exercise-semantic-html/pulls)
- Clique no botão verde *"New pull request"*
- Clique na caixa de seleção *"Compare"* e escolha a sua branch **com atenção** - Coloque um título para o seu *Pull Request*
  - Exemplo: *"Cria tela de busca"*
- Clique no botão verde *"Create pull request"*

- Adicione uma descrição para o *Pull Request*, um título nítido que o identifique, e clique no botão verde *"Create pull request"*

 <img width="1335" alt="Exemplo de pull request" src="https://user-images.githubusercontent.com/42356399/166255109-b95e6eb4-2503-45e5-8fb3-cf7caa0436e5.png">

- Volte até a [página de *Pull Requests* do repositório](https://github.com/tryber/sd-032-b-exercise-semantic-html/pulls) e confira que o seu *Pull Request* está criado

</details>

<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente pois assim você garante visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho :) ;
- Lembre-se de sempre após um (ou alguns) `commits`, atualizar o repositório remoto;
- Os comandos que você utilizará com mais frequência são:

1. `git status` *(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)*;

2. `git add` *(para adicionar arquivos ao stage do Git)*;

3. `git commit` *(para criar um commit com os arquivos que estão no stage do Git)*;

4. `git push -u origin nome-da-branch` *(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)*;

5. `git push` *(para enviar o commit para o repositório remoto após o passo anterior)*.

</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />

Todos os requisitos do projeto serão testados **automaticamente** por meio do `Cypress`.

## Cypress

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

Após executar o comando acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

## Observações técnicas

Alguns requisitos devem seguir um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de *ids* que alguns elementos do seu projeto devem possuir**.

- Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

- ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução.

- Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que *500Kb*.**

- ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens.

- Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensioná-las para um tamanho menor.

- Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

- Na página do seu *Pull Request*, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;
<img width="600" alt="evaluator-job" src="https://user-images.githubusercontent.com/42356399/166258020-e9f1d3c2-9530-4194-91be-c3983427d5f6.png">

- Na página que se abrirá, procure pela linha _**"Run Cypress Evaluator"**_ e clique nela;

<img width="600" alt="topico-run-cypress" src="https://user-images.githubusercontent.com/42356399/166258198-fca19bf0-64ac-4d82-ab81-e2860d255c76.png">

- Desça a página até encontrar a mensagem _**"(Run Starting)"**_;
<img width="600" alt="Captura de Tela 2022-05-02 às 12 09 59" src="https://user-images.githubusercontent.com/42356399/166258577-23beeb14-bfcc-4e81-95a7-11cdcfda0d0b.png">

- Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252);

- Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

- Você pode fazer mais do que for pedido, mas não menos.

- **Nada além do que for pedido nos requisitos será avaliado**. *Esta é uma oportunidade de você exercitar a sua criatividade e experimentar com os conhecimentos adquiridos.*

⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu projeto está pronto para o *'Code Review'* dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** *Pull Request*, adicione a label de *'code-review'* e marque seus colegas:
  - No menu à direita, clique no *link* **'Labels'** e escolha a *label* **code-review**;
  - No menu à direita, clique no *link* **'Assignees'** e escolha **o seu usuário**;
  - No menu à direita, clique no *link* **'Reviewers'** e digite `students`, selecione o time `tryber/students-sd-032-b`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os *Pull Requests*.

</details>

<details>
<summary><strong>🏗  Estrutura do projeto</strong></summary>

Após clonar o projeto, você deverá criar os arquivos **index.html** e **style.css** que conterão o seu código HTML e CSS, respectivamente. Observe que os seus arquivos **devem** possuir esses nomes para que o seu projeto seja testado corretamente pelo avaliador automático.

Você é livre para adicionar outros arquivos se julgar necessário. Qualquer dúvida, poste no *Slack*.

</details>

---

## Começando o exercício

Antes de fazer os exercícios, crie um arquivo *HTML* `index` e copie o código abaixo:

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <!--insira os elementos aqui-->
  </body>
</html>
```

O objetivo desses exercícios é colocar em prática o que você aprendeu sobre **HTML semântico**.

Para tal, criaremos uma página que apresenta um dos animais mais impressionantes que existem: o [Stomatopoda](https://www.nationalgeographic.com/science/phenomena/2014/07/03/natures-most-amazing-eyes-just-got-a-bit-weirder/). A estilização da página fica a seu critério. 😉

Para uma melhor organização, faça commits a cada tarefa concluída.

*Obs:* para esse exercício, é obrigatório fazer uso de, **no mínimo**, 6 elementos com as seguintes tags: `header`, `nav`, `article`, `section`, `h1`, `h2`, `h3,` `aside`, `footer`, `table` e `img`.

Mãos ao código! 💪

## 01 - Adicione um cabeçalho na página

Você deve criar um cabeçalho na página e adicionar um título nele com o seguinte conteúdo:`Soco a 80km/h: Conheça o Stomatopoda`.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Existe um cabeçalho na página com a tag adequada;
- Existe um título dentro do cabeçalho;
- O texto do título é `"Soco a 80km/h: Conheça o Stomatopoda"`.

</details>

## 02 - Adicione um conjunto de links que representam a área de navegação do site

Você deve criar uma área de navegação contendo três links chamados `Página Inicial`, `Sobre` e `Contato`.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Existe uma área de navegação no site com a tag adequada;
- O primeiro link está com o texto `"Página Inicial"`;
- O segundo link está com o texto `"Sobre"`;
- O terceiro link está com o texto `"Contato"`.

</details>

## 03 - Crie um artigo que vai conter os fatos interessantes sobre o `Stomatopoda`

O artigo deve ter um subtítulo (h2) com o texto `Fatos sobre o Stomatopoda`. Segue [um site animal](https://theoatmeal.com/comics/mantis_shrimp) de inspiração para pegar fatos.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Existe um artigo na página com a tag adequada;
- Existe um subtítulo com a tag `h2` dentro do artigo;
- O texto do subtítulo é "Fatos sobre o Stomatopoda".

</details>

## 04 - Divida o artigo em seções

Divida o artigo em seções, organizando-o da seguinte forma:

- Uma primeira seção contendo informações gerais a respeito do animal. O subtítulo (h3) para essa seção fica a seu critério. É necessário que conste nessa seção seu *nome científico*, que é `Odontodactylus scyllarus`, em itálico. Além disso, é preciso que haja informação tabular a respeito de sua classificação científica, em específico: `Reino`, `Filo`, `Subfilo`, `Classe`, `Subclasse` e `Ordem`. Tais informações você consegue obter [na Wikipedia.](https://pt.wikipedia.org/wiki/Stomatopoda)

- As outras seções dizem respeito aos fatos interessantes que você escolheu acerca do animal. Para cada fato escolhido você vai criar uma seção.

- Adicione, para cada seção, um subtítulo referente ao fato escolhido.

<details>
  <summary><strong>O que será testado:</strong></summary>

- `"Odontodactylus scyllarus"` aparece em itálico na primeira seção;
- Existe um subtítulo com a tag `h3` para cada seção.

</details>

## 05 - Adicione mais informações as seções do artigo criado no exercício anterior

Neste exercicio você deve continuar seguindo as regras do requisito anterior.
Ainda dentro do artigo criado no exercicíco 4, também faça:

- A adição, para cada seção, de parágrafo(s) descrevendo o fato escolhido. Destaque características impressionantes referentes ao fato que você escolheu, de forma a reforçar a unicidade do `Stomatopoda`. Por exemplo: se você criar uma seção detalhando o soco potente do animal, seria interessante destacar a velocidade desse soco (80km/h) em negrito.

- A adição, para cada seção, de uma imagem, como forma de ilustrar o fato.

- A adição, de uma seção de referências bibliográficas, contendo uma lista de todos os links que foram usados como base para compilar a página em questão.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Existem pelo menos duas seções no artigo;
- Existe um subtítulo com a tag `h3` para cada seção nova;
- Existe uma imagem para cada seção;
- A última seção contém links dentro de uma lista não ordenada.

</details>

## 06 - Adicione um conteúdo ao lado do artigo

Adicione um conteúdo ao lado do artigo, disponibilizando um link para [este vídeo](https://www.youtube.com/watch?v=E0Li1k5hGBE) que mostra o animal em ação. <br />
:sparkles: Dica: Você pode conferir no conteúdo modular os [elementos semânticos](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/99759b1d-d4d2-4691-b063-06aafa8ac7cd/day/cdc0f1a4-1922-4e70-b49b-90c69cb5abff/lesson/17adb3c9-55f9-408e-94b5-971d10934743) e ver qual deles é usado para o entorno do conteúdo principal 😉.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Existe um conteúdo ao lado da página com a tag adequada;
- Existe um link dentro do conteúdo ao lado com o endereço `"https://www.youtube.com/watch?v=E0Li1k5hGBE"`.

</details>

## 07 - Adicione um rodapé na página

Adicione um rodapé na página, mostrando a seguinte mensagem:

```html
"Conteúdo compilado por <insere seu nome>, <ano atual>".
```

<details>
  <summary><strong>O que será testado:</strong></summary>

- Existe um rodapé na página com a tag adequada;
- Existe o texto `"Conteúdo compilado por <insere seu nome>, <ano atual>"` no rodapé da página.

</details>

---

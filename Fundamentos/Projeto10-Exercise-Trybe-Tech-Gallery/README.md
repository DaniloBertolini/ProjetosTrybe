# Requisitos Obrigatórios

Não se esqueça de criar os arquivos `index.html` e `style.css`!

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando por **todos os _checks_** do **Linter**. Utilize o comando `npm run lint:styles` no seu terminal para verificar os _checks_ do **Linter** 😉 ⚠️

## 1. Crie um cabeçalho para sua aplicação utilizando a tag `header`

<details>

<summary> Este Cabeçalho <strong>deve</strong> possuir a classe <code>header-container</code>, ser um <code>flex-container</code> e ter 3 elementos filhos: um <strong>logotipo</strong> com a classe <code>header-img</code>, um <strong>título</strong> com a classe <code>header-title</code> e um <strong>link</strong> de login com a classe <code>header-login</code>. </code>
</summary><br/>

- Observe o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-header.jpeg)

**O que será testado:**

- Se existe um cabeçalho na página;
- Se o cabeçalho tem a classe `header-container`;
- Se o cabeçalho é um elemento flex container;
- Se existem três elementos filhos;
- Se existe um elemento `img` com a classe `header-img`;
- Se existe um elemento `h1` com a classe `header-title`;
- Se existe um elemento `a` com a classe `header-login`;
- Se o elemento com a classe `header-title` está no meio do cabeçalho;

</details>

## 2. Implemente o conteúdo da primeira `section`

<details>

<summary> Esta seção deverá conter no mínimo um elemento de texto que deverá ser posicionado utilizando <strong>Flexbox</strong>. </code>
</summary><br/>

- O posicionamento deve ser feito de acordo com o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-text.jpeg)

**O que será testado:**

- Se existe uma section com a classe `text-section` na página;
- Se a section é um elemento flex container;
- Se a section tem, no mínimo, um elemento de texto;
- Se o elemento filho é uma tag `p`;

</details>

## 3. Implemente o conteúdo da segunda `section`

<details>

<summary> Esta seção deverá conter no mínimo 6 imagens e um título para cada uma delas que deverão ser posicionados utilizando <strong>Flexbox</strong>. </code>
</summary><br/>

- O posicionamento deve ser feito de acordo com o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-cards.jpeg)

- Sinta-se livre para usar a imaginação e selecionar as imagens que preferir, só não esqueça de seguir a estrutura de posicionamento proposta.

**O que será testado:**

- Se existe uma section com a classe `gallery` na página;
- Se a section é um elemento flex container;
- Se a section tem, no mínimo, seis elementos filhos (cards com imagens e texto);
- Se cada card é uma section e possui a classe `gallery-card` na página;
- Se cada card tem uma tag `h4` com o respectivo título;
- Se cada card tem uma tag `img` com a respectiva imagem;

</details>

## 4. Crie um rodapé para sua aplicação utilizando a tag `footer`

<details>

<summary> Este rodapé <strong>deve</strong> possuir, no mínimo, 2 elementos e estes devem ser posicionados utilizando <strong>Flexbox</strong>. </code>
</summary><br/>

- Observe o exemplo abaixo:

  ![exemplo](./images/trybe-tech-gallery-footer.jpeg)

- Você pode fazer com que as imagens redirecionem a pessoa usuária para suas redes sociais.

**O que será testado:**

- Se existe um rodapé na página;
- Se o rodapé tem a classe `footer-container`;
- Se o rodapé é um elemento flex container;
- Se existem, no mínimo, dois elementos filhos;
- Se o elemento `img` com o logo do instagram tem a classe `social-instagram` e possui o atributo src apontando para `./images/instagram-logo.png`;
- Se o elemento `img` com o logo do linkedin tem a classe `social-linkedin` e possui o atributo src apontando para `./images/linked-in-logo.png`

<details>
  <summary>De olho na dica 👀</summary>
  Você pode colocar uma tag <code>img</code> dentro de uma tag <code>a</code>, dessa forma você consegue transformar suas imagens em links clickáveis.
</details>

</details>

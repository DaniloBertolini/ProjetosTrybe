# Requisitos
## Exercício 1 – Crie um calendário dinamicamente

<details>
  <summary>
    O array <code>decemberDaysList</code> contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <code>ul</code>.
  </summary>

> **Observação 🔎**: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente domingo e segunda-feira.

```js
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
```

</details>

<details>
  <summary><strong>O que será testado:</strong></summary>

- A tag <code>ul</code> deve conter o `id` `'days'`. Obs.: essa tag já existe em seu arquivo de `HTML`, portanto você precisa apenas recuperá-la.
- Os dias devem estar contidos em uma tag `<li>`, e todos devem ter a classe `day`. Exemplo: `<li class="day">3</li>`.
- Os dias 24, 25 e 31 são feriados e, além da classe `day`, devem conter a classe `holiday`. Exemplo: `<li class="day holiday">24</li>`.
- Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe `day` e a classe `friday`. Exemplo: `<li class="day friday">4</li>`.

</details>

## Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe `"holiday"`

Adicione ao botão `"Feriados"` um evento de `"click"` que altere a cor de fundo dos dias que possuem a classe `"holiday"`.

> **Importante**: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar no botão "Feriados", a cor de fundo dos dias que possuem a classe "holiday" deve mudar.
- Ao clicar novamente no botão "Feriados", a cor de fundo dos dias que possuem a classe "holiday" deve voltar ao normal.

</details>

## Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras

Adicione ao botão `"Sexta-feira"` um evento de `"click"` e modifique o texto a ser exibido nos dias em que são sextas-feiras.

> **Importante**: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial e exibe os dias.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar no botão "Sexta-feira", o texto dos dias em que são sextas-feiras deve mudar. Esse texto pode ser o que você escolher, mas deve ser diferente do dia do mês.
- Ao clicar novamente no botão "Sexta-feira", o texto retorna ao normal.

</details>

## Exercício 4 – Implemente duas funções que criem um efeito de "zoom"

Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar para `30px` e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

> **De olho na dica 👀**: Você pode utilizar a propriedade [event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).
> **De olho na dica 👀**: O tamanho original do texto é `20px`.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao passar o mouse sobre um dia do calendário, o texto desse dia deve aumentar.
- Ao tirar o mouse sobre um dia do calendário, o texto desse dia deve retornar ao tamanho original.

</details>

---

# Exercícios bônus

## Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário

> **Como o calendário deve funcionar 👀**: A ideia é definir o que será feito em cada dia do mês de dezembro, de acordo com as tarefas que já existem em seu arquivo HTML. A pessoa deve clicar na tarefa que deseja atribuir a um dia específico e, em seguida, clicar no dia do mês. Desse modo, o dia selecionado deve ter a cor da tarefa correspondente.

- Adicione um evento que, ao clicar no elemento com a tag `<div>` referente à cor de sua tarefa, atribua a esse elemento a classe `selected`. Ou seja, quando sua tarefa apresentar a classe `selected`, ela estará selecionada.
- Em seguida, ao clicar em um dia do mês no calendário, atribua ao texto desse dia a cor da legenda da tarefa selecionada. Em seguida, ao clicar no mesmo dia, o texto deverá retornar à cor inicial `rgb(119,119,119)`.
- Ao clicar novamente no elemento com a tag `<div>`, sua classe deverá voltar a ser somente `task`. Ou seja, essa tarefa deixará de ser uma tarefa selecionada.

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar em uma tarefa, ela deve ser selecionada.
- Ao clicar em uma tarefa com a classe `.task` e clicar em um dia do mês no calendário com a classe `.day`, atribua a esse dia a cor da legenda de sua tarefa selecionada.
- Ao clicar novamente no dia com a cor da legenda, sua cor deverá voltar à configuração inicial `rgb(119,119,119)`.
- Ao clicar novamente na tarefa, ela deve ser desmarcada.

</details>

## Exercício 6 – Adicionando compromissos a seu calendário

- Implemente uma função que será chamada ao clique do botão com o id `'btn-add;`. Essa função vai pegar o texto que se encontra no elemento com id `'task-input'` e adicioná-lo à lista com id `'task-list'`.
- Se nenhum caractere for inserido no campo com id `'task-input'`, a função deverá chamar um `alert` com uma mensagem de erro.
- Ao pressionar a tecla <kbd>Enter</kbd>, o evento também deverá ser disparado.

> **De olho na dica 👀**: Você pode utilizar a propriedade [key](https://www.w3schools.com/JSREF/event_key_key.asp).

<details>
  <summary><strong>O que será testado:</strong></summary>

- Ao clicar no botão com id `'btn-add'`, com o texto `'25 - Natal'` na caixa de texto com id `'task-input'`, adiciona-se o item `'25 - Natal'` à lista com id `'task-list'`.
- Ao clicar no botão com id `'btn-add'`, sem nenhum caractere no campo com id `'task-input'`, a função deve chamar um `alert` com uma mensagem.
- Ao pressionar a tecla Enter, com o texto `'25 - Natal'` na caixa de texto com id `'task-input'`, adiciona-se o item `'25 - Natal'` à lista com id `'task-list'`.

</details>


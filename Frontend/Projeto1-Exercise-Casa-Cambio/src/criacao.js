const ulElemento = document.querySelector('.container main ul');
const h2Elemento = document.querySelector('.container main h2');

const criarLiElemento = (moeda, valor) => {
    const liElemento = document.createElement('li');

    liElemento.innerHTML = `
        <b>${moeda}</b>
        <span>${valor}</span>
    `

    return liElemento;
};

const renderizarMoeda = (moedas, baseMoedas) => {
    ulElemento.innerHTML = '';
    h2Elemento.innerHTML = `Valores referentes a 1 ${baseMoedas}`;
    moedas.forEach((coin) => {
        const { nome, valor } = coin
        const liElemento = criarLiElemento(nome, valor);

        ulElemento.appendChild(liElemento)
    })
};

export { renderizarMoeda };
// #1

const meuTexto = 'Daqui 2 anos, eu me vejo formado na Trybe, com um emprego bom, e na área que eu me apaixonar. Que eu consiga ser mais criativo, comunicativo, habilidoso e possa desenvolver quase todos os projetos que chegarem para mim.';
const resumo = (texto) => {
    document.getElementById('resumoFuturo').innerText = texto;
};
resumo(meuTexto);

// #2

corDesejada = 'rgb(76, 164, 109)';
const corFundo = (cor) => {
    const local = document.getElementsByClassName('main-content')[0];
    local.style.backgroundColor = cor;
}
corFundo(corDesejada)

// #3

corDesejada2 = 'rgb(255,255,255)';
const centroFundo = (cor) => {
    const local = document.getElementsByClassName('center-content')[0];
    local.style.backgroundColor = cor;
}
centroFundo(corDesejada2)

// #4

texto = 'Desafio - JavaScript';
const textoH1 = (titulo) => {
    const local = document.getElementsByClassName('title')[0];
    local.innerText = titulo;
}
textoH1(texto);

// #5


const p1 = () => {
    const local = document.getElementsByTagName('p')[0];
    local.innerText = "Texto padrão do nosso site".toUpperCase();
}
p1()

// #6

const todosP = document.getElementsByClassName('center-content')[0].children;
const footer = document.getElementsByTagName('footer')[0].children[0];

const footerP = () => {
    let text = '';
    for (const k of todosP) {
        text += ' '+ k.innerText;
    }
    footer.innerText = text;
};
footerP();
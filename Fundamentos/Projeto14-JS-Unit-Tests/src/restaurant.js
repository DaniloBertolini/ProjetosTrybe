/* eslint-disable max-len */
// Siga as orientações do README!

const fetchMenu = () => {
    const cardapio = {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 },
    };
    
    return cardapio;
};

const createMenu = () => {
    const objeto = {
        fetchMenu,
    };

    return objeto;
};

module.exports = createMenu;

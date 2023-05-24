const fetchExchange = (inputValor) => {
    return fetch(`https://api.exchangerate.host/latest?base=${inputValor}`)
        .then((response) => response.json())
        .then((data) => {
            if(inputValor !== data.base) {
                throw new Error('Ta digitando errado ai meu Patrão!');
            }
            return data;
        });
};

export { fetchExchange };
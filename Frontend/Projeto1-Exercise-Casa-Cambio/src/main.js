import Swal from 'sweetalert2'

import { renderizarMoeda } from './criacao'
import { fetchExchange } from './exchange'

import './style.css';
import './reset.style.css';

const botaoElemento = document.querySelector('header form button');

botaoElemento.addEventListener('click', (event) => {
    event.preventDefault();
    const inputElemento = document.querySelector('header form input');
    const inputValor = inputElemento.value;

    if(!inputValor) {
        Swal.fire({
          title: 'Ops...',
          text: 'Você precisa passar uma moeda',
          icon: 'error',
          confirmButtonText: 'Ok'
        })

        return;
    }
    fetchExchange(inputValor)
        .then((exchange) => {
            const rates = exchange.rates;
            const ratesArray = Object.entries(rates);

            const ratesParaObj = ratesArray.map((rateMoeda) => {
                const nome = rateMoeda[0];
                const valor = rateMoeda[1].toFixed(3);
                return {
                    nome,
                    valor
                }
            })
            renderizarMoeda(ratesParaObj, exchange.base);
        })
        .catch((error) => {
            Swal.fire({
              title: 'Ops...',
              text: error.message,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
        })
});
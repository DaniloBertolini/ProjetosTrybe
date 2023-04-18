const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}
createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// #1 Criar calendário dinamicamente

const criarDias = () => {
const dias = document.getElementById('days');
  
  for(let i=0; i < decemberDaysList.length; i += 1) {
    const criacao = document.createElement('li');
    switch (decemberDaysList[i]) {
      case 4:
      case 11:
      case 18:
        criacao.className = 'day friday';
        break;
      case 24:
      case 31:
        criacao.className = 'day holiday';
        break;
      case 25:
        criacao.className = 'day holiday friday';
        break;
      default:
        criacao.className = 'day';
        break;
    }
    criacao.innerText = decemberDaysList[i];
    dias.appendChild(criacao);
  }
}

criarDias();

// #2 Muda a cor de fundo dos Holiday

let alternadorHoliday = true;
const holiday = () => {

  const botaoHoliday = document.getElementById('btn-holiday');
  botaoHoliday.addEventListener('click', () => {
    const diasHoliday = document.querySelectorAll('.holiday');
    for(let diasH of diasHoliday) {
      if(alternadorHoliday) {
        diasH.style.backgroundColor = 'white';
      } else {
        diasH.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }
    alternadorHoliday = !alternadorHoliday;
  })
};

holiday();

// #3 Muda os Textos da Sexta-Feira

const array = [4,11,18,25];
let alternadorFriday = true;
const friday = () => {

  const botaoFriday = document.getElementById('btn-friday')
  botaoFriday.addEventListener('click', () => {
    const diasFriday = document.querySelectorAll('.friday');
    for(let diasF of diasFriday) {
      if(alternadorFriday) {
        diasF.innerText = 'S de Sextou';
      } else {
        for(let i=0;i<array.length;i+=1) {
          diasFriday[i].innerText = array[i];
        }
      }
    }
    alternadorFriday = !alternadorFriday;
  })
}

friday();

// #4 Adiciona Zoom nos dias

const colocaZoom = () => {
  const dias = document.querySelectorAll('.day');
  for(let dia of dias) {
    dia.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
    })
  }
};
colocaZoom();

const tiraZoom = () => {
  const dias = document.querySelectorAll('.day');
  for(let dia of dias) {
    dia.addEventListener('mouseout',(event) => {
      event.target.style.fontSize = '20px';
    })
  }
};
tiraZoom();

// #5 Atribuir Tarefa

const atribuirTarefa = () => {
  const tarefas = document.querySelectorAll('.task');
  tarefas[0].addEventListener('click', () => {
    tarefas[0].classList.toggle('selected')
    tarefas[1].classList.remove('selected')
  });
  tarefas[1].addEventListener('click', () => {
    tarefas[1].classList.toggle('selected')
    tarefas[0].classList.remove('selected')
  });
}

atribuirTarefa();


const pintarDias = () => {
  const dias = document.querySelectorAll('.day');
  for(let dia of dias) {
    const corEscolhida = document.querySelector('.selected').style.backgroundColor;
    console.log(corEscolhida)
    dia.addEventListener('click', () => {
      
    })
  }
};

pintarDias();
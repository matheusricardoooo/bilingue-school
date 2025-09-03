const carrosselAtivo = document.querySelector('.carrossel-ativo');
const carrosselSecundario = document.querySelector('.carrossel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isFirstCarrosselActive = true

function alternarCarrossel() {
    if (isFirstCarrosselActive) {
        carrosselAtivo.style.display = 'none';
        carrosselSecundario.style.display = 'flex';
    }

    else {
        carrosselAtivo.style.display = 'flex';
        carrosselSegundario.style.display = 'none';
    }

    isFirstCarrosselActive = !isFirstCarrosselActive;
}

nextBtn.addEventListener('click', alternarCarrossel);
prevBtn.addEventListener('click', alternarCarrossel);

setInterval(alternarCarrossel, 5000);
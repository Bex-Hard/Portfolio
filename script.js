
document.addEventListener('DOMContentLoaded', () => {

    const botaoLeiaMais = document.getElementById('btn-leia-mais');
    const secaoMaisInfo = document.getElementById('mais-info');


    botaoLeiaMais.addEventListener('click', () => {
        const estaEscondido = secaoMaisInfo.classList.contains('escondido');

        if (estaEscondido) {
            secaoMaisInfo.classList.remove('escondido');
            botaoLeiaMais.textContent = 'Leia Menos';
        } else {
            secaoMaisInfo.classList.add('escondido');
            botaoLeiaMais.textContent = 'Leia Mais';
        }
        
    });

    const carrosseis = document.querySelectorAll('[data-carrossel]');

    carrosseis.forEach(carrossel => {
        const slides = carrossel.querySelectorAll('.slide');
        const botoes = carrossel.querySelectorAll('[data-botao]');
        let indiceAtual = 0;

        botoes.forEach(botao => {
            botao.addEventListener('click', () => {
                slides[indiceAtual].classList.remove('ativa');

                if (botao.dataset.botao === 'next') {
                    indiceAtual = (indiceAtual + 1) % slides.length;
                } else {
                    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
                }
                slides[indiceAtual].classList.add('ativa');
            });
        });
    });
    
});
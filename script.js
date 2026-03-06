// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selecionamos os elementos que vamos manipular
    const botaoLeiaMais = document.getElementById('btn-leia-mais');
    const secaoMaisInfo = document.getElementById('mais-info');

    // 2. Adicionamos um "ouvinte de eventos" para quando o botão for clicado
    botaoLeiaMais.addEventListener('click', () => {
        
        // 3. Verificamos se a seção tem a classe 'escondido'
        const estaEscondido = secaoMaisInfo.classList.contains('escondido');

        if (estaEscondido) {
            // Se estiver escondido, nós mostramos (removendo a classe)
            secaoMaisInfo.classList.remove('escondido');
            // E mudamos o texto do botão
            botaoLeiaMais.textContent = 'Leia Menos';
        } else {
            // Se já estiver aparecendo, nós escondemos (adicionando a classe)
            secaoMaisInfo.classList.add('escondido');
            // E voltamos o texto do botão para o original
            botaoLeiaMais.textContent = 'Leia Mais';
        }
        
    });

    // Seleciona todos os carrosséis da página
    const carrosseis = document.querySelectorAll('[data-carrossel]');

    carrosseis.forEach(carrossel => {
        const slides = carrossel.querySelectorAll('.slide');
        const botoes = carrossel.querySelectorAll('[data-botao]');
        let indiceAtual = 0;

        botoes.forEach(botao => {
            botao.addEventListener('click', () => {
                // Remove a classe ativa da imagem atual
                slides[indiceAtual].classList.remove('ativa');

                if (botao.dataset.botao === 'next') {
                    // Vai para o próximo (ou volta para o zero se for o último)
                    indiceAtual = (indiceAtual + 1) % slides.length;
                } else {
                    // Vai para o anterior (ou vai para o último se for o primeiro)
                    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
                }

                // Adiciona a classe ativa na nova imagem
                slides[indiceAtual].classList.add('ativa');
            });
        });
    });
    
});
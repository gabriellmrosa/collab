(function () {
    'use strict'

    const $cartoes = {
        1: {
            img: 'img/icon-bug.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        2: {
            img: 'img/icon-c.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        3: {
            img: 'img/icon-cabeca.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        4: {
            img: 'img/icon-celular.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        5: {
            img: 'img/icon-java.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        6: {
            img: 'img/icon-js.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        7: {
            img: 'img/icon-php.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        8: {
            img: 'img/icon-responsivo.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        9: {
            img: 'img/icon-settings.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        },
        10: {
            img: 'img/icon-woman.png',
            alt: 'Descrição da imagem',
            nameClass: 'memory-card'
        }
    }

    const $root = document.querySelector('#root')

    const createSection = cardsWrapper();
    const sectionFinal = createSection('cards-wrapper');

    $root.insertAdjacentHTML('afterbegin', sectionFinal);

    const createMemoryCard = MemoryCard()

    Object.values($cartoes).forEach((card, key) => {
        const $rootSection = document.querySelector('#root section');

        const finalMemory = createMemoryCard(card, key)

        $rootSection.insertAdjacentHTML('afterbegin', finalMemory);
    });


    function vereditoFinal(textoExibido) {
        console.log(`${textoExibido}`);
        let todosVirados = document.querySelectorAll('.virado');

        todosVirados.forEach(function (card) {
            card.classList.remove('virado');
        });

        contagemCardsVirados = 0
        classDosCardsVirados = []
    }


})();


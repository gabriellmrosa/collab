
/*
    const $root = document.querySelector('#root');
    const $memoryCard = document.createElement('article');

    $memoryCard.classList.add('memory-card')

    $root.insertBefore($memoryCard, null)

*/

//Minha versão

const $cartoes = {
    1: {
        img: 'img/icon-bug.png'
    },
    2: {
        img: 'img/icon-c.png'
    },
    3: {
        img: 'img/icon-cabeca.png'
    },
    4: {
        img: 'img/icon-celular.png'
    },
    5: {
        img: 'img/icon-java.png'
    },
    6: {
        img: 'img/icon-js.png'
    },
    7: {
        img: 'img/icon-php.png'
    },
    8: {
        img: 'img/icon-responsivo.png'
    },
    9: {
        img: 'img/icon-settings.png'
    },
    10: {
        img: 'img/icon-woman.png'
    }
}

Object.values($cartoes).forEach((card, key) => {
    const $root = document.querySelector('#root');

    let $memoryCard = `
        <article class="memory-card ${key}" style="${'order:' + gerarNumero()}" onClick="handleClick(event)">
            <img src="${card.img}" alt="Mascote Collabcode" class="icon">
        </article>
        <article class="memory-card ${key}" style="${'order:' + gerarNumero()}" onClick="handleClick(event)">
            <img src="${card.img}" alt="Mascote Collabcode" class="icon">
        </article>
    `;

    $root.insertAdjacentHTML('afterbegin', $memoryCard);
});

function gerarNumero() {
    let min = Math.ceil(0);
    let max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min;
}


let contagemCardsVirados = 0;
let classDosCardsVirados = []

function handleClick(event) {

    let cardClicado = event.currentTarget;

    if (contagemCardsVirados <= 1) {
        cardClicado.classList.toggle('virado');
        contagemCardsVirados++

        if (contagemCardsVirados == 2) {
            let cardsVirados = document.querySelectorAll('.virado')

            cardsVirados.forEach(function (card) {
                let classDoCard = card.getAttribute('class')
                classDosCardsVirados.push(classDoCard);
            });

            if (classDosCardsVirados[0] == classDosCardsVirados[1]) {
                vereditoFinal('são iguais')
            }else{
                vereditoFinal('são diferentes')
            }

        }
    }
}


function vereditoFinal(textoExibido){
    console.log(`${textoExibido}`);
    let todosVirados = document.querySelectorAll('.virado');
    todosVirados.forEach(function (card) {
        card.classList.remove('virado');
    })
    contagemCardsVirados = 0
    classDosCardsVirados = []
}



/*
else{
    contagem = 0
    let todosVirados = document.querySelectorAll('.virado')

    //verificar se são iguais
    // todosVirados.forEach(function(card){

    //     let classDoCard = getAttribute('class')
    //     console.log(classDoCard)
    // })

    //se não for desvira
    console.log('verifica')

    todosVirados.forEach(function(card){
        card.classList.remove('virado');
    })
}
*/
// const $cartoes = {
//     1: {
//         img: 'img/icon-bug.png'
//     },
//     2: {
//         img: 'img/icon-c.png'
//     },
//     3: {
//         img: 'img/icon-cabeca.png'
//     },
//     4: {
//         img: 'img/icon-celular.png'
//     },
//     5: {
//         img: 'img/icon-java.png'
//     },
//     6: {
//         img: 'img/icon-js.png'
//     },
//     7: {
//         img: 'img/icon-php.png'
//     },
//     8: {
//         img: 'img/icon-responsivo.png'
//     },
//     9: {
//         img: 'img/icon-settings.png'
//     },
//     10: {
//         img: 'img/icon-woman.png'
//     }
// }

// Object.values($cartoes).forEach((card, key) => { // da para pegar ja o objectDestructuring direto como parameto, ex: ( {img, algumacoisa, alguma coisa} , key)
//     const $rootSection = document.querySelector('#root section');

//     const { img } = card; //da para usar assim ou carD.img direto no img

//     const $memoryCard = `
//         <article class="memory-card ${key}" style="${'order:' + gerarNumero()}" onClick="handleClick(event)">
//             <img src="${img}" alt="Mascote Collabcode" class="icon">
//         </article>
//         <article class="memory-card ${key}" style="${'order:' + gerarNumero()}" onClick="handleClick(event)">
//             <img src="${img}" alt="Mascote Collabcode" class="icon">
//         </article>
//     `;

//     $rootSection.insertAdjacentHTML('afterbegin', $memoryCard);
// });

// function gerarNumero() {
//     let min = Math.ceil(0);
//     let max = Math.floor(9);
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// let contagemCardsVirados = 0;
// let classDosCardsVirados = []

// function handleClick(event) {

//     let cardClicado = event.currentTarget;

//     if (contagemCardsVirados <= 1) {
//         cardClicado.classList.toggle('virado');
//         contagemCardsVirados++

//         if (contagemCardsVirados == 2) {
//             let cardsVirados = document.querySelectorAll('.virado')

//             cardsVirados.forEach(function (card) {
//                 let classDoCard = card.getAttribute('class')
//                 classDosCardsVirados.push(classDoCard);
//             });

//             if (classDosCardsVirados[0] == classDosCardsVirados[1]) {
//                 vereditoFinal('são iguais')
//             }else{
//                 vereditoFinal('são diferentes')
//             }

//         }
//     }
// }


// function vereditoFinal(textoExibido){
//     console.log(`${textoExibido}`);
//     let todosVirados = document.querySelectorAll('.virado');

//     todosVirados.forEach(function (card) {
//         card.classList.remove('virado');
//     });

//     contagemCardsVirados = 0
//     classDosCardsVirados = []
// }

function gerarNumero() {
    let min = Math.ceil(0);
    let max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min;
}

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
                //vereditoFinal('são iguais')
            } else {
                //vereditoFinal('são diferentes')
            }

        }
    }
}

let contagemCardsVirados = 0;
let classDosCardsVirados = [];

function MemoryCard(){
    
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
        .memory-card{
            width: 155px;
            height: 155px;
            background-color: #f25a70;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius:20px;
            box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
            margin:10px;
        }
        
        .memory-card > img{
            width: 70%;
            height: auto;
        }
        
        .virado{
            border:2px solid #000;
        }
    `;

    $head.insertBefore($style, null);
    
    return (card, key) => `

        <article class="${card.nameClass} ${key}" style="${'order:' + gerarNumero()}" onClick="handleClick(event)">
            <img src="${card.img}" class="icon" alt="${card.alt}">
        </article>
        <article class="${card.nameClass} ${key}" style="${'order:' + gerarNumero()}" onClick="handleClick(event)">
            <img src="${card.img}" class="icon" alt="${card.alt}">
        </article>
    `;

}

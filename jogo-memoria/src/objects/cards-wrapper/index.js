function cardsWrapper(){

    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
        .cards-wrapper{
            display:flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-wrap: wrap;
            max-width:880px;
        }
    
    `
    $head.insertBefore($style, null);

    return (className) => `<section class="${className}"><section/>`
}

const flatButton = (function () {
    const module = {}

    module._id = 0 
    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .flat-button-${module._id}{
                display:inline-block;
                width:50%;
                height:176px;
                font-size:24px;
                background-color: ${active ? '#f25a70':'#eae6da'};
                color: ${active ? ' #fffcee':'#fff'};
                border:none;
                font-family:inherit;
                text-transform:uppercase;
                padding-top:60px;
                text-align:center;
                text-decoration:none;
            }
        `

        $head.insertAdjacentElement('beforeend', $style)
    }

    module.render = (content='', active = false) => {
        module._id++
        module._style(active);

        return `<a href='#' class="flat-button-${module._id}">${content}</<a>`
    }


    return {
        render: module.render
    }

})()
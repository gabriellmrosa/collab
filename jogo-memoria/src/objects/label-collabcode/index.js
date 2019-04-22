const labelCollabcode = (function () {
    const module = {}

    module._id = 0 
    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .label-collabcode{
                color: #3a4042;
                font-size:16px;
                display:block;
                opacity:0.5;
            }
            .input-collabcode + .label-collabcode{
                margin-top:30px;
            }
        `

        $head.insertAdjacentElement('beforeend', $style)
    }

    module.render = (content, ) => {
        module._style();

        return `<label class="label-collabcode">${content}</label>`
    }


    return {
        render: module.render
    }

})()
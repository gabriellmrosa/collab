const btnCollabcode = (function () {
    const module = {}

    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .btn-collabcode{
                width: 100%;
                color:#fff;
                height: 48px;
                border-radius: 24px;
                background-color: #f25a70;
                text-transform:uppercase;
                cursor:pointer;
            }

            .input-collabcode + .btn-collabcode{
                margin-top:45px;
            }
        `

        $head.insertAdjacentElement('beforeend', $style)
    }

    module.render = (content) => {
        module._style();

        return `<input type="submit" class="btn-collabcode" value="${content}">`
    }


    return {
        render: module.render
    }

})()
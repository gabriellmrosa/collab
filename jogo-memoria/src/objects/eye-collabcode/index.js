const eyeCollabcode = (function () {
    const module = {}

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .eye-collabcode{
              
            }
        `

        $head.insertAdjacentElement('beforeend', $style)
    }

    module.render = () => {
        module._style();

        return `<label class="eye-collabcode">Mostrar senha</label>`
    }

    return {
        render: module.render
    }

})()
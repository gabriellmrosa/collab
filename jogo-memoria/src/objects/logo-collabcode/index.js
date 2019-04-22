const logoCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .logo-collabcode{
                background:#fff;
                border:40px solid #fff;
                border-radius:50%;
                display:inline-block;
            }
            .logo-collabcode > .logo{
                width:175px;
            }
        `


        $head.insertAdjacentElement('beforeend', $style)

    }

    module.render = () => {
        module._style()

        return `
            <figure class="logo-collabcode">
                <img class="logo" src="img/gueio.png">
            </figure>
        `
    }


    return {
        render: module.render
    }

})()
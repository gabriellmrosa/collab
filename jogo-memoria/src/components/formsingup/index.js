const formSignup = (function () {
    const module = {}

    module._children = () =>{
        const $emailLabel = labelCollabcode.render('E-mail')
        const $emailInput = inputCollabcode.render();

        const $userLabel = labelCollabcode.render('Username')
        const $userInput = inputCollabcode.render();

        const $passwordLabel = labelCollabcode.render('Password')
        const $passwordInput = inputCollabcode.render();

        const $confirmepasswordLabel = labelCollabcode.render('Confirme Password')
        const $confirmepasswordInput = inputCollabcode.render();

        const $btn = btnCollabcode.render('Enviar');

        return `
            ${$emailLabel}
            ${$emailInput}

            ${$userLabel}
            ${$userInput}

            ${$passwordLabel}
            ${$passwordInput}

            ${$confirmepasswordLabel}
            ${$confirmepasswordInput}

            ${$btn}
        `
    }

    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-signup{
                padding:0px 35px 40px;
            }
        `

        $head.insertAdjacentElement('beforeend', $style)
    }

    module.render = () => {
        module._style();

        return `<form class="form-signup" action="" method="POST">${module._children()}</<form>`
    }


    return {
        render: module.render
    }

})()
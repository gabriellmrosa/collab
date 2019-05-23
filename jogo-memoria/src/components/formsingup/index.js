const formSignup = (function () {
    const module = {}

    module._children = () =>{
        const $emailLabel = labelCollabcode.render('E-mail')
        const $emailInput = inputCollabcode.render({placeholder: 'Exemplo Placeholder', type:'email'});

        const $userLabel = labelCollabcode.render('Username')
        const $userInput = inputCollabcode.render({placeholder: 'username'});

        const $passwordLabel = labelCollabcode.render('Password')
        const $passwordInput = inputCollabcode.render({placeholder: '*********', type:'password'});

        const $confirmepasswordLabel = labelCollabcode.render('Confirme Password')
        const $confirmepasswordInput = inputCollabcode.render({placeholder: '*********', type:'password'});

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
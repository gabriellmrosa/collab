const formLogin = (function () {
    const module = {}

    module._children = () =>{
        const $emailLabel = labelCollabcode.render('Username ou Email')
        const $emailInput = inputCollabcode.render({placeholder: 'Exemplo Placeholder', type:'email'});

        const $passwordLabel = labelCollabcode.render('Password')
        const $passwordInput = inputCollabcode.render({placeholder: '****',type: 'password'});

        const $linkCollab = linkCollab.render({content:'Forgot password', href:'#'});
        const $eyeCollabcode = eyeCollabcode.render();

        const $btn = btnCollabcode.render('Login');

        return `
            ${$emailLabel}
            ${$emailInput}

            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabcode}

            ${$linkCollab}

            ${$btn}
        `
    }

    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-login{
                padding:0px 35px 40px;
            }
        `

        $head.insertAdjacentElement('beforeend', $style)
    }

    module.render = () => {
        module._style();

        return `<form class="form-login" action="" method="POST">${module._children()}</<form>`
    }


    return {
        render: module.render
    }

})()
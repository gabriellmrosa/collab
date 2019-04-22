const inputCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .input-collabcode{
               color: #3a4042;
               font-size: 18px;
               font-wieght: bold;
               border-bottom:2px solid rgba(58,64,66,.5);
               padding-bottom:12px;
               padding-top:12px;
               display:block;
               width:100%;
            }
        `


        $head.insertAdjacentElement('beforeend', $style)

    }

    module.render = () => {
        module._style()

        return `
            <input class="input-collabcode" type="email"/>
        `
    }


    return {
        render: module.render
    }

})()

// var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase());
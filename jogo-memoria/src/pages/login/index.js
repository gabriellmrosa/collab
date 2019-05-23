(function(){

    const $root = document.querySelector('#root')

    const $btlogin = flatButton.render('Log in', true);
    const $btsignup = flatButton.render('Sign up', false);
    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
    const $formLogin = formLogin.render();

    $root.insertAdjacentHTML("beforeend", $btlogin)
    $root.insertAdjacentHTML("beforeend", $btsignup)
    $root.insertAdjacentHTML("beforeend", $logoWrapper)
    $root.insertAdjacentHTML("beforeend", $formLogin)

})()
const login = (function (){
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.create("Login",true);
    const $signupButton = flatButton.create("Signup",false);
    const $logoCollabCode = logoCollabCode.create();
    const $titleCollabCode = titleCollabCode.create("Hello!");
    const $logoWrapper = logoWrapper.create($logoCollabCode,$titleCollabCode);
    
    
    const $formLogin = formLogin.create();

    $root.insertAdjacentHTML("afterbegin",$loginButton);
    $root.insertAdjacentHTML("beforeend",$signupButton);
    $root.insertAdjacentHTML("beforeend",$logoWrapper);
    $root.insertAdjacentHTML("beforeend",$formLogin);
});
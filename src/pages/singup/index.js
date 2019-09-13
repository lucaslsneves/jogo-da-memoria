(function(){
    const $root = document.querySelector("#root")
    
    const $loginButton = flatButton.create("Login",false);
    const $signupButton = flatButton.create("Signup",true);
    
   const $logoCollabCode = logoCollabCode.create();
   const $titleCollabCode = titleCollabCode.create("Welcome!");
   const $logoWrapper = logoWrapper.create($logoCollabCode,$titleCollabCode);
   
   const $formSignup = formSignup.create();

 

    $root.insertAdjacentHTML("afterbegin",$loginButton);
    $root.insertAdjacentHTML("beforeend",$signupButton);
    $root.insertAdjacentHTML("beforeend",$logoWrapper);
    $root.insertAdjacentHTML("beforeend",$formSignup);
    
   
})();
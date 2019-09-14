formLogin = (function(){
    const module = {};

    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
            .form-login{
                padding:0 35px 40px;
                margin-top:30px;

            }
        `;

        $head.insertBefore($style,null);
    };

    module._children = () => {
        const $emailLabel = labelCollabCode.create("Username ou E-mail");
        const $emailInput = inputCollabCode.create({type:"email",placeholder:"example@email.com"});

        const $passwordLabel = labelCollabCode.create("Password");
        const $passwordInput = inputCollabCode.create({type:"password",placeholder:"********"});
        const $eyeCollabCode = eyeCollabCode.create();

        const $linkCollabCode = linkCollabCode.create({content:"Forgot password?"});

        const $formButton = formButton.create("Login");
       
        return`
            ${$emailLabel}
            ${$emailInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabCode}
            ${$linkCollabCode}
            ${$formButton}
        `
    }
        
    
        
    
    
        
        
    

    module.create = () => {
        module._style();

        return `<form class=form-login action="" method="POST">
                    ${module._children()}
                </form
                `
    };

    return{
        create:module.create
    };
})();
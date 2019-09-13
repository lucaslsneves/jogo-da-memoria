const formSignup = (function(){
    const module = {};

    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
            .form-signup{
                padding:0 35px 40px;
               
                
                margin-top:30px;

            }
        `;

        $head.insertBefore($style,null);
    }

    module._children = () => {

    const $userLabel = labelCollabCode.create("Username");
    const $userInput = inputCollabCode.create("text","example"); 
 
    const $emailLabel = labelCollabCode.create("E-mail");
    const $emailInput = inputCollabCode.create("email","example@email.com");
 
    const $passwordLabel = labelCollabCode.create("Password");
    const $passwordInput = inputCollabCode.create("password","********");
 
    const $confirmPasswordLabel = labelCollabCode.create("Confirm Password");
    const $confirmPasswordInput = inputCollabCode.create("password","********");
    
    const $formButton = formButton.craeate("Submit")
    return `
        ${$userLabel}
        ${$userInput}
        ${$emailLabel}
        ${$emailInput}
        ${$passwordLabel}
        ${$passwordInput}
        ${$confirmPasswordLabel}
        ${$confirmPasswordInput}
        ${$formButton}
    `;
    }
    module.create = () => {
        module._style();

        return`
            <form class="form-signup" action="" method="POST">${module._children()}</form>
        `;
    }

    return{
        create:module.create
    }
})();
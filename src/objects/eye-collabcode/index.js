const eyeCollabCode = (function(){
    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
            .eye-collabcode{
            }
            
        `;

        $head.insertBefore($style,null);
    }
    
    module.create  = () => {
        module._style();

        return `
            <label>Mostrar senha</label>
        `
    }

    return{
        create:module.create
    }
})();
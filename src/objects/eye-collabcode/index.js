const eyeCollabCode = (function(){
   const module = {};
    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
            .eye-collabcode{
                background-image:url(img/icon-eye.png);
                display:block;
                width:24px;
                height:15px;
                text-indent:-9999px;
                background-repeat:no-repeat;
                background-position:center;
                cursor:pointer;
                
            }
            
        `;

        $head.insertBefore($style,null);
    }
    module.handleClick = () =>{
        console.log("niko");
    };
    module.create  = () => {
        module._style();

        return `
            <label class="eye-collabcode" onClick="eyeCollabCode.handleClick()">Mostrar senha</label>
        `
    }

    return{
        create:module.create,
        handleClick:module.handleClick
    }
})();
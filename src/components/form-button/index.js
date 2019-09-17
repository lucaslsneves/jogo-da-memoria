const formButton = (function(){
    module = {};

    module._style = ()=> {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
            .form-button{
                font-family:inherit;
                width:100%;
                color:#fff;
                background-color:#f25a70;
                border:none;
                border-radius:24px;
                padding:12px 0;
                font-size:14px;
                letter-spacing:0.4px;
                text-transform:uppercase;
                cursor:pointer;
            }
           .input-collabcode + .form-button{
               margin-top:30px;
           }
        `;

        $head.insertBefore($style,null);
    }
    module.handleClick = (event,path) =>{
        event.preventDefault();
        window.location.hash = `#/${path}`;
        location.reload(true);
    };

    module.create = ({content= "",path= ""}) =>{
        module._style();
        return `<input onClick="formButton.handleClick(event,'${path}')"class="form-button" type="submit" value="${content}" >`
    }
    return{
        create:module.create,
        handleClick:module.handleClick
    }
})();
const linkCollabCode = (function(){
    const module = {};

    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
            .link-collabcode{
                display:block;
                text-align:right;
                margin-top:40px;
                text-decoration:none;
                color:#3a4042;
                opacity:0.73;
            }
            .link-collabcode + .form-button{
                margin-top:60px;
            }
            
        `;

        $head.insertBefore($style,null);
    }
    
    module.create  = ({href = "",content = ""}) => {
        module._style();

        return `
            <a class="link-collabcode" href="${href}">${content}</a>
        `
    }

    return{
        create:module.create
    }
})();
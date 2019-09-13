const labelCollabCode = (function (){
    const module = {};

    module._style = () =>{
        const $style = document.createElement("style");
           const $head = document.querySelector("head");
           
           $style.textContent = `
               .label-collabcode{
                   color:rgb(58, 64, 66,.5);
                   font-size:16px;
                display:block;
               }
              
           `;

           $head.insertBefore($style,null);
    };

    module.create = content =>{
        module._style();

        return `<label class="label-collabcode">${content}</label>`
    };

    return {
        create:module.create
    };
})();
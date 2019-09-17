const inputCollabCode = (function(){
    const module = {};

     module._style = () =>{
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
           
           $style.textContent = `
               .input-collabcode{
                   width:100%;
                   color:#3a4042;
                   font-size:18px;
                   border-bottom:2px solid rgb(58, 64, 66,.5);
                   padding:12px 0;
                   display:block;
                   font-weight:bold;
               }
              .input-collabcode + .label-collabcode {
                  margin-top:30px;
              }
              #password.-wrong{
                  outline:1.2px solid red;

              }
           `;

           $head.insertBefore($style,null);
    };

 
    
    module.create = ({id = "",type = "text",placeholder = ""}) =>{
        module._style();

        
        return `
            <input id="${id}"   class="input-collabcode" type="${type}" placeholder="${placeholder}">
        `
    }
    return{
        create:module.create
        
    }
})();
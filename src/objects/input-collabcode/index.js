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
           `;

           $head.insertBefore($style,null);
    };

    module.onKeyPress = validation =>{
        if(validation = ""){
            return;
        }else{
         store.regexPasswordLogin =  module._passwordLoginValidation();
        }
        
    }
    module._passwordLoginValidation = () => {
       
        const $formLogin = document.querySelector(".form-login");
        const $inputPassword = $formLogin.querySelectorAll(".input-collabcode");
        if($inputPassword[1].value.length < 8){
            console.log("Digite ao menos 8 caracteres!");
            return false;
        }
        
        return true;
        
    }
    module.create = ({id = "",type = "text",placeholder = "",onKeyPress = ""}) =>{
        module._style();

        
        return `
            <input id="${id}"  onKeyPress="inputCollabCode.onKeyPress('${onKeyPress}')"  class="input-collabcode" type="${type}" placeholder="${placeholder}">
        `
    }
    return{
        create:module.create,
        onKeyPress:module.onKeyPress
    }
})();
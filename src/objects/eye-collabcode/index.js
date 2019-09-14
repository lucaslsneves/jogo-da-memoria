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
    module.handleClick = function(){
      const attrFor = this.getAttribute("for");
      const $input = document.querySelector(`#${attrFor}`)
      
      console.log($input)
      if($input.getAttribute("type") == "password"){
        $input.setAttribute("type","text");
      }else{
          $input.setAttribute("type","password");
      }
      
     
     
    };
    module.create  = ({attrFor = ""}) => {
        module._style();

        return `
            <label for="${attrFor}" class="eye-collabcode" onClick="eyeCollabCode.handleClick.bind(this)()">Mostrar senha</label>
        `
    }

    return{
        create:module.create,
        handleClick:module.handleClick
    }
})();
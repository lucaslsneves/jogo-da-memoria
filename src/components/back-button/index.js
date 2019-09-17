const backButton = (function(){
    const module = {};

    module._style = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .back-button{
            background-color:#f25a70;
               height:40px;
               line-height:40px;
               padding:0 10px;
               letter-spacing:1px;
               color:inherit;
                cursor:pointer;
               
         
        `;
        $head.insertBefore($style,null);
    };
  
    module.handleClick = path =>{
            if(path){
                location.hash = `#/${path}`;
                location.reload(true);
            }
    }
    module.create = ({content= "",path = ""}) =>{
        module._style();
        return `
            <a onClick="backButton.handleClick('${path}')" class="back-button">${content}</a>
        `;
    };

    return{
        create:module.create,
        handleClick:module.handleClick
        
    };
}());
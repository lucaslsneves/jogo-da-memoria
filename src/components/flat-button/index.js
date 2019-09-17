const flatButton = (function(){
   const module = {};
   module._id= 0;
   
    module._style = active => {
           const $style = document.createElement("style");
           const $head = document.querySelector("head");
           
           $style.textContent = `
                .flat-button-${module._id}{
                    height:176px;
                    box-sizing:border-box;
                    display:inline-block;
                    text-decoration:none;
                    text-align:center;
                    padding-top:60px;    
                    width:50%;
                    margin-right:-5px;
                    background-color:${active  ? "#f25a70": "#eae6da"};
                    font-size:24px;
                    font-weight:700;
                    font-family:inherit;
                    text-transform:uppercase;
                    letter-spacing:1px;
                    color:#fffcee;
                    border:none;
                    cursor:pointer;
                }
              
           `;

           $head.insertBefore($style,null);
    };
    module.handleClick = path =>{
        window.location.hash = `#/${path}`;
        location.reload(true);
    }
    module.create = (content = "",active = false,path = "") => {
        module._id++; 
        module._style(active);
       
            return`
            <a onClick="flatButton.handleClick('${path}')"class="flat-button-${module._id}">${content}</a>
        `;
        
    }

    return{
        create:module.create,
        handleClick:module.handleClick
    };
})();
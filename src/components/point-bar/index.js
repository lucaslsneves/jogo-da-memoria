
const pointBar = (function() {
const module = {};

module._style = () => {
  const $head = document.querySelector("head");  
  const $style=  document.createElement("style");
  $style.textContent=`
  
  
     .point-bar{
    
        height:40px;
        background-color:#3a4042;
        text-align:center;
        font-family: 'Comfortaa', sans-serif;
       
        color:white;
     } 

     .point-bar > .number{
         line-height:40px;
         font-weight:bold;
         font-size:20px;
     }
  
  ` 
  $head.insertBefore($style,null);
};
module.create = () => {
    module._style();
    return `
        <header class="point-bar">
            <span class="number">0</span>
        </header>
    `;
};
    return{
        create:module.create
    };
}());
  

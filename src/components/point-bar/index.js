
const pointBar = (function() {
const module = {};

module._style = () => {
  const $head = document.querySelector("head");  
  const $style=  document.createElement("style");
  $style.textContent=`
  
  
     .point-bar{
        display:flex;
        justify-content: space-between;
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
    const $backButton = backButton.create({
        content:"Back",
        path:"login"
    });
    const $stopWatch = stopWatch.create();
    module._style();
    return `
        <header class="point-bar">
            ${$backButton}
            <span class="number">0</span>
            ${$stopWatch}
        </header>
    `;
};
    return{
        create:module.create
    };
}());
  

const winMsg = (function(){
    const module = {};
    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
             .win-msg{
                    text-transform:uppercase;
                    color:#fff;
             }
           
        `;

        $head.insertBefore($style,null);
 };

    
    module.create = () =>{
        module._style();

        return `
            <h1 class="win-msg">Win!</h1>
        `;
    }
    return{
        create:module.create,
       
    }
})();

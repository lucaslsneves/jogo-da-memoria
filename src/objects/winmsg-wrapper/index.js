const winmsgWrapper = (function(){
    const module = {};
    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
             .winmsg-wrapper{
                 position:absolute;
                 top:50%;
                 
                 left:50%;
                 transform:translateY(-50%) translateX(-50%);
                 text-align:center;
                
             }
           
        `;

        $head.insertBefore($style,null);
 };

    
    module.create = () =>{
        module._style();
        const $winMsg = winMsg.create();
        const $againButton = gameButton.create({
            content:"Play again",
            classe:"-again",
            path:"game"
        });
        return `
            <div class="winmsg-wrapper">
                ${$winMsg}
                ${$againButton}
            </div>
        `;
    }
    return{
        create:module.create,
       
    }
})();


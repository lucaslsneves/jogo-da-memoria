const layerMsg = (function(){
    const module = {};
    module._style = () => {
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
        
        $style.textContent = `
           
             .content-wrapper{
                width:100%;
                position:absolute;
                top:50%;
                left:50%;
                transform:translateY(-50%) translateX(-50%);
                text-align:center;
             }
             .layer-msg .msg{
                font-size:40px;
                font-weight:bold;
                color:white;
                 display:block;
                 margin-bottom:
                 20px;
             }
           
        `;

        $head.insertBefore($style,null);
 };

    
    module.create = content =>{
        module._style();
        const $transparencyLayer = transparencyLayer.create();
        const $againButton = gameButton.create({
            content:"Play again",
            classe:"-again",
            path:"game"
        });
        const $exitButton = gameButton.create({
            content:"Exit",
            classe:"-exit",
            path:"login"
        })
        return `
            <div class="layer-msg">
                ${$transparencyLayer}
               <div class="content-wrapper">
              <span class="msg">${content}</span>
                ${$againButton}
                ${$exitButton}
                </div>
            </div>
        `;
    }
    return{
        create:module.create,
       
    }
})();


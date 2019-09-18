const transparencyLayer = (function(){
    const module = {};

    module._style = () =>{
     const $style = document.createElement("style");
     const $head = document.querySelector("head");

     $style.textContent= `
          
          
            .transparency-layer {
                background-color: rgba(58,64,66,0.5);
                height:100vh;
                min-height:710px;
                width:100vw;
                position:absolute;
                top:0;
                transition:opacity 200ms 200ms linear;
            }
            .transparency-layer.-disable{
                opacity:0;
            }
        
     `;

     $head.insertBefore($style,null);
    }

    module.create = () =>  {
        module._style();
        return   `
            <div class="transparency-layer"></div>
        `;
    }

    return{
        create:module.create
    };
})();
const layerStart = (function(){
    const module = {};

  
    
    module.create = () =>{
        const $transparencyLayer = transparencyLayer.create();
        const $gameButton = gameButton.create({content:"Start"});
                
        return`
            <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event,this)">
                ${$transparencyLayer}
                ${$gameButton}
            </div>
        `;
    };

    module.handleClick = $component => {
        const children = $component.querySelectorAll("*");
        children.forEach($item =>{$item.classList.add("-disable");});
           
        
    }
    module.handleTransitionEnd = (event,$component) => {
        if(event.target.classList.contains("transparency-layer")){
            $component.remove();
        };
    };
   

    return{
        create:module.create,
        handleClick:module.handleClick,
        handleTransitionEnd:module.handleTransitionEnd
    };
})();
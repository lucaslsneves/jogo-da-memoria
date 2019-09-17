const stopWatch = (function(){
    const module = {};
   
    module._style = () =>{
        const $style = document.createElement("style");
        const $head = document.querySelector("head");
           
           $style.textContent = `
               .stop-watch{
                   padding:0 10px;
                   line-height:40px;
                   font-size:20px;
                   font-weight:bold;
               }
            
           `;

           $head.insertBefore($style,null);
    };


    module._createLayerLose = () => {
        
            const $root = document.querySelector("#root");
            const $layerMsg = layerMsg.create("Game Over!");
            $root.insertAdjacentHTML("beforeend",$layerMsg);
        
    }

   module.start = () =>{
       $stopWatch = document.querySelector(".stop-watch");
        if(store.time >= 1){
            if(store.score == 4){
                return;
            }
            $stopWatch.textContent = store.time;
            store.time--;
            setTimeout(module.start,1000);
       }else{
            module._createLayerLose();
            $stopWatch.textContent = `0`;
       }
                   
       
   } 
    
   module.create = () => {
        module._style();

        return `<div class="stop-watch" >10</div>`;
   }
     

        
   

    return{
        create:module.create,
        start:module.start
    }
 
    
})();
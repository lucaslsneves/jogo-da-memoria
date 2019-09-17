const gameButton = (function(){
    const module = {};

    module._style = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button{
               height:100px;
               width:100px;
               background-color:#2ed573;
               border:3px solid #fffcee;
               cursor:pointer;
               border-radius:50%;
               position:absolute;
               left:50%;
               bottom:20px;
               transform:translateX(-50%);
               color:#fff;
               font-size:20px;
               font-weight:700;
               font-family:"comfortaa",sans-serif;
               text-transform:uppercase;
               transition:opacity 200ms linear;
            }
            .game-button.-disable{
                opacity:0;
            }
            .game-button.-again{
                transform:translate(0);
                position:static;
                font-size:15px;
                margin-right:20px;
            }
            .game-button.-exit{
                transform:translate(0);
                position:static;
                font-size:15px;
                background-color:tomato;
            }
        `;
        $head.insertBefore($style,null);
    };
  
    module.handleClick = path =>{
            if(path){
               window.location.hash =`#/${path}`;
                location.reload(true);
            }else{
                stopWatch.start();
            }
    }
    module.create = ({content= "",classe= "",path = ""}) =>{
        module._style();
        return `
            <button onClick="gameButton.handleClick('${path}')" class="game-button ${classe}">${content}</button>
        `;
    };

    return{
        create:module.create,
        handleClick:module.handleClick
        
    };
}());
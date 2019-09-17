let qtdActiveMemoryCard = 0;
let score = 0;
function createCardsWrapper(){
  
    
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");

  

    const $style = document.createElement("style");
    const $head = document.querySelector("head");
    $style.textContent =
        `
    .cards-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top:10px;
        width:100vw;
    }
    
    .cards-wrapper > div{
        margin-bottom: 10px;
    }`;
    
    $head.insertAdjacentElement("beforeend",$style);
    
    const _checkWin = () =>{
        score = $cardsWrapper.querySelectorAll(".memory-card.-score").length;
        if(score == 8){
            _createLayerWin();
        }
    }
    const _createLayerWin = () =>{
        const $root = document.querySelector("#root");
        const $layerMsg = layerMsg.create("Win!");
        $root.insertAdjacentHTML("beforeend",$layerMsg);
    }
    $cardsWrapper.addEventListener("click",() =>{
        qtdActiveMemoryCard =$cardsWrapper.querySelectorAll(".memory-card.-active").length;
        _checkWin()
        
      
    });
    
    return $cardsWrapper;

}
   

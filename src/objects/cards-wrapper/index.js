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

    $cardsWrapper.addEventListener("click",() =>{
        qtdActiveMemoryCard =$cardsWrapper.querySelectorAll(".memory-card.-active").length;
        
        score = $cardsWrapper.querySelectorAll(".memory-card.-score").length;
        if(score == 8){
            const $root = document.querySelector("#root");
            const $transparencyLayer = transparencyLayer.create();
            const $winmsgWrapper = winmsgWrapper.create();
            $root.insertAdjacentHTML("beforeend",$transparencyLayer);
            $root.insertAdjacentHTML("beforeend",$winmsgWrapper);
        }
      
    });
    
    return $cardsWrapper;

}
   

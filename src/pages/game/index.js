(function (){

    const $root = document.querySelector("#root");

    const $cardsWrapper = createCardsWrapper(); 
    const createMemoryCard = memoryCard.create(); /*memoryCard.create() cria o css*/
    const $pointBar = pointBar.create();
    const $layerStart = layerStart.create();
   
    const $memoryCardC = createMemoryCard( {
        
        src:"img/icon-c.png",
        alt:"Ícone de um livro da linguagem C"
    });
    const $memoryCardJs = createMemoryCard({
        
        src:"img/icon-js.png",
        alt:"Ícone de um livro da linguagem JavaScript"
    });
    const $memoryCardJava = createMemoryCard({
        
        src:"img/icon-java.png",
        alt:"Ícone de um livro da linguagem Java"
    });
    const $memoryCardWoman = createMemoryCard({
        
        src:"img/icon-woman.png",
        alt:"Ícone de uma mulher programando"
    })
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend",$memoryCardC);
    
    
    $root.insertAdjacentHTML("afterbegin",$pointBar);
    $root.insertAdjacentElement("beforeend",$cardsWrapper);
    $root.insertAdjacentHTML("beforeend",$layerStart);
    

})();











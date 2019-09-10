const memoryCard = (function(){
const module = {};

module.create = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  
  $style.textContent = `
.memory-card{
    width:155px;
    height:155px;
    position:relative;
}
.memory-card .card{
    width:100%;
    height:100%;
    margin-bottom:16px;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position:absolute;
    cursor:pointer;
}
.memory-card.-active .card,
.memory-card.-score .card
{
    display:none;
}
.memory-card.-active .card.-front,
.memory-card.-score .card.-front{
    display:flex;
}
.memory-card .card.-front{
   
    background-color: #fff; 
}
.memory-card .card.-front::before{
    content:'';
    position: absolute;
    width: 94px;
    height: 94px;
    border-radius: 50%;
    background-color:#d4d4d4;
    
}
.memory-card .card.-front > .icon{
    position: absolute;
    transform: translateY(-9px);
}
.memory-card .card > img{
    width:100px;
    height: 100px;
}
`;

  $head.insertAdjacentElement("beforeend", $style);

  return ({ src, alt }) => `
      <div class="memory-card" onClick="memoryCard.handleClick(this)">  
        <article class="card -front">
            <img 
                src="${src}"
                alt="${alt}"
                class="icon"
            />
        </article>
        <article class="card">
            <img 
                src="img/icon-collabcode.png"
                alt="Gueio mascote da CollabCode"
                class="icon"
            />
        </article>
      </div>
    `;
}
module.handleClick = $component => {
  if (!$component.classList.contains("-active") && !($component.classList.contains("-score"))) {
    module._flipCard($component);
    module._checkSure();
  }
};

module._flipCard = $component =>{
  
  if (qtdActiveMemoryCard < 2) {
    $component.classList.add("-active");
  }
};

module._checkSure = () =>{
 

  if (qtdActiveMemoryCard == 1) {
    const $activeMemoryCards = document.querySelectorAll(".memory-card.-active");

    if (
      $activeMemoryCards[0].querySelector(".-front .icon").getAttribute("src") ===
      $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")){

        document.querySelector(".point-bar > .number").textContent = ++store.score;

           $activeMemoryCards.forEach($memoryCard =>{
               $memoryCard.classList.add("-score");
               $memoryCard.classList.remove("-active");
           });
     } else {

      setTimeout(() => {
        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.remove("-active");
        });
        qtdActiveMemoryCard = 0;
      },1000);

    }
  }
};

return {
  create:module.create,
  handleClick:module.handleClick
};
})();
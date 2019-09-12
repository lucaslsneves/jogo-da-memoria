const logoCollabCode = (function(){
   const module = {};
   
 module._style = () =>{
     const $head = document.querySelector("head");
     const $style = document.querySelector("style");

     $style.textContent = `
        .logo-collabcode{
            display:inline-block;
            border:solid 40px white;
            border-radius:50%;
            background-color:#fff;
        }
        .logo-collabcode > .logo{
            width:175px;
            height:181px;
        }
     `
     $head.insertBefore($style,null);
 }

  module.create =  () =>{
    module._style()
    return`
      <figure class="logo-collabcode">
        <img  class="logo" src="img/icon-collabcode.png">
        </figure>
    `;
  }
   
          
    
    return{
        create:module.create
    };
})();
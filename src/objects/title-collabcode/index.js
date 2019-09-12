const titleCollabCode = (function(){
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .title-collabcode{
                font-size:27px;
                color:#f25a70;
                letter-spacing:0.6px;
                text-transform:uppercase;
            }
        `;

        $head.insertBefore($style,null);
    }
    module.create = content => {
        module._style();
        return`<h1 class="title-collabcode">${content}</h1>`;
    }
    return{
        create:module.create
    }
})();
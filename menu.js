const cocktailBtn = document.querySelector(".cocktail");
const cocktailBtnBack = document.querySelector(".wheel-back");

const wheelPanel = document.querySelector(".wheel");

cocktailBtn.addEventListener("click", function( e ) {
    //wheelPanel.setAttribute('id', '');
}); 

cocktailBtnBack.addEventListener("click", function( e ) {
    wheelPanel.setAttribute('id', 'hide');
}); 

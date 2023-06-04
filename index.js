const gallery = document.querySelector(".galleryshow");

const btnL = document.querySelector(".next");
const btnR = document.querySelector(".prev");


btnL.addEventListener("click", function( e ) {
    gallery.scrollLeft += 1000;
}); 

btnR.addEventListener("click", function( e ) {
    gallery.scrollLeft -= 1000;
}); 

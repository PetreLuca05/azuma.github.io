const gallery = document.querySelector(".galleryshow");

const btnL = document.querySelector(".next");
const btnR = document.querySelector(".prev");

const btnBanner = document.querySelector(".bhide");
const banner = document.querySelector(".banner");


btnL.addEventListener("click", function( e ) {
    gallery.scrollLeft += 1000;
}); 

btnR.addEventListener("click", function( e ) {
    gallery.scrollLeft -= 1000;
}); 

btnBanner.addEventListener("click", function( e ) {
    banner.setAttribute('id', 'hide');
});

const btnBanner = document.querySelector(".bhide");
const banner = document.querySelector(".banner");

btnBanner.addEventListener("click", function( e ) {
    banner.setAttribute('id', 'hide');
});



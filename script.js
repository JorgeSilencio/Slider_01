$(document).ready(function() {
    function setupCarousel1() {
        var currentIndex = 0;
        var images = $("#carrusel_1 .sliderPrincipal img");
        var interval = setInterval(changeImage, 1500);

        function changeImage() {
            images.eq(currentIndex).hide();
            currentIndex = (currentIndex + 1) % images.length;
            images.eq(currentIndex).show();
        }
    }

    setupCarousel1();
});

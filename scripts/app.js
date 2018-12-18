$(function () {

    $(".menu-link").on('click', function (e) {
        e.preventDefault();
        $(".menu").toggleClass("open");
        $(".menu-overlay").toggleClass("open");
    });

    $(".nav-link").on('click', function() {
        $(".menu").toggleClass("open");
        $(".menu-overlay").toggleClass("open");

    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    
});


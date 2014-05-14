$(document).ready(function() {
    // navigation click actions
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var anchor = $(this);
        scrollToID(anchor, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });

    $('html, body').animate({scrollTop:0}, 'slow');
});

// scroll function
function scrollToID(anchor, speed){
    var offSet = 0;
    var targetOffset = $('#' + anchor.attr("data-id")).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed, function() {
        $('.btn-group').each(function(){
            $('a.active').removeClass('active');
        });

        $('#' + anchor.attr("data-id") + 'btn').addClass('active');
    });
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
let projectSlide = 1;
$('#projects').bind('mousewheel DOMMouseScroll', function (e) {
    $.scrollify.disable();
    
    if (e.originalEvent.wheelDelta >= 0) {
        //Вверх
        if (projectSlide == 1) {
            $.scrollify.enable();
        } else {
            $('.swiper-button-prev-custom').click();
setTimeout(function(){projectSlide = 1;}, 1000);

        }
    } else {
        //Вниз
        if (projectSlide == 2) {
       $.scrollify.enable();
        }else {
                        $('.swiper-button-next-custom').click();
setTimeout(function(){projectSlide = 2;}, 1000);        }
    }

    var scrollTo = null;
    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    } else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }
    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});
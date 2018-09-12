$(function () {
    $(window).on('resize', function () {
        var width = $(window).width();
        if (width >= 768) {
            $('.wjs-carousel .item').each(function (index, vaule) {
                var item = $(this);
                var imgSrc = item.data("largeImg");
                // console.log(imgSrc);
                item.html($('<a href="javascript:;" class="pc-img"></a>').css("backgroundImage", "url('" + imgSrc + "')"));
            })
        } else {
            $('.wjs-carousel .item').each(function (index, vaule) {
                var item = $(this);
                var imgSrc = item.data("smallImg");
                // console.log(imgSrc);
                item.html('<a href="javascript:;" class="smal-img"><img src="' + imgSrc + '" alt="..."></a>');

            })
        }
    }).trigger("resize");
    
    var carousel_inner = $('.carousel-inner')[0];
    var startX, endX;
    var carousel = $('.carousel');
    carousel_inner.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        if(endX - startX > 0){
            carousel.carousel('prev');
        }else if(endX - startX < 0){
            carousel.carousel('next');
        }
    });
})
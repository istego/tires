$(document).ready(function() {
   $('#slider').bxSlider({
       mode: 'fade',
       pagerCustom: $('.slider-pager'),
       controls: false,
       auto: true,
       pause: 5000
   });
    $(".dropdown .dropdown-menu>li>a").on("click", function(e) {
        e.preventDefault();
        $(this).parents(".dropdown-menu").find("a.active").removeClass("active");
        $(this).addClass("active").closest(".dropdown").find("button").html($(this).text());
    });
    $('#menu').slicknav({
        prependTo: '.sandwich',
        label: 'МЕНЮ'
    });
    initMap();
    function initMap() {
        var mapCanvas = document.getElementById('map'),
            myLatLng = {lat: 56.144767, lng: 40.417342};
        var mapOptions = {
            center: new google.maps.LatLng(myLatLng),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }
});
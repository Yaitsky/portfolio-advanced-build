$('.blog').waypoint(function() {
    alert('hello');
})
$(document).ready(function(){
    
});

$(document).ready (function() {
    $('.blog__left_btn').on('click', function(e) {
        e.preventDefault();

        var asideMenu = $('.blog__left'),
            reqLeft = '-18.75rem';

        if (!asideMenu.hasClass('blog__left_on')) {
            asideMenu.addClass('blog__left_on');
            asideMenu.css({
                'left' : '0'
            })
        } else {
            asideMenu.removeClass('blog__left_on');
            asideMenu.css({
                'left' : reqLeft
            })
        }

    });

});
$(document).ready (function() {
    $('.welcome-auth__link').on('click', function(e) {
        e.preventDefault();

        $('.flipper').addClass('flipper_on');
        $(this).addClass('welcome-auth__link_off');
    })

    $('.welcome-menu__link_flip').on('click', function(e) {
        e.preventDefault();

        $('.flipper').removeClass('flipper_on');
        $('.welcome-auth__link').removeClass('welcome-auth__link_off');

    });

});


$(document).ready(function() {
        $('.c-hamburger').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('is-active');

            if(!$('.fullscreen-menu').hasClass('fullscreen-menu_open')) {
                $('.fullscreen-menu').addClass('fullscreen-menu_open').
                    css({
                    'opacity' : 1
                })
            } else {
                $('.fullscreen-menu').removeClass('fullscreen-menu_open').
                css({
                    'opacity' : 0
                })
            }

            if (!$('.fullscreen-menu__link').hasClass('fullscreen-menu__link_active')) {
                $('.fullscreen-menu__link').addClass('fullscreen-menu__link_active');
                $('.fullscreen-menu__link').css({
                    'opacity': 1,
                    'top':0
                })
            } else {
                $('.fullscreen-menu__link').removeClass('fullscreen-menu__link_active');
                $('.fullscreen-menu__link').css({
                    'opacity': 0,
                    'top':'-10px'
                })
            }



        })
    });
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(55.742376, 37.643596),
        zoom: 15,
        zoomControl: false,
        disableDoubleClickZoom: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        panControl: false,
        streetViewControl: false,
        draggable: true,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#74a163"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ],
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

}
(function(){

    var data = {
        "0" : {
            "text":"Сайт школы <br> обучения йоге",
            "image":"url('assets/img/works_yoga.jpg')"
        },
        "1" : {
            "text":"Сайт школы онлайн <br> образования",
            "image":"url('assets/img/works_loftblog.png')"
        },
        "2" : {
            "text":"Сайт студии <br> дизайна интерьера",
            "image":"url('assets/img/works_trialog.jpg')"
        },
        "3" : {
            "text":"Сайт онлайн-курсов <br> Loftblog",
            "image":"url('assets/img/work-2.png')"
        }
    };

    var arrData = [];
    for(var i in data) {
        arrData[i] = data[i];
    }

    var count = arrData.length;
    var current = 0;
    var next = current + 1;
    var prev = count - 1;

    var setUp = function() {
        var buttonNext = document.querySelector(".works-slider__next");
        var buttonPrev = document.querySelector(".works-slider__prev");
        buttonNext.addEventListener("click", showNextSlide);
        buttonPrev.addEventListener("click", showPrevSlide);
        setSlides();
    };

    var descreaseValue = function(value){
        value = value - 1;
        if (value < 0) {
            value = count - 1;
        }
        return value;
    };

    var increaseValue = function(value){
        value = value + 1;
        if (value >= count) {
            value = 0;
        }
        return value;
    };

    var showNextSlide = function() {
        current = increaseValue(current);
        prev = descreaseValue(current);
        next = increaseValue(current);
        setSlides();
    };

    var showPrevSlide = function() {
        current = descreaseValue(current);
        prev = increaseValue(current);
        next = descreaseValue(current);
        setSlides();
    };

    var setSlides = function() {
        setSlideToPos(1, arrData[current]);
        setSlideToPos(2, arrData[next]);
        setSlideToPos(3, arrData[prev]);
    };

    var setSlideToPos = function(pos, slidedata){
        var text = document.querySelector(".works-slider__title");
        var imgMain = document.querySelector(".works-slider__logo");
        var imgNext = document.querySelector(".works-slider__next-image");
        var imgPrev = document.querySelector(".works-slider__prev-image");

        switch(pos) {
            case 1:
                text.innerHTML = slidedata.text;
                imgMain.style.backgroundImage = slidedata.image;
                break;
            case 2:
                imgNext.style.backgroundImage = slidedata.image;
                break;
            case 3:
                imgPrev.style.backgroundImage = slidedata.image;
                break;
        }
    };
    setUp();

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFzaWRlLmpzIiwiZmxpcHBlci5qcyIsImZ1bGxzY3JlZW5fbWVudS5qcyIsIm1hcC5qcyIsInNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcuYmxvZycpLndheXBvaW50KGZ1bmN0aW9uKCkge1xuICAgIGFsZXJ0KCdoZWxsbycpO1xufSlcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgXG59KTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5IChmdW5jdGlvbigpIHtcbiAgICAkKCcuYmxvZ19fbGVmdF9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgYXNpZGVNZW51ID0gJCgnLmJsb2dfX2xlZnQnKSxcbiAgICAgICAgICAgIHJlcUxlZnQgPSAnLTE4Ljc1cmVtJztcblxuICAgICAgICBpZiAoIWFzaWRlTWVudS5oYXNDbGFzcygnYmxvZ19fbGVmdF9vbicpKSB7XG4gICAgICAgICAgICBhc2lkZU1lbnUuYWRkQ2xhc3MoJ2Jsb2dfX2xlZnRfb24nKTtcbiAgICAgICAgICAgIGFzaWRlTWVudS5jc3Moe1xuICAgICAgICAgICAgICAgICdsZWZ0JyA6ICcwJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzaWRlTWVudS5yZW1vdmVDbGFzcygnYmxvZ19fbGVmdF9vbicpO1xuICAgICAgICAgICAgYXNpZGVNZW51LmNzcyh7XG4gICAgICAgICAgICAgICAgJ2xlZnQnIDogcmVxTGVmdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5IChmdW5jdGlvbigpIHtcbiAgICAkKCcud2VsY29tZS1hdXRoX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnLmZsaXBwZXInKS5hZGRDbGFzcygnZmxpcHBlcl9vbicpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd3ZWxjb21lLWF1dGhfX2xpbmtfb2ZmJyk7XG4gICAgfSlcblxuICAgICQoJy53ZWxjb21lLW1lbnVfX2xpbmtfZmxpcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoJy5mbGlwcGVyJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwZXJfb24nKTtcbiAgICAgICAgJCgnLndlbGNvbWUtYXV0aF9fbGluaycpLnJlbW92ZUNsYXNzKCd3ZWxjb21lLWF1dGhfX2xpbmtfb2ZmJyk7XG5cbiAgICB9KTtcblxufSk7XG5cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuYy1oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYoISQoJy5mdWxsc2NyZWVuLW1lbnUnKS5oYXNDbGFzcygnZnVsbHNjcmVlbi1tZW51X29wZW4nKSkge1xuICAgICAgICAgICAgICAgICQoJy5mdWxsc2NyZWVuLW1lbnUnKS5hZGRDbGFzcygnZnVsbHNjcmVlbi1tZW51X29wZW4nKS5cbiAgICAgICAgICAgICAgICAgICAgY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknIDogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5mdWxsc2NyZWVuLW1lbnUnKS5yZW1vdmVDbGFzcygnZnVsbHNjcmVlbi1tZW51X29wZW4nKS5cbiAgICAgICAgICAgICAgICBjc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eScgOiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEkKCcuZnVsbHNjcmVlbi1tZW51X19saW5rJykuaGFzQ2xhc3MoJ2Z1bGxzY3JlZW4tbWVudV9fbGlua19hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy5mdWxsc2NyZWVuLW1lbnVfX2xpbmsnKS5hZGRDbGFzcygnZnVsbHNjcmVlbi1tZW51X19saW5rX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5mdWxsc2NyZWVuLW1lbnVfX2xpbmsnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOjBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbHNjcmVlbi1tZW51X19saW5rJykucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4tbWVudV9fbGlua19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbHNjcmVlbi1tZW51X19saW5rJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzonLTEwcHgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSlcbiAgICB9KTsiLCJnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XG52YXIgbWFwO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1Ljc0MjM3NiwgMzcuNjQzNTk2KSxcbiAgICAgICAgem9vbTogMTUsXG4gICAgICAgIHpvb21Db250cm9sOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogZmFsc2UsXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogZmFsc2UsXG4gICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICAgIHN0eWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzc0YTE2M1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9XG4gICAgdmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XG5cbn0iLCIoZnVuY3Rpb24oKXtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBcIjBcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiOlwi0KHQsNC50YIg0YjQutC+0LvRiyA8YnI+INC+0LHRg9GH0LXQvdC40Y8g0LnQvtCz0LVcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjpcInVybCgnYXNzZXRzL2ltZy93b3Jrc195b2dhLmpwZycpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIjpcItCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9IDxicj4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOlwidXJsKCdhc3NldHMvaW1nL3dvcmtzX2xvZnRibG9nLnBuZycpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIyXCIgOiB7XG4gICAgICAgICAgICBcInRleHRcIjpcItCh0LDQudGCINGB0YLRg9C00LjQuCA8YnI+INC00LjQt9Cw0LnQvdCwINC40L3RgtC10YDRjNC10YDQsFwiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOlwidXJsKCdhc3NldHMvaW1nL3dvcmtzX3RyaWFsb2cuanBnJylcIlxuICAgICAgICB9LFxuICAgICAgICBcIjNcIiA6IHtcbiAgICAgICAgICAgIFwidGV4dFwiOlwi0KHQsNC50YIg0L7QvdC70LDQudC9LdC60YPRgNGB0L7QsiA8YnI+IExvZnRibG9nXCIsXG4gICAgICAgICAgICBcImltYWdlXCI6XCJ1cmwoJ2Fzc2V0cy9pbWcvd29yay0yLnBuZycpXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYXJyRGF0YSA9IFtdO1xuICAgIGZvcih2YXIgaSBpbiBkYXRhKSB7XG4gICAgICAgIGFyckRhdGFbaV0gPSBkYXRhW2ldO1xuICAgIH1cblxuICAgIHZhciBjb3VudCA9IGFyckRhdGEubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgKyAxO1xuICAgIHZhciBwcmV2ID0gY291bnQgLSAxO1xuXG4gICAgdmFyIHNldFVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBidXR0b25OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrcy1zbGlkZXJfX25leHRcIik7XG4gICAgICAgIHZhciBidXR0b25QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrcy1zbGlkZXJfX3ByZXZcIik7XG4gICAgICAgIGJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOZXh0U2xpZGUpO1xuICAgICAgICBidXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJldlNsaWRlKTtcbiAgICAgICAgc2V0U2xpZGVzKCk7XG4gICAgfTtcblxuICAgIHZhciBkZXNjcmVhc2VWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSAtIDE7XG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gY291bnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgdmFyIGluY3JlYXNlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgKyAxO1xuICAgICAgICBpZiAodmFsdWUgPj0gY291bnQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIHZhciBzaG93TmV4dFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnQgPSBpbmNyZWFzZVZhbHVlKGN1cnJlbnQpO1xuICAgICAgICBwcmV2ID0gZGVzY3JlYXNlVmFsdWUoY3VycmVudCk7XG4gICAgICAgIG5leHQgPSBpbmNyZWFzZVZhbHVlKGN1cnJlbnQpO1xuICAgICAgICBzZXRTbGlkZXMoKTtcbiAgICB9O1xuXG4gICAgdmFyIHNob3dQcmV2U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudCA9IGRlc2NyZWFzZVZhbHVlKGN1cnJlbnQpO1xuICAgICAgICBwcmV2ID0gaW5jcmVhc2VWYWx1ZShjdXJyZW50KTtcbiAgICAgICAgbmV4dCA9IGRlc2NyZWFzZVZhbHVlKGN1cnJlbnQpO1xuICAgICAgICBzZXRTbGlkZXMoKTtcbiAgICB9O1xuXG4gICAgdmFyIHNldFNsaWRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRTbGlkZVRvUG9zKDEsIGFyckRhdGFbY3VycmVudF0pO1xuICAgICAgICBzZXRTbGlkZVRvUG9zKDIsIGFyckRhdGFbbmV4dF0pO1xuICAgICAgICBzZXRTbGlkZVRvUG9zKDMsIGFyckRhdGFbcHJldl0pO1xuICAgIH07XG5cbiAgICB2YXIgc2V0U2xpZGVUb1BvcyA9IGZ1bmN0aW9uKHBvcywgc2xpZGVkYXRhKXtcbiAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtzLXNsaWRlcl9fdGl0bGVcIik7XG4gICAgICAgIHZhciBpbWdNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrcy1zbGlkZXJfX2xvZ29cIik7XG4gICAgICAgIHZhciBpbWdOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrcy1zbGlkZXJfX25leHQtaW1hZ2VcIik7XG4gICAgICAgIHZhciBpbWdQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrcy1zbGlkZXJfX3ByZXYtaW1hZ2VcIik7XG5cbiAgICAgICAgc3dpdGNoKHBvcykge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gc2xpZGVkYXRhLnRleHQ7XG4gICAgICAgICAgICAgICAgaW1nTWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzbGlkZWRhdGEuaW1hZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nTmV4dC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzbGlkZWRhdGEuaW1hZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1nUHJldi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzbGlkZWRhdGEuaW1hZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNldFVwKCk7XG5cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

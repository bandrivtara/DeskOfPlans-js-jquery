$(() => {

    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });

    const boxes = $('.cv, .projects, .quote-box, .feedback');
    const photo = $('.photo-box')
    const touchBackground = $('.body_back');
    const rSide = $('.r-side');

    boxes.click(function(){
        const touchBox = this;
        const pins = $('.pins', this);
        let animateClass = '';

        if ($(touchBox).hasClass('cv')){
            animateClass = '-cv';
        }

        pins.animate({
            top: -15
        }, 500, function(){
            $(touchBox).addClass('animate'+ animateClass);
            $(touchBox).css({
                'z-index': '2',
                'cursor' : 'auto'
            });

            $('.go_to').mouseenter(function(){
                $('.go_to_item').css("display", "block");
            }).mouseleave(function(){
                $('.go_to_item').css("display", "none");
            })

            $('.projects-hover').mouseenter(function(){
                $(this).css("opacity", "1");
            }).mouseleave(function(){
                $(this).css("opacity", "0");
            })
            
            $(this).hide(1000);
            touchBackground.css({
                'display': 'block',
                'z-index': '1'
            });
        });
        
        touchBackground.click(function() {
            $(touchBox).removeClass('animate' + animateClass);
            $(touchBox).css('cursor' , 'pointer');
            touchBackground.css('display', 'none');
            pins.show(500);
            pins.animate({
                top: 0
            }, 500, function(){
                $(touchBox).css('z-index', '0');
            })
        }); 
    }); 
    
    photo.click(function(){
        $(this).addClass('animate-huge');
        $(this).css('z-index', '2');
        touchBackground.css({
            'display': 'block',
            'z-index': '1'
        });

        touchBackground.click(function(){
            $(photo).removeClass('animate-huge');
            $(photo).css('z-index', '0');
            touchBackground.css('display', 'none');
        })

        $(photo).mouseenter(function() {
            $(this).children().css('filter', 'none');
            $(this).children().get(0).play();
        }).mouseleave(function() {
            $(this).children().css('filter', 'grayscale(100%)');
            $(this).children().get(0).pause();
        });
    }); 

    $(rSide).click(function() {
        $('.desk-container').addClass('scale-rside');
        $('.zoom-out').css({
            'cursor': 'zoom-out',
            'display': 'block',
            'z-index': '1',
            'min-height' : '100%',
            'opacity' : '0'
        });
        $('.zoom-out').click(function(){
            $('.desk-container').removeClass('scale-rside');
            $('.zoom-out').css({
                'display': 'none',
                'opacity': '1',
            });
        })

    });

    $('.form-btn').mouseenter(function(){
        $('.airplane').addClass('airplane-animate');
    }).mouseleave(function(){
        $('.airplane').removeClass('airplane-animate');
    })

});



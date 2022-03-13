$(function(){

    var fullheight=function()
    {
        $("header").css("height",$(window).height());
        $(window).resize(function()
        {
            $("header").css("height",$(window).height());
            $(window).scroll(function(){
                var sc=$(this).scrollTop();
                if(sc >=1550)
                {
                    $('.timer').countTo();
                }
            });
        
        });
    };

    
    fullheight();
    $("body").niceScroll({
        cursorcolor: "#7cb62f",
        cursoropacitymin: 1,
        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid transparent",
    });
    var slider =$("header .header-info");
    slider.css({
        marginTop:''+((($("header").height() - slider.height())/2)-100) +'px'
    });

    $("header ul li > a").click(function(){         
        $("html,body").animate({
            scrollTop:$("#"+ $(this).data("target")).offset().top +10
        },1500);

    })

    $("header i.icon").click(function()
    {
        $("header ul .link").slideToggle();
    });

    
    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        if(sc >=1550)
        {
            $('.timer').countTo();
        }
    });

    $(".our-portfolio .shfful-btn .btn").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var filterCss=$(this).attr("id");
        if(filterCss === "all")
        {
            $(".our-portfolio .images .row > div").fadeIn();
        }
        else
        {
            $(".our-portfolio .images .row > div").fadeOut();
            $(".our-portfolio .images .row ").contents().filter("."+ filterCss).fadeIn();
        }
    
    
    });
    
    $(".choose .choose-content ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var p=$(this).data("role");
       
            $(".choose .choose-content .content-info > div").hide();
            $(".choose .choose-content .content-info").contents().filter("#"+p).fadeIn();
    });
    $(".pop").magnificPopup({
        type:'iframe'
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    

});

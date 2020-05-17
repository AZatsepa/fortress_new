$(document).ready(function(){
	$('.down_link_js').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#scroll_block').offset().top }, 1000);
		e.preventDefault();
	});
	// slider at home 
	$('.owl_home_js').owlCarousel({
	    loop:true,
	    items:1,
	    autoplay:true,
	    margin:10,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	    nav:false,
	    dots:false
	})
	// slider items
	$('.owl_list_js').owlCarousel({
	    loop:false,
	    margin:30,
	    dots:false,
	    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1,
	            dots:true
	        },
	        600:{
	            items:2,
	            dots:true
	        },
	        992:{
	            items:3,
	            nav:true
	        }
	    }
	})
	// main mobele nav-menu
	$('body').append('<span class="menu_overlay menu_overlay_js"></span>');
	$(".mob_nav_btn_js").click(function(){
        $(".navs_block_js").toggleClass("opened");
        $(".menu_overlay_js").toggleClass("active");
        $("body").toggleClass("overflow_hidden blur");
    });
    $(".menu_overlay_js").click(function(){
        $(".navs_block_js").toggleClass("opened");
        $(".menu_overlay_js").toggleClass("active");
        $("body").toggleClass("overflow_hidden blur");
    });
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.header_js').addClass('active');
    }
    else {
        $('.header_js').removeClass('active');
    }
});
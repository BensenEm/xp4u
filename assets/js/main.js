$(document).ready(function ($) {
	console.log("starting");
	"use strict";


	var loader = function () {

		setTimeout(function () {
			if ($('#pb_loader').length > 0) {
				$('#pb_loader').removeClass('show');
			}
		}, 700);
	};
	loader();

	if (window.matchMedia('(max-width: 767px)').matches) {

	}


	//smallScreens image toggle
	var smallScreensImageToggle = function () {
		console.log("starting2");

		$("#jp").click(function () {
			console.log("jan");
			if ($(".jp_rest").hasClass('full')) {
				$(".jp_rest").removeClass('full');
				$(".jp_rest").css({ 'height': 0 });
			}
			else {
				var height = $(".jp_rest").get(0).scrollHeight;
				$(".jp_rest").addClass('full');
				$(".jp_rest").css({ 'height': height });
			}
		});
	

		$("#fh").click(function () {
			console.log("flo");
			if ($(".fh_rest").hasClass('full')) {
				$(".fh_rest").removeClass('full');
				$(".fh_rest").css({ 'height': 0 });
			}
			else {
				var height = $(".fh_rest").get(0).scrollHeight;
				$(".fh_rest").addClass('full');
				$(".fh_rest").css({ 'height': height });
			}
		});


		$("#mm").click(function () {
			console.log("malte");
			if ($(".mm_rest").hasClass('full')) {
				$(".mm_rest").removeClass('full');
				$(".mm_rest").css({ 'height': 0 });
			}
			else {
				var height = $(".mm_rest").get(0).scrollHeight;
				$(".mm_rest").addClass('full');
				$(".mm_rest").css({ 'height': height });
			}

		});
		

		$("#bk").click(function () {
			console.log("bernd");
			if ($(".bk_rest").hasClass('full')) {
				$(".bk_rest").removeClass('full');
				$(".bk_rest").css({ 'height': 0 });
			}
			else {
				var height = $(".bk_rest").get(0).scrollHeight;
				$(".bk_rest").addClass('full');
				$(".bk_rest").css({ 'height': height });
			}

		});
		
	};

	smallScreensImageToggle();

	/* var largeScreensImageNav = function() {
		   $("#jp-nav").click(function(){
			   $("#fh").addClass('d-none');
			   $("#bk").addClass('d-none');
			   $("#mm").addClass('d-none');
			   $("#jp").removeClass('d-none');
		   });
		   $("#mm-nav").click(function(){
			   $("#fh").addClass('d-none');
			   $("#bk").addClass('d-none');
			   $("#jp").addClass('d-none');
			   $("#mm").removeClass('d-none');
		   });
		   $("#bk-nav").click(function(){
			   $("#fh").addClass('d-none');
			   $("#jp").addClass('d-none');
			   $("#mm").addClass('d-none');
			   $("#bk").removeClass('d-none');
		   });
		   $("#fh-nav").click(function(){
			   if($("#fh").hasClass('d-none')==false){
				   $(".pb_slide_v2").addClass('d-none');
			   }
			   else{			
				   $(".pb_slide_v2").removeClass('d-none')
				   $("#jp").addClass('d-none');
				   $("#bk").addClass('d-none');
				   $("#mm").addClass('d-none');
				   $("#fh").removeClass('d-none');
			   }
		   });
   
	   };
	   largeScreensImageNav(); */

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.pb_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	// slick sliders
	var slickSliders = function () {
		$('.single-item').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			nextArrow: '<span class="next"><i class="flaticon flaticon-next"></i></span>',
			prevArrow: '<span class="prev"><i class="flaticon flaticon-back"></i></span>',
			arrows: true,
			draggable: false,
			adaptiveHeight: true
		});

		$('.single-item-no-arrow').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			nextArrow: '<span class="next"><i class="flaticon flaticon-next"></i></span>',
			prevArrow: '<span class="prev"><i class="flaticon flaticon-back"></i></span>',
			arrows: false,
			draggable: false
		});

		$('.multiple-items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			infinite: true,

			autoplay: true,
			autoplaySpeed: 2000,

			arrows: true,
			nextArrow: '<span class="next"><i class="flaticon flaticon-next"></i></span>',
			prevArrow: '<span class="prev"><i class="flaticon flaticon-back"></i></span>',
			draggable: false,
			responsive: [
				{
					breakpoint: 1125,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		$('.js-pb_slider_content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-pb_slider_nav',
			adaptiveHeight: false
		});
		$('.js-pb_slider_nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.js-pb_slider_content',
			dots: false,
			centerMode: true,
			centerPadding: "0px",
			focusOnSelect: true,
			arrows: false
		});

		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
			responsive: [{
				breakpoint: 768,
				settings: "unslick"
			}]

		});
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: true,
			nextArrow: '<span class="next"><i class=" flaticon-next" ></i></span>',
			prevArrow: '<span class="prev"><i class=" flaticon-back"></i></span>',
			centerMode: true,
			focusOnSelect: true,
			// the magic
			responsive: [{

				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					infinite: true
				}

			}, {

				breakpoint: 768,
				settings: "unslick"


			}]
		});

		$('.js-pb_slider_content2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-pb_slider_nav2',
			adaptiveHeight: false
		});
		$('.js-pb_slider_nav2').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.js-pb_slider_content2',
			dots: false,
			centerMode: true,
			centerPadding: "0px",
			focusOnSelect: true,
			arrows: false
		});
	};
	slickSliders();





	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();
			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({

				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});

			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();

	var offCanvasNav = function () {
		var toggleNav = $('.js-pb_nav-toggle'),
			offcanvasNav = $('.js-pb_offcanvas-nav_v1');
		if (toggleNav.length > 0) {
			toggleNav.click(function (e) {
				$(this).toggleClass('active');
				offcanvasNav.addClass('active');
				e.preventDefault();
			});
		}
		offcanvasNav.click(function (e) {
			if (offcanvasNav.hasClass('active')) {
				offcanvasNav.removeClass('active');
				toggleNav.removeClass('active');
			}
			e.preventDefault();
		})
	};
	offCanvasNav();

	var ytpPlayer = function () {
		if ($('.ytp_player').length > 0) {
			$('.ytp_player').mb_YTPlayer();
		}
	}
	ytpPlayer();





});

//overlay

function pasteOverlay(ID) {
	$('#' + ID).clone().appendTo('#overlay-cv');
	$('#overlay-cv').find('.fhrest').unwrap();
	$('#overlay-cv').find('.jprest').unwrap();
	$('#overlay-cv').find('.bkrest').unwrap();
	$('#overlay-cv').find('.mmrest').unwrap();
	on();
};

function on() {
	document.getElementById("overlay").style.display = "block";
}
function off() {
	document.getElementById("overlay").style.display = "none";
	$("#overlay-cv").empty();

}
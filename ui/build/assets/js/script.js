(function($) {
	
	'use strict';
	
	var Upsite = {
		
		// Initialization the functions
		init: function() {
			Upsite.AffixMenu();
			Upsite.MobileMenu();
			Upsite.ScrollSpy();
			Upsite.SmoothScroll();
			Upsite.FitVids();
			Upsite.PlaceHolder();
			Upsite.Carousel();
			Upsite.Lightbox();
			Upsite.CounterUp();
			Upsite.Parallax();
			Upsite.ImgHover();
			Upsite.Isotope();
			Upsite.Form();
			Upsite.Scrollup();
			
			$(window).on('load', function() {
				Upsite.Preload();
			});
		},
		
		// Navigation menu affix
		AffixMenu: function() {
			$('body').waypoint(function() {
				$('#navigation').removeClass('affix');
			}, {
				offset: -49
			});
			
			$('body').waypoint(function() {
				$('#navigation').addClass('affix');
			}, {
				offset: -50
			});
		},
		
		// Add mobile navigation
		MobileMenu: function() {
			var navMenu	= '<nav id="navigation_mobile">';
			navMenu		+= '<div class="nav-menu-links">';
			navMenu		+= '<ul>';
			navMenu		+= $('#navigation .nav').html();
			navMenu		+= '</ul>';
			navMenu		+= '</div>';
			navMenu		+= '<div class="nav-menu-button">';
			navMenu		+= '<button class="nav-menu-toggle"><i class="fa fa-navicon"></i></button>';
			navMenu		+= '</div>';
			navMenu		+= '</nav>';
			
			$('#header').before(navMenu);
			
			$('.nav-menu-toggle').on('click', function() {
				$(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300, function() {
					$(window).trigger('resize.px.parallax');
				});
			});
		},
		
		// Navigation menu scrollspy to anchor section
		ScrollSpy: function() {
			setTimeout(function() {
				$('body').scrollspy({
					target: '#navigation.scrollspy',
					offset: 71
				});
			}, 100);
		},
		
		// Smooth scrolling to anchor section
		SmoothScroll: function() {
			$('a.smooth-scroll').on('click', function(event) {
				var $anchor		= $(this);
				var offsetTop	= '';
				
				if (window.Response.band(768)) {
					offsetTop = parseInt($($anchor.attr('href')).offset().top - 70, 0);
				} else {
					offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
				}
				
				$('html, body').stop().animate({
					scrollTop: offsetTop
				}, 1500,'easeInOutExpo');
				
				event.preventDefault();
			});
		},
		
		// Responsive video size
		FitVids: function() {
			$('body').fitVids();
		},
		
		// Placeholder compatibility for IE8
		PlaceHolder: function() {
			$('input, textarea').placeholder();
		},
		
		// Preload function after images loaded
		Preload: function() {
			$('img.parallax-slider, img.sp-image').imgpreload({
				all: function() {
					$('img.parallax-slider, img.sp-image').addClass('loaded');
				}
			});
		},
		
		// Slider with SliderPro & Slick carousel
		Carousel: function() {
			// Header slider
			$('#header .slider-pro').sliderPro({
				width: 1920,
				height: 900,
				arrows: true,
				buttons: false,
				forceSize: 'fullWidth',
				slideDistance: 0,
				autoScaleLayers: false,
				breakpoints: {
					1820: {
						height: 950
					},
					1720: {
						height: 1000
					},
					1620: {
						height: 1050
					},
					1520: {
						height: 1100
					},
					1420: {
						height: 1150
					},
					1320: {
						height: 1200
					},
					1220: {
						height: 1250
					},
					1120: {
						height: 1300
					},
					1020: {
						height: 1350
					},
					920: {
						height: 1400
					},
					820: {
						height: 1450
					},
					720: {
						height: 1500
					},
					620: {
						height: 1600
					},
					520: {
						height: 1700
					},
					420: {
						height: 1800
					},
					320: {
						height: 1900
					}
				}
			});
			
			$('#header .slider-pro').on('gotoSlideComplete', function() {
				$(window).trigger('resize.px.parallax');
			});
			
			// Teams carousel
			$('.carousel-slider.teams-row').slick({
				slidesToShow: 5,
				speed: 300,
				draggable: false,
				responsive: [
					{
						breakpoint: 1440,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							draggable: true
						}
					},
					{
						breakpoint: 540,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			// Testimonials carousel
			$('.carousel-slider.affa-testimonials-carousel').slick({
				arrows: false,
				dots: true,
				fade: true,
				cssEase: 'linear',
				speed: 300,
				draggable: false,
				swipe: false
			});
			
			$('.carousel-slider.affa-testimonials-carousel .slick-dots > li').on('click', function() {
				$(this).parents('.testimonials-wrap').find('.affa-testimonials-avatars .avatar-item').removeClass('active');
				$(this).parents('.testimonials-wrap').find('.affa-testimonials-avatars .avatar-item-' + $(this).children('button').text()).addClass('active');
			});
			
			// General slider
			$('.carousel-slider.general-slider').slick({
				dots: true,
				speed: 300,
				adaptiveHeight: true,
				draggable: false,
				responsive: [{
					breakpoint: 768,
					settings: {
						draggable: true
					}
				}]
			});
			
			$('.carousel-slider.general-slider').on('afterChange', function() {
				$(window).trigger('resize.px.parallax');
			});
		},
		
		// Preview images popup gallery with Fancybox
		Lightbox: function() {
			$('.fancybox').fancybox({
				loop: false
			});
			
			$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
				openEffect: 'none',
				closeEffect: 'none',
				prevEffect: 'none',
				nextEffect: 'none',
				arrows: false,
				helpers: {
					media: {},
					buttons : {}
				}
			});
		},
		
		// Number counter ticker animation
		CounterUp: function() {
			$('.affa-counter > h4 > span, .affa-skill .skill-number > span').counterUp({
				delay: 10,
				time: 3000
			});
			
			$('.affa-skill .skill-bar .skill-bar-process').each(function() {
				$(this).css('width', 0);
			});
			
			$('.affa-skill .skill-bar').each(function() {
				$(this).waypoint(function() {
					var $elem = $(this).find('.skill-bar-process.in');
					
					$elem.animate({
						'width': $elem.html()
					}, 3000, 'easeOutBounce').removeClass('in');
				}, {
					offset: '100%'
				});
			});
		},
		
		// Background with parallax effect
		Parallax: function() {
			$(window).resize(function() {
				setTimeout(function() {
					$(window).trigger('resize.px.parallax');
				}, 100);
			});
		},
		
		// Image on hover animation effect
		ImgHover: function() {
			$('.img-overlay').each(function() {
				var $elem	= $(this);
				var height	= $elem.find('.overlay-masked-wrap').height();
				
				$elem.find('.overlay-masked-wrap').css('bottom', '-' + height + 'px');
			});
			
			$(window).resize(function() {
				$('.img-overlay').each(function() {
					var $elem	= $(this);
					var height	= $elem.find('.overlay-masked-wrap').height();
					
					$elem.find('.overlay-masked-wrap').css('bottom', '-' + height + 'px');
				});
			});
			
			$('.img-overlay').each(function() {
				$(this).hover(
					function() {
						var $elem = $(this);
						
						$elem.find('.overlay-masked-wrap').animate({
							bottom: '0px'
						}, 200);
					},
					function() {
						var $elem	= $(this);
						var height	= $elem.find('.overlay-masked-wrap').height();
						
						$elem.find('.overlay-masked-wrap').animate({
							bottom: '-' + height + 'px'
						}, 200);
					}
				);
			});
		},
		
		// Filter elements with jQuery Isotope
		Isotope: function() {
			var $filter		= $('.isotope-menu');
			var $container	= $('.isotope-row');
			
			// Initialize
			$(window).load(function() {
				$container.isotope({
					filter			 : '*',
					layoutMode		 : 'fitRows',
					animationOptions : {
						duration: 400
					}
				}).on('arrangeComplete', function() {
					$(window).trigger('resize.px.parallax');
				}).on('layoutComplete', function() {
					$(window).trigger('resize.px.parallax');
				});
			});
			
			// Trigger item lists filter when link clicked
			$filter.find('a').click(function() {
				var selector = $(this).attr('data-filter');
				$filter.find('a').removeClass('active');
				$(this).addClass('active');
				$container.isotope({
					filter			 : selector,
					animationOptions : {
						animationDuration : 400,
						queue : false
					}
				});
				
				return false;
			});
		},
		
		// Form submit function
		Form: function() {
			var pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
			
			// Checking form input when focus and keypress event
			$('.affa-form-contact input[type="text"], .affa-form-contact input[type="email"], .affa-form-contact textarea').on('focus keypress', function() {
				var $input = $(this);
				
				if ($input.hasClass('error')) {
					$input.removeClass('error');
				}
			});
			
			// Contact form when submit button clicked
			$('.affa-form-contact').submit(function() {
				var $form		= $(this);
				var submitData	= $form.serialize();
				var $name		= $form.find('input[name="name"]');
				var $email		= $form.find('input[name="email"]');
				var $subject	= $form.find('input[name="subject"]');
				var $message	= $form.find('textarea[name="message"]');
				var $submit		= $form.find('input[name="submit"]');
				var status		= true;
				
				if ($email.val() === '' || pattern.test($email.val()) === false) {
					$email.addClass('error');
					status = false;
				}
				if ($message.val() === '') {
					$message.addClass('error');
					status = false;
				}
				
				if (status) {
					$name.attr('disabled', 'disabled');
					$email.attr('disabled', 'disabled');
					$subject.attr('disabled', 'disabled');
					$message.attr('disabled', 'disabled');
					$submit.attr('disabled', 'disabled');
					
					$.ajax({
						type: 'POST',
						url: 'process-contact.php',
						data: submitData + '&action=add',
						dataType: 'html',
						success: function(msg) {
							if (parseInt(msg, 0) !== 0) {
								var msg_split = msg.split('|');
								if (msg_split[0] === 'success') {
									$name.val('').removeAttr('disabled').removeClass('error');
									$email.val('').removeAttr('disabled').removeClass('error');
									$subject.val('').removeAttr('disabled').removeClass('error');
									$message.val('').removeAttr('disabled').removeClass('error');
									$submit.removeAttr('disabled');
									$form.find('.submit-status').html('<div class="submit-status-text"><span class="success"><i class="fa fa-check-circle"></i> ' + msg_split[1] + '</span></div>').fadeIn(300).delay(3000).fadeOut(300);
								} else {
									$name.removeAttr('disabled').removeClass('error');
									$email.removeAttr('disabled').removeClass('error');
									$subject.removeAttr('disabled').removeClass('error');
									$message.removeAttr('disabled').removeClass('error');
									$submit.removeAttr('disabled').removeClass('error');
									$form.find('.submit-status').html('<div class="submit-status-text"><span class="error"><i class="fa fa-exclamation-circle"></i> ' + msg_split[1] + '</span></div>').fadeIn(300).delay(3000).fadeOut(300);
								}
							}
						}
					});
				}
				
				status = true;
				
				return false;
			});
		},
		
		// Back to top button function
		Scrollup: function() {
			var $scrollUp = $('.scrollup');
			var $header	  = $('#header');
			
			$('body').waypoint(function() {
				$scrollUp.removeClass('visible');
			}, {
				offset: -($header.height())
			});
			
			$('body').waypoint(function() {
				$scrollUp.addClass('visible');
			}, {
				offset: -($header.height() + 1)
			});
			
			$scrollUp.click(function() {
				$('html, body').stop().animate({
					scrollTop: 0
				}, 2000, 'easeInOutExpo');
				
				return false;
			});
		}
		
	};
	
	// Run the main function
	$(function() {
		Upsite.init();
	});
	
})(window.jQuery);

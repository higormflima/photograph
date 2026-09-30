$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
	items : 5, //10 items above 1000px browser width
	itemsDesktop : [1600,4], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,4], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option);
  	lazyLoad : true,
    navigation : false
  });


  jQuery('.nav > li > a').click(function(e){
		e.preventDefault();
		jQuery.scrollTo(jQuery(this).attr('href'), 400, { offset:-(jQuery('#top').height()), axis:'y' });
	});


/**
* Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
* Dual licensed under MIT and GPL.
* @author Ariel Flesler
* @version 1.4.6
*/
(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};var i=false;$(window).bind('scroll.scrollTo',function(){i=false});h.fn=$.fn.scrollTo=function(a,b,c){if(typeof b=='object'){c=b;b=0}if(typeof c=='function')c={onAfter:c};if(a=='max')a=9e9;c=$.extend({},h.defaults,c);var d=$(window),j=false,k=c.onAfter;if(a){var l=$this=this.eq(0);if(a.constructor==Number){var m=a}else if(a.constructor==String){var n=$(a);if(!n.length)return h;m=parseInt(n.offset().top)+c.offset}else if(a.constructor==jQuery){l=$this=a;m=a.offset().top+c.offset}c.onAfter=function(){j=false;if(k)k.apply(this,arguments)};if(c.limit){var o=$(window).height();var p=l.offset().top;if(p+o>Math.max($this.height(),$(document).height())&&$this.height()<o)m=$this.offset().top}d.bind('scroll.scrollTo',function(){if(this==window&&j)i=true});setTimeout(function(){if(i){h.window(a).scrollTo(a,b,c);return}j=true;d.animate({scrollTop:m},b,c.easing,function(){j=false})},1);}else{if(!b){c.onAfter()}}}return this};
 
});

// JavaScript Document
$(document).ready(function() {
  $("#owl-main").owlCarousel({
    autoPlay: 10000,
    items : 1,
    itemsDesktop : [2199, 1],
    itemsDesktopSmall : [979, 1],
    itemsTablet : [768, 1],
	pagination : false,
	slideSpeed: 1000,
	singleItem: true,
	autoHeight: true,
	afterMove: top_align,
  });
});

	function top_align() {
        $(window).scrollTop(0);
        console.log('move');
      }
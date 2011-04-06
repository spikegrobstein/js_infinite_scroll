$.fn.extend({ infiniteScroll: function() {
	var ele = $(this);
		
	function animate_step() {
		$(ele).find('.scroller_wrapper').animate({ top: -300 }, 2500, 'linear', function () {
	    $(ele).find('.scroller_wrapper img').first().detach().appendTo($(ele).find('.scroller_wrapper').css({top: 0}));
	    setTimeout(animate_step, 0);
	  });
	}
	
	$(ele).wrapInner('<div class="scroller_wrapper" />');
	
	animate_step();


	return $(ele);
}});


// doc ready
$(function() {
  $('#scroller').infiniteScroll();
});

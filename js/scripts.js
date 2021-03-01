$(".user-menu").click(function() {
  $(this).toggleClass("show");
});

// Nf,kbxrf
$('.data-expands').each(function(){
	$(this).click(function(){
		$(this).toggleClass('row-active');
		$(this).parent().find('.expandable').toggleClass('row-open');
	});
});
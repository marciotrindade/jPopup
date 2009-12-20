jQuery.fn.extend({
	popup: function(options) {
		var defaults = {
			name:'popup',
			width:680,
			height:460,
			scroll:'no',
			resize:'no'
		};
		options = $.extend({},defaults,options);
		return this.each(function(){
			if(!$(this).is("a")) return false;
			
			$(this).click(function(e) {
				e.preventDefault();
				var janela;
				var url = $(this).attr("href");
				var name = options.name;
				var width = options.width;
				var height = options.height;
				var top = (screen.availHeight - height) / 2;
				var left = (screen.availWidth - width) / 2;
				var scroll = options.scroll;
				var resize = options.resize;
				var pop = window.open (url, name, 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=' + scroll + ', resizable=' + resize + ', statusbar=no');
				pop.focus();
			});
		});
	}
});

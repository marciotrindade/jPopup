/*
 *	jquery.popUp 1.0 - 2008-04-25
 *	http://www.webtrin.net/popup
 *	Copyright (c) Marcio Trindade
 *	Licence: LGPL
 *	Use: http://jquery.com/ and http://jquery.com/plugins/project/metadata
 */
jQuery.fn.extend({
  popup: function(options) {
		return this.each(function(){
			if(!$(this).is("a")) return false;
			
			$(this).click(function(){
				$.metadata.setType("class");
				var janela;
				var url = $(this).attr("href");
				var name = options.name||'popup';
				var width = options.width||320;
				var height = options.height||280;
				var top = (screen.availHeight - height) / 2;
				var left = (screen.availWidth - width) / 2;
				var scroll = options.scroll||'no';
				var resize = options.resize||'no';
				var pop = window.open (url, name, 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=' + scroll + ', resizable=' +  resize + ', statusbar=no');
				pop.focus();
				return false;
			});
		});
	}
});
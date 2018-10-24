
	//防止页面后退
	history.pushState(null, null, document.URL);
 window.addEventListener('popstate', function () {
  		$('.bg').show();
		$('.tc').show();
		$('.ta').show();
   history.pushState(null, null, document.URL);
 });
 




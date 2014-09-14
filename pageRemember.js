function pageRemember(e){
	var pageRememberObject = new Object();

	window.onscroll = function (e) {
		localStorage.setItem('pageRemember', window.pageYOffset);
	};

	function scroll() {
		if (localStorage.getItem('pageRemember')) {
			window.scrollTo(0, parseInt(localStorage.getItem('pageRemember')));
		}
	}

	function remember(){
		window.onload = scroll;
	}

	function getPosition(){
		return localStorage.getItem('pageRemember');
	}

	pageRememberObject.getPosition = getPosition;
	pageRememberObject.remember = remember;

	return pageRememberObject;
}
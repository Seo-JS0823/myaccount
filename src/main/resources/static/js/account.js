document.addEventListener('DOMContentLoaded', () => {
	const logo = document.querySelector('[id=logo]');
	logo.addEventListener('click', () => {
		let nav = document.querySelector('[id=account-nav]');
		let a = document.querySelectorAll('[class=item-a]');
		const w = getComputedStyle(nav).width;
		
		if(w == '103px') {
			a.forEach( (el) => {
				setTimeout(() => {
					el.style.display = 'block';					
				}, 300);
			});
			nav.style.width = '300px';
		} else {
			a.forEach( (el) => {
				el.style.display = 'none';
			});
			nav.style.width = '103px';
		}
		
	});
});
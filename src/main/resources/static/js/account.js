document.addEventListener('DOMContentLoaded', () => {
	const logo = document.querySelector('[id=logo]');
	logo.addEventListener('click', (e) => {
		if(window.innerWidth > 850) {
			let nav = document.querySelector('[id=account-nav]');
			let a = document.querySelectorAll('[class=item-a]');
			const w = getComputedStyle(nav).width;
			
			if(w == '60px') {
				e.preventDefault();
				return false;
			}
			
			if(w == '103px') {
				a.forEach( (el) => {
					setTimeout(() => {
						el.style.display = '';					
					}, 300);
				});
				nav.style.width = '300px';
			} else {
				a.forEach( (el) => {
					el.style.display = 'none';
				});
				nav.style.width = '103px';
			}
		}
	});
	window.addEventListener('resize', () => {
		let nav = document.getElementById('account-nav');
		let a = document.querySelectorAll('.item-a');
		if (window.innerWidth <= 850) {
			nav.style.width = '';
		} else {
			a.forEach( (el) => {
				el.style.display = '';
			});
			nav.style.width = '300px';
		}
	});
});

/* 여기서부터 AJAX 코딩 */


































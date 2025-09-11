const user = document.querySelector('[id=userid]');
const password = document.querySelector('[id=password]');
const loginBtn = document.querySelector('[id=login]');
const form = document.querySelector('[id=login-form]');

loginBtn.addEventListener('click', (event) => {
	let userV = user.value;
	let passV = password.value;
	
	if(userV != '' && passV != '') {
		user.name = 'userid';
		password.name = 'password';
		
		form.action = '/login';
		form.method = 'post';
		form.submit();
	} else {
		alert('아이디와 비밀번호를 입력하세요.');
		event.preventDefault();
		return false;
	}
	
});
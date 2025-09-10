const regEl = document.querySelector('[id=reg]');
const username = document.querySelector('[id=username]');
const userid = document.querySelector('[id=userid]');
const password = document.querySelector('[id=password]');
const labelEls = document.querySelectorAll('[class=right-input-label]');

/*
label[0] : username
label[1] : userid
label[2] : password
*/

// username 최종 정규식
const usernameReg = /^[a-zA-Z0-9가-힣]{2,10}$/g;

// userid 최종 정규식
const useridReg = /^[a-z0-9]{8,12}$/g;

// password 최종 정규식
const passwordReg = /^(?=.*[!,@,#,$,%,^,&,*])(?=.*[A-Z]).{8,20}$/g;

// reg1 : 특수문자 포함 정규식
const reg1 = /[!,@,#,$,%,^,&,*]/g;

// reg2 : 영문 대문자 포함 정규식
const reg2 = /[A-Z]/g;

// reg3 : 한글 포함 정규식
const reg3 = /[ㄱ-ㅎ가-힣]/;

let usernameValid = false;
let useridValid = false;
let passwordValid = false;

let valid = false;

const allValid = function() {
	if(usernameValid && useridValid && passwordValid) {
		regEl.innerHTML = '입력데이터가 유효합니다. JOIN 버튼을 눌러주세요.';
		clearInterval(lef);
		valid = true;
	} else {
		regEl.innerHTML = '';
		valid = false;
	}		
}

let lef = setInterval(() => {
	allValid();
}, 1000);


username.addEventListener('keyup', () => {
	let usernameLength = username.value.length;
	let usernameV = username.value;
	
	if(usernameReg.test(usernameV)) {
		labelEls[0].style.color = 'green';
		labelEls[0].innerHTML = '사용할 수 있는 닉네임입니다.';
		usernameValid = true;
	} else {
		if(reg1.test(usernameV)) {
			labelEls[0].style.color = 'red';
			labelEls[0].innerHTML = '특수문자를 포함할 수 없습니다.';
			usernameValid = false;
		}
	}
	
	if(usernameLength == 0) {
		usernameValid = false;
		labelEls[0].style.color = 'black';
		labelEls[0].innerHTML = '';		
		lef = setInterval(allValid(), 1000);
	}
	
});

userid.addEventListener('keyup', () => {
	let useridLength = userid.value.length;
	let useridV = userid.value;
	
	if(useridReg.test(userid.value)) {
		labelEls[1].style.color = 'green';
		labelEls[1].innerHTML = '사용할 수 있는 아이디입니다.';
		useridValid = true;
	} else {
		if(reg1.test(useridV)) {
			labelEls[1].style.color = 'red';
			labelEls[1].innerHTML = '아이디에 특수문자는 사용할 수 없습니다.';
			useridValid = false;
		}
		if(reg2.test(useridV)) {
			labelEls[1].style.color = 'red';
			labelEls[1].innerHTML = '아이디에 영문 대문자는 사용할 수 없습니다.';
			useridValid = false;
		}
		if(reg3.test(useridV)) {
			labelEls[1].style.color = 'red';
			labelEls[1].innerHTML = '아이디에 한글은 사용할 수 없습니다.';			
			useridValid = false;
		}
	}
	
	if(useridLength == 0) {
		useridValid = false;
		labelEls[1].style.color = 'black';
		labelEls[1].innerHTML = '';
		lef = setInterval(allValid(), 1000);
	}
});

password.addEventListener('keyup', () => {
	let passwordLength = password.value.length;
	let passwordV = password.value;
	
	if(passwordReg.test(passwordV)) {
		passwordValid = true;
		labelEls[2].style.color = 'green';
		labelEls[2].innerHTML = '사용할 수 있는 비밀번호입니다.';
	}
	
	if(passwordLength == 0) {
		passwordValid = false;
		labelEls[2].style.color = 'black';
		labelEls[2].innerHTML = '';
		lef = setInterval(allValid(), 1000);
	}
});

const joinBtn = document.querySelector('[id=join]');

joinBtn.addEventListener('click', (event) => {
	let formEl = document.querySelector('[id=form]');
	
	if(valid) {
		username.name = 'username';
		userid.name = 'userid';
		password.name = 'password';
		
		formEl.action = '/login';
		formEl.method = 'post';
		formEl.submit();
	} else {
		alert('모든 입력란을 입력하세요.');
		event.preventDefault();
		return false;
	}
});

const backBtn = document.querySelector('[id=back]');

backBtn.addEventListener('click', (event) => {
	let formEl = document.querySelector('[id=form]');
	
	event.preventDefault();
	
	username.value = '';
	userid.value = '';
	password.value = '';
	
	formEl.action = '/';
	formEl.method = 'get';
	formEl.submit();
});

















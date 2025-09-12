const createForm = document.querySelectorAll('[id=create]');
const dashboard = document.querySelector('[id=dashboard]');

/*
div 태그를 만드는 함수임
파라미터는 className을 설정함.
*/
const divTag = function(className) {
	let div = document.createElement('div');
	if(className != null) {
		div.className = className;		
	}
	return div;
}

/*
input 태그를 만드는 함수임
*/
const inputTag = function(className, type) {
	let input = document.createElement('input');
	if(className != null) {
		input.className = className;		
	}
	if(type != null) {
		input.type = type;
	}
	
	return input;
}

/*
select 태그 만드는 함수
json 배열을 받아서 option을 만듬
*/
const selectTag = function(className) {
	let select = document.createElement('select');
	if(className != null) {
		select.className = className;
		select.name = 'category_id';
	}
	fetch('/categoryList')
		.then(response => {
			if(!response.ok) {
				throw new Error('네트워크 오류');
			}
			return response.json();
		})
		.then(data => {
			data.forEach(el => {
				let option = document.createElement('option');
				option.innerHTML = el.cate_name;
				option.value = el.category_id;
				select.appendChild(option);
			});
		})
	return select;
}

/*

*/
const buttonTag = function(className) {
	let button = document.createElement('button');
	if(className != null) {
		button.className = className;
	}
	return button;
}

const createFunc = function() {
	let url = createForm[0].href;
	
	/* HTML 초기화 */
	dashboard.innerHTML = '';
	
	/*
	id : dashboard의 className 변경
	css 는 css 파일안에서 하기 위함
	*/
	dashboard.className = 'create-container';
	
	/* 인풋 공장 */
	let input1 = inputTag('create-in', 'text');
	let input2 = inputTag('create-in', 'text');
	let input3 = inputTag('create-in', 'text');
	/* 디브 박스 공장 */
	let div1 = divTag('create-box');
	let div2 = divTag('create-box');
	/* 셀렉트 공장 */
	let select1 = selectTag('create-in');
	/* 디브 텍스트 공장 */
	let	divT0 = divTag('create-text');
		divT0.innerHTML = '가계부 등록';
	let	divT1 = divTag('create-text');
		divT1.innerHTML = '금액 입력';
	let	divT2 = divTag('create-text');
		divT2.innerHTML = '카테고리 선택';
	let	divT3 = divTag('create-text');
		divT3.innerHTML = '내용 입력';
	/* 버튼 공장 */
	let	btn1 = buttonTag('create-btn');
		btn1.innerHTML = '등록하기';
	/* Inner Div 공장 */	
	let	divI1 = divTag('create-btn-box');
		divI1.appendChild(btn1);
	/* div2 조립 공장 */
	div2.appendChild(divT0);
	div2.appendChild(divT1);
	div2.appendChild(input1);
	div2.appendChild(divT2);
	div2.appendChild(select1);
	div2.appendChild(divT3);
	div2.appendChild(input3);
	div2.appendChild(divI1);
	
	
	
	/* 메인 영역 */
	dashboard.appendChild(div1);
	dashboard.appendChild(div2);
};

createForm.forEach( (el) => {
	el.addEventListener('click', (event) => {
		event.preventDefault();
		
		/* AJAX 코딩 : fetch 부분 : 함수로 따로 빼서 작성 */
		
		
		/*
		fetch로 받아온 데이터를
		createFunc() 파라미터로 넣어서?
		div 그림 그리기...
		 */
		createFunc();
		
	});	
});
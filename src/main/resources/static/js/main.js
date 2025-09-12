const main = document.querySelectorAll('[id=main]');

const pTag = function(text) {
	let p = document.createElement('p');
	if(text != null) {
		p.innerHTML = text;
	}
	return p;
}

main.forEach((el) => {
	el.addEventListener('click', (el) => {
		// HTML 초기화
		dashboard.innerHTML = '';
		dashboard.className = 'account-container';
		
		// account-box 2개 먼저 생성
		let box1 = divTag('account-box');
		let box2 = divTag('account-box');
		
		// box1 => account-box-g 3개
		let boxg1 = divTag('account-box-g');
		let boxg2 = divTag('account-box-g');
		let boxg3 = divTag('account-box-g');
		
		// donut 만들기
		let donut1 = divTag('donut');
		let donut2 = divTag('donut');
		let donut3 = divTag('donut');
		let donut4 = divTag('donut');
		
		// donut-label 만들기
		let donutT1 = divTag('donut-label');
		donutT1.innerHTML = '1위 카테고리';
		donut1.appendChild(donutT1);
		
		let donutT2 = divTag('donut-label');
		donutT2.innerHTML = '1위 카테고리';
		donut2.appendChild(donutT2);
		
		let donutT3 = divTag('donut-label');
		donutT3.innerHTML = '1위 카테고리';
		donut3.appendChild(donutT3);
		
		let donutT4 = divTag('donut-label');
		donutT4.innerHTML = '1위 카테고리';
		donut4.appendChild(donutT4);
		
		// boxg1,2,3 에 chart 2개씩 넣기
		let chart1 = divTag('chart');
		chart1.appendChild(donut1);
		let p1 = pTag('이번달 지출 통계');
		chart1.appendChild(p1);
		
		let chart2 = divTag('chart');
		chart2.innerHTML = '지출 내역 리스트';
		boxg1.appendChild(chart1);
		boxg1.appendChild(chart2);
		
		let chart3 = divTag('chart');
		chart3.appendChild(donut2);
		let p2 = pTag('이번달 수입 통계');
		chart3.appendChild(p2);
		
		let chart4 = divTag('chart');
		chart4.innerHTML = '수입 내역 리스트';
		boxg2.appendChild(chart3);
		boxg2.appendChild(chart4);
		
		let chart5 = divTag('chart');
		chart5.appendChild(donut3);
		let p3 = pTag('전월 수입 통계');
		chart5.appendChild(p3);
		
		let chart6 = divTag('chart');
		chart6.appendChild(donut4);
		let p4 = pTag('전월 지출 통계');
		chart6.appendChild(p4);
		
		boxg3.appendChild(chart5);
		boxg3.appendChild(chart6);
		
		
		// box1 에 넣기
		box1.appendChild(boxg1);
		box1.appendChild(boxg2);
		box1.appendChild(boxg3);
		
		
		// box2 => account-box-g 2개 넣기
		let boxg4 = divTag('account-box-g');
		let boxg5 = divTag('account-box-g');
		
		// box2 에 넣기
		box2.appendChild(boxg4);
		box2.appendChild(boxg5);
		
		// chart 넣기
		let chart7 = divTag('chart');
		chart7.innerHTML = '사이트 소개말?';
		let chart8 = divTag('chart');
		let chart9 = divTag('chart');
		
		boxg4.appendChild(chart7);
		boxg4.appendChild(chart8);
		
		boxg5.appendChild(chart9);
		chart9.innerHTML = '기본적인 유저 정보';
		
		dashboard.appendChild(box1);
		dashboard.appendChild(box2);
	});
});
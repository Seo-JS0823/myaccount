const TagFactory = {
	create(tag, className = '', text = '') {
		const makeTag = document.createElement(tag);
		if(className) makeTag.className = className;
		if(text) makeTag.innerHTML = text;
		return makeTag;
	},
	createOption(tag, className = '', data = []) {
		const makeTag = document.createElement(tag);
		if(className) makeTag.className = className;
		if(data.length > 0) {
			data.forEach((el) => {
				let option = document.createElement('option');
				option.innerHTML = el.content;
				option.value = el.value;
				makeTag.appendChild(option);
			});
		}
		return makeTag;
	},
	div(className = '', text = '') {
		return this.create('div', className, text);
	},
	p(className = '', text = '') {
		return this.create('p', className, text);
	},
	select(className = '', options = []) {
		return this.createOption('select', className, options);	
	},
	a(className = '', text = '', href = '') {
		let aTag = this.create('a', className, text);
		if(href) aTag.href = href;
		return aTag;
	}
}

const dashboardInit = {
	init(className = '') {
		const dashboard = document.querySelector('[id=dashboard]');
		if(dashboard != null) {
			dashboard.innerHTML = '';
		}
		if(className) {
			dashboard.className = className;
		}
		return dashboard;
	}
}

/*
도넛 제이슨 데이터
one   : 지출 1위 카테고리
two   : 지출 2위 카테고리
three : 지출 3위 카테고리
four  : 지출 4위 카테고리
oneRatio   : 지출 1위 비율
twoRatio   : 지출 2위 비율
threeRatio : 지출 3위 비율
fourRatio  : 지출 4위 비율
const donutTest = {
	one: '식비',
	two: '여행',
	three: '자기계발',
	four: '데이트',
	oneRatio: 47.5,
	twoRatio: 27.3,
	threeRatio: 14,
	fourRatio: 11.2
}
*/

const createDonut = {
	donut(data = {}) {
		const tag = TagFactory.div('donut');
		const label = TagFactory.div('donut-label', data.one);
		tag.appendChild(label);
		
		const oneRatio = data.oneRatio;
		const twoRatio = oneRatio + data.twoRatio;
		const threeRatio = twoRatio + data.threeRatio;
		const fourRatio = threeRatio + data.fourRatio;
		
		tag.style.backgroundImage = `
			conic-gradient(
				#007BFF 0% ${oneRatio}%,
				#FF00FF ${oneRatio}% ${twoRatio}%,
				#FFA500 ${twoRatio}% ${threeRatio}%,
				#CCC    ${threeRatio}% ${fourRatio}%
			)
		`;
		return tag;
	}
}

const createChart = {
	chart(donut, pTagText) {
		const tag = TagFactory.div('chart' , null);
		const pTag = TagFactory.p(null, pTagText);
		if(donut != null && pTag != null) {
			tag.appendChild(donut);
			tag.appendChild(pTag);
		}
		return tag;
	}
}



















$(function() {

	const test = {
		questions: ["Вопрос №1","Вопрос №2","Вопрос №3"],
		answers: [["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
		["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
		["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"]],
		trueAnswers: [["false","true","false"],
		["false","true","false"],
		["false","true","false"]]
	};

	localStorage.setItem("obj", JSON.stringify(test));

	let returnTest = JSON.parse(localStorage.getItem("obj"));

	let content = tmpl($('#test-template').html(), returnTest);

	$('body').append(content);

	let {questions, answers, trueAnswers} = returnTest;

	let checkTest = () => {

		let questionList = document.querySelectorAll('.question');

		let resault = [];

		for (let list of questionList) {
		
			let answerVariants = list.querySelectorAll('input');

			let checkedArr = [];

			for (let item of answerVariants) {
	
				checkedArr.push(item.checked);

				item.checked = false;
			}

			resault.push(checkedArr);
		}

		if (resault.join() != trueAnswers.join()) {

			$('#modal-content').text("Try again, Dude :(");

		} else

		$('#modal-content').text("You are right, Dude!");

		$('#overlay').fadeIn(400, () => {

			$('#modal-form') 
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200)
			;
		});
	};

	let closeModal = () => {

		$('#modal-form')
			.animate({opacity: 0, top: '45%'}, 200, () => {

				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			})
		;
	};

	$('.btn').on('click', checkTest);

	$('#modal-close, #overlay').on('click', closeModal);	
});

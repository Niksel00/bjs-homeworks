"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
	if (isNaN(+percent)) {
		alert('Параметр: "процентная ставка" содержит неправильное значение: ' + percent)
	}  else {
		percent = +percent;
	}
	if (isNaN(+contribution)) {
		alert('Параметр: "первоначальный взнос" содержит неправильное значение: ' + contribution)
	}  else {
		contribution = +contribution;
	}
	if (isNaN(+amount)) {
		alert('Параметр: "сумма кредита" содержит неправильное значение: ' + amount)
	}  else {
		amount = +amount;
	}
	let n = (11-new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) - 1)*12 + (date.getMonth() + 1);
	let s = amount - contribution;
	let p = percent/1200;
	let paymentPerMonth = s*(p+p/((Math.pow((1+p),n))-1));
	let totalAmount = (paymentPerMonth*n).toFixed(2);
	totalAmount = +totalAmount;
	return totalAmount;
}


function getGreeting(name) {
    // код для задачи №2 писать здесь
if (name === '' || name === undefined) {
		name = 'Аноним';
		console.log('Аноним');
	} else {
		console.log(name);
	}
	
	let greeting = `Привет, мир! Меня зовут ${name}.`;
	return greeting;
}
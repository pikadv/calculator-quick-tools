// Calculator
const calcDisplay = document.querySelector("#calc-display");
// Even or Odd
const evenNumberInput = document.querySelector("#even-number");
const evenResult = document.querySelector("#even-result");
// Find Square
const squareNumberInput = document.querySelector("#square-number");
const squareResult = document.querySelector("#square-result");
// Max Number
const maxNumberOneInput = document.querySelector("#number-one");
const maxNumberTwoInput = document.querySelector("#number-two");
const maxResult = document.querySelector("#max-result");

function addToDisplay(calcData) {
	calcDisplay.value += calcData;
}

function clearAll() {
	calcDisplay.value = "";
}

function calcPercentage() {
	let calcDisplayValue = calcDisplay.value;
	if (calcDisplayValue === "") {
		return;
	}

	let calcDisplayAnswer = eval(calcDisplayValue);

	calcDisplay.value = calcDisplayAnswer / 100;
}

function calcAnswer() {
	let calcDisplayValue = calcDisplay.value;
	if (calcDisplayValue === "") {
		return;
	}
	let calcDisplayAnswer = eval(calcDisplayValue);
	calcDisplay.value = calcDisplayAnswer;
}

function checkEvenNumber() {
	let numberInput = evenNumberInput.value;
	if (numberInput == "") {
		evenResult.textContent = "Enter a number";
	} else if (numberInput % 2 === 0) {
		evenResult.textContent = "Even";
		evenResult.style.color = "green";
	} else {
		evenResult.textContent = "Odd";
		evenResult.style.color = "red";
	}
}

function findSquare() {
	let squareInput = squareNumberInput.value;
	if (squareInput == "") {
		squareResult.textContent = "Enter a number";
	} else {
		squareResult.textContent = squareInput ** 2;
	}
}

function findMax() {
	let maxNumber;
	let numberOne = maxNumberOneInput.value;
	let numberTwo = maxNumberTwoInput.value;
	if (numberOne == "" || numberTwo == "") {
		maxNumber = "Enter both numbers properly";
	} else if (numberOne === numberTwo) {
		maxNumber = "Both numbers are equal";
	} else {
		if (numberOne > numberTwo) {
			maxNumber = numberOne;
		} else {
			maxNumber = numberTwo;
		}
	}
	maxResult.textContent = maxNumber;
}

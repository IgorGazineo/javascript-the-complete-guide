const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", inicialResult, enteredNumber);
  const logEntry = {
    operation: "ADD",
    prevResult: inicialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", inicialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", inicialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", inicialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

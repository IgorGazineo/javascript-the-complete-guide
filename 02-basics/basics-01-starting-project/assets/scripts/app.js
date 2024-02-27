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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", inicialResult, enteredNumber);
  writeToLog("ADD", inicialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", inicialResult, enteredNumber);
  writeToLog("SUBTRACT", inicialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", inicialResult, enteredNumber);
  writeToLog("MULTIPLY", inicialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", inicialResult, enteredNumber);
  writeToLog("DIVIDE", inicialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

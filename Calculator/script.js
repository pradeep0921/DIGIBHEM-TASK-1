let displayValue = '0';
let operand1 = '';
let operator = '';
let operand2 = '';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operand1 = '';
  operator = '';
  operand2 = '';
  updateDisplay();
}

function operate(op) {
  operand1 = displayValue;
  operator = op;
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  operand2 = displayValue;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      return;
  }
  displayValue = result.toString();
  updateDisplay();
}

class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(
  previousOperandElement,
  currentOperandElement
);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

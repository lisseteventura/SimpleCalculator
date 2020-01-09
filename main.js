const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator_keys");
const display = document.querySelector(".calculator_display");
const previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    /*if the key doesn't have data-action attribute, then
    it must be a number key */
    if (!action) {
      console.log("number key!");
      //lets us know if the previous key is a number
      calculator.dataset.previousKey = "number";
    }
    //if there is an attribute it must be a operatorkey
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      //custom attribute use to update display to clicked key
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
    }
    if (action === "clear") {
      console.log("clear key");
      calculator.dataset.previousKeyType = "clear";
    }
    if (action === "calculate") {
      console.log("equal key");
      calculator.dataset.previousKeyType = "calculate";
    }
    /* If the calculator shows 0, we want to replace the
    calculator’s display with the clicked key. */
    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
        //if it shows a non-zero number then we want to append the clicked key to the displayed num
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    /* When a user hits a number key after an operator key,the
    previous display should be replaced with the new number.
    The operator key should also release its pressed state. */
    Array.from(key.parentNode.children).forEach(k =>
      k.classList.remove("is-depressed")
    );
    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
    const calculate = (n1, operator, n2) => {
      let result = "";

      if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
      }
      return result;
    };
  }
});

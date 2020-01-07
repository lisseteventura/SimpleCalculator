const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator_keys");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    //if the key doesn't have data-action attribute, then
    //it must be a number key
    if (!action) {
      console.log("number key!");
    }
    //if there is an attribute it must be a operatorkey
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key");
    }
    if (action === "decimal") {
      console.log("decimal key");
    }
    if (action === "clear") {
      console.log("clear key");
    }
    if (action === "calculate") {
      console.log("equal key");
    }
  }
});

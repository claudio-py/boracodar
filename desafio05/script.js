const calculator = document.getElementById("calculator");
const display = document.getElementById("result");
let lastCalculation = "";

calculator.addEventListener("click", (event) => {
  const button = event.target;
  if (button.tagName !== "BUTTON") return;

  switch (button.innerText) {
    case "CE":
      display.innerText = "0";
      break;
    case "C":
      display.innerText = "0";
      lastCalculation = "";
      break;
    case "+/-":
      display.innerText = parseFloat(display.innerText) * -1;
      break;
    case "%":
      display.innerText = parseFloat(display.innerText) / 100;
      break;
    case ",":
      if (!display.innerText.includes(".")) {
        display.innerText += ".";
      }
      break;
    case "+":
    case "-":
    case "x":
    case "÷":
      const operator = button.innerText;
      const leftOperand = parseFloat(lastCalculation) || parseFloat(display.innerText);
      lastCalculation = `${leftOperand} ${operator}`;
      display.innerText = "0";
      break;
    case "=":
      const rightOperand = parseFloat(display.innerText);
      const [left, op] = lastCalculation.split(" ");
      let result;
      switch (op) {
        case "+":
          result = parseFloat(left) + rightOperand;
          break;
        case "-":
          result = parseFloat(left) - rightOperand;
          break;
        case "x":
          result = parseFloat(left) * rightOperand;
          break;
        case "÷":
          result = parseFloat(left) / rightOperand;
          break;
        default:
          return;
      }
      lastCalculation = "";
      display.innerText = result.toFixed(2);
      break;
    default:
      if (display.innerText === "0") {
        display.innerText = button.innerText;
      } else {
        display.innerText += button.innerText;
      }
      break;
  }
});


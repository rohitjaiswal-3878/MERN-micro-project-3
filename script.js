let keywordsArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "/",
  "+",
  "x",
  "-",
  ".",
];

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
let operators = ["+", "/", "-", "x"];

let keywordPress = document.getElementsByClassName("grid-item");
let consoleWin = document.querySelector(".console span");

Object.values(keywordPress).forEach((element) => {
  element.addEventListener("click", function (e) {
    let val = element.innerHTML;

    //conditions for entering the values.
    if (keywordsArray.includes(val)) {
      let expression = consoleWin.innerHTML;
      let lastVal = expression.substring(expression.length - 1);
      if (
        (consoleWin.innerHTML === "0" || consoleWin.innerHTML === "") &&
        !(val === "x" || val === "/")
      ) {
        consoleWin.innerHTML = val;
        console.log("1");
      } else if ((val === "+" || val === "-") && consoleWin.innerHTML === "0") {
        consoleWin.innerHTML = val;
        console.log("2");
      } else if (
        (lastVal === "+" || lastVal === "-") &&
        (val === "+" || val === "-")
      ) {
        consoleWin.innerHTML =
          expression.substring(0, expression.length - 1) + val;

        console.log("3");
      } else if (
        (lastVal === "x" || lastVal === "/") &&
        (val === "+" || val === "-")
      ) {
        consoleWin.innerHTML += "";
        console.log("4");
      } else if (numbers.includes(lastVal) && numbers.includes(val)) {
        if (lastVal === "." && val === ".") {
          consoleWin.innerHTML += "";
        } else {
          consoleWin.innerHTML += val;
        }
        console.log("5");
      } else if (
        numbers.includes(lastVal) &&
        lastVal !== "." &&
        operators.includes(val)
      ) {
        consoleWin.innerHTML += val;
        console.log("6");
      } else if (operators.includes(lastVal) && numbers.includes(val)) {
        consoleWin.innerHTML += val;
        console.log("7");
      }
    }
    //del butoon
    if (val === "DEL") {
      let newExp = consoleWin.innerHTML;
      newExp = newExp.slice(0, newExp.length - 1);
      consoleWin.innerHTML = newExp;
    }
    //reset button
    if (val === "RESET") {
      consoleWin.innerHTML = 0;
    }
    //answer(=) button
    if (val === "=") {
      let expression = consoleWin.innerHTML;
      let lastVal = expression.substring(expression.length - 1);
      if (operators.includes(lastVal)) {
        consoleWin.innerHTML += "";
      } else {
        let modified = "";
        for (let i = 0; i < expression.length; i++) {
          if (expression[i] === "x") {
            modified += "*";
          } else {
            modified += expression[i];
          }
        }
        let answer = eval(modified);
        if (Number.isInteger(answer)) {
          consoleWin.innerHTML = answer;
        } else {
          consoleWin.innerHTML = answer.toFixed(3);
        }
      }
    }
  });
});

let display = document.getElementById("display");

function appendNumber(num) {
  if (display.value=="Error"){
    clearDisplay()
  }
  display.value += num;
}

function appendOperator(operator) {
    if (display.value=="Error"){
        clearDisplay()
      }
  display.value += operator;
}

function clearDisplay() {

  display.value = "";
}

function calculate() {
  try {
    if (display.value == "") {
      throw error;
    }
    var x = eval(display.value);
    if (!Number.isInteger(x)){
        throw error;
    }
    display.value=x;

  } catch (err) {
    display.value = "Error";
  }
}

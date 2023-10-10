let display = document.getElementById("display");
let expression = '';

function addToDisplay(val) {
    let x  = 10;
    console.log(val);

    expression = expression + val;

    display.value = expression;
}

function calculate(){
    let result = eval(expression);
    display.value = result;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}
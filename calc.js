
// ==========================================
// 1. BASIC MATH FUNCTIONS
// ==========================================

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {

    if (b === 0) {
        return "Error!";
    }

    return a / b;
}


// ==========================================
// 2. OPERATE FUNCTION
// ==========================================

function operate(operator, firstNumber, secondNumber) {

    if (operator === "+") {

        return add(firstNumber, secondNumber);

    }

    else if (operator === "-") {

        return subtract(firstNumber, secondNumber);

    }

    else if (operator === "*") {

        return multiply(firstNumber, secondNumber);

    }

    else if (operator === "/") {

        return divide(firstNumber, secondNumber);

    }
}


// ==========================================
// 3. CALCULATOR VARIABLES
// ==========================================

let firstNumber = "";

let secondNumber = "";

let operator = "";

let result = "";


// Tells us whether the user is
// currently entering the second number

let waitingForSecondNumber = false;


// Tells us whether the calculator
// is currently showing a result

let resultDisplayed = false;


// ==========================================
// 4. GET HTML ELEMENTS
// ==========================================

const expressionDisplay = document.querySelector("#expression");

const resultDisplay = document.querySelector("#result");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");

const clearButton = document.querySelector("#clear");

const decimalButton = document.querySelector(".decimal");
const backspaceButton = document.querySelector("#backspace");

// ==========================================
// 5. UPDATE THE DISPLAY
// ==========================================

function updateDisplay() {

    let expression = "";

    
    // Add first number if it exists

    if (firstNumber !== "") {

        expression += firstNumber;

    }


    // Add operator if it exists

    if (operator !== "") {

        expression += " " + operator + " ";

    }


    // Add second number if it exists

    if (secondNumber !== "") {

        expression += secondNumber;

    }


    // Show the expression

    expressionDisplay.textContent = expression;


    // Show the result

    if (result !== "") {

        resultDisplay.textContent = result;

    }

    else {

        resultDisplay.textContent = "";

    }

}


// ==========================================
// 6. HANDLE NUMBER BUTTONS
// ==========================================

numberButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const number = button.textContent;


        // If a result is currently displayed,
        // start a completely new calculation.

        if (resultDisplayed) {

            firstNumber = number;

            secondNumber = "";

            operator = "";

            result = "";

            resultDisplayed = false;

            waitingForSecondNumber = false;

            updateDisplay();

            return;
        }


        // If we are entering the first number

        if (!waitingForSecondNumber) {

            firstNumber += number;

        }


        // If we are entering the second number

        else {

            secondNumber += number;

        }


        // Update the display

        updateDisplay();

    });

});


// ==========================================
// 7. HANDLE OPERATOR BUTTONS
// ==========================================

operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedOperator = button.dataset.operator;


        // If there is no first number,
        // don't do anything.

        if (firstNumber === "") {

            return;

        }


        // If an operator already exists
        // but the second number is empty,
        // replace the old operator.

        if (
            operator !== "" &&
            secondNumber === ""
        ) {

            operator = selectedOperator;

            updateDisplay();

            return;
        }


        // If we already have:
        //
        // first number
        // operator
        // second number
        //
        // calculate the previous operation.

        if (
            firstNumber !== "" &&
            operator !== "" &&
            secondNumber !== ""
        ) {

            result = operate(
                operator,
                Number(firstNumber),
                Number(secondNumber)
            );


            // Round long decimal results

            if (typeof result === "number") {

                result =
                    Math.round(result * 100000000) / 100000000;

            }


            // The result becomes
            // the next first number.

            firstNumber = String(result);

            secondNumber = "";

            operator = selectedOperator;


            // The result is no longer
            // a final result.

            resultDisplayed = false;

            waitingForSecondNumber = true;


            updateDisplay();

            return;
        }


        // Store the selected operator

        operator = selectedOperator;

        waitingForSecondNumber = true;

        updateDisplay();

    });

});


// ==========================================
// 8. HANDLE EQUALS BUTTON
// ==========================================

equalsButton.addEventListener("click", function() {

    // Make sure we have:
    //
    // first number
    // operator
    // second number

    if (
        firstNumber === "" ||
        operator === "" ||
        secondNumber === ""
    ) {

        return;

    }


    // Perform the calculation

    result = operate(
        operator,
        Number(firstNumber),
        Number(secondNumber)
    );


    // Round long decimal results

    if (typeof result === "number") {

        result =
            Math.round(result * 100000000) / 100000000;

    }


    // Show the equals sign
    // in the expression.

    expressionDisplay.textContent =
        firstNumber +
        " " +
        operator +
        " " +
        secondNumber +
        " =";


    // Show the result underneath

    resultDisplay.textContent = result;


    // Store result as first number

    firstNumber = String(result);


    // Clear these values

    secondNumber = "";

    operator = "";


    // Tell the calculator
    // that a result is being displayed.

    resultDisplayed = true;

    waitingForSecondNumber = false;

});


// ==========================================
// 9. HANDLE CLEAR BUTTON
// ==========================================

clearButton.addEventListener("click", function() {

    firstNumber = "";

    secondNumber = "";

    operator = "";

    result = "";

    waitingForSecondNumber = false;

    resultDisplayed = false;


    // Reset display

    expressionDisplay.textContent = "";

    resultDisplay.textContent = "0";

});


// ==========================================
// 10. HANDLE DECIMAL BUTTON
// ==========================================

decimalButton.addEventListener("click", function() {

    // If a result is displayed,
    // start a new calculation.

    if (resultDisplayed) {

        firstNumber = "0.";

        secondNumber = "";

        operator = "";

        result = "";

        resultDisplayed = false;

        waitingForSecondNumber = false;

        updateDisplay();

        return;
    }


    // Determine which number
    // the user is currently entering.

    let currentNumber;


    if (waitingForSecondNumber) {

        currentNumber = secondNumber;

    }

    else {

        currentNumber = firstNumber;

    }


    // Don't allow more than
    // one decimal point.

    if (currentNumber.includes(".")) {

        return;

    }


    // If no number exists yet,
    // start with 0.

    if (currentNumber === "") {

        currentNumber = "0.";

    }

    else {

        currentNumber += ".";

    }


    // Store the updated number

    if (waitingForSecondNumber) {

        secondNumber = currentNumber;

    }

    else {

        firstNumber = currentNumber;

    }


    // Update display

    updateDisplay();

});

// ==========================================
// 11. HANDLE BACKSPACE BUTTON
// ==========================================

backspaceButton.addEventListener("click", function() {

    // If a result is currently displayed,
    // backspace should not modify the result.

    if (resultDisplayed) {

        return;

    }


    // If we are entering the second number

    if (waitingForSecondNumber) {

        secondNumber = secondNumber.slice(0, -1);

    }


    // Otherwise, we are entering
    // the first number.

    else {

        firstNumber = firstNumber.slice(0, -1);

    }
    

    // Update the display

    updateDisplay();

});


// Get value from input button to display screen
const display = document.getElementById("display");


// Added function to append value to the calculator display
function appendToDisplay(input) {
    display.value += input;
}


// Function to clear screen. this replace the value on screen with empty string
function clearScreen() {
    display.value = ""
}


// function to calculate expression

function calculate() {
    let expression = display.value;

    // Handle cases like "20%50"
    expression = expression.replace(/(\d+)%(\d+)/g, (match, p1, p2) => {
        return `(${p1}/100)*${p2}`;
    });

    // Handle cases like (2^3) => (2**3)
    expression = expression.replace(/(\d+)\^(\d+)/g, (match, p1, p2) => {
        return `${p1}**${p2}`;
    });

    // Handle cases like multiplaction and division
    expression = expression.replace(/×/g, '*');
    expression = expression.replace(/÷/g, '/');

    try {
        display.value = eval(expression)
    }
    catch {
        display.value = "Error"
    }
}
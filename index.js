
// Get value from input button to display screen
const display = document.getElementById("display");

// Create an empty history array to store calculations
let showHistory = [];


// Added function to append value to the calculator display
function appendToDisplay(textarea) {
    display.value += textarea;
}


// Function to clear screen. this replace the value on screen with empty string
function clearScreen() {
    display.value = ""
    display.style.fontSize = "50px"; // Reset font size
    display.style.overflowY = "hidden"; // Reset overflow
}

// Function to backspace. 

function backSpace() {
    display.value = display.value.slice(0, -1);
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
        // store the result in the array if the calculation is successful and make sure the result is taking the firt position of the array
        showHistory.unshift(eval(expression));
    }
    catch {
        display.value = "Error"
    }
}


// Function to display history of calculations
function history() {
    showHistory = showHistory.slice(0, 5); // Limit to last 5 calculations
    display.value = ("History:\n" + showHistory.join("\n")); // Join the history array into a string with line breaks
    display.style.overflowY = "scroll";
    display.style.height = "100px";
    display.style.fontSize = "14px";
}
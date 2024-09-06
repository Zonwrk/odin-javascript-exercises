const fibonacci = function(index) {
    // If it is a string, convert to number
    let lastNumberIndex = Number(index);

    if (lastNumberIndex === 0) {
        return 0;
    } else if (lastNumberIndex < 0) {
        return "OOPS";
    }

    // Starting the Fibonnaci array numbers, so the loop can continue adding them after this.
    let fibonacciArray = [0, 1];
    if (lastNumberIndex > 1) {
        for (let i = 1; i <= lastNumberIndex - 1; i++) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i]);          
        }
    }
    return fibonacciArray[lastNumberIndex];
};

// Do not edit below this line
module.exports = fibonacci;


// I calculate fibonacci numbers as far as needed until I get to the index of the input number.
// When the index of the last number added to array === input number, I stop the loop and return the last number
// Fibonnaci is to add last 2 numbers in the array and add that as the new number to array
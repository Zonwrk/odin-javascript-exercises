
const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2) 
        || typeof number1 !== "number" || typeof number2 !== "number" ) {
        return "ERROR";
    }

    let BiggerNumber = Math.max(number1, number2);
    let SmallerNumber = Math.min(number1, number2);

    let NumbersAdded = 0;
    for (let i = SmallerNumber; i <= BiggerNumber; i++) {
        NumbersAdded += i;       
    }

    return NumbersAdded;
};

// Do not edit below this line
module.exports = sumAll;

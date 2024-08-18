const reverseString = function(textToReverse) {
    let textArray = textToReverse.split("");
    console.log(textArray);
    let textFinal = '';
    for (let i = textArray.length - 1; i >= 0; i--) {
        textFinal += textArray[i];
    }
    console.log(textFinal);
    return textFinal;
};

// Do not edit below this line
module.exports = reverseString;

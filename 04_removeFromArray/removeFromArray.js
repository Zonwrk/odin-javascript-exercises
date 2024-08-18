/*
Write a function that removes any arguments from '...removeThese' rest parameter, from the inputArray.
*/
const removeFromArray = function(inputArray, ...removeThese) {
    let array = inputArray.filter(item => !removeThese.includes(item));

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

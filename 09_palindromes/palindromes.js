const palindromes = function (stringInput) {
    let stringLettersAndNumbers = stringInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let stringReverse = stringLettersAndNumbers.split('').reverse().join('');
    return stringLettersAndNumbers === stringReverse;
};

// Do not edit below this line
module.exports = palindromes;

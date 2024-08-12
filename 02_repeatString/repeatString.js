const repeatString = function(word, times) {
    let sentence = '';
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        sentence += word;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;

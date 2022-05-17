const reverseString = function(string) {
    let result = [];
    for (let i = string.length - 1; i >= 0; i--) {
        result.push(string[i]);
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;

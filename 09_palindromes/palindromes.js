function isAlphabet(char) {
    const code = char.charCodeAt(0);
    return ( (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0))
        || (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) );
}

const palindromes = function (string) {
    let low = 0;
    let high = string.length - 1;
    while (low < high) {
        if (isAlphabet(string[low])) {
            if (isAlphabet(string[high])) {
                if (string[low].toLowerCase() == string[high].toLowerCase()) {
                    low += 1;
                    high -= 1;
                } else {
                    return false;
                }
            } else {
                high -= 1;
            }
        } else {
            low += 1;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

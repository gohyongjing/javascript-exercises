function shift(char, amount) {
    
}

const caesar = function(string, shift) {
    shift = shift % 26;
    let codes = [];
    for (const char of string) {
        const code = char.charCodeAt(0);
        if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
            if (shift > 0) {
                codes.push((char.charCodeAt(0) + shift - 'a'.charCodeAt(0)) % 26 + 'a'.charCodeAt(0));
            } else {
                codes.push((char.charCodeAt(0) + shift) + (char.charCodeAt(0) + shift >= 'a'.charCodeAt(0) ? 0 : 26));
            }
        } else if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
            if (shift > 0) {
                codes.push((char.charCodeAt(0) + shift - 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0));
            } else {
                codes.push((char.charCodeAt(0) + shift) + (char.charCodeAt(0) + shift >= 'A'.charCodeAt(0) ? 0 : 26));
            }    
        } else {
            codes.push(char.charCodeAt(0));
        }
    }
    return codes.map(c => String.fromCharCode(c)).join("");
};

// Do not edit below this line
module.exports = caesar;

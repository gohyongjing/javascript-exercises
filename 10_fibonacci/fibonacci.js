const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) {
        return 'OOPS';
    }
    let result = 1;
    let next = 1;
    for (let i = 1; i < n; i++) {
        let temp = next;
        next = result + next;
        result = temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

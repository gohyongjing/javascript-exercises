function calcArithProgression(start, end) {
    return ((end - start + 1) / 2) * (start + end);
}

const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number' || start < 0 || end < 0) {
        return 'ERROR';
    }
    return start <= end ? calcArithProgression(start, end) : calcArithProgression(end, start);
};

// Do not edit below this line
module.exports = sumAll;

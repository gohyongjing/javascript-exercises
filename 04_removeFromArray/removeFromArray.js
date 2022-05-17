const removeFromArray = function (arr, ...toRemove) {
    let result = [];
    for (const item of arr) {
        let include = true;
        for (const unwanted of toRemove) {
            if (item === unwanted) {
                include = false;
                break;
            }
        }
        if (include) {
            result.push(item);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

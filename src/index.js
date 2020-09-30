
exports.min = function min (array) {
    let minNumberInArray = Math.min.apply(null, array);
    if (minNumberInArray == Infinity) {
        minNumberInArray = 0;
    }
    return minNumberInArray
}

exports.max = function max (array) {
    let maxNumberInArray = Math.max.apply(null, array);
    if (maxNumberInArray == -Infinity) {
        maxNumberInArray = 0;
    }
    return maxNumberInArray
}

exports.avg = function avg (array) {
    if (array == undefined) {
        return 0
    } else if (array.length == 0) {
        return 0
    }
    let sumArrayElement = 0;
    for (let i = 0; i < array.length; i++) {
        sumArrayElement += array[i];
    }
    return sumArrayElement / array.length
}


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
  return 0;
}

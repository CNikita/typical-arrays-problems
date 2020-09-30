
exports.min = function min (array) {
  return 0;
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

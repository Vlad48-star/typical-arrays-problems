
exports.min = function min (array) {
  if (!array || array.length == 0){
    return 0
  }
  // let min = array && array.length ? array[0] : 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] < min) {
  //       min = array[i];
  //     }
  //   }
    return Math.min(...array);
  }

exports.max = function max (array) {
  if (!array || array.length == 0){
    return 0
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!array || array.length == 0){
    return 0
  }
  let sum = array.reduce((a, b) => a + b) / array.length;
  return sum
}

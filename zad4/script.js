
const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

console.log(arrAvg([1, 5, 5, 5, 4, 3, 3, 2, 1]));
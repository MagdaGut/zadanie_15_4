
const average = (...args) => args.reduce((a,b) => a + b, 0) / args.length

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(average(...grades))
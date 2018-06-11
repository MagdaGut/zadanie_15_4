//const logAllArguments = (...args) => args.forEach(arg => console.log(arg));

const average = (...args) => args.reduce((a,b) => a + b, 0) / args.length

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

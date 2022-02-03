console.log("hello world")



const double = (num) => num * 2;

console.log(double(40))

// global variable --> process
// process
console.log(process.argv)
console.log(process.argv[2])

const [, , num1] = process.argv
console.log(double(num1))
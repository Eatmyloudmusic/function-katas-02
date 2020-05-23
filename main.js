const outputPage = document.querySelector(".outputPage")
const outputPagePow = document.querySelector(".outputPagePow")
const outputPageFact = document.querySelector(".outputPageFact")
const outputPageFibo = document.querySelector(".outputPageFibo")


// ADD FUNCTION ------>
function add(x, y){
    return x + y
}


// MULTIPLY FUNCTION -------->
function multiply(a, b) {
    let multiNum = 0
    for (let i = 0; i < a; i += 1 ) {
    multiNum +=b
}
    return multiNum
}
outputPage.innerHTML = multiply(5, 9) + " is the product of '5 x 9'!"


// POWER FUNCTION -------->
function power(a, b){
    let num = a
    let powerMan = 1
    for (let i = 0; i < b; i += 1 ) {
    powerMan = multiply(a, powerMan)
    num += powerMan
    }
return powerMan
}
outputPagePow.innerHTML = power(2, 8) + " is '2' to the '8th' power!"


// FACTORIAL FUNCTION -------->
function factorial(num) {
    if (num < 0) 
          return -1;
      
          else if (num == 0) 
        return 1;
      
      else {
          return (num * factorial(num - 1));
          
}
}
outputPageFact.innerHTML = factorial(5) + " is the factorial of '5'!"

// FIBONACCI FUNCTION -------->
// function fibo(num) {
//     if (num >= 0) 
//           return -1;
      
//           else if (num == 0) 
//         return 1;
      
//       else {
//           return (num * fibo(num + 1));
          
// }
// }
// outputPageFibo.innerHTML = fibo(5) + " is a Fibonacci, or whatever, of '5'!"


// // Kata 01 sum
// function sum(a,b){
//     return a + b
// }
// const three = sum(1,2) // 3

// // Kata 02 avg
// function avg(a,b,c){
//     return (a + b + c)/3 
// }
// const seven = avg(4,9,8)
// console.log(avg(4,9,8))

// // Kata 03 greaterThan
// function greaterThan(a,b){
//     return a > b
// }
// console.log(greaterThan(5,6)) //const=true

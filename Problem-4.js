/**
 * =?= FizzBuzz (1 to N);
 * loop through numbers form 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; if divisible by both, print "FizzBuzz";Otherwise print the number itself.
 * 
 */

//withot function:::

// let number = 30;
// for(let i =1; i<=number; i++){
//             // console.log('i==>',i);
//             if(i % 3 ===0 && i % 5 ===0){
//                         console.log('FizzBuzz');
//             }
//             else if(i % 3 === 0){
//                         console.log("Fizz")
//             }
//             else if(i % 5 ===0){
//                         console.log("Buzz")
//             }
//             else {
//                         console.log(i);
//             }
// }

//with function:::

function checkFizzBuzz(number){
            let result =[];
            for(let i =1; i<=number; i++){
            // console.log('i==>',i);
            if(i % 3 ===0 && i % 5 ===0){
                        console.log('FizzBuzz');
                        result.push('FizzBuzz')
            }
            else if(i % 3 === 0){
                        console.log("Fizz")
                        result.push('Fizz')
            }
            else if(i % 5 ===0){
                        console.log("Buzz")
                        result.push('Buzz')
            }
            else {
                        console.log(i);
                        result.push(i);
            }
}return result;
}
let FizzOrBuzz = checkFizzBuzz(15);
console.log(FizzOrBuzz);
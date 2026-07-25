/**
 * =?= Factorial of a number ; jodi bole "5!" ekhane "!" ta holo factorial. mane holo 5 porjonto sob sonkhar gun korte hobe amader.
 * Like "5!=1*2*3*4*5="
 */

//Without function :::
//5!:
// let number = 5
// let sum=1;
// for(let i=1; i<=number; i++){
//             sum=sum*i;
//             console.log('Number==>', i);
            
// }
// console.log(sum);

//with function:::
let sum=1;
function factorial(number){
            for(let i=1; i<=number; i++){
                        console.log('Number==>',i);
                        sum=sum*i;
            }
            return sum;
}

let factorialOfSix=factorial(6);
console.log(factorialOfSix);
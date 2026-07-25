/**
 * =?=Sum of a range of number like (1 to N);
 * 
 */
//without function:::

// let number = 7;
// let sum= 0;
// for(let i=1; i<=7; i++){
//            sum = sum+i;  
//             console.log('i-->',i)
// }
// console.log('Sum of those numers==>', sum);

//-----------------------------------------------------

//with function:::

function sumNumberRange(number){
            let sum= 0;
            for(let i=1; i<=number; i++){
                        sum=sum+i
                        console.log('NUMBER==>',i);
            }return sum;
}

console.log(sumNumberRange(11));
/**
 * return all even number and then do their sum
 */
//withoout function:
let array = [10,12,50,150,7,11,23,9];
// let evenNumbers = [];

// for (let i=0; i<array.length; i++){
//             if(array[i]%2 === 0){
//             //       console.log(array[i])     
//                   evenNumbers.push(array[i])
//             }
// }
// console.log(evenNumbers)
// let sum=0;
// for(let key of evenNumbers){
// sum += key
// }

// console.log(sum)


//with function:::::::::::::
function getEvenNumbers(array){
           let evenNumbers =[];
            for (let i=0; i<array.length; i++){
            if(array[i]%2 === 0){
            //       console.log(array[i])     
                  evenNumbers.push(array[i])
            }
}return evenNumbers;
}

function getSum(evenNumbers){
 let sum=0;
for(let key of evenNumbers){
sum += key
}
return sum;
}

let evenNumber = getEvenNumbers(array)
console.log(evenNumber)
let sum =getSum(evenNumber);
console.log('Sum=>',sum)
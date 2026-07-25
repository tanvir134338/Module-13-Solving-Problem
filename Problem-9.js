/**
 * Find the largest number in the array
 */

//without function::::


// let array= [500, 120, 20, 5010, 1220];
// let largest = array[0];

// for(let i=1;i<array.length; i++){
//             let currentElement= array[i];
//             if(currentElement>largest){
//                         largest=currentElement;
//             }
//             console.log(currentElement)
// }

// console.log('Largent number=',largest)


//with function::::

function findLargenst(array){
            let largest = array[0];

for(let i=1;i<array.length; i++){
            let currentElement= array[i];
            if(currentElement > largest){
                        largest=currentElement;
            }
           
} return largest;
}
let finalLargenst= findLargenst([500, 120, 20, 5010, 1220]);
console.log(finalLargenst)


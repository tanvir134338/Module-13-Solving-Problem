/**
 * Find smallest number in the array 
 */

//without function:::::

// let array= [500, 120, 20, 5010, 1220];
// let small = array[0];

// for(let i=1;i<array.length; i++){
//             let currentElement= array[i];
//             if(currentElement<small){
//                         small=currentElement;
//             }
//             console.log(currentElement)
// }

// console.log('Smallest number=',small)

//with function::::::::::::

function findSmallest(array){
            let small = array[0];

for(let i=1;i<array.length; i++){
            let currentElement= array[i];
            if(currentElement < small){
                        small=currentElement;
            }
           
} return small;
}
let smallest= findSmallest([500, 120, 20, 5010, 1220, 3]);
console.log(smallest);

/**
 * Filter numbers greater than a value.
 * mane kono akta array te thaka number gula theke user er input deya number er uporer number gula amader ber kore out put dite hbe .
 */
//without function:::::::::::::::::::

// let array= [10,20,30,40,50,60,70,80,90,100];
// let value=55; //value given from user

// let filtered=[];

// for(let i = 0; i<array.length; i++){
//             if(array[i]>value){
//                         filtered.push(array[i]);
//             }
// }
// console.log(filtered)


//with function:::::::::::::::::
function getFilteredValue(Array){
            let value=55; //value given from user

let filtered=[];

for(let i = 0; i<Array.length; i++){
            if(Array[i]>value){
                        filtered.push(Array[i]);
            }
}return filtered;
}
let final=getFilteredValue([10,20,30,40,50,60,70,80,90,100],50)
console.log('Filtered Values==>',final);
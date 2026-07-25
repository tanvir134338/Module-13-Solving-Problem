/**
 * Loop through an object's properties.
 */

let monitor ={
            color: "Black",
            brand: "Xiaomi",
            display: "IPS",
            Size: "22"
}
//using for in method::::::::::::::::



// for(let key in monitor){
//             console.log(key,":",monitor[key]);
// }






//using key method

let objKeys = Object.keys(monitor);
console.log(objKeys);

// for(let i=0; i<objKeys.length; i++){
//             let key =objKeys[i];
//             console.log(key,":",monitor[key]);
// }



// for off use kora jay abr key method e 
for(let key of objKeys){
            console.log(key,":",monitor[key]);
}
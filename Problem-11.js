/**
 * Sum and avarage an array. mane hosse array er proti ta element jog kore element sonkha diye vag korle parya jabe . mane ak kothay gor ber korte hobe
 * 
 * avarage= total/length ba element sonkha
 */

//without functio::::::::::::

// let array = [1,2,3,4];
// let sum=0;
// for(let i=0; i < array.length; i++){
//             console.log(array[i])
//             sum += array[i];
// }
// console.log('sum of all=',sum)

// let avarage= sum/array.length
// console.log('Avarage=',avarage)

// with function:::::::::::::

function forAv(array) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                        console.log(array[i])
                        sum += array[i];
            }
            console.log('sum of all=', sum)

            let avarage = sum / array.length
            return avarage;
}
let final= forAv([3,4,5,6,9])
console.log('Avarage=', final)
/**
 * Count vowels in a string 
 * vowels= a, e ,i ,o ,u
 */
//without function:::

// let string ='MD Tanvir Ashan';
// let vowels= "aeiou"
// let count = 0;
// for(let i=0;i< string.length; i++ ){
//             let letterOfString= string[i];
            
//             console.log('Letter==>',i, letterOfString)
//             if(vowels.includes(letterOfString)){
//                         console.log('Vowel')
//             }
//             count++;
// }
// console.log("Amount of Vowels==>", count);


//with function:::

function amontOfVowel(name){
            let vowels= "aeiou"
let count = 0;
for(let i=0;i< name.length; i++ ){
            let letter= name[i];
            
            console.log('Letter==>',i, letter)
            if(vowels.includes(letter)){
                        console.log('Vowel')
                        count++;
            }
            
}
return count;
}
let amontOfVowels = amontOfVowel('Programming Hero');
console.log('Total Vowels==>', amontOfVowels)
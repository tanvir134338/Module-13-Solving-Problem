/**
 * reverse a string , we can revarse a arrray simply like 
 * let array = [1,2,3];
 * console.log(array.reverse).
 * kintu string ke reverse korar kono short hand nai tai amra onno way te korbo . To dekha jak kivabe amra korbo .
 */
//without function

// let string = "Programming";
// let reverseWord = "";
// for (let i= string.length -1; i>=0; i--){
//             let letter =string[i];
//             // console.log(i, letter)
//             reverseWord += letter
            
// }console.log(reverseWord)

//with function:::

function reversedWordOutput(word){
            let reverseWord = "";
for (let i= word.length -1; i>=0; i--){
            let letter =word[i];
            // console.log(i, letter)
            reverseWord += letter
            
}return reverseWord;
}
let reversedWordOut = reversedWordOutput('Dur e giye mor')
console.log(reversedWordOut);
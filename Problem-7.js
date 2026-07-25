/**
 * Check if a string is pelindromes or not , eita holo akta word ultaileo samne thake .like mom, ultaileo mom i hobe.
 */

//without function:::

// let str = 'dad'

// let reverseStr= ''
// for(let i =str.length-1; i>=0; i--){
//             let letter =str[i];
//             reverseStr = reverseStr+letter
            
// }
// console.log(reverseStr)

// if(str === reverseStr){
//             console.log('The string is Pelindrome')
// }
// else{
//             console.log('Not Pelindrome')
// }

//with function:::

function checkPelindrome(word){
            let feedback=[];
            let reverseStr= ''

for(let i =word.length-1; i>=0; i--){
            let letter =word[i];
            reverseStr +=letter
            
}

console.log(reverseStr);

if(word === reverseStr){
            console.log('The string is Pelindrome');
            feedback.push('The string is Pelindrome');
}
else{
            console.log('Not Pelindrome')
            feedback.push('Not Pelindrome')
            
}return feedback;
}

console.log(checkPelindrome('tanvir'))

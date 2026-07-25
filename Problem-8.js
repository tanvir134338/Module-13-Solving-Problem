/**
 * Count words in a sentence
 */

//wiithout function
// let str='We love our country'
// let words = str.split(' ');
// console.log(words.length)


//with function:::::

function countWords(sentence){
            let words = sentence.split(' ');
            return words.length
}
let countable= countWords('I am a tea lover')
console.log(countable)
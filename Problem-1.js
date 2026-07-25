/**
 * =?= Check if a number is Even or Odd?
 */
//Without function :::
//  let number = 10;

//  if(number % 2 === 0){
//             console.log('Even Number')
//  }
//  else{
//             console.log('Odd Number')
//  }

 //With Function:

 function checkEvenOdd(number){
            if(number % 2 === 0)
                        return 'Even Number'
            else{
                        return 'Odd Number'
            }
 }

 console.log(checkEvenOdd(111));
  console.log(checkEvenOdd(500));
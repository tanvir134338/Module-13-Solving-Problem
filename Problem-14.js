/**
 * You are given an object containing information about a student.
 * 
 * //---Task---//
 * Print all keys.
 * Print all values
 * Print each key value pair
 * 
 * Name: Tanvir 
 * Age: 24
 * University: DIU
 * Department: EEE
 * 
 * 
 * Count the total number of properties in the object.
 * check if the object contains a property named "Email".
 * 
 * //-----Expected input:
 * const student = {
 * name:"Tanvir",
 * age:24,
 * university:"DIU",
 * department: "EEE"
 * 
 * }
 * 
 * //----------Expected output:
 * name age university department
 * 
 * Tanvir 24 DIU EEE
 * 
 * name: Tanvir
 * age: 24
 * university: DIU
 * department: EEE
 * 
 * Toatl Properties: 4
 * Has Email: false
 */

const student = {
            name: "Tanvir",
            age: 24,
            university: "DIU",
            department: "EEE"
}

function objOperation(obj){

            for(let key in obj){
                        console.log(key);
            }

            for(let key in obj){
                        console.log(obj[key]);
            }

            for (let key in obj){
                        console.log(key+ ":"+ obj[key])
            }
            let objkeyCount = Object.keys(obj).length;
            console.log("Total Properties:", objkeyCount);

            let hasEmailProperty = obj.hasOwnProperty("Email");
            console.log("Has Email:", hasEmailProperty);
}
objOperation(student);
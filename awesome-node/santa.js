
//Rules

//1 - starts on ground floor - ground 0 - initializer

//2 - ( goes up one floor 

//3 - ) goes down one floor

//sequential - order matters 

//count that increases or decreases based 

//loop through this - maybe we make this an array or something that we can loop through and have a counter for 

//read the file and then make a for loop? 

//with the flooor loop we set the initializer to 0 and then if ( we increase the count by 1 if the other thing we decrease the count by 1 

//to string because strings able 

//loop over them  


console.time('santahelper')
const fs = require('fs')

const buffer = fs.readFileSync("santa.txt");

const fileContent = buffer.toString();

let currentFloor = 0; 
let currentCount = 0; 

for (let i=0; i < fileContent.length; i++) {
        if (fileContent[i] === "(") {
            currentFloor += 1;
            currentCount += 1;
            if (currentFloor < 0 && currentFloor > -5) {
                console.log(currentCount)
            }
        } else if (fileContent[i] === ")") {
            currentFloor -= 1;
            currentCount += 1;
            if (currentFloor < 0 && currentFloor > -5) {
                console.log(currentCount);
            }
        }

}

console.log(currentFloor);
console.timeEnd('santahelper')


// fs.readFile('./santa.txt', (err, data) => {
//     console.time('santachallenge')
//     let count = 0; 
//     data.toString;
//     if (err) {
//         console.log('errror');
//     } 
//     for (let i=0; i < data.length; i++) {
//         ")" ? count += 1 : count -= 1;
//     }
//     console.log(count);
//     console.timeEnd('santachallenge')
// })


// const file = fs.readFileSync('./santa.txt')
// console.log('Sync', file.toString());





//When does santa first enter the basement

//conditional that checks whether or not current floor is negative to find out when he first enters the basement





// const fs = require('fs')

// fs.readFile('./hello.txt', (err, data) => {
//     console.time('funchallenge')
//     if (err) {
//         console.log('errroorrrrr');
//     } 
//     console.log('Async', data.toString('utf-8'));
//     console.timeEnd('funchallenge')
// })

// const file = fs.readFileSync('./hello.txt')
// console.log('Sync', file.toString());



//APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err =>  {
//     if (err) {
//         console.log(err) 
//         }
//     })

//DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Inception')
// 
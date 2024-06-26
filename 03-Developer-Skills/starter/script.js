// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* PROBLEM
 We work for a company building a smart home
 thermometer. Our most recent task is this:
 "Given an array of temperatures of one day,
 calculate the temperature amplitude.
 Keep in mind that sometimes there 
 might be a sensor error."*/

//  const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17,15,9, 5];

 // 1) Understanding the pronlem
 // - What is temp amplitude? 
 // Difference between highest and lowest temp
 // - How to compute max and min temperatures?
 // - What's a sensor error? And what to do?

 // 2) Breaking up into sub-pronlems
// - How to ignore errors?
// - Find max value in temp array 
// - Find min value in temp array 
// - Substract min from max (amplitude) and return it

// const calcTempAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     };
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',

//         // C) FIX
//         // value: Number(prompt('Degrees celsius:'))
//         value: 10, 
//     };

//     // B) FIND 
//     console.log(measurement);

//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
    
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// A) IDENTIFY 
// console.log(measureKelvin());

// Using a debugger

// const calcTempAmplitudeBug = function( t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeBug);

// Coding Challange #1

/* Given a array of forecasted 
maximum temperatures,
the thermometer displays
a string with these 
temperatures. 

Example:[17, 21, 23] will print 
"... 17°C in 1 days...
21°C in 2 days ...
23°C in 3 days..."

Create a function 'printForecast'
which takes in an array 'arr' and
logs a string like the above 
to the console. 

Use the problem-solving framework:
Understand the problem and break it
up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4] */

// 1) Understanding the problem 
// - Array transformed to string, separated by ... 
// - What is the x days? Answer: index + 1

// 2) Breaking up into sub-problems 
// - Transform array into string 
// - Transform each element to string with °C
// - String needs to contain day (index + i)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log(str);
};
printForecast(data1);
// 2+3=5+4=9 
// [2,3,4]


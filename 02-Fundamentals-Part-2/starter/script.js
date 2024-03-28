//'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Jonas');
// };

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// Function declaration
/* function calcAge1(birthYeah) {
    return 2037 - birthYeah;
};

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
};

const age2 = calcAge1(1991);

// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 3;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

// const calcAge = function (birthYeah) { // not the same
//     return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     };

//     // return `${firstName} retires in ${retirement} years.`
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


/* CHALLENGE #1
Back to the two gymnastics teams, 
the Dolphins and the Koalas! 
There is a new gymnastics discipline,
 which works differently.

Each team competes 3 times,
and then the average of the 3 scores 
is calculated (so one average score per team).

A team only wins if it has at least double 
the average score of the other team. 
Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage 
to calculate the average of 3 scores. 
This function should have three parameters 
and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, 
and assign the value returned from the calcAverage function to them 
(you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average 
score of each team as parameters (avgDolphins and avgKoalas), 
and then logs the winner to the console, 
together with the victory points, 
according to the rule above. Example: Koalas win (30 vs. 13) 
(use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine 
the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, 
log No team wins... 
to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. 
Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. 
Koalas scored 23, 34, and 27. */

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    };
};

checkWinner(576, 111);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
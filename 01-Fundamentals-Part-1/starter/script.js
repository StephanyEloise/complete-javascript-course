// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun); // boolean 
// console.log(typeof true); // boolean 
// console.log(typeof 28); // number
// console.log(typeof 'Stephany Eloise'); // string
// // console.log(typeof Stephany Eloise); undefined 

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun); //string

// let year;
// console.log(year); // Empty Value = Undefined
// console.log(typeof year); // undefined

// year = 2024;
// console.log(typeof year); // number
// console.log(typeof null); // object = bug!! 

// let age = 29; // can change
// age = 30;

// if (age === 30) console.log('You just became an old lady :D');

// '30' == 30 true
// '30' === 30 false

// const birthYear = 1994; // cant change

// const ageStephanyEloise = 2034 - 1994;
// const ageAnaCaroline = 2034 - 1995;
// console.log(ageStephanyEloise, ageAnaCaroline); // 40 39
// console.log(ageStephanyEloise * 2, ageStephanyEloise / 10, 2 ** 3); // 80 4 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

// const firstName = 'Stephany';
// const lastName = 'Costa';
// console.log(firstName + ' Eloise A ' + lastName);

// let sum = 10 + 5;
// console.log(sum); // 15
// sum += 10; // sum = sum + 10 = 25
// console.log(sum); // 25
// sum *= 4; // sum = sum * 4 = 100
// sum++; // sum = sum + 1 = 101
// console.log(sum); // 101
// sum--; // sum = sum - 1 = 100 
// console.log(--sum); // 99 - Reading order 

// Comparison operators 
// console.log(ageStephanyEloise > ageAnaCaroline); // true
// console.log(ageStephanyEloise < ageAnaCaroline); // false
// >, <, >=, <=

// console.log(ageStephanyEloise >= 25); // true 
// console.log(ageStephanyEloise <= 25); // false

// const averageAge = (ageStephanyEloise + ageAnaCaroline) / 2;
// console.log(ageStephanyEloise, ageAnaCaroline, averageAge);
// 40 39 39.5

// const massMark = 78;
// const heightMark = 1.69
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHeigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHeigherBMI);
// 27.309968138370508 24.194608809993426 true

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
// };

// const job = 'nanny';

// const stephanyEloise = "I'm " + firstName + ' Eloise, a ' + (year - birthYear) + ' year old ' + job + '.';
// const stephanyEloise = `I'm ${firstName} Eloise, a ${year - birthYear} year old ${job}.`;
// console.log(stephanyEloise);
// I'm Stephany Eloise, a 30 year old nanny.

// console.log('String with \n\
// multiple \n\
// lines');  also bug! 

// console.log(`String
// multiple
// lines`) // `` Clean

// const sarahAge = 19;
// const isOldEnough = sarahAge >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - sarahAge;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// };

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// Type conversion
// const inputYear = '1991';
// (Number(inputYear), inputYear); number, string
// (inputYear + 18); 199118
// console.log(Number(inputYear) + 18); // 2009
// (String(23), 23); '23', 23

// Type coercion
// console.log('I am ' + 23 + ' years old');
// ('23' - '10' - 3); 10
// ('23' + '10' + 3); 23103 !
// ('23' / '2'); 11.5

// 5 falsy values; 0, '', undefined, null, NaN

// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// };

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// };

// const favourite = prompt("Whats your favourite number?");
// console.log(favourite); //typeof String

// if (favourite == 27) { // '27' == 27
//     console.log('Cool! 27 is an amazing number!');
// };

// const favourite = Number(prompt("Whats your favourite number?"));

// if (favourite === 27) {
//     console.log('Cool! 27 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 27 or 7')
// };

// if (favourite !== 27) console.log('Why not 27?');

const hasDriversLicense = true; // A 
const hasGoodVision = true; // B 

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); // false

const isTired = true;

if (hasDriversLicense && hasGoodVision & !isTired) {
    console.log('Sarah is able to drive! :D');
} else {
    console.log('Someone else should drive... :(');
};

/* CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, 
using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, 
and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, 
and print to the console:

"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. 
Koalas scored 88, 91, and 110. */

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
};

// Bonus 

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy.');
};

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday' 
        console.log('Plan couse structure.');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
};

// same thing happens

if (day === 'monday') {
    console.log('Plan couse structure.');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
} else if (day === 'friday') {
    console.log('Record videos.');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
};


const age = 23;

// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
};

console.log(drink2);

/* 
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. 
Create a variable called tip for this. 
It's not allowed to use an if...else statement 
(if it's easier for you, 
you can start with an if...else statement, 
and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, 
the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, 
and the total value 316.25.

Note: Use the values of the bill and 
tip variables to construct this string. 
Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉 */

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, 
and the total value ${bill + tip}.`);



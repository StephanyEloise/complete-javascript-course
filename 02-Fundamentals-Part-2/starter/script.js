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

/* const calcAverage = (a, b, c) => (a + b + c) / 3;
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

checkWinner(scoreDolphins, scoreKoalas); */

// const friends = ['Micheal', 'Steven', 'Peter'];
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); // Michael, [1] Steven, [2] Peter
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // Peter

// friends[2] = 'Jay'; // Peter -> Jay
// console.log(friends);

// Const = [still can change de element inside];

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);

// Exercise

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Micheal', 'Steven', 'Peter'];

// Add Elements
// friends.push('Jay'); // Last
// friends.unshift('Jhon'); // First
// console.log(friends);

// // Remove Elements
// friends.pop(); // Last
// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven')); // 1 
// console.log(friends.indexOf('Any Name')); // -1

// console.log(friends.includes('Steven')); // true 
// console.log(friends.includes('Any Name')); // false

// friends.push(23);
// console.log(friends.includes('23')); // false
// console.log(friends.includes(23)); // true

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// };

/* CHALLENGE #2
Steven wants you to improve his tip calculator, 
using the same rules as before — 
tip 15% of the bill if the bill value is 
between 50 and 300, and if the value is different, 
the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value 
as an input and returns the corresponding tip, 
calculated based on the rules above 
(you can check out the code from the 
first tip calculator challenge if you need to). 
Use the function type you like the most. 
Test the function using a bill value of 100.

And now let's use arrays! So, 
create an array called bills containing 
the test data below.

Create an array called tips containing 
the tip value for each bill, calculated 
from the function you created before.

BONUS: Create an array totals 
containing the total values, 
so the bill + tip.

TEST DATA: 125, 555, and 44.

*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

// const midna = {
//     firstName: 'Stephany Eloise',
//     lastName: 'A. Costa',
//     age: 2024 - 1994,
//     job: 'dev',
//     friends: ['Ana C.', 'Erikee', 'Dylan']
// };

// console.log(midna);
// console.log(midna.lastName);
// console.log(midna['lastName']);

// const nameKey = 'Name';
// console.log(midna['first' + nameKey]);
// console.log(midna['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Midna? Choose between firstName, lastName, age, job, and friends.');

// if (midna[interestedIn]) {
//     console.log(midna[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// };

// midna.location = 'Brazil';
// midna['instagram'] = '@midna.muse';
// console.log(midna);

// Challenge
// "Jonas has 3 friends, and his best friend is
// called Michael"

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     location: 'Portugal',
//     twitter: '@jonasschmedtmann',
//     hasDriversLicense: true,

// calcAge: function (birthYeah) {
//     return 2024 - birthYeah;
// }


// calcAge: function (birthYeah) {
//     console.log(this);
//     return 2024 - this.birthYeah;
//     }
// };

//     calcAge: function () {
//         this.age = 2024 - this.birthYeah;
//         return;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}.`);
// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

// console.log(jonas.getSummary());

/* CHALLENGE #3
Let's go back to Mark and John 
comparing their BMIs!

This time, let's use objects to 
implement the calculations! 
Remember: BMI = mass / (height * height) 
(mass in kg and height in meters).

Your tasks:

For each of them, 
create an object with properties 
for their full name, mass, and height 
(Mark Miller and John Smith). 
Name these objects as mark and john, 
and their properties exactly as fullName,
mass and height.

Create a calcBMI method on each object 
to calculate the BMI 
(the same method on both objects). 
Assign the BMI value to a property 
called bmi (lowercase), 
and also return it from the method.

Log to the console who has the higher BMI, 
together with the full name 
and the respective BMI. 
Example: "John Smith's BMI (28.3) 
is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg 
and is 1.69 m tall. 
John weighs 92 kg and is 1.95 m tall. */

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) 
//     is higher than ${john.fullName}'s BMI (${john.bmi}).`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) 
//     is higher than ${mark.fullName}'s BMI (${mark.bmi}).`)
// };


// for loop keeps running while
// condition is TRUE

// for (let rep = 1; rep <= 50; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

// for (let i = 0; i < jonas.length; i++) {

// Reading from jonas array
// console.log(jonas[i], typeof jonas[i]);

// Filling types array
// types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// };

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// };

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// };


// 0, 1, ..., 4
// 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ${exercise}`)
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Lifting weight repetition ${rep}!`)
//     };
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}!`);
//     rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...')
// };

/* CHALLENGE #4
Let's improve Steven's tip calculator 
even more, this time using loops!

Your tasks:

Create an array called bills 
containing all 10 test bill values.

Create empty arrays for the tips 
and the totals (tips and totals)

Use the calcTip function we wrote 
before (included in the starter code)
to calculate tips and total values 
(bill + tip) for every bill value 
in the bills array. Use a for loop 
to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 
37, 105, 10, 1100, 86, and 52. */

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440,
    37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};

console.log(bills, tips, totals);

/*BONUS:

Write a function calcAverage which 
takes an array called arr as an argument. 
This function calculates the average of 
all numbers in the given array. This is 
a DIFFICULT challenge 
(we haven't done this before)! 
Here is how to solve it if you feel like it:

First, you will need to add up all 
values in the array. To do the addition, 
start by creating a variable sum 
that starts at 0. 
Then loop over the array using 
a for loop. In each iteration, 
add the current value to the sum variable. 
This way, by the end of the loop, 
you have all values added together.

To calculate the average, 
divide the sum you calculated 
before by the length of the array 
(because that's the number of elements).

Call the function with the totals array. */

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

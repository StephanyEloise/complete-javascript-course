let javascriptIsFun = true;
console.log(typeof javascriptIsFun); // boolean 
console.log(typeof true); // boolean 
console.log(typeof 28); // number
console.log(typeof 'Stephany Eloise'); // string
// console.log(typeof Stephany Eloise); undefined 

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); //string

let year;
console.log(year); // Empty Value = Undefined
console.log(typeof year); // undefined

year = 2024;
console.log(typeof year); // number
console.log(typeof null); // object = bug!! 

let age = 29; // can change
age = 30;

const birthYear = 1994; // cant change

const ageStephanyEloise = 2034 - 1994;
const ageAnaCaroline = 2034 - 1995;
console.log(ageStephanyEloise, ageAnaCaroline); // 40 39
console.log(ageStephanyEloise * 2, ageStephanyEloise / 10, 2 ** 3); // 80 4 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'Stephany';
const lastName = 'Costa';
console.log(firstName + ' Eloise A ' + lastName);

let sum = 10 + 5;
console.log(sum); // 15
sum += 10; // sum = sum + 10 = 25
console.log(sum); // 25
sum *= 4; // sum = sum * 4 = 100
sum++; // sum = sum + 1 = 101
console.log(sum); // 101
sum--; // sum = sum - 1 = 100 
console.log(--sum); // 99 - Reading order 

// Comparison operators 
console.log(ageStephanyEloise > ageAnaCaroline); // true
console.log(ageStephanyEloise < ageAnaCaroline); // false
// >, <, >=, <=

console.log(ageStephanyEloise >= 25); // true 
console.log(ageStephanyEloise <= 25); // false

const averageAge = (ageStephanyEloise + ageAnaCaroline) / 2;
console.log(ageStephanyEloise, ageAnaCaroline, averageAge);
// 40 39 39.5

const massMark = 78;
const heightMark = 1.69
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHeigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHeigherBMI);
// 27.309968138370508 24.194608809993426 true

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
};

const job = 'nanny';

// const stephanyEloise = "I'm " + firstName + ' Eloise, a ' + (year - birthYear) + ' year old ' + job + '.';
const stephanyEloise = `I'm ${firstName} Eloise, a ${year - birthYear} year old ${job}.`;
console.log(stephanyEloise);
// I'm Stephany Eloise, a 30 year old nanny.

// console.log('String with \n\
// multiple \n\
// lines');  also bug! 

console.log(`String
multiple
lines`) // `` Clean

const sarahAge = 19;
const isOldEnough = sarahAge >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - sarahAge;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
};

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Type conversion
const inputYear = '1991';
// (Number(inputYear), inputYear); number, string
// (inputYear + 18); 199118
console.log(Number(inputYear) + 18); // 2009
// (String(23), 23); '23', 23

// Type coercion
console.log('I am ' + 23 + ' years old');
// ('23' - '10' - 3); 10
// ('23' + '10' + 3); 23103 !
// ('23' / '2'); 11.5





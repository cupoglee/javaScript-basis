  let js = "amazing";
console.log(22 + 13);
console.log(23);
let firstName = 'smruie'; //Declaring a variable
console.log(first); 

 console.log(false);
 let javaScriptThingy= true;
 console.log(javaScriptThingy);
 console.log(typeof true);
 console.log(typeof 23);
 console.log(typeof 'smruie');
 javaScriptThingy = 'yes!';
 console.log(javaScriptThingy);  //dynamic typing
 let shruk;
 console.log(shruk); //undefined
 console.log(typeof shruk); //undefined
 shruk=2005;
 console.log(typeof shruk);
 console.log(typeof null); 

let age=30;
age=31; //reassigning

const birthYear=1990;
// birthYear=2005; -----> const is immutable
//const yeah; //------> this is illegal
var hiIAmSmruie= 'programmer';
hiIAmSmruie='coder';  //Never write a variable like this without actuall declaring it.
console.log(hiIAmSmruie); 

//Math Operators
const shit= 2037;
const ageSmruie = shit - 2005;
const ageSarah = shit - 1991;
console.log(ageSmruie, ageSarah);

console.log(ageSmruie + 3, ageSmruie / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Smruthi';
const lastName = 'Kadagadkai';
console.log(firstName + " " + lastName);

//Assignment Operators
let x= 10+5;
x+=10; //x=x+10;
x*=4; // x=x*4;
x++; //x = x+1
console.log(x);

//Comparison Operators
console.log(ageSmruie > ageSarah); //boolean kind of result
console.log(ageSmruie >= 18); 

const shit= 2037;
const ageSmruie = shit - 2005;
const ageSarah = shit - 1991;
console.log(shit - 2005 >= shit - 1991);

console.log(25-10-5); // to check left-to-right precedence
let x,y;
x=y=25-10-5; // = executes from right to left
console.log(x, y);

console.log(ageSmruie, ageSarah);
let averageAge = (ageSmruie + ageSarah) / 2;
console.log(averageAge);

// Coding Challenge#1
let massMark = 78 , heightMark = 1.69;
let massJohn = 92, heightJohn = 1.95 ;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI is " + BMIMark);
console.log("John's BMI is " + BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI); 

const myName = 'Smruie';
const myAge = 18;
const myJob = 'Student';
console.log("I am " + myName + ", an " + myAge + " year old " + myJob); 

// Using String and Template literals
const newName = `My name is ${myName}, an ${myAge} year old ${myJob}.`; 
console.log(newName);

//Backticks can be used to write just regular strings without variables too.
console.log(`Hey! Welcome to JS course.`)

console.log("I want to \n\create strings \n\in multiple lines!"); // \n\ ---> new line 
const age = 19;
const isOldEnough = age>= 18;

if(isOldEnough)

    console.log('Sarah can start riding 🤣🤣');


else
{
    const yearsLeft = 18 - age;
    console.log(`Sarah shut and sit at home for another ${yearsLeft} years.`);
}

const yearOfBirth = 1991;
if(yearOfBirth<=2000)
{
    console.log('your birth century is 20th century.');
}
else
{
    console.log('Your birth century is 21st century.'); //Control statement
}

//Coding Challenge #2
if(BMIMark > BMIJohn)
{
    console.log("Mark's BMI is higher than John's.");
}
else
{
    console.log("John's BMI is higher than Mark's.");
}

if(BMIMark > BMIJohn)
{
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}).`);
}
else
{
    console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark}).`);
} 

//type conversion
const inputYear = '1991';
console.log(inputYear + 81); //Plain concatenation
console.log(Number(inputYear) + 81); //manual type conversion; now addition occurs

const inputName = 'Smruie';
console.log(Number(inputName)); //NaN error
const pak = 18;
console.log(String(pak)); //Manual type conversion

//Type coerion aka implicit type conversion
console.log('I am ' + 18 + 'Years old'); //Plain concatanation
//Addition behaves as plane concatanating operator if both string and numbers are involved.
//Subtraction operator involves actual calculation if numbers are given as string.

console.log('23'-'10'-3);
console.log('23'+'10'+3);


//5 falsy values - 0, undefined, '', null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(4));

const money = 1;
if(money) //Look at this like, if money 'exists' then the first case.
{
    console.log("You are rich."); 
}
else
{
    console.log("You gotta look for a naukri.");
}

let height; //If height value 'exists' then he has a height.
if(height)
{
    console.log("YAY! You have a height.");
}
else
{
    console.log("Your height is undefined.");
}









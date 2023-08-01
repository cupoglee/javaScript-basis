// Assignment 1 - Values and Variables 
const country="India";
const continent='asia';
let population= 1400000000;
console.log(country);
console.log(continent);
console.log(population);

//Assignment 2 - Data Types
let isIsland = 'Andaman and Nicobar';
//let isIsland = 'false';
let language;
console.log(isIsland); //Uncaught SyntaxError: Identifier 'isIsland' has already been declared 

//Assignment 3 - let, const and var
language = 'Hindi';
console.log(language);

//Assignment 4 - Basic Operators
//1.
let halfPop = population / 2;
console.log("People living in each half would be" +" "+halfPop);
//2.
population++;
console.log(population);
//3.
const finlandPopulation = 6000000;
console.log(population> finlandPopulation);
//4.
const countryPopulation = 33000000;
console.log(population < countryPopulation);

let description = country + " is in " + continent + ", and its " + population + " people speak "+ language + ".";
console.log(description);

//Assignment 5 - String and Template literals

description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

//Assignment 6 - Decision taking - if/else statements

const averagePopulation = countryPopulation - 33000000;
if (countryPopulation > averagePopulation)
{
    console.log(`${country}'s population is above average.`);
}
else{
    console.log(`${country}'s population is below average.`);
}

//Assignment 7 - Type conversion and type coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);



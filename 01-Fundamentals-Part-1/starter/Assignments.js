/*
//Parctice 1
alert('Values and Variables')

let country='China';
let continent='Hong kong';
let population='700 million'

console.log(country);
console.log(continent);
console.log(population);

//Parctice 2

alert('Data type')

let isIsland=true
let iscountry='Hong Kong';
let language="Chinese";
let ispopulation=7000000;

console.log(iscountry);     
console.log(typeof isIsland);
console.log(typeof iscountry);
console.log(typeof language);
console.log(typeof ispopulation);

let year;
console.log(year);
console.log(typeof year);
year=1991
console.log(typeof year);
console.log(typeof null)

alert('let,const and var')
let language_1='Chinese';
language_1='Franese';
console.log(language_1)

const language_2='Japanese';
console.log(language_2)

var language_3='English';
if (true){
    var language_3='Korean'
    console.log(language_3)
}
console.log(language_3)


alert('Basic operators')
const population_half=7000000/2;
console.log(population_half);

const each_half=population_half/2;
console.log(each_half)

new_ispopulation=ispopulation++;
console.log(new_ispopulation)

Finland_population=6000000;
console.log(ispopulation>Finland_population)

some_population=3300000
console.log(population<some_population)



//Strings and Template Literals
alert('Strings and Template Literals')
 who_line_in_Europe='Protugale';
people=1100000;
description=(`${who_line_in_Europe} is in Europe and its ${people} people speak portuguese `)
console.log(description)

if(ispopulation>3300000){
    console.log(`Portugal's population is above average`)
}else{
    console.log(`'Portugal's population is 22 million below average`)
}

//Type conversion
const inputYear='1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('James'));
console.log(typeof NaN);

console.log(String(23),23)
//Type concerion 
console.log(`I'm a `+23+` years old !`)
console.log('5'-4);
console.log('5'+4);

let n='1'+1;
n-=1;
console.log(n)

//Type conversion and concerion:
console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'<57);
console.log(5+6+'4'+9-4-2);

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jack')); //true                
console.log(Boolean({})); //true    
console.log(Boolean('')); //false

const money=0;
if(money){
    console.log(`Don't spend it all `)
}else{
    console.log(`Get a job now !`)
}


const age=18;
if (age===18);console.log('You just become an adult :D') //=== is equal value and equal type

// Equality Operators: == vs. ===
numNeighbours=Number(prompt(`How many neighbour countries does your country 
have?`))

if (numNeighbours===1){
    console.log('Only 1 border')
}else if (numNeighbours>1) {
    console.log('More than 1 border')
}else{
    console.log('No border')
}

//logical Operators
alert('locical Operators')
const uzo=true;
const kez=false;

console.log(uzo&&kez) // && is and
console.log(uzo||kez) // || is or
console.log(!uzo) // NO

let city_language='english';
let city_people=50;
const land=true;
if (city_language==='english'&&city_people<50&& !land){
    console.log(`You should live in ${country}`)
}else{
    console.log(`You shouldn't live in ${country}`)
}
*/
//The switch Statement
/*
alert('The switch Statement')
let language='english';
switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('Number 4')
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D')
}
//The Conditional (Ternary) Operator
alert('The Conditional (Ternary) Operator');
country_population=70;
country='Hong Kong'

console.log(`${country} is ${country_population>33? 'above average':' below average'}`)
//Function
function describeCountry(country,population,capitalCity){
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`)
}
describeCountry('Finland','6 million','Helsinki')

//Function Declarations vs. Expressions

function percentageOfWorld1(population){
    console.log((population/7900)*100)
}
percentageOfWorld1(1441)

//function expression
const percentageOfWorld2=function(population){
    return((population/7900)*100);
}
const u=percentageOfWorld2(1441);
console.log(u)

//arraw function
const percentageOfWorld3=population=>(population/7900)*100;
const k=percentageOfWorld3(1441)
console.log(k)

// Functions Calling Other Functions
const describePopulation=function(county,population){
    const percentage=percentageOfWorld2(population)
    const description = `${country} has ${population} million 
    people, which is about ${percentage}% of the world.`;
    console.log(description);

};

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
*/

const population=[10,1441,332,83]
if (population.length===4){
    console.log(population[0])
    console.log(population[1])
    console.log(population[2])
    console.log(population[3])
}
//basic array
neighbouring=['Norway', 'Sweden', 'Russia']
neighbouring.push('Utopia')
console.log(neighbouring)
neighbouring.pop()
console.log(neighbouring)

if(!neighbouring.includes("Germany")){
    console.log('Probably not a central European country :D')
}

console.log(neighbouring.indexOf('Sweden'))

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

alert('Challenge #1')
massMark=78;
heightMark=1.69;
massJohn=92;
heightJohn=1.92;
Mark_BMI=massMark/heightMark**2
John_BMI=massJohn/(heightJohn*heightJohn);
console.log(Mark_BMI,John_BMI);

markHigherBMI=Mark_BMI>John_BMI;
console.log(markHigherBMI);
let description='Portugal is in Europe, and its 11 million people speak portuguese'

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
alert('Challenge #2')
if(Mark_BMI>John_BMI){
    console.log(`Mark's BMI is higher than John's!`)
}else{
    console.log(`John's BMI is higher than Mark's!`)
}

console.log(`Mark's BMI (${Mark_BMI}) is higher than John's (${John_BMI})!`)




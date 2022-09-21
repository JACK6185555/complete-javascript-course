alert('Part1')

//Values and Variables
country='Japan'
countinent='Asia'
population=188
console.log(country,countinent,population)

//Data Type
isIsland=true
console.log(typeof country);
console.log(typeof countinent);
console.log(typeof population);
console.log(typeof isIsland);

//let const and var
const language='Japanese';

//Basic Operators
country_half=188/2
each_half=country_half/2
console.log(country_half,each_half)
population++
console.log(population)
console.log(population>60? true:false);

console.log(country_half>33? true:false);
description=`${country} is in ${countinent}, and its ${population} people speak ${language}`
console.log(description)

//String and Template Literals
description=`${country} is in ${countinent}, and its ${population} people speak ${language}`
console.log(description)
//Taking Decision:if else Statements
console.log(population>33? `${country} population is above average`:`${country} is${33-population} million below average`)

//Type Conversion and Coercion
console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'<57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Equality Operators:== vs===
numNeighbours=Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours===1){
    console.log('Only 1 border')
}else if(numNeighbours>1){
    console.log('More than 1 border in case')
}else if(numNeighbours===0){
    console.log('No borders')
}

//logical Opeators
Sarch_language='Japanese'
Sarch_populations=49
if (language===Sarch_language&&population===Sarch_language&&isIsland){
    console.log(`You should live in  ${country} :)`)
}else{
    console.log(`${country} does not meet your criteria`)
}

//The switch Statement
switch(language){
    case 'Chinese':
    case 'mandarin':
        console.log( 'MOST number of native speakers!');
        break
    case 'Japanese':
        console.log('2nd place in number of native speakers');
        break
    case 'English ':
        console.log('3rd place')
        break
    case 'hindi':
        console.log('Number 4');
        break
    default:
        console.log('for all other simply log Great language too :D')
}

//The Conditional Operator
japan_population=123.8
japan_population>33? console.log(`Japan's population is above average `):console.log(`Japan's population is below average`)

//END
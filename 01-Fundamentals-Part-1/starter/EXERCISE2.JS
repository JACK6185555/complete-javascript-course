alert('Part2')
//Function

function description(country,population,capitalCity){
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}
description('Japan',123.9,'Tokyo')
description('USA',338,'Washington, D.C.')
description('China',1441,'Beijing')

//Function Declarations vs. Expressions
function percentageOfWorld1(population){
    return(population/7900)*100
    
}
const percentageOfWorld2=function(population){
    return(population/7900)*100
}
const Japan=percentageOfWorld1(123.9);
const USA=percentageOfWorld1(338);
const China=percentageOfWorld1(1441);
console.log(Japan,USA,China);

//Arrow Function
const percentageOfWorld3=population=> console.log((population/7900)*100);
percentageOfWorld3(123.9);
percentageOfWorld3(338);
percentageOfWorld3(1441);


//Functions Calling Other Functions
const describePopulation=function(country,population){
    const sum=percentageOfWorld1(population);
    const k=`${country} has ${population} million people, which is about ${sum}% of the world.`;
    console.log(k);
}
describePopulation('japan',123.9)
describePopulation('USA',338)
describePopulation('China',1441)

// Introduction to Arrays
population=[10,1441,38,47]
population.length===4?  console.log(true):console.log(false);
console.log(population[0],population[1],population[2],population[3]);

//Basic Array Operatiions
neighbours=['China','Sorth Korea','Taiwan']

neighbours.push('Utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

if (neighbours!='Germany'){
    console.log('Probably not a central European country :D')
} 
console.log(neighbours.indexOf('Taiwan'))

//Introduction to Objects
myCountry={country:"Japan",capital:"Tokyo",language:"Japanese",population:123.9,neighbous:3,
     describe:function(){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours}neighbouring countries and a capital called ${this.capital}`)
     }
    }
console.log(myCountry)
// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours}neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population+=2;
console.log(myCountry.population);
myCountry.population-=2;
console.log(myCountry.population);

// Iteration: The for Loop
for(let voter=1;voter<50;voter++){
    console.log(voter)
}

//Looping Arrays, Breaking and Continuing
population=[10,1441,38,47]
percentages2=[];
for (let i=0;i<population.length;i++){
    const u=percentageOfWorld1(population[i])
    percentages2.push(u)
}
console.log(percentages2)

//Looping Backwards and Loops in Loops

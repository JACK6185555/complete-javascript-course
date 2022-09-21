alert('Challenge #1')
massMark=78;
heightMark=1.69;
massJohn=92;
heightJohn=1.95;
Mark_BMI=massMark/heightMark**2
John_BMI=massJohn/(heightJohn*heightJohn);
console.log(Mark_BMI,John_BMI);

markHigherBMI=Mark_BMI>John_BMI;
console.log(markHigherBMI);
let description='Portugal is in Europe, and its 11 million people speak portuguese'


alert('Challenge #2');
if(Mark_BMI>John_BMI){
    console.log(`Mark's BMI is higher than John's!`);
}else{
    console.log(`John's BMI is higher than Mark's!`);
}

console.log(`Mark's BMI (${Mark_BMI}) is higher than John's (${John_BMI})!`);

alert('Type Conversion and Coercion')




/*
//Challenge #3
Dolphins_score=(97+112+101)/3;
Koalas_score=(109+95+106)/3;

if (Dolphins_score>Koalas_score&&Dolphins_score>=100){
    console.log('Dolphins win the trophy🏆')
}else if(Koalas_score>Dolphins_score&&Koalas_score>=100){
    console.log('Koalas win the trophy🏆')
}else if(Dolphins_score===Koalas_score&&Dolphins_score>=100&&Koalas_score>=100){
    console.log('Both  win the trophy🙌')
}else{
    console.log('No one win 😥')
}

//challenge #4
alert('challenge #4')
const bill=275;
const tip=bill>=50&&bill<=300? bill*0.15:bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
*/


//challenge 1
const calcAverage=function(a,b,c){
    return((a+b+c)/3);
}
const  Dolphins_score=calcAverage(44,23,71);
const  Koalas_score=calcAverage(65,54,49);

function checkWin(Dolphins_score,Koalas_score){
    if (Dolphins_score>Koalas_score){
        console.log(`Dolphins_score🏆(${Dolphins_score} vs ${Koalas_score} ) `)
    }else if(Koalas_score>Dolphins_score){
        console.log(`Koalas win 🏆 (${Koalas_score} vs ${Dolphins_score})`)
    }else{
        console.log('No one win')
    }
}
checkWin(Dolphins_score,Koalas_score)
checkWin()
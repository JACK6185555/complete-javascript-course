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

let firstName= 'Jhon';
let lastName='Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2020-yearOfBirth;
}


console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and now he is ${calcAge(yearOfBirth)} years old.`);


// Arrow Function

const years = [1990,1965,1982,1937];

let ages6 = years.map(el=>2016-el);
console.log(ages6);

ages6 = years.map((el,index)=>`Age element ${index+1}: ${2016-el}.`);
console.log(ages6);

ages6 = years.map((el,index)=>{
    const now = new Date().getFullYear();
    const age = now-el;
    return `Age element ${index+1}: ${age}.`
});
console.log(ages6);
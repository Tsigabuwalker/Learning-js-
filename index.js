let name ="Tsigabu Seyoum";
console.log(name);
// reserved variable can not be as variables like if ,for , else etc
let interestRate = 0.3;
interestRate = 3;
console.log(interestRate);
// What makes js especial for the other languages is dynamic typing not static
let fam = "mosh";
console.log(typeof(fam));

let person = {
    name: "Abel",
    age: 23,
    cgpa: 3.5,
    department: "computer Science"
};
console.log(person);
console.log(person.name);
console.log(person.cgpa);
console.log(person.department);

let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
console.log(typeof(selectedColors));

//function in js
function greeting(place){
    console.log("Hello,I am Tsigabu, a Software Engineer at " + place )
};
greeting("Google");

function square(number){
    return number * number;

}
let numb = square(4);
console.log(numb);
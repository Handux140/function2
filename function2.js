console.log('hello');
console.log("John")
console.log('you can call me "Santy"')
console.log("go away, im coding")
console.log('I am sorry \npleaseforgive me')

//what is output display?

let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2; 

console.log(number1 + number2 - number3 * number4 / number5);
console.log(number1 + (number2 - number3) * number4 / number5);

let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;
console.log(conditionA && conditionB || conditionC && !conditionD);



let age = 9;
let result = (age > 17) ? "Adults" : (age >10) ? "Teenagers" : "Children";
console.log(result);

let numA = 176;
let numB = 103;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);

let numC = 1;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

let fullname = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, &{getTitle()}`;
}


let getTitle = () =>{
    return "B.Sc"

}

console.log(fullname("John","Dream","Myung"));


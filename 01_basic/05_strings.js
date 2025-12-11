const name="Ishan"
const repoCount=50

// console.log(name+repoCount+"Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('Ishan-Kumar');


// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString=gameName.substring(-8,4)//-8 bcome 0
console.log(newString)

const anotherString=gameName.slice(-12,4)
console.log(anotherString)

//.trim 

const url="https://ishan.com/ishan%20kumar"
console.log(url.replace('%20'," "))
console.log(url.includes('kumar'))

console.log(gameName.split('-'))

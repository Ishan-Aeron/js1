// array

const myArr=[0,1,2,3,4,5]

// console.log(myArr[0]);

//Array methods

// myArr.push(6);
// myArr.push(7);

// myArr.pop()

// myArr.unshift(9)//insert 9 in start
// myArr.shift()
// myArr.shift()//remove from start

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join() 0,1,2,3,4,5

// console.log(myArr)
// console.log(typeof newArr) string


console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr);

const myn2=myArr.splice(1,3)//cut from original array
console.log("C",myArr);
console.log(myn2)


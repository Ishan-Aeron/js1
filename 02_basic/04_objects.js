
//const tinderUser=new Object()//single ton
const tinderUser={}//non single ton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"spme@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ishan",
            lastname:"Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a",2:"b"}
const obj2={3: "c",4:"d"}

//const obj3={obj1,obj2}
const obj3=Object.assign(obj1,obj2)
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('is'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


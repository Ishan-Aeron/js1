// singleton 

//object literals
//Object.create
const mySym=Symbol("Key1")
const JsUser={
    "Full Name":'IshanKumar',//Cannot be access by . so use []
    [mySym]:"myKey1",//[] for symbol  [Symbol(Key1)]: 'myKey1 in output
    name:"Ishan",
    age:20,
    location:"Ladwa",
    email:"ishanaeron72@gmail.com",
    isLoggedIn:false,
    lastLoginDyas: ["Mondays","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser)//
// JsUser.email=""//stop propagation of changes no error

// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User");
}

// console.log(JsUser.greeting)//[Function (anonymous)]
// console.log(JsUser.greeting())//Hello JS User

JsUser.greetingTwo=function(){
    console.log(`Hello Js User , ${this.name}`)
}
JsUser.greetingTwo();

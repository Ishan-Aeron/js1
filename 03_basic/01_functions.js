function sayMyName(){
    console.log("Ishan")
}
//sayMyName // reference
//sayMyName() //execute

// function addTwoNumber(A,B){
//     return console.log(A+B);
// }
// addTwoNumber("Ishan"," Kumar")

function loginUserMessage(username){
    if(username===undefined){
        console.log("Enter Username");
        return `Error`
    }
    return `${username} just login`
}
console.log(loginUserMessage());
console.log(loginUserMessage("Ishan"));

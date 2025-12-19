//fetch('https://something.com').then().catch().finally()

const promiseOne= new Promise(function(resolve,reject){
    //Do an aync task
    //DB call, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})
 

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true//Math.random>=0.5?true:false;
        if(!error){
            console.log('No error');
            resolve({username:"Ishan",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true//Math.random>=0.5?true:false;
        if(!error){
            console.log('No error');
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try
    {const response=await promiseFive
    console.log(response);}
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();


// async function getALLUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(response.status);
//         const data = await response.json();
//         console.log(data);
//     } catch (e) {
//         console.error(e);
//     }
// }

// getALLUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
 response.json())
.then((data)=>{
    console.log(data);
})
.catch()

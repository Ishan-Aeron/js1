
(function chai(){
    console.log('DB Connected')
})(); //; is required iife doesnot when to end without ; error come for next 2 iifee

((name)=>{
    console.log(`DB connected Two ${name}`);
})('Ishan');
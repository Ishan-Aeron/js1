// let myName="Ishan         "
// String.prototype.truelength=function(){
//      this.trim().length
// }
// console.log(myName.truelength());


let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all`);
    
}
Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`);
    
}
// heroPower.hitesh();

myHeros.hitesh()
myHeros.heyHitesh()

const User={
    name:"Chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false,

}
const TASupport={
    makeAssignment:`JS assignment`,
    fullTIme: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUserName="Chai aur Code            "

String.prototype.trueLenght=function(){
    console.log(`${this}`);
    console.log(`True lenght is:${ this.trim().length}`);
}
anotherUserName.trueLenght();
"hitesh".trueLenght()

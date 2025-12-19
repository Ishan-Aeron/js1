const user={
    username:"Ishan",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }

}
//user.getUserDetails();



// console.log(user.username);
// // console.log(user["username"]);

// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    //return this //implicit return 
}
const userOne=new User("Ishan",12,true)
const userTwo=new User("Chai aur Code",8,false);//User("Chai aur Code",8,false); change in userOne
console.log(userOne.constructor);

// new 
// empty object create
// constructor called
// inject add to this
// return

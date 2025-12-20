function SetUserName(username){
/// colmplex
    this.username=username;
    console.log("Called");
}

function createUser(username,email,passsword){
    SetUserName.call(this,username)

    this.email=email;
    this.passsword=passsword
}

const chai =new createUser("chai","chai@fb.com","124")
console.log(chai);

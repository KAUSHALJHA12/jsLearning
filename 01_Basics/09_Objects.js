const JS_User = { name : "Kaushal", age : 21, location : "Pune", email : "kaushal@email.com"} //Object
console.log(JS_User.email);  // to acess
console.log(JS_User["email"]); //to access

JS_User.greeting = function(){
    console.log("hello JS User");

}

JS_User.greetingtwo = function() {
    console.log(`hello JS User, ${this.name}`);
}
console.log(JS_User.greeting());
console.log(JS_User.greetingtwo());


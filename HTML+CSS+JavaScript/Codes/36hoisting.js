//Hoisting-> Memory will get allocated before execution

sayHello(); //Hello (hoisted)
console.log(i); //Undefined (hoisted)

function sayHello(){
    console.log("Hello");
}

var i=10;

console.log(x); //error-> cannot acces 'x' before initialization
let x = 1;

sayWelcome(); //error (because hoisting has happened but the variable has been not initialized)
var sayWelcome = function(){
    console.log("WelCome");
}

//JS reads the above code as follows
sayWelcome();
var sayWelcome = undefined;

//But this code can run if we call sayWelcome after function definition
var sayWelcome = function(){
    console.log("WelCome");
}
sayWelcome();
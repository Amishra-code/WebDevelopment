//the scope is by default global
var name = 'Anjali';

function sayName(){
    var marks = 10;
    console.log(name);
}

sayName();
/*console.log(marks); //will generate an error */

var x=0;
//global scope
function first() {
    //Local scope #1
    var x = 1;
    console.log(x);
    function childOfFirst() { 
        var x = 2;
        console.log(x);
           //Local scope #2
    }

    childOfFirst();
}

first();

//Gloabl Scope
function second() { 
    //Local Scope #3
    console.log(x);
}
//Global Scope
second();

/*var keyword is associated with window objects*/
var variable1 = 10;
{
    var variable1=1;
    console.log(variable1); //1
}
console.log(variable1); //1

/*let and const keyword works well in block scope*/
let variable2 = 10;
{
    let variable2 = 1;
    console.log(variable2); //1
}
console.log(variable2); //10

//Lexiacal Scope
function Base(){
    var name = 'GrandFather';
    //likes is not accessible here
    function Derive(){
        //name is accessible here
        //likes is nlot accessible here
        function Child(){
            //Innermost level of the scope chain
            //name is also accessible her
            var likes = 'Coding';
        }

        Child();

    }

    Derive();

}

Base(); 


//==========================================

let foo = 'bar';
var bar = 'foo';
if(true){
    let foo = 'baz';
    var bar = 'foobar';
    console.log(foo); //baz
    console.log(bar);  //foobar
}
console.log(foo); //bar
console.log(bar);  //foobar

//==========================================

/*let foo = 'bar';
var bar = 'foo';
if(true){
    var foo = 'baz'; //error: 'foo' has already been declared (ILLEAGAL SHADOWING)
    var bar = 'foobar';
    console.log(foo); //baz
    console.log(bar);  //foobar
}
console.log(foo); //bar
console.log(bar);  //foobar*/

//===========================================
let eoo = 'bar';
var ear = 'foo';
if(true){
    let eoo = 'baz';
    var bar = 'foobar';
    console.log(foo); //baz
    console.log(ear);  //foobar
}
console.log(eoo); //bar
console.log(ear);  //foo

/*Note: const keyword is only read keyword and is initialized only once at the time of declaration*/
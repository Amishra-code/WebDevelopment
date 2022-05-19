/*let counter = {
    count: 0,
    increament: function(){
        counter.count++;
    }
}

counter.increament();
counter.increament();
counter.increament();
counter.increament();
console.log(counter); //count: 4
*/

//by factory function
/*let counter = createCounter();
let counter1 = createCounter();

function createCounter(){
    return { 
        count: 0,
        increament: function() { 
            counter.count++;
        }
    }
}

counter1.increament();
counter1.increament();
counter1.increament();
counter1.increament();
console.log(counter1); //0(because count refers to the object of counter)
*/

/*let counter = createCounter();
let counter1 = createCounter();

function createCounter(){
    return { 
        count: 0,
        increament: function() { 
            this.count++;
            //here this refers to  the current object
        }
    }
}

counter1.increament();
counter1.increament();
counter1.increament();
counter1.increament();
console.log(counter1); //count: 4
*/

var count = 0;
function increamentCounter(){
    count++;
    console.log(this); //window object
}

increamentCounter();
increamentCounter();
increamentCounter();
increamentCounter();
console.log(count); //4

function Car(name) {
    this.name = name;
    this.start = function() {
        console.log(this.name + " started");
        console.log(this); //Swift 
    }
}

let swift = new Car("swift");
swift.start();

/*Note : this keyword changes it's refrence accordingly. It points to the object literal if we have used the new keyword and it points to the window object if we do not have used the new keyword.*/

function Bike(name) {
    this.name = name; //this here is pointing to the window object
    this.start = function() {
        console.log(this.name + ' started');
        console.log(this);
    }
}

let bullet = Bike('Bullet');
console.log(this.name); //Bullet (it's the name property of window object)
console.log(this); //name: Bullet (this here is also same as above)
console.log(name); //Bullet (same as above)
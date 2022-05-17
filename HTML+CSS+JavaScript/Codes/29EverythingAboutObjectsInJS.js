/*let lecture = 10;
let section = 3;
let title = 'JavaScript';

const course = {
    lecture: 10,
    section: 3,
    title: 'JavaScript',
    notes: {
        introduction: "Welcome to JS Course"
    },
    enroll() {
        console.log("You are successfully enrolled");
    }

}

course.enroll();
console.log(course);*/

//Factory function
function createCourse(title){
    //Camel case
    return {
    lecture: 10,
    section: 3,
    title: title,
    notes: {
        introduction: "Welcome to JS Course"
    },
    enroll() {
        console.log("You are successfully enrolled");
    }

}

}

/*const course = createCourse('JavaScript');
course.enroll();
console.log(course);*/


//Constructor Function
//Pascal Case

/*const course = new createCourse('JavaScript');
delete course.title;
course.checkEnrollment = function(){
    concole.log('30 usres are enrolled');
}
course.enroll();
console.log(course);*/


const course = new Course('JavaScript');
console.log(course.constructor)
console.log(newCourse.constructor)

const _course = {
    title: title,
    enroll(){
        console.log('You are successfully enrolled');
    }
}
//Internally ->
/*const _course = new Object{
    title: title,
    enroll(){
        console.log('You are successfully enrolled');
    }
}*/

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('You are succcessfully enrolled');
    }
}
//Internally ->
const Course_1 = new Function('title', `this.title = title,
this.enroll = function(){
    console.log('You are successfully enrolled')
}`
)
const course_2 = new Course_1('JavaScript');
course_2.enroll();

//Primitve Datatype
let number = 10;
//Pass by Value
let number_2 = number;
number = 15;
console.log(number); //15
console.log(number_2); //10

//Reference DataType
let object = {number:10}; //number is a key
//Pass by reference
let object2 = object;
object.number=15;
console.log(object); //15
console.log(object2); //15

//Pass by value
const COURSE = {
    title: 'JavaScript',
    enroll(){
        console.log('You are successfully enrolled');
    }
}

const COURSE_1 = {...COURSE} //by doing this, content of COURSE will get copy to COURSE_1 as it is

COURSE_1.title = 'C++';
//title of COURSE = JavaScript
//title of COURSE_1 = C++

//Assigning one object to another
const course__1 = Object.assign({}, Course);
//source object = Course
//Destination object = course__1 ({}: which implies course__1 is empty)

course__1.title = 'C++';

for(let key in course){
    console.log(key, course[key]); //title(key) JavaScript(key->value)
}

const course__2 = {};
for(let key of Object.keys(course)){
    course__2[key] = course[key];
    console.log(key, course[key]); //title JavaScript
}//Object.keys basically provides array formed by using keys of course type objects
//['title', 'enroll']
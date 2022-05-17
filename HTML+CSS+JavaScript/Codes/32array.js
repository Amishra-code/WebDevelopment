const array = [1,2,3,4,5,6,7,8,9];
console.log(array);
console.log(array[0]); //1
console.log(array[array.length-1]); //9

const num = new Array(1,2,3,4,5,6,7,8,9);
//Push
num.push(10);
console.log(num);
//Unshift
//inserts new element at the start of the array and returns new length
num.unshift(0);
console.log(num);

//pop
num.pop();
console.log(num);

//shift
//deletes an element from the start
num.shift();
console.log(num);

num[0] = 'Anjali';
console.log(num);
num[1] = {num:80}; //num[1] = {num:80}

const names = ['Anjali', 'Aryan', 'Suman', 'Deeksha', 'Anjali'];
names.indexOf('Anjali');  //0
namses.indexOf('Anjali', 2); //search will start from index 2

names.lastIndexOf('Anjali');
names.includes('Anjali') //return either true or false

//User Defined Array
let channels = [{
    name: 'Graphic Era University',
    subscriber: 10000
},  {
    name: 'Deeemed University',
    subscriber : 20000
},  {
    name: 'Anjali mishra',
    subscriber: 50000
}];

console.log(channels.includes({
    name: 'Graphic Era University',
    subscriber: 10000
})) //false : because includes() only work for the primitive data types

//so we will use find method
console.log(channels.find(function(element){
    return element.subscriber === 50000
}))//this can be used in user defined as well as primitive data types as well
//find() also works for the first occurence of the element matching with the condition

console.log(channels.findIndex(element=> element.name = 'Anjali mishra'))

//concatenation
let names1 = ['Anjali' , 'Aryan', 'Niyati'];
let names2 = ['mishra', 'tyagi', 'singhal'];

console.log(names1.concat(names2)); // anjali aryan niyati mishra tyagi singhal

//let names3 = names1.concat(names2);
let names3 = [...names1, ...names2]; //concatenation
console.log(names3.slice(3,5));

//for loop
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//For of
for(let name of names){
    console.log(name);
}

//For-each
names.forEach(function(names, index){
    console.log(names, index);
})

//Join
let student = ['S', 'h','i', 'v', 'a'];
console.log(student.join()); //S,h,i,v,a
console.log(student.join('')); //Shiva
console.log(student.join('_')); //S_h_i_v_a

student = student.join('_');
//Split
console.log(student.split()); //[Shiva]
console.log(student.split('_')); //['S', 'h', 'i', 'v', 'a']

let cities = [
    {name: 'Mumbai', population: 134336},
    {name: 'Delhi', population: 134366},
    {name: 'Channai', population: 134666},
    {name: 'Kolkata', population: 136336},
    {name: 'Bnagalore', population: 164336}
];

console.log(cities.filter((city => {
    return city.population>134366;
})))

console.log(cities.map(city => city.population*2));
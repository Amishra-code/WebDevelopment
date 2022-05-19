//Exercise 01 (Calculate area of a square)

function Square(side) {
    this.side = side;
    this.area = function() {
        console.log(this.side*this.side);
    }
}

let side = new Square(10);
side.area();

//Exercise 02 (Concatenating strings)
function StringConcatenate(separator, ...strings)//[... => rest operator]
{
    let returnVal = '';
    strings.forEach((string, i) => {
        if(i == strings.length-1)
            returnVal += string ;
        else
            returnVal += string + separator;
    })
    return returnVal;
}

//Exercise 03 (Destructuring)
arr = [1,2,3,4,5,6,7,8];
/*console.log(first)
  console.log(second);
  console.log(third);
  console.log(other);*/

/* I. method
let first = arr[0];
let second = arr[1];
let third = arr[2];
let other = arr.slice(3);
*/

//II. method
let [first, second, third, ...other] = [1,2,3,4,5,6,7,8];
console.log(first)
console.log(second);
console.log(third);
console.log(other);

//Exercise 04 (How many matchhouses used in building house)
/*if number of house ->
  n=1, no. of matchstick = 6;
  n=4, no. of matchstick = 21;
  n=87, no. of matchstick = 436;*/

function MatchStick(houses){
    if(houses>0)
        return ((houses*6) - houses + 1);
    else
        return 0;
}

console.log(MatchStick(4));
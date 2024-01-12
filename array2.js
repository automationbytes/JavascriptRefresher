const fruits = ["Apple","Mango","Pineapple","Banana","Jack Fruit", "Blue berry","Mango"]
/*

"Apple - 0","Mango -1 ","Pineapple-2","Banana-3","Jack Fruit-4", "Blue berry-5"
*/
const newfruits = fruits.slice(1,5)
console.log(newfruits)

//indexof
console.log(fruits.indexOf("Mango"))

//last index of
console.log(fruits.lastIndexOf("Mango"))

const number = [1,2,3,4,5,6,7,9,8]
let findeven = number.find(myfunc)
console.log(findeven)
function myfunc(value, index, array){
    return value % 2 == 0
}

console.log(fruits.includes("Banana"))

//sort
fruits.sort()
console.log(fruits)

fruits.reverse()
console.log(fruits)

//sorting numbers
let arr = [40,1,500,7,3,9,6]
arr.sort(function(a,b){return a-b})
console.log(arr)

//sorting numbers descending



arr.sort(function(a,b){return b-a})
console.log(arr)

//function(a,b){return b-a}

//random
arr.sort(function(){return 0.5 - Math.random()})
console.log(arr)

//find smallest number in an array
//largest number
//sort ascending 

let arr1 = [40,1,500,7,3,9,6,80,74]
arr1.sort(function(a,b){return a-b})
console.log(arr1)

console.log(arr1)

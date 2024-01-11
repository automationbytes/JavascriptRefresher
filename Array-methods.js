//to access elements using index
const fruits = ["Apple","Mango","Pineapple"]
console.log(fruits[1])
console.log(fruits)

console.log(fruits.toString()) // 3wrds
console.log(fruits.join(" "))

//add - Push - last position
fruits.push("Banana")
console.log(fruits)

//remove- pop - last value
fruits.pop()
console.log(fruits)

//shift - remove the first value
fruits.shift()
console.log(fruits)

//unshift - insert the value in first
fruits.unshift("Orange")
console.log(fruits)

//update the element
fruits[2] = "Stawberry"
console.log(fruits)

const veggies = []
veggies[0] = "Potato"
veggies[1] = "Tomato"
veggies[2] = "Onion"
console.log(fruits)
console.log(veggies)

//concat - add 2 arrays
console.log(fruits.concat(veggies))//created either as a new array or yu can print. existing array will not be modified
console.log(fruits)
console.log(veggies)




const cars = new Array("BMW","BENZ","FORD","VOLVO","HONDA","GM")
//cars.copyWithin(2,0)
console.log(cars)

//splice - adding value specified index
cars.splice(2,0,"Toyoto","Hyundai")
console.log(cars)

cars.splice(1,1)
console.log(cars)

// newspliced = cars.toSpliced(1,1)
// console.log(newspliced)
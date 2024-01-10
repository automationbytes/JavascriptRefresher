const fruits = ["Apple","Mango","Pineapple"]
const veggies = []
veggies[0] = "Potato"
veggies[1] = "Tomato"
veggies[2] = "Onion"
console.log(fruits)
console.log(veggies)

console.log(typeof fruits)
console.log(typeof veggies)


const cars = new Array("BMW","BENZ","FORD",50)
console.log(cars)
console.log(typeof cars)

let strcar = cars.toString()
console.log(strcar)
console.log(typeof strcar)

const example = {fruits:"Apple",veggies:"carrot",number: 10}
console.log(example)
console.log(example["fruits"])
console.log(cars[0])

//length
console.log(cars.length)

//add
cars.push("Honda") // last position
console.log(cars)

cars[9] = "Volvo" //inserting using index
console.log(cars)
console.log(cars.length)
console.log(Array.isArray(cars))
console.log(cars instanceof Array)


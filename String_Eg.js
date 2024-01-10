//literal way - primitive datatype
let text = "Hello"
console.log(typeof text)
let text1 = 'a'
console.log(typeof text1)

//object
let a = new String("Apple")
console.log(typeof a) //object
let A = "Apple"
console.log(typeof A)//string
// == - check only the value. so we will get true as o/p
console.log(a == A)
// === - check the value and the datatype
console.log(a === A)

//object - we cant compare the objects
let a1 = new String("Apple")
let a2 = new String("Apple")
console.log(a1 == a2)
console.log(a1 === a2)


console.log(a1.length)
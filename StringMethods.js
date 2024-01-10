//Getting substring (Some part of the string)
//slice - (start,end) return the new value


//substring


//substr
let text = "HelloWorld";
console.log(text.slice(5)) //one parameter that index value will be considered as start index

console.log(text.slice(5,8))

console.log(text.slice(-5))

console.log(text.slice(-5,-2)) //wor


//substring - very similar to slice.
//start - mandatory
//end - optional; if we provide end value endvalue -1

//here we dont hav the negative indexing

let text1 = "HelloWorld";
console.log(text1.substring(5)) //one parameter that index value will be considered as start index

console.log(text1.substring(5,8))

//substr (start, length)
//start - mandatory
//length - optional
//length - it will go til the last

//negative index is possible

let text2 = "HelloWorld";
console.log(text2.padStart(100,5))

console.log(text2.substr(5))

console.log(text2.substr(-5))


console.log(text2.substr(-5,3))
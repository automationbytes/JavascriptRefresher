/*
for - traditional for loop (init, condition, increment/decrement)
for/in - iterating thro the properties of objects
for/of - iterating the values 
while - condition is true
do while - atleast once it wil execute if my condition is false
*/

for(let i = 0; i<5;i++){
    console.log(i)
}

let fruits = ["Apple", "Mango", "Stawberry", "Banana"]
for(let i = 0; i<fruits.length;i++){
    console.log(fruits[i])
}
// let i,len
// for(i = 0, len = fruits.length;i<len;i++){
//     console.log(fruits[i])
// }

//in - it will be numbers
for(let f in fruits){
    console.log(f)
    console.log(fruits[f])
}

//of - it wil the iteratable obj
for(let f of fruits){
    console.log(f)
}

let hello = "HelloWorld"
for(let a of hello){
    console.log(a)
}

//in - it will be numbers
for(let q in hello){
    console.log(q)
    console.log(hello[q])
}

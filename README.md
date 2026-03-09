1️⃣ What is the difference between var, let, and const?

answer:
var: it is wasted variable and declare same variable name lots of time using var.it is a old version data type.this is functional scoped
let: if we declare variable using let we can change the value but we cannt declare same variable name lots of time.it is a update version.this is block scoped
const:if we declare variable using const we can change the value and we cannt declare same variable name lots of time.it is a update version.this is block scoped
we should use let and const variable for understanding better of our code and dont use the var variable.

2️⃣ What is the spread operator (...)?

answer:
it is a one kind of functionality which help to copy and convert arry or object to individual number or string and add or merge other arry or object .

example:
add or merge
const arry=[1,2,3,4,5]
const arry1 = [...arry,6,7,8,9]  
console.log(arry1) output:[1,2,3,4,5,6,7,8,9]
copy
const arry=[1,2,3,4]
const arry1=[...arry] 
console.log(arry1) output:[1,2,3,4]

3️⃣ What is the difference between map(), filter(), and forEach()?

answer:
map():it do something modify or update inside the main element of arry like add or mul or anything .it return new array
exa: arry1 = [1,2,3,4]
const c = arry1.map(item =>{
    return item*2;
})
console.log(c) output:[2,4,6,8]

filter():it find out element of the arry or object based on the condition and return new arry .
exm:
arry1 = [1,2,3,4]
const c = arry1.filter(item => item>2)
console.log(c) output:[3,4]

forEach(): this is a one kind of loop which help to find the element inside the arry or object . it dont return anything like undefined
exa: arry1 = [1,2,3,4]
const c = arry1.forEach(item => 
console.log(item))
console.log(c) output:[1,2,3,4]

 4️⃣ What is an arrow function?

 answer:
 it is a modify or shorter version of function.It is the component of ES6 .using this array function we can make funtion in a one line of code .it is very easy and simplify .

 exm : const add =(a)=>a+a;

 5️⃣ What are template literals?

 answer:
 this is the feature of javaScript ES6. Using BackTik (` `) we can make a dynamic varibale and write lot's of line in a single variable.there use ${} symble.

 exm: 
 name1='yash'
 name2='avishek'
 const favourite =`
 this is ${name1},
 this is ${name2} `
console.log(favourite)
output:
this is yash,
this is avishek
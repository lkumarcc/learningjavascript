console.log("hello from main")

//variables

let age = 25
console.log(age)

const salary = 90

//let vs const
//const is a static variable i guess which would make the 
//const aspect of the word make sense
//cant declare a const var one place and then change the 
//val of that var somewhere else w out getting an error
//can do all that w let
//const is static n let is not
//always declare const unless we know that var is not static

console.log(salary)

//strings
const name = "ass"
const words = "words"

//nums
const total = 0
const PI = 3.14

//bools
const isPrimary = true

//undefined
let result
const watebottle = undefined

//null
const data = null

//object literal
const person = {
    'firstname': 'Bonnie',
    'lastname': 'McMurray',
    'age': 'too young for wayne'
}

console.log(person.firstname)

//array
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[0])

//operators

let x = 9
let y = 5

const isEven = 10 % 2 === 0 ? true : false
//means if 10 mod 2 is the same data type as zero, then set 
//iseven to true, and if it is not then set to false

console.log(isEven)

//imiplicit type conversion
console.log('true' + true)
console.log('4' - '2') //woahhhh
console.log('5' - false)
console.log('5' - true)

//explicit conversion
console.log(Number('5'))
console.log((500).toString())
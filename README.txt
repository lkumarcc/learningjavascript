notes on learning javascript stuff:

definitions n stuff:
-console.log(""): output stuff to the console



let vs const: 
    //const is a static variable i guess which would make the 
    //const aspect of the word make sense
    //cant declare a const var one place and then change the 
    //val of that var somewhere else w out getting an error
    //can do all that w let
    //const is static n let is not
    //always declare const unless we know that var is not static

data types:
-string
-number
-boolean
-undefined
-null
-bigInt
-symbol
-objects: non primitive

two ways to access objects: make them a literal or an array
    -literal:
        -set an object equal something in curly braces
        -ex: const stupid = {stupidOne: one, stupidTwo: two}
        -then to access the different things in stupid just do stupid.stupidOne
        -sort of works like a dictionary in python only the syntax to access stuff
        is different (. vs [])

    -array:
        -like a list in python
        -ex: const names = [lexi, sophie, eliana, izzy]
        -access the names via their indexes: names[0] = lexi etc.
        -you get the vibe`

Operators:
-assignment: =
-arithmetic: u know all these they're the same from python
-comparison: all the same except
    - === which tells the same datatype
    -&& which is used to compare 2 comparisons, if they're both true it returns true
        pretty much equivalent of and
    -|| works as or operator, as long as one is true it will return true
    -!: changes bool to opposite, true turns to false
-logical
    -?, : = if this then this
    -if some condition is satisfied before the ?, then whatever
    -is after the ? but before the : will happen. otherwise whats 
    -after the : will happen
-string
-other

Type conversion
-implicit conversion:
    -conver
-explicit conversion

Types of equalities:
- == vs ===
-with ==, there's coercion which means that if u compare say
-10 vs '10', js will coerce the text or essentially forget type
-type matters for ===, but not for ==
-so if we had var1 = 10, and var2 = "10"
-var1 == var2 is true, but var1 === var2 is false

function scope:
-block scope: variables declared inside a pair of curly braces
-function scope: varaibles declared inside a function
-global scope: variables declared at the top of the class that can be accessed
    anywhere

CLOSURE:
-the idea that when u assign a variable to a function, each time its called
the value will change based on the function. a variable that is assigned a function
is not static, but instead changes each time its called based on what the function is
-ex. func add(num) = num++
    let a = add(6)
    a() val = 6
    a() val = 12
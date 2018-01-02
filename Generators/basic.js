function* generator(){
    yield 1
    yield 2
    yield 3
}

const myGenerator = generator()

console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())

/**
 * The fourth iteration does not exist, 
 * because only three statements were written.
 */

console.log(myGenerator.next())
// 0 1 1 2 3 5 8 13

function* fibo() {
    let [before, current] = [0,1]

    while(true){
        let result = before
        before = current
        current = result + current

        yield result
    }
}

const fiboGenerator = fibo()

console.log(fiboGenerator.next())
console.log(fiboGenerator.next())
console.log(fiboGenerator.next())
console.log(fiboGenerator.next())
console.log(fiboGenerator.next())
console.log(fiboGenerator.next())
console.log(fiboGenerator.next())
console.log(fiboGenerator.next())


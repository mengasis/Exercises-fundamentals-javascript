
// 0 1 1 2 3 5 8 13

function fibo() {
	let before = 0, current = 1
	return {
		next: function(){
			let result = before
			before = current
			current = result + current
			return {
				value: result,
				done: false
			}
		}
	}
}

const serie = fibo()

console.log('Print until the eighth of the series')
console.log(serie.next().value)
console.log(serie.next().value)
console.log(serie.next().value)
console.log(serie.next().value)
console.log(serie.next().value)
console.log(serie.next().value)
console.log(serie.next().value)
console.log(serie.next().value)
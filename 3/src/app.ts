const userName = 'Alex'
// userName = 'Alex C'
let age = 20

age = 29

// function add(a: number, b: number) {
// 	let result
// 	result = a + b
// 	return result
// }

// if (age > 20) {
// 	let isOld = true
// }

// console.log(isOld)

// console.log(result)

const add = (a: number, b: number) => {
	return a + b
}

console.log(add(2, 5))

const printOutput: (a: number | string) => void = (output) =>
	console.log(output)

const button = document.querySelector('button')

if (button) {
	button.addEventListener('click', (event) => console.log(event))
}

printOutput(add(5, 2))

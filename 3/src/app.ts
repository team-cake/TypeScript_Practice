// const userName = 'Alex'
// // userName = 'Alex C'
// let age = 20

// age = 29

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

// const add = (a: number, b: number = 1) => {
// 	return a + b
// }

// console.log(add(2, 5))

// const printOutput: (a: number | string) => void = (output) =>
// 	console.log(output)

// const button = document.querySelector('button')

// if (button) {
// 	button.addEventListener('click', (event) => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Skateboarding', 'Cooking']
const activeHobbies = ['Eating']

activeHobbies.push(...hobbies)

console.log(activeHobbies)

const person = {
	firstName: 'Alex',
	age: 20,
}

const copiedPerson = { ...person }

// console.log('copiedPerson', copiedPerson)

const add = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue
	}, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)

console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies

console.log(hobby1)
console.log(hobby2)
console.log(remainingHobbies)

const { firstName: userName, age } = person

console.log(userName, age, person)

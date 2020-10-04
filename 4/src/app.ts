// type AddFn = (a: number, b: number) => number
interface AddFn {
	// kind of like an anonymous function
	(a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
	return n1 + n2
}

interface Named {
	readonly name?: string
	outputName?: string // ? to mark it as optional, also available with methods
}

interface Greetable extends Named {
	// possible to extend multiple interfaces
	greet(phrase: string): void
}

class Person implements Greetable {
	name?: string
	// outputName: 'ok'
	age = 20

	constructor(n?: string) {
		if (n) {
			this.name = n
		}
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name)
		} else {
			console.log('Hi!')
		}
	}
}

let user1: Greetable

user1 = new Person()
// user1.name = 'Micah'

user1.greet('Hi there - I am')
console.log(user1)

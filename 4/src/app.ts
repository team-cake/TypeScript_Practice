interface Person {
	name: string
	age: number

	greet(phrase: string): void
}

let user1: Person

user1 = {
	name: 'Alex',
	age: 36,
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name)
	},
}

user1.greet('Hi there - I am')

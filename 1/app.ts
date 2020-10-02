// const person: {
// 	name: string
// 	number: number
// } = {
const person: {
	name: string
	number: number
	hobbies: string[]
	role: [number, string] // tuple type
} = {
	name: 'Alex',
	number: 1,
	hobbies: ['Skateboarding', 'Cooking'],
	role: [2, 'developer'], // tuple type
}

// person.role.push('team lead')
// person.role[2] = 10
// person.role = [0, 'team lead', 'senior developer']

let favoriteActivities: string[]
favoriteActivities = ['Skateboarding']

console.log(person.name)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
	// console.log(hobby.map()) // !!! ERROR !! As we know it's not possible to map over strings
}

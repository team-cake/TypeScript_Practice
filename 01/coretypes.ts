// const person: {
// 	name: string
// 	number: number
// } = {
//

// const TEAMLEAD = 0
// const SENIORDEV = 1
// const JRDEV = 2

enum Role {
	TEAMLEAD,
	SENIORDEV,
	JUNIORDEV,
} // Possible to start from a different number. Also possible to assign not upfollowing numbers. Possible to input string. Or even a combination.

const person = {
	name: 'Alex',
	number: 1,
	hobbies: ['Skateboarding', 'Cooking'],
	role: Role.JUNIORDEV,
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

if (person.role === Role.JUNIORDEV) {
	console.log('is junior dev')
}

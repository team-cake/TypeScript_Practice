// const person: {
// 	name: string
// 	number: number
// } = {
const person = {
	name: 'Alex',
	number: 1,
	hobbies: ['Skateboarding', 'Cooking'],
}

let favoriteActivities: string[]
favoriteActivities = ['Skateboarding']

console.log(person.name)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
}

class Department {
	name: string

	constructor(n: string) {
		this.name = n
	}

	describe(this: Department) {
		console.log('Department: ' + this.name)
	}
}

const development = new Department('Development')

// console.log(development)
development.describe()

const developmentCopy = { name: 's', describe: development.describe }

developmentCopy.describe()

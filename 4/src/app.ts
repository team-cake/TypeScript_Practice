class Department {
	// private id: string
	// private name: string
	private employees: string[] = []

	constructor(private id: string, public name: string) {
		// this.id = id
		// this.name = n
	}

	describe(this: Department) {
		console.log(`Department (${this.id}: ${this.name})`)
	}

	addEmployee(employee: string) {
		// validation?
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

const development = new Department('A1', 'Development')

development.addEmployee('Alex')
development.addEmployee('Alexa')

// development.employees[2] = 'Angela'

development.describe()
development.name = 'NEW NAME'
development.printEmployeeInformation()

// console.log(development)

// const developmentCopy = { name: 's', describe: development.describe }

// developmentCopy.describe()

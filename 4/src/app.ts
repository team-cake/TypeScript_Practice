class Department {
	public name: string
	private employees: string[] = []

	constructor(n: string) {
		this.name = n
	}

	describe(this: Department) {
		console.log('Department: ' + this.name)
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

const development = new Department('Development')

development.addEmployee('Alex')
development.addEmployee('Alexa')

// development.employees[2] = 'Angela'

development.describe()
development.name = 'NEW NAME'
development.printEmployeeInformation()

// console.log(development)

// const developmentCopy = { name: 's', describe: development.describe }

// developmentCopy.describe()

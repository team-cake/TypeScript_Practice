class Department {
	// private readonly id: string
	// private name: string
	private employees: string[] = []

	constructor(private readonly id: string, public name: string) {
		// this.id = id
		// this.name = n
	}

	describe(this: Department) {
		console.log(`Department (${this.id}: ${this.name})`)
	}

	addEmployee(employee: string) {
		// validation etc
		// this.id = 'A2'
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

class ITDepartment extends Department {
	admins: string[]
	constructor(id: string, admins: string[]) {
		super(id, 'IT')
		this.admins = admins // for demo purposes to show this. needs to come after super
	}
}

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
	}

	addReport(text: string) {
		this.reports.push(text)
	}

	printReports() {
		console.log(this.reports)
	}
}

const it = new ITDepartment('A1', ['Alex'])

it.addEmployee('Alex')
it.addEmployee('Angela')
it.addEmployee('Micah')
// it.employees[2] = 'Micah'
it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation()
console.log(it)

const accounting = new AccountingDepartment('B1', [])

accounting.addReport('Something went wrong')
accounting.printReports()
console.log(accounting)

// console.log(development)

// const developmentCopy = { name: 's', describe: development.describe }

// developmentCopy.describe()

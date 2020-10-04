class Department {
	static fiscalYear = 2020
	// private readonly id: string
	// private name: string
	protected employees: string[] = []

	constructor(private readonly id: string, public name: string) {
		// this.id = id
		// this.name = n
		// console.log(this.fiscalYear) Not possible
		console.log(Department.fiscalYear)
	}

	static createEmployee(name: string) {
		return { name: name }
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
	private lastReport: string

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport
		}
		throw new Error('No report found')
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value!')
		}
		this.addReport(value)
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[0]
	}

	addEmployee(name: string) {
		if (name === 'Alex') {
			return
		}
		this.employees.push(name)
	}

	addReport(text: string) {
		this.reports.push(text)
		this.lastReport = text
	}

	printReports() {
		console.log(this.reports)
	}
}

const employee1 = Department.createEmployee('Chloe')
console.log(employee1, Department.fiscalYear)

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

accounting.mostRecentReport = 'Year end report'
accounting.addReport('Something went wrong')
console.log(accounting.mostRecentReport)

accounting.addEmployee('Alex')
accounting.addEmployee('Micah')

accounting.printReports()
accounting.printEmployeeInformation()

console.log(accounting)

// console.log(development)

// const developmentCopy = { name: 's', describe: development.describe }

// developmentCopy.describe()

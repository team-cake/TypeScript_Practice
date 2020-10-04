type Admin = {
	name: string
	privileges: string[]
}

type Employee = {
	name: string
	startDate: Date
}
// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee

const a1: ElevatedEmployee = {
	name: 'Alex',
	privileges: ['Create software'],
	startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		// nice example of a typeguard
		return a.toString() + b.toString()
	}
	return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name)
	if ('privileges' in emp) {
		// also a type guard
		console.log('Privileges: ' + emp.privileges)
	}
	if ('startDate' in emp) {
		// also a type guard
		console.log('Start date: ' + emp.startDate)
	}
}

// console.log(e1)
printEmployeeInformation(a1)
printEmployeeInformation({ name: 'Micah', startDate: new Date() })

class Car {
	drive() {
		console.log('Driving...')
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...')
	}
	loadCargo(amount: number) {
		console.log('Loading a cargo ... ' + amount)
	}
}

type Vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
	vehicle.drive()
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(v1)
useVehicle(v2)

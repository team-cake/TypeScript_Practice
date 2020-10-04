function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function withTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId);
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h1')!.textContent = p.name;
		}
	};
}

// @Logger('LOGGING - PERSON')
@withTemplate('<h1>My person object</h1>', 'app')
class Person {
	name = 'Alex';

	constructor() {
		console.log('Creating person object...');
	}
}

const pers = new Person();

console.log(pers);

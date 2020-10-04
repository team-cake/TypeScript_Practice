// const names: Array<string> = ['Alex', 'Micah']; // string[], this is a generic type
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is done');
// 	}, 2000);
// });

// promise.then((data) => {
// 	data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objaB: U) {
	return Object.assign(objA, objaB);
}

// console.log(merge({ name: 'Alex' }, { number: 1 }));

const mergedOb = merge(
	{ name: 'Alex', hobbies: ['skateboarding'] },
	{ number: 1 }
);
console.log('mergedOb', mergedOb);

// const mergedOb2 = merge({ name: 'Alex' }, { greet: 'hello' });
// console.log('mergedOb2', mergedOb2.greet);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value...';
	if (element.length === 1) {
		descriptionText = 'Got 1 element.';
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length + ' elements.';
	}
	return [element, descriptionText];
}

console.log(countAndDescribe(['Skateboarding', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Alex' }, 'name');

class DataStorage<T extends string | number | boolean> {
	// generic classes are more useful with the primitive types
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1); // -1
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Alex');
textStorage.addItem('Micah');
textStorage.removeItem('Alex');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const alexObj = { name: 'Alex' };
// objStorage.addItem(alexObj);
// objStorage.addItem({ name: 'Micah' });
// // ...
// objStorage.removeItem(alexObj);
// console.log(objStorage.getItems());

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Alex', 'Micah'];
// names.push('Angela');
// names.pop();

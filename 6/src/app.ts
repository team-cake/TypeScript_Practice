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

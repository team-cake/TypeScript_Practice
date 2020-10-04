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

function merge<T, U>(objA: T, objaB: U) {
	return Object.assign(objA, objaB);
}

// console.log(merge({ name: 'Alex' }, { number: 1 }));

const mergedOb = merge(
	{ name: 'Alex', hobbies: ['skateboarding'] },
	{ number: 1 }
);
console.log('mergedOb', mergedOb.hobbies);
const mergedOb2 = merge({ name: 'Alex' }, { greet: 'hello' });
console.log('mergedOb2', mergedOb2.greet);

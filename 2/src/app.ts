let appId = 'abc'
const button = document.querySelector('button')!

function clickHandler(message: string) {
	let userName = 'Alex'
	console.log('Clicked!' + message)
}
// a comment
if (button) {
	button.addEventListener('click', clickHandler.bind(null, "You're welcome"))
}

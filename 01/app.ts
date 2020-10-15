let userInput: unknown // number | string would be better in this case
let userName: string

userInput = 1
userInput = 'Alex'
if (typeof userInput === 'string') {
	userName = userInput
}

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code }
	// while (true) {}
}

generateError('An error occured', 500)

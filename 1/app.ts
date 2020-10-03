let userInput: unknown // number | string would be better in this case
let userName: string

userInput = 1
userInput = 'Alex'
if (typeof userInput === 'string') {
	userName = userInput
}

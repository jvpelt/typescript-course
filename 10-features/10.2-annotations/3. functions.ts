// Typed return value
const add = (a: number, b:number): number => {
	return a + b
}

const subtract = (a: number, b:number): number => {
	return a - b
}

// void indicates that there is no return value
const logger = (message: string): void => {
	console.log(message)
}

// never indicates that we will never reach the end of the function
const throwError = (message: string): never => {
	throw new Error(message)
}

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
}
const logWeather = ({date, weather}: {date: Date, weather: string}) => {
	console.log(date)
	console.log(weather)
	return 1
}
logWeather(todaysWeather)
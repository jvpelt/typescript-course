const carMakers = ['Ford', 'Toyota', 'Chevy']
const dates = [new Date(), new Date()]

const carByMake = [
	['F150'],
	['Corolla'],
	['Camaro']
]
const carByMakeTyped: string[][] = []

// Help with inference when extracting values
const ford = carMakers[0]
const chevy = carMakers.pop()

// Prevent incompatible values
carMakers.push(10)

// Help with map
carMakers.map((car): string => {
	return car
})

// Flexible types
const importantDates = [new Date(), '2019-08-25']
const impDates: (Date | string)[] = []
impDates.push('2019-08-25')
impDates.push(new Date())

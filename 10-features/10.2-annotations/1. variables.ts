const apples: number = 5
const speed: string = 'fast'
const hasName: boolean = true

const nothingMuch: null = null
const nothing: undefined = undefined

// built in objects
const now: Date = new Date()

// arrays
const colors: string[] = ['red', 'green', 'blue']
const myNumbers: number[] = [1, 2, 3]
const truths: boolean[] = [true, true, false]

// classes
class SampleCar {}
const sampleCar: SampleCar = new SampleCar()

// object literal
const point: { x: number, y: number } = {
	x: 10,
	y: 20
}

// function
const logNumber: (i:number) => void = (i:number) => {
console.log(i)
}

// when to use annotations
// 1) Function that returns the any type
const json = '{"x": 10, "y": 20}'
const coordinates: {x:number, y:number} = JSON.parse(json)

// 2) when we declare a variable on 1 line and initialize it later
const words = ['red', 'green', 'blue']
let foundWord: boolean
words.forEach(word => {
	if (word === 'green'){
		foundWord = true
	}
})

// 3) Variables whose type can't be inferred correctly
const numbers = [-10, -1, 12]
let numberAboveZeros: boolean | number = false

numbers.forEach(number => {
	if (number > 0) {
		numberAboveZeros = number
	}
})

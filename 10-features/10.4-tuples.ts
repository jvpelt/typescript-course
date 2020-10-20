const tupleDrink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 40]

// using type alias same as above
type Drink = [string, boolean, number]
const cola: Drink = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]

// tuples, don't use m that often. They are hard to read
const carSpecs: [number, number] = [400, 3325]
const carStats = {
	horsePower: 400,
	weight: 3325
}
const profile = {
	name: 'John',
	age: 32,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void{
		this.age = age
	}
}

// type inference
const { age } = profile
const { coords: { lat, lng } } = profile
// type annotation
const { age }: { age: number } = profile
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile
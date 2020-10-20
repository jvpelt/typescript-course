class Vehicle {
	constructor(public color: string){}
	drive (): void {
		console.log('toet toet')
	}

	honk (): void {
		console.log('beep')
	}
}

class Car extends Vehicle {
	drive (): void {
		console.log('vroem vroem')
	}
} 

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

const car = new Car('blue')
car.drive()
interface Vehicle {
	name:string, 
	year:number, 
	broken:boolean,
	summary():string
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string { return `Name ${this.name}`},
}

// const printVehicle = (vehicle: {name:string; year:number; broken:boolean; summary:()=>string}): void => {
// 	console.log(vehicle.summary())
// }
const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary())
}
printVehicle(oldCivic)


// Refactor to reportable
interface Reportable {
	summary(): string
}
const printSummary = (item: Reportable): void => {
	console.log(item.summary())
}
printSummary(oldCivic)

// Reuse summary
const drink = {
	color: 'brown',
	carbonated: true,
	sugar:40,
	summary: () => { return `My drink has ${this.sugar} grams of sugar`}
}
printSummary(drink)
import fetch from 'node-fetch'

interface Todo {
	id: number
	title: string
	completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
const sample = async () => {
	const res = await fetch(url, {method: 'GET'})
	const todo = await res.json() as Todo

	const {ID, Title, finished} = todo
	console.log(`
		Todo heeft ID: ${ID}
		met titel: ${Title}
		afgerond: ${finished}
	`)
}
sample()
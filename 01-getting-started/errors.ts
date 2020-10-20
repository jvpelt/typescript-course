import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/todos/1'
const sample = async () => {
	const res = await fetch(url, {method: 'GET'})
	const todo = await res.json()

	const {ID, Title, finished} = todo
	console.log(`
		Todo heeft ID: ${ID}
		met titel: ${Title}
		afgerond: ${finished}
	`)
}
sample()
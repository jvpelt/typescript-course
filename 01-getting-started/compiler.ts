import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

const sample = async () => {
	const res = await fetch(url, {method: 'GET'})
	const todo = await res.json()
	console.log(todo)
}

sample()
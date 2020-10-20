import fetch from 'node-fetch'

const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const postUrl = 'https://jsonplaceholder.typicode.com/posts/1'

const genericGet = async <T>(url: string): Promise<T> => {
	const res = await fetch(url, {method: 'GET'})
	const todo: T = await res.json()
	return todo
}

interface Todo {
	id: number
	title: string
	completed: boolean
}
const fetchTodo = async () => {
	const todo = await genericGet<Todo>(todoUrl)
	console.log(todo)
}

interface Post {
	userId: number
	id: number
	title: string
	body: string
}
const fetchPosts = async () => {
	const post = await genericGet<Post>(postUrl)
	console.log(post)
}
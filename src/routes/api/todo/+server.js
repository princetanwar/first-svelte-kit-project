import { json } from '@sveltejs/kit';

export async function GET() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	return json(await res.json());
}

import { json } from '@sveltejs/kit';

export async function GET(req) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
	return json(await res.json());
}

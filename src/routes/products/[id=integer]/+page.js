import { error } from '@sveltejs/kit';

export async function load(loadData) {
	// console.log({ loadData });
	const id = parseInt(loadData.params.id);
	if (id <= 100) {
		const res = await loadData.fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		const resJson = await res.json()
		return resJson
	}

	throw error(404, 'Not found');
}

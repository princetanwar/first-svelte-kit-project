<script>
	import { page } from '$app/stores';
	export let data

	// console.log({data})
</script>

<h1>product page for a id {$page.params.id}</h1>
<p>title: {data.title}</p>

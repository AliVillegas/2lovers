export async function load({ fetch }) {
	let response = await fetch(`/api/retrieve-random-movie`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return {
		movie: await response.json()
	};
}

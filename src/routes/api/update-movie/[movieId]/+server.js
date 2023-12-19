import { firestore } from '$lib/firebaseAdmin';

export async function POST({ request, params }) {
	try {
		const movieId = params.movieId;
		const { active } = await request.json();

		// Validate received data
		if (!movieId || typeof movieId !== 'string') {
			throw new Error('Invalid movie ID parameter');
		}

		if (typeof active !== 'boolean') {
			throw new Error('Invalid active state parameter');
		}

		// Reference the specific movie document
		const docRef = firestore.collection('movies').doc(movieId);

		// Update the active field with the received value
		await docRef.update({ active });

		return new Response(JSON.stringify({ message: `Movie '${movieId}' updated successfully.` }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.log('ERROR UPDATING', error);
		return new Response(JSON.stringify({ error: 'Error populating Firestore' }), {
			status: 500,
			body: { error: 'Error updating movie' },
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

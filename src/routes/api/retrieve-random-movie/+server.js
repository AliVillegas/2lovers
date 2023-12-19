import { firestore } from '$lib/firebaseAdmin';

export async function GET({ url }) {
	try {
		const snapshot = await firestore.collection('movies').where('active', '==', true).get();

		if (snapshot.empty) {
			return { status: 404, error: new Error('No movies found') };
		}

		const activeMovies = [];

		snapshot.forEach((doc) => {
			activeMovies.push(doc.data());
		});

		const randomIndex = Math.floor(Math.random() * activeMovies.length);

		// Return retrieved movie data
		return new Response(JSON.stringify(activeMovies?.[randomIndex]), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Error retrieving random movie:', error);
		return new Response(JSON.stringify({ error: 'Error retrieving random movie' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

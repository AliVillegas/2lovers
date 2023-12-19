import { firestore } from '../../lib/firebaseAdmin';

export async function load() {
	try {
		const snapshot = await firestore.collection('movies').get();

		if (snapshot.empty) {
			return { status: 404, error: new Error('No movies found') };
		}

		const movies = [];

		snapshot.forEach((doc) => {
			movies.push(doc.data());
		});

		// Return all movies
		return {
			movies
		};
	} catch (error) {
		return { status: 500, error };
	}
}

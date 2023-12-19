import { firestore } from '$lib/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid'; // Include npm package "uuid" if not already installed

export async function GET({ request }) {
	try {
		const messagesCollection = firestore.collection('movies');

		const backfillData = [
			{
				title: 'Fantastic Mr fox',
				url: 'https://imgur.com/OAJr0K8.jpg',
				active: true
			},
			{
				title: '500 days of summer',
				url: 'https://imgur.com/7IquMVU.jpg',
				active: true
			}
		];

		//cleaning previously saved data
		try {
			await firestore
				.collection('movies')
				.get()
				.then((snapshot) => {
					snapshot.forEach((doc) => doc.ref.delete());
				});
			console.log('Existing movies cleaned from Firestore.');
		} catch (error) {
			console.error('Error cleaning Firestore:', error);
		}

		// Loop through each movie and add to subcollection with generated ID
		for (const movie of backfillData) {
			const movieId = uuidv4(); // Generate random UUID for each movie
			const docRef = messagesCollection.doc(movieId);
			await docRef.set({
				...movie, // Spread movie data including title and url
				id: movieId // Add generated ID to the data
			});
		}

		console.log('Movies successfully populated in Firestore.');

		// Return a response
		return new Response(JSON.stringify({ message: 'Movie data has been uploaded' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Error populating Firestore:', error);

		// Return an error response
		return new Response(JSON.stringify({ error: 'Error populating Firestore' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

import { firestore } from '../lib/firebaseAdmin';

export async function load() {
	try {
		const doc = await firestore.collection('messages').doc('mainBranchV2').get();

		if (!doc.exists) {
			return { status: 404, error: new Error('Document not found') };
		}

		let messages = doc.data().msgs;

		messages = messages.map((msg) => {
			const date = new Date(msg.timestamp._seconds * 1000);

			const dateString = date.toLocaleDateString('es', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric'
			});

			const timeString = date.toLocaleTimeString('es', {
				hour: 'numeric',
				minute: '2-digit',
				hour12: true
			});

			return {
				...msg,
				timestamp: `${dateString} a las ${timeString}`
			};
		});

		return {
			messages
		};
	} catch (error) {
		return { status: 500, error };
	}
}

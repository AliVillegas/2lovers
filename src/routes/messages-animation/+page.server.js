import { firestore } from '../../lib/firebaseAdmin';

export async function load() {
	try {
		const doc = await firestore.collection('messages-animation').doc('msgs').get();

		if (!doc.exists) {
			return { status: 404, error: new Error('Document not found') };
		}

		let messages = doc.data().msgs;
		return {
			messages
		};
	} catch (error) {
		return { status: 500, error };
	}
}

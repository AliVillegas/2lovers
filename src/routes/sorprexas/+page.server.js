import { firestore } from '../../lib/firebaseAdmin';

export async function load() {
	try {
		const sorprexasDoc = await firestore.collection('messages').doc('sorprexas').get();

		if (!sorprexasDoc.exists) {
			return { status: 404, error: new Error('Document not found') };
		}

		let sorprexas = sorprexasDoc.data().sorprexas;

		sorprexas = sorprexas.map((sorprexa) => {
			const date = new Date(sorprexa.timestamp._seconds * 1000);
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
				...sorprexa,
				timestamp: `${dateString} a las ${timeString}`,
				date: date
			};
		});

		return {
			sorprexas
		};
	} catch (error) {
		return { status: 500, error };
	}
}

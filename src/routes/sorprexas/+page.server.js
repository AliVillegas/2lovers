import { firestore } from '../../lib/firebaseAdmin';

export async function load() {
	try {
		const sorprexasDoc = await firestore.collection('sorprexas').doc('sorprexas').get();

		if (!sorprexasDoc.exists) {
			return { status: 404, error: new Error('Document not found') };
		}

		let sorprexas = sorprexasDoc.data().sorprexas;

		sorprexas = sorprexas.map((sorprexa, idx) => {
			const date = new Date(sorprexa.timestamp._seconds * 1000);
			const dateString = date.toLocaleDateString('es-MX', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric'
			});

			return {
				...sorprexa,
				timestamp: `${dateString}`,
				date: date,
				index: idx
			};
		});

		return {
			sorprexas
		};
	} catch (error) {
		return { status: 500, error };
	}
}

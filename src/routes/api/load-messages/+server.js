import { firestore } from '../../../lib/firebaseAdmin';

export async function GET({ request }) {
	try {
		const messagesCollection = firestore.collection('messages-animation');

		const backfillData = [
			'Hola monita...',
			'¿Cómo estás?',
			'De repente sabes que me gusta escribirte',
			'Y bueno toda esta sorpresa es una ilusión, de alguna forma',
			'Había pasado estos días intentado varias formas de cómo hacer esta sorpresa para ti',
			'Creo que no me han funcionado muy bien',
			'Tampoco creo que esto sea algo que hayas estado esperando',
			'Y aunque esto se ha vuelto una nota de voz con 3 pasos extra innecesarios',
			'He estado pensando',
			'...',
			'Que te queria decir algunas palabras',
			'Espero que te gusten',
			'Hola monita otra vez c:',
			'Sabes que te quiero, te amo mocho',
			'Últimamente escucho música y música',
			'A veces hablas de una nostalgía indescriptible',
			'De repente me cuentas de un tiempito atrás y te iluminas y a la vez te pones triste de un cierto modo, o eso es lo que siento yo al verte',
			'Hay algo que te quería contar... Hace unas semanas, que ya iba a renunciar y que se puso mala mi abuelita y que el coche dejó de funcionar y que me peleé un poco con mi mamá',
			'pasó algo más también',
			'Es algo que no he sabido cómo decir',
			'Pero iba manejando y alcance a ver los resultados de un accidente',
			'Un auto se acababa de estrellar muy feo contra un poste saliendo de lomas',
			'Y me pegó demasiado emocionalmente',
			'No me quedé, solo continué manejando',
			'Y me dieron muchas ganas de llorar',
			'No podía pensar mas que en la vida afectada de alguna familia ajena',
			'No entiendo muy bien por qué te lo cuento así',
			'Solo siento que es algo que quería compartir',
			'La idea de todas estas sorprexas es de alguna forma mostrarte mi amor y cuánto me importas mibida <3',
			'Me encanta cómo este mes y el anterior y el anterior y el anterior',
			'Me has hecho divertir como nunca',
			'Me sorprende tu humor y tu estilo',
			'Pero en un sentido más profundo, solo veo cómo me cuidas',
			'Y cómo me quieres',
			'Y cómo me haces sentir',
			'Quiero un 2024 contigo',
			'Lo llevo diciendo muchas veces, pero prometo esforzarme mucho, balancear mi vida y darte todo mi amor',
			'Me gustaria hacer una date contigo alguno de estos días, quiero jugar un jueguito contigo a lo mejor nos gusta, y esta super cortito'
		];

		const docRef = messagesCollection.doc('msgs');
		await docRef.set({
			msgs: backfillData
		});

		console.log('Data successfully populated in Firestore.');

		// Return a response
		return new Response(JSON.stringify({ message: 'Data successfully populated in Firestore.' }), {
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

// src/lib/firebaseAdmin.js

import admin from 'firebase-admin';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: import.meta.env?.VITE_FIREBASE_ADMIN_PROJECT_ID,
			clientEmail: import.meta.env?.VITE_FIREBASE_ADMIN_CLIENT_EMAIL,
			privateKey: import.meta.env?.VITE_FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
		})
	});
}

export const firestore = admin.firestore();

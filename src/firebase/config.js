import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD1l9o8_LI_CB6Atvtaw4UxJMeisn3E97k',
	authDomain: 'expenditurez.firebaseapp.com',
	projectId: 'expenditurez',
	storageBucket: 'expenditurez.appspot.com',
	messagingSenderId: '191307946018',
	appId: '1:191307946018:web:dbfe146c4d9ee34456927b',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };

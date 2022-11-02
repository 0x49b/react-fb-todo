import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBlT_oTzAmlssSOPEpkoG2QUBmzz5-deUg',
  authDomain: 'todo-app-57e0f.firebaseapp.com',
  projectId: 'todo-app-57e0f',
  storageBucket: 'todo-app-57e0f.appspot.com',
  messagingSenderId: '1022317589234',
  appId: '1:1022317589234:web:73186609c5a345c5c3566b',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
export { db }

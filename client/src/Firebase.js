import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCKwIgtm0WcX9Thl9aCqGQk9ySYHRF6ess',
  authDomain: 'conflicts-3ae61.firebaseapp.com',
  databaseURL: 'https://conflicts-3ae61.firebaseio.com',
  projectId: 'conflicts-3ae61',
  storageBucket: '',
  messagingSenderId: '141852371460'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC52WNNOpuMoDqezGH52sxbx0PjvjzZhnc",
    authDomain: "veggie-db-c3d11.firebaseapp.com",
    databaseURL: "https://veggie-db-c3d11.firebaseio.com",
    projectId: "veggie-db-c3d11",
    storageBucket: "",
    messagingSenderId: "503208898194",
    appId: "1:503208898194:web:6288490aba6da3f2"
  };

  export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

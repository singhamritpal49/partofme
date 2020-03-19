import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyCIcSlNSLjDR_04vuksDpx6rrG94PJcL6Y",
        authDomain: "partofme-db.firebaseapp.com",
        databaseURL: "https://partofme-db.firebaseio.com",
        projectId: "partofme-db",
        storageBucket: "partofme-db.appspot.com",
        messagingSenderId: "791121659123",
        appId: "1:791121659123:web:7e17d09edb39e79b61e386",
        measurementId: "G-R1NZ969VQJ"

}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get();
        // If the user does not exists in the db create one
        if (!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (error) {
                        console.log("error creating user", error.message);
                }       
        }
        return userRef;
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
//This trigers the pop up
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
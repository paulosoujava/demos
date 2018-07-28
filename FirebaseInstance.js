import firebase from './FirebaseConection';

class FirebaseInstance{

	toDoLoginFirebase(email, pass){
		return firebase.auth()
				.signInWithEmailAndPassword(email, pass);
	}

    listener(callback){
     	return firebase.auth()
     			.onAuthStateChanged(callback);
     }

	getUser(callback){
 		 firebase.database()
 		 .ref('usuario')
 		 .child(firebase.auth().currentUser.uid)
 		 .once('value')
 		 .then(callback);
	}

	getOut(){
		return firebase.auth()
				.signOut();
	}
}
export default  new FirebaseInstance();
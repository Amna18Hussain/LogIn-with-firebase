import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase/firebaseConfig'


const  Withgoogle = async () => {

    try {
        const provider =new GoogleAuthProvider();
        const result = new signInWithPopup(auth, provider);

        const userCredential = GoogleAuthProvider.credentialFromResult(result)

        if(!userCredential){
            console.log("error in user Credential");
            return
            
        }

        const token = userCredential.accessToken;
        const user = result.user

        console.log(user, token);
        
        
    } catch (error) {

        const errorCode = error.code;
        const errormessage = error.errormessage;
        const email = error.customData.email;
        const Credential = GoogleAuthProvider.credentialFromResult(error)
        
    }
 
 
 
 
 
 
    return (
    <div>Withgoogle</div>
  )
}

export default Withgoogle
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

function Signup() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!Email || !Password){
            console.log("fill this fields ");
            
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                Email,
                Password
            )

            const user = userCredential.user;
            console.log(user);
            
        } catch (error) {
            const errorCode = error.code;
            const errormessage = error.message;

            console.log("errorCode:", errorCode, "errorMessage:", errormessage);
            
        }

        setEmail('')
        setPassword('')


        }


    return (
        <>
        <form onSubmit={handleSubmit} >
            <div className="main">
                <h1>SignUp</h1>

                <input type="text" placeholder='Enter Email'
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)} />


                <input type="text" placeholder='Enter Password'
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)} />

                <div className="btn">
                    <button>SignUP</button>
                </div>
            </div>

            </form>
        </>
    )
}

export default Signup
import React, { useRef, useState } from 'react';
import Header from './Header';
import validate from '../utils/validate';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    //Usestate signin and signup form
    const [signinform, setsiginnform] = useState(true);

    // Usestate for form error message///
    const [errormessage, seterrormessage] = useState("")

    //UseRef for email and password verification like validations in valide.js page///
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    // Onclick for signin and singup//
    const formhandler = () => {
        setsiginnform(!signinform)
    };

    // Button for form submit/////
    const handleform = async (e) => {
        ////Validate the form
        e.preventDefault();
        const errormessage = await validate(email.current.value, password.current.value)
        seterrormessage(errormessage);
        // if any error in sign and sign up then return to above function like below 32 line code
        if (errormessage) return;

        //if there is no error go to sign in / signup logic's below 
        if (!signinform) {
            // signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage(errorCode + " - " + errorMessage)// if any error then it will show (firebase) error message
                });
        } else {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage(errorCode + " - " + errorMessage) // if any error then it will show (firebase) error message
                });
        }

    };


    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='image' />
            </div>

            <form className='w-3/12 p-12 opacity-90 absolute my-36  bg-black mx-auto right-0 left-0 '>

                <h1 className='font-bold text-3xl text-white'>{signinform ? "sign In" : "Sign Up"}</h1>
                {!signinform ? <input className='my-4 p-2 w-full rounded' type='text' placeholder='Name'
                    ref={name}>
                </input> : ""}

                <input className='my-4 p-2 w-full rounded' type='text' placeholder='email'
                    ref={email}>
                </input>

                <input className='my-4 p-2 w-full rounded' type='password' placeholder='password'
                    ref={password}>
                </input>
                <p className='text-red-500  font-bold'>{errormessage}</p>
                <button className='my-4 p-4 w-full font-bold bg-red-700 text-white rounded' onClick={handleform}>
                    {signinform ? "sign In" : "sign Up"}
                </button>

                <p className=' my-3 text-white cursor-pointer' onClick={formhandler}>
                    {signinform ? "New to Netflix? Sign up now." : "Already have account? sign In now."}
                </p>
            </form>
        </div>
    )
}

export default Login;
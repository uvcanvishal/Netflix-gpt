import { useState } from "react";
import Header from "./Header"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg'
                alt='Netflix Background' /> 
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                { !isSignInForm && (
                    <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                ) }
                <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700' />
                <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-6 w-full bg-red-700 rounded-lg' >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up" : "Already Registered? Sign in"}
        </p>
            </form>
        </div>
    )
}

export default Login
import { Button } from 'flowbite-react';
import React from 'react';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import {app} from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signInStarts, signInSuccess, signInFailure } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {

    const dispatch= useDispatch();
    const auth= getAuth(app);
    const navigate= useNavigate();

    const handleCallback= async ()=>{
        const provider= new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        try {
            const results= await signInWithPopup(auth, provider);
            const res= await fetch('/api/auth/google',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: results.user.displayName,
                    email: results.user.email,
                    googleUrlPhoto: results.user.photoURL
                }),
            })
            const data= await res.json();
            if(res.ok){
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    };

  return (
    <Button type='button' onClick={handleCallback} gradientDuoTone='pinkToOrange' outline>
        <AiFillGoogleCircle className='w-6 h-5 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default OAuth
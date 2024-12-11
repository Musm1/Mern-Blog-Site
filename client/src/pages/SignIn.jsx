import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formdata, setFormData]= useState({});
  const [errorMsg, setErrMsg]= useState(null);
  const [loading, setLoading]= useState(null);
  const navigate= useNavigate();

  const handleFormData=(e)=>{
    setFormData({...formdata, [e.target.id]: e.target.value.trim()}); //trim removes white spaces like extra space at begining or end
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!formdata.email || !formdata.password){
      return setErrMsg('Please fill out form data.');
    }
    try {
      setLoading(true);
      setErrMsg(null);
      const res= await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json '},
        body: JSON.stringify(formdata)
      });
      const data= await res.json();
      if(data.success=== false){
        return setErrMsg(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/about');
      }
    } catch (error) {
      setLoading(false);
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col max-w-5xl gap-3 p-3 mx-auto md:flex-row md:items-center'>
        {/*left div */}
        <div className='flex-1'>
          <Link to='/' className='text-4xl font-bold dark:text-white'>
          <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            Mishkat's
          </span>
          Blogs
          </Link>
          <p className='mt-4 text-sm'>
            This is React Full-Stack Project. Mongoose for database, Express for Backend and React As a Front-End. 
          </p>
        </div>
        {/*right div */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleFormData}/>
            </div>
            <div>
              <Label value='Password'/>
              <TextInput type='password' placeholder='Password' id='password' onChange={handleFormData}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3 '>Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className='flex gap-2 mt-3 text-sm'>
            <span>Dont have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
          </div>
          {errorMsg && 
            <Alert color='failure' className='mt-3'>
              {errorMsg}
            </Alert>}
        </div>
      </div>
    </div>
  )
}

export default SignIn
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
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
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Username'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div>
              <Label value='Email'/>
              <TextInput type='text' placeholder='Email' id='email'/>
            </div>
            <div>
              <Label value='Password'/>
              <TextInput type='password' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 mt-3 text-sm'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {Alert, Button, TextInput} from 'flowbite-react';
import uploadImageAndGetUrl from '../components/UploadImage.js';

const ProfileDash = () => {
  
  const {currentUser}= useSelector(state=>state.user);
  const [imageFile, setImageFile]= useState(null);
  const [imageFileUrl, setImageFileUrl]= useState(null);
  const [imageUploadError, setImageUploadError]= useState(null);
  const [imageUploadSuccess, setImageUploadSuccess]= useState(null);
  const fileRef= useRef();
  const validImageType= ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const maxFileSize = 2 * 1024 * 1024;

  const handleImageChange= (e)=>{
    const file= e.target.files[0];
    if(file){
      setImageFile(file);
      //setImageFileUrl(URL.createObjectURL(file));// it creates temporary localhost path for image. itll be only shown to you. 
    };
  };

  useEffect(()=>{
    if(imageFile){
      uploadImage();
    }
  },[imageFile]);

  const uploadImage= async()=>{
    if (!validImageType.includes(imageFile.type)) {
      setImageUploadError('Please upload a valid image file (JPEG, PNG, GIF, or WebP).');
      return;
    };

    if (imageFile.size > maxFileSize) {
      setImageUploadError('File size should not exceed 2MB.');
      return;
    }

    try {
      const bucketName = import.meta.env.VITE_BUCKET_NAME; // Your bucket name in Supabase
      const imageUrl = await uploadImageAndGetUrl(imageFile, bucketName);

      setImageFileUrl(imageUrl); // Show the uploaded image

      // const publicUrl = getPublicUrl(bucketName, imageUrl);
      console.log('this is the image url', imageUrl);

      // if (onUrlGenerated) onUrlGenerated(imageUrl); // Callback to store URL in MongoDB
      setImageUploadError(null);
      setImageUploadSuccess('Image uploaded successfully!');
      setTimeout(()=>{
        setImageUploadError(null);
        setImageUploadSuccess(null);
      }, 6000);
    } catch (error) {
      console.error(error.message);
    }

  };

  return (
    <div className='w-full max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' accept='image/*' onChange={handleImageChange} ref={fileRef} hidden/>
        <div 
          className='self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer' 
          onClick={()=>{fileRef.current.click()}}>
          <img 
            src={imageFileUrl || currentUser.profilePicture} 
            alt=''  
            className='rounded-full w-full h-full border-8 object-cover border-[lightgray]'
          />
        </div>
        {
          imageUploadError && 
          <Alert color='failure'>
            {imageUploadError}
          </Alert>
        }
        {
          imageUploadSuccess &&
          <Alert color='success'>
            {imageUploadSuccess}
          </Alert>
        }
        <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
        <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}/>
        <TextInput type='password' id='password' placeholder='password'/>
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Update
        </Button>
      </form>
      <div className='flex justify-between mt-5 text-red-400'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default ProfileDash
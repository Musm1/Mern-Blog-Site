import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarDash from '../components/SidebarDash';
import ProfileDash from '../components/ProfileDash';

const Dashboard = () => {

  const location= useLocation();
  const [tab, setTab]= useState('');
  
  useEffect(()=>{
    const urlParams= new URLSearchParams(location.search);
    const tabFromUrl= urlParams.get('tab');
    if(tabFromUrl){
     setTab(tabFromUrl); 
    }
  },[location.search])

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      {/*sidebar */}
      <div className='md:w-56'>
        <SidebarDash/>
      </div>
      {/*profile */}
      {
        tab=== 'profile' && <ProfileDash/>
      }
    </div>
  )
}

export default Dashboard
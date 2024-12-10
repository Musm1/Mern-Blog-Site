import React from 'react'
import { Footer } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsLinkedin} from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-green-700'>
        <div className='w-full mx-auto max-w-7xl'>
            <div className='grid justify-between w-full sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to='/' className='self-center text-lg font-semibold whitespace-nowrap sm:text-xl dark:text-white'>
                        <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        Mishkat's
                        </span>
                        Blogs
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='ABOUT'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://musm1.vercel.app/' target='_blank' rel='noopener noreferrer'>
                                My Portfolio
                            </Footer.Link>
                            <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                My Blogs
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='FOLLOW ME'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://github.com/Musm1' target='_blank' rel='noopener noreferrer'>
                                Github
                            </Footer.Link>
                            <Footer.Link href='https://www.linkedin.com/in/musm/' target='_blank' rel='noopener noreferrer'>
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='LEGAL'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href='#'>
                                Terms &amp; Condition
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Mishkat" year={new Date().getFullYear()}/>
                <div className='flex gap-6 mt-4 sm:mt-2 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitterX}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsLinkedin}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom
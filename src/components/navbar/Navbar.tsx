'use client'
import Link from 'next/link'
import React from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark, faHouse, faCircleInfo, faDiagramProject, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import Themeswitcher from '@/components/themeswitcher/Themeswitcher'
import Image from 'next/image';
import { getImageSource } from '@/utils/getImageSource';
const Navbar = () => {

  const [navbar,setNavbar] = useState(false)
  const imageUrl = getImageSource();

  return (
    <nav className='w-full  shadow px-5'>

      <div className='md:flex items-center justify-between md:py-5 '>
       
        <div className='flex items-center'>
          <Image className='rounded-full' src={imageUrl+'/logo.jpg'} width={50}   height={50} alt='?'/>
          <Link href='/'>  
          <h2 className='hover:text-black text-2xl font-bold md:pl-5 p-3'>Aditya Akhilesh</h2>
          </Link>
        </div>

        {/* {MOBILE} */}
        <div className='md:hidden'>
          <button className={`py-3 rounded-md`} onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <FontAwesomeIcon icon={faXmark} />

            ):
            (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        <div className={`md:flex items-center ${ navbar? 'block': 'hidden'}`}>
         
          <ul className=' md:h-auto md:flex  cursor-pointer '>
            <li className='md:mt-0 mt-0 text-center'>
              <span>
              <FontAwesomeIcon icon={faHouse}/>
              </span>
              <Link href='/' className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black' onClick={ () => setNavbar(!navbar)}>Home</Link>
            </li>
            <li className='md:mt-0 mt-8 text-center'>
              <span>
              <FontAwesomeIcon size='lg' icon= {faCircleInfo} />
              </span>
              <Link href='/portfolio/about' className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black' onClick={ () => setNavbar(!navbar)}>About</Link>
            </li>
            <li className='md:mt-0 mt-8 text-center'>
              <span>
              <FontAwesomeIcon icon={faDiagramProject}/>
              </span>
              <Link href='/portfolio/projects' className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black' onClick={ () => setNavbar(!navbar)}>Projects</Link>
            </li>
            <li className='md:mt-0 mt-8 text-center'>
              <span>
              <FontAwesomeIcon icon={faPhone}/>
              </span>
              <Link href='/portfolio/contact' className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black' onClick={ () => setNavbar(!navbar)}>Contact</Link>
            </li>
          </ul>
          <div className='md:mt-2 md:items-center  mt-8 '>
            <Themeswitcher/>
          </div>
        
        </div>
        
     
      </div>

    </nav>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faGithub, faFacebook, faDiscord} from '@fortawesome/free-brands-svg-icons'; 

const footer = () => {
  return (
    <div>
        
        <footer className="bg-gray-800 fixed bottom-0 left-0 right-0  dark:text-white ">    
        <div className="mx-auto max-w-screen-xl p-1 py-1 flex justify-between">
            <div className="md:flex md:justify-between flex-row">
                <div>   
                    <ul className="text-white dark:text-white font-medium">
                        <li className='mb-2'>
                            <Link href='/' className='hover:underline'>Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="hover:underline">Support</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Terms of Use</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex mt-1 space-x-5 sm:justify-center sm:mt-0">
                    <Link href="#" className="text-white rounded-full hover:bg-blue-500 ">
                        <FontAwesomeIcon size="xl" icon={faFacebook} />
                        <span className="sr-only">Facebook page</span>
                    </Link>
                    <Link href="#" className="text-white rounded-full hover:bg-pink-500">
                        <FontAwesomeIcon size="xl" icon={faDiscord} />
                        <span className="sr-only">Discord community</span>
                    </Link>
                    <Link href="#" className="text-white rounded-full hover:bg-blue-800">
                        <FontAwesomeIcon size="xl" icon={faTwitter} />
                        <span className="sr-only">Twitter page</span>
                    </Link>
                    <Link href="#" className="text-white rounded-full hover:bg-gray-500">
                        <FontAwesomeIcon size="xl" icon={faGithub} />
                        <span className="sr-only">GitHub account</span>
                    </Link>
            
                </div>
            </div>
        </div>
        <hr className="my-2 border-white sm:mx-auto" />
        <span className="text-sm text-gray-500  sm:text-center">© 2023 <a href='/' className="hover:underline">Aditya Akhilesh</a> . All Rights Reserved.
        </span>
        </footer>


    </div>
  )
}

export default footer
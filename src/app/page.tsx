import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Home() {

  return(
    <>
    <div className=' flex items-center py-12 px-8 '> 
          <div className='flex-col justify-center md:mx-auto text-center flex items-center'>
            <div>
              <Image src='/logo.jpg' width={200} height={150} className='rounded-full shadow-2xl' alt='?'/> 
            </div>
            <div>
              <h1 className='ml-5 font-bold text-4xl mt-6'>Hey, I&#39;m Aditya Akhilesh!</h1>
                <br/>
                <p className='text-center flex text-lg mt-2 mb-6 px-24'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link href='/portfolio/projects' className="mt-2 text-neutral text-white md:hover:text-black font-semibond px-6 py-3 bg-violet-600 rounded-full"  >
                Projects
              </Link>
            </div>
          </div>
         
          <div className="group relative">
              <button className="cursor-pointer transform rotate-0  transition-transform duration-700 absolute right-2 group-hover:rotate-90">
                  ▶
              </button>
              <div className="h-70 p-4  hidden flex-col shadow-md border mt-8  group-hover:block">
                <ul>
                  <li className="my-4"> 
                    <Link href=''>
                      <FontAwesomeIcon size="2xl" icon={faTwitter} />
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href=''>
                      <FontAwesomeIcon size="2xl" icon={faEnvelope} />
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href=''>
                      <FontAwesomeIcon size="2xl" icon={faGithub} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        </div> 
 
    </>

  )
}

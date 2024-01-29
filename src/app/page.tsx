import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { getImageSource } from '@/utils/getImageSource';


export default function Home() {
  const imageUrl = getImageSource();
  console.log(imageUrl)
  return(
    <>
    <div className=' flex items-center py-12 px-8 '> 
          <div className='flex-col justify-center md:mx-auto text-center flex items-center'>
            <div>
              <Image src={imageUrl+'/logo.jpg'} width={200} height={150} className='rounded-full shadow-2xl' alt='?'/> 
            </div>
            <div>
              <h1 className='ml-5 font-bold text-4xl mt-6'>Hey, I&#39;m Aditya Akhilesh!</h1>
                <br/>
                <p className='text-center text-lg mt-2 mb-6 px-4 md:px-8 lg:px-16 xl:px-24 
                transition-all duration-500 ease-in-out transform hover:scale-105 '>
                As a dedicated Master&apos;s student in Computer Engineering at Iowa State University, 
                my academic focus revolves around computing and networking systems, supplemented by a keen interest in data science. 
                Holding a Bachelor&apos;s degree in Electrical and Electronics Engineering, I bring a diverse skill set to the table.
                My experiences include serving as a Graduate Teaching Assistant and a Graduate Research Assistant at Iowa State University, where I actively contributed to the academic community. 
                Additionally, I have practical exposure through a rewarding internship in a data science role. Proficient in Python, SDLC, and well-versed in the data science domain,
                I am enthusiastic about exploring opportunities in the software tech industry to apply and enhance my skills.
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

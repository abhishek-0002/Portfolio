import React from 'react'
import './about.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import { getImageSource } from '@/utils/getImageSource';

const About = () => {
  const imageUrl = getImageSource();
  const skills = ['C','Java','Python','Machine Learning', 'Data Analysis']
  const experiences = [
    {
      title: 'Graduate Teaching Assistant',
      company:'Iowa State University',
      date:'Aug 2023- Present',
      description:'Teaching Assistant for SE-185 Problem Solving in Software Engineering',
      skills: ['Python(Programming Language)', 'C(Prgamming Language)'],
      companyLink: ''
    },
    {
      title: 'Graduate Research Assistant',
      company:'Iowa State University',
      date:'Dec 2022- Jul 2023',
      description:'Teaching Assistant for SE-185 Problem Solving in Software Engineering',
      skills: ['Python(Programming Language)', 'Machine Learning', 'Data Analysis', 'Data Visualization'],
      companyLink: ''
    },
    {
      title: 'Data Science Intern',
      company:'Rubixe',
      date:'Dec 2021- May 2022',
      description:'Teaching Assistant for SE-185 Problem Solving in Software Engineering',
      skills: ['Python(Programming Language)', 'Machine Learning', 'Data Analysis', 'Data Visualization'],
      companyLink: ''
    },
    
  ]

  return (
      <>
        <div className='py-24'>
          {/* {Introduction} */}
          <div className=''>
            <h1 className='text-green-800 text-3xl md:text-4xl text-center mt-8 font-extralight font-sans'>Exploring Aditya!</h1>
            <hr className='mx-auto h-1 bottom-4 transform -translate-x-1/2 w-12 mt-4 mb-2 bg-sky-600'></hr>
            <p className="animate-fadeIn md:flex py-6 px-6 text-base md:text-lg mb-1 transition-all ease-in-out duration-300 transform hover:scale-105 font-serif">
              Welcome to my world of innovation, education, and transformation.
              I&apos;m Aditya, a tech enthusiast and educator on a mission to make a difference.
              As a Graduate Teaching Assistant at Iowa State University, I&apos;m nurturing
              the next generation of tech leaders while pursuing my Master&apos;s in Computer Engineering.
              Join me in this journey of limitless possibilities!
            </p>
            <h1 className="text-1xl flex justify-around md:text-lg font-extralight mb-2 animate-fadeIn text-emerald-800">
               -------- Exploring the Boundaries of Technology ------- 
            </h1>
          </div>
          {/* {Experience and Education} */}
          <div className='animate-fadeIn'>
            <h1 className='font-semibold md:text-3xl flex  font-sansjustify-between px-4 m-2 mb-2 py-2'>Experience & Education</h1>
            <hr/>
            <div className="mb-1 px-4 m-2 py-2 flex justify-between">
              <div>
                <h3 className="text-xl font-medium">Master&apos;s in Computer Engineering</h3>
                <p className="text-lg font-light">Your University Name</p>
              </div>
              <p className='text-lg font-light'>Year-Present</p>
            </div>
            <hr/>
            <div className="px-4 m-2 py-2 mb-8 flex justify-between">
              <div>
                <h3 className="text-xl font-medium">Bachelor of Technology in Electronics and Electronics Engineering</h3>
                <p className="text-lg font-light">Your University Name</p>
              </div>
              <p className="text-lg font-light">Year - Year</p>
            </div>
          </div>

          {/* {SKILLS} */}
          <div className='animate-fadeIn flex items-center '>
            {/* {Image} */}
            <div className='md:p-8 mb-2 ml-8 '>
             <Image src={imageUrl+'/skills.png'} alt='image failed' width={300} height={300}></Image>
            </div>
            <div className='ml-8'>
             <h1 className='mt-10 font-semibold md:text-3xl flex font-sans justify-between px-4 m-2 mb-2 py-2'>Skills</h1>
             <hr/>
             {/* {list of skills} */}
             <div>
                <div className='flex flex-wrap sm:flex'>
                  {skills.map((skill:any,index:any)=>(
                    <div key={index} className=' lg:w-1/4 sm:w-1/2 w-full bg-white shadow-lg rounded-lg p-2 m-4 transition-all ease-in-out duration-300 transform hover:scale-105'>
                      <h2 className='md:text-xl text-center text-black font-semibold'>{skill}</h2>
                    </div>
                  ))}
                </div>
             </div>
            </div>
          </div>

          {/* {Experience} */}
      
            <div className='flex '>
              <div>
                <h1 className='font-semibold md:text-3xl flex font-sans justify-between px-4 m-2 py-2'>Experience</h1>
                <hr className='mb-8'/>

                {/* {list of experiences} */}
                <div className='flex flex-wrap'>
                  {experiences.map((experience:any,index:any) => (
                  <div key={index} className='text-black w-auto py-1'>
                    <div className='p-6 max-w-sm bg-white h-full md:h-full rounded-lg shadow-md m-4'>
                      <h2 className='text-lg font-semibold p-2' >{experience.title}</h2>
                      <div className='flex justify-between p-2'>
                        <p className='text-sm'>{experience.company}</p>
                        <p className='text-sm mx-3'>{experience.date}</p>
                      </div>
                    
                      <p className='text-sm mt-2 p-2'>{experience.description}</p>
                      <div className='mt-2 mb-2 p-2'>
                        <p className='text-sm font-semibold'>Key Skills</p>
                        <ul className='text-sm'>
                          {experience.skills.map((skill:any,index:any)=>(
                          <li key={index} className='flex flex-wrap w-full'>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      {/* <a href='' target='_blank' rel="noopener noreferrer" className='p-2 text-blue-600  hover:underline'>Visit</a>  */}
                    </div>
                  </div>
                  ))}
                </div>
              </div>

              {/* {experience logo} */}
              <div className=' w-auto'>
                <Image src={imageUrl+'/experience.png'} className='rounded-full ' alt='image not found' width={200} height={200}></Image>
              </div>
              
            </div>
       

          {/* {Download Resume} */}
          <div className='p-8 mb-4 ml-8'>
            <div className='flex justify-end'>
              <Link href={imageUrl+'/Aditya_CV_.pdf'} target='_blank' className="text-neutral text-white md:hover:text-black font-semibond px-6 py-3 bg-violet-600 rounded-full"  >
                Resume
                <span>
                <FontAwesomeIcon className='ml-2' icon={faDownload} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </>
  )
}

export default About
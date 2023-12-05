import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './projects.css'

const projects = () => {
  const projects_list =[
    {
      name:'',
      description:'',
      technology:[],
      image:'',

    },
    {
      name:'',
      description:'',
      technology:[],
      image:'',

    },
    {
      name:'',
      description:'',
      technology:[],
      image:'',

    }
  ]
  return (
    <>
      <div className='flex mb-40 '>
        <div className='flex flex-wrap gap-4'>
          {
            projects_list.map((proj:any,index:any) =>(
              <div key={index} className=''>
                <div className='m-4 p-8 w-auto shadow-2xl rounded-xl h-full animate-zoomIn'>
                  <Image className='p-2 rounded-xl shadow' src='/project_image2.jpg' alt='image not found' width={150} height={150}></Image>
                  <h1 className='text-bold text-lg p-2'>Project Title</h1>
                  <h4 className='p-2'>Description</h4>
                  <p className='text-semibold text-md p-2'>Technology list</p>
                  <div className='mt-8'>
                    <Link href='' className='p-2 text-blue-600 hover:underline' target='_blank' >Github
                    <span className='text-blue-600 mx-2'>
                    <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
                    </Link>
                  </div> 
                </div>
              </div>
            ))
          }
        </div>
        {/* {Image} */}
     
        
      </div>
    </>
  
  )
}

export default projects
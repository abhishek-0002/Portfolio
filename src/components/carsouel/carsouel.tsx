'use client'
import React, { useState } from 'react'
import {BsFillArrowRightCircleFill } from 'react-icons/bs'
import Image from 'next/image';

interface CarsouelProps {
    slides: string[]; // Assuming that the slides are URLs to images
  }
 export const Carsouel: React.FC<CarsouelProps> = ({ slides }) => {
    
    let [current, setCurrent] = useState(0);

    let previousSlide = () =>{
        if(current===0){
            setCurrent(slides.length-1)
        }
        else{
            setCurrent(current-1)
        }
    }
    let nextSlide = () =>{
        if(current === slides.length-1 ){
            setCurrent(0);
        }
        else{
            setCurrent(current-1)
        }
    }

  return (
    <>
    <div className='overflow-hidden relative'>
        <div className={`flex transition ease-out duration-500 translate-x-[-${current * 100}]`}>
            {slides.map((s:any) =>{
                return <Image width={5000} height={1000} src={s} alt='?' key={s}/>

            })}
        </div>
        <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
            <button onClick={previousSlide}>
                <BsFillArrowRightCircleFill/>
            </button>
            <button onClick={nextSlide}>
                <BsFillArrowRightCircleFill/>
            </button>
        </div>
        <div className='absolute bottom-0 py-4 flex justify-center ga-3 w-full'>
            {slides.map((s:any,i:any) => {
                return(
                    <div onClick={()=>{
                        setCurrent(i)
                    }} key={"circle" + i} className={`rounded-full w-5 h-5 cursor-pointer ${i==current?'bg-white':'bg-gray-500'}`}>
                    
                    </div>
                )
            })
            }
        </div>
    </div>
    </>
  )
}

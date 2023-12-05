'use client'
import React, { useEffect, useState } from 'react'
import {useTheme} from 'next-themes'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import ReactSwitch from 'react-switch'
import  './themeswitcher.css'
const Darkbutton = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    },[])

    const currentTheme = theme === "system" ? systemTheme : theme;

    if(!mounted) {
        return null;
    }
    return (
        <>
        <div className='toggle-switch'>
            <div className='switch-container'>
                <ReactSwitch 
                id="theme-switch" 
                height={15} 
                width={45} 
                onColor='#000' 
                uncheckedIcon={false} 
                onChange={() =>setTheme(currentTheme === 'dark' ? 'light': 'dark')} checked={currentTheme==='dark'}/>
            </div>

            <div className='theme-image'>            
            {
                currentTheme === "dark" ? 
                ( <BsFillSunFill className="h-4 w-5 cursor-pointer" onClick={() =>setTheme("light")}/> ) :
                (<BsFillMoonFill className="h-4 w-5 cursor-pointer" onClick={() =>setTheme("dark")} />)
            }
            </div>
        </div>
        </>
  )
}

export default Darkbutton
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./aboutMe.css"
import Media from './Media'
import ProfileDvp from './ProfileDvp'
import DataSkills from "./skills.json"
import Title from './Title'

const useMousePosition =()=>{
    const [mousePosition, setMousePosition] = useState({x:0,y:0})

    useEffect(() => {
      
        const updateMousePosition = event =>{
            setMousePosition({x:event.clientX,y: event.clientY})
        }
        window.addEventListener('mousemove', updateMousePosition)
        return ()=>window.removeEventListener('mousemove',updateMousePosition)
    }, [])
    

    return mousePosition
}

const AboutMe = () => {

    const [activeIndex, setActiveIndex] = useState(-1)
    const {x,y}= useMousePosition()

    console.log(x,y);
  return (
    <div className='about_container'>
        <div className='skills_data'>
            <div className='my_skills'>
                {DataSkills.map((item , index)=>(
                    <Title item={item} key={index} index={index} setActiveIndex={setActiveIndex} />
                ))}
            </div>
            <div className='skills_media'>
                {DataSkills.map((media, index)=>{
                    const isActive = index === activeIndex
                    const xpos= isActive ? x : 0
                    const ypos= isActive ? y :0
                   return(<Media 
                            url={media} 
                            key={index} 
                            active={isActive}
                            x={xpos}
                            y={ypos} 
                           />
                        ) 
                })}
            </div>
            <div className='about_me'><ProfileDvp/></div>
        </div>
        
    </div>
  )
}

export default AboutMe
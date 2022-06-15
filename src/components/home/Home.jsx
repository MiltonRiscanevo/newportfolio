import React from 'react'
import "./home.css"
import Profile from "../imagenes/img.jpg"

const Home = () => {
  return (
    <div className='home'>
        <div className='photo_btn'>
            <img src={Profile} alt="" className='profile_photo' />
            <a href="#sec1" className='btn_profile'>Know me</a>
        </div>
        
        <div className='introduction_data'>
            <h1 className='title_profile'>Milton Riscanevo</h1>
            <h2 className='sub_title'>Web <span>Developer</span></h2>
            <p className='description'>Una pasion es algo que tu te enfocas en trabajar
                cuando la vas puliendo te das cuenta, que la
                satisfacción es lo que realmente te da felicidad
            </p>
        </div>
        
    </div>
  )
}

export default Home
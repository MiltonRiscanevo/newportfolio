import React from 'react'
import "./section.css"
const Section1 = () => {
  return (
    <div id='sec1' className='sec_1_container'>
        <div className='link_proyects'>
        <a href="#title1"><h3>Proyect 1</h3></a>
        <a href="#title2"><h3>Proyect 2</h3></a>
        <a href="#title3"><h3>Proyect 3</h3></a>
        </div>
        <div className='container_title_proyects'>
            <div id='title1'>
                <h1 >WEATER APP</h1>
            </div>
            <div id='title2'>
                <h1 >CRUD</h1>
            </div>
            <div id='title3'>
                <h1 >E-COMMERCE</h1>
            </div>
            

        </div>
    </div>
  )
}

export default Section1
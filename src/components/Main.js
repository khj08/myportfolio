import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

import man from './assets/man.png'

import './styles/Main.scss'

const Main = () => {
  return (
    <div className='main'>
        
      <div className="main__container">
        
        <div className="main__content">

          <div className="text">

            <p>Hey There</p>
            <h1>I am Katherine</h1>
            <p>Create Art Directo & Designer</p>

            <div className="icons">

            <Twitter className='icon'/>
            <Instagram className='icon'/>
            <Facebook className='icon'/>
            <LinkedIn className='icon'/>
            <Pinterest className='icon'/>

            </div>

            <div className="buttons">

                <button>See My Work</button>
                <button>Hire Me</button>

            </div>        
                      
          </div>
          
        </div>

        <div className="main__img">
            <img src={man} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Main;
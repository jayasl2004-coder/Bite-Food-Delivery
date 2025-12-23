import React from 'react'
import './Appdowload.css'
import { assets } from '../../assets/assets'

function Appdowload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/>BiteUp App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdowload
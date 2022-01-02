import React from 'react'
import "./CallUs"
import {FaTwitterSquare} from "react-icons/fa"
import {FaSnapchatSquare} from "react-icons/fa"
import {SiTelegram} from "react-icons/si"
import {FaWhatsappSquare} from "react-icons/fa"




export default function AboutUs() {


    return (
        <div>

            <div className='about'>
                <h1>حساباتنا على السوشال ميديا </h1>

                <div className='row'>
                    <div className='aboutContain'>
                        {/* <h2>Twitter</h2> */}
                        <FaTwitterSquare className='butt tw'/><h4>@balansTw.ksa</h4>
                    </div>
                    <div className='aboutContain'>
                        {/* <h2>Snapchat</h2> */}
                        <FaSnapchatSquare className='butt sn'/><h4>@balansSn.ksa </h4>
                    </div>
                    <div className='aboutContain'>
                        {/* <h2>Telegram</h2> */}
                        <SiTelegram className='butt tel'/><h4>@balansTel.ksa </h4>
                    </div>
                    <div className='aboutContain'>
                        {/* <h2>whatsApp</h2> */}
                        <FaWhatsappSquare className='butt wh'/><h4> 0506179014 </h4>
                    </div>
                    


                </div>
                
            


            
            </div>

        </div>
    )
}
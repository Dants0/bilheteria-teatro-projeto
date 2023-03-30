import React from 'react'

import { InstagramLogo, VideoCamera, WhatsappLogo } from 'phosphor-react'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container_title">
                <h4>
                    Desenvolvido Por Filipe e Rafael
                </h4>
                <span className='theater'>Theater <VideoCamera size={28} color="#6d6d0d" weight="light" className='icons' /></span>
                <div className="more_info">
                    <InstagramLogo size={28} color="#6d6d0d" weight="light" className='icons'/>
                    <WhatsappLogo size={28} color="#6d6d0d" weight="light" className='icons' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
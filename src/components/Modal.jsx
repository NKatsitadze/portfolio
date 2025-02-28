import { useState, useRef } from 'react'
import { motion } from "motion/react"
import './Modal.css'
import Magnifier from './Magnifier'

function Modal ({content, closeProjectModal}) {
    
    const [visibility, setVisibility] = useState(true)
    const closeModal = () => {
        setVisibility(false)
        closeProjectModal()
    }
    
    const projectImageDesktop = content.html_url + `/blob/${content.default_branch}/public/desktop.webp?raw=true`
    const projectImageTablet = content.html_url + `/blob/${content.default_branch}/public/tablet.webp?raw=true`
    const projectImagePhone = content.html_url + `/blob/${content.default_branch}/public/phone.webp?raw=true`

    // const projectsContent = <>{[projectImageDesktop, projectImageTablet, projectImagePhone].map((each, i) => {return <img className='modal__image' key={i} src={each}/>})}</>
    const projectsContent = <>{[projectImageDesktop, projectImageTablet, projectImagePhone].map((each, i) => {return <img className='modal__image' key={i} src={each}/>})}</>


    return (
        <>
            <motion.div 
                className={'modal'}
                animate={{ opacity: visibility ? 1 : 0 }} 
                transition={{ duration: 0.15 }} 
                onClick={() => closeModal()}>
                    <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                        {content.type === 'iframe' ?
                            <iframe 
                                src={content.props.src} 
                                width="100%" 
                                height="100%" 
                                allowFullScreen
                            ></iframe> 
                            : projectsContent}
                    <button onClick={closeModal} className='modal__close-button'>x</button>
                    </div>
            </motion.div>
        </>
    )
}

export default Modal

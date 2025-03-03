import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import './Modal.css'
import CloseModalButton from './CloseModalButton'

function Modal ({content, closeProjectModal}) {
    
    const [visibility, setVisibility] = useState(true)
    const closeModal = () => {
        setVisibility(false)
        closeProjectModal()
    }

    const escapeHandler = (e) => {
        if(e.code === 'Escape') closeModal()
    }

    useEffect(() => {
        if(visibility) {
            window.addEventListener('keydown', escapeHandler)
        } else {
            window.removeEventListener('keydown', escapeHandler)
        }

        return () => {
            window.removeEventListener("keydown", escapeHandler)
        }

    }, [visibility])
    
    const projectImageDesktop = content.html_url + `/blob/${content.default_branch}/public/desktop.webp?raw=true`
    const projectImageTablet = content.html_url + `/blob/${content.default_branch}/public/tablet.webp?raw=true`
    const projectImagePhone = content.html_url + `/blob/${content.default_branch}/public/phone.webp?raw=true`

    const projectsContent = <>{[projectImageDesktop, projectImageTablet, projectImagePhone].map((each, i) => {return <img className='modal__image' key={i} src={each} loading="lazy"/>})}</>

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
                    <CloseModalButton closeModal={closeModal}/>
                    </div>
            </motion.div>
        </>
    )
}

export default Modal

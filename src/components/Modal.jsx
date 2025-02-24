import { useState } from 'react'
import { motion } from "motion/react"
import './Modal.css'

function Modal ({repo, closeProjectModal}) {
    const [visibility, setVisibility] = useState(true)
    const closeModal = () => {
        setVisibility(false)
        closeProjectModal()
    }

    return (
        <>
            <motion.div 
                className={'modal'}
                animate={{ opacity: visibility ? 1 : 0 }} 
                transition={{ duration: 0.15 }} 
                onClick={() => closeModal()}>
                    {repo.name}
            </motion.div>
        </>
    )
}

export default Modal

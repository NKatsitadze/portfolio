import './Modal.css'
import './Magnifier.css'
import { useState } from 'react'

function Magnifier (children) {
    const [visibility, setVisibility] = useState(false)
    const [position, setPosition] = useState({x:0, y:0})
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0})

    const mouseMoveHandler = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect() 
        setVisibility(true)
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100
        setPosition({ x, y })
        setCursorPosition({ x: e.clientX - left, y: e.clientY - top })

    }


    return (
        <><div className='img-magnifier-container'
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            onMouseMove={mouseMoveHandler}
            >

            <img className='modal__image' src={children.src} alt="project-image" /> 

{        visibility &&     <div style={{position: 'absolute', zIndex: 50, left: `${cursorPosition.x - 100}px`, top:`${cursorPosition.y - 100}px`, pointerEvents: 'none'}}>
                <div className='magnifier-image' style={{ backgroundImage: `url(${children.src})`, backgroundPosition: `${position.x}% ${position.y}%`}}>

                    
                </div>
            </div>}
        </div>
        </>
    )

}

export default Magnifier
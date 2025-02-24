import { useRef } from 'react';
import './Footer.css'

const Footer = () => {
    const iframeRef = useRef()

    function openModal(e) {
        // e.preventDefault()
        iframeRef.current.style.display = "block";
      }
      function closeModal() {
        iframeRef.current.style.display = "none";
      }


    return (
        <>
        <footer className="footer">
            {/* <a href='/' className='footer__link'>Mail</a> */}
            <a href="mailto:nikakatsitadze98@gmail.com" className='footer__link'>Gmail</a>
            <a href='https://www.linkedin.com/in/nika-katsitadze/' target='_blank' className='footer__link'>LinkedIn</a>
            <a href='https://github.com/NKatsitadze' target='_blank' className='footer__link'>GitHub</a>
            <button onClick={openModal} className='footer__link'>PDF</button>

            
        </footer>

        <div ref={iframeRef} className="footer__modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;CLOSEEEEE</span>
                <iframe src="../src/assets/resume-nika-katsitadze.pdf" width="100%" height="500px"></iframe>
            </div>
        </div>

        </>
    )
}

export default Footer
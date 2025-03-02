import './Footer.css'

const Footer = (children) => {
    const basePath = import.meta.env.BASE_URL
    const iframeElement = <iframe src={`${basePath}resume-nika-katsitadze.pdf`}></iframe>

    return (
        <>
            <footer className="footer">
                <a href="mailto:nikakatsitadze98@gmail.com" className='footer__link'>Gmail</a>
                <a href='https://www.linkedin.com/in/nika-katsitadze/' target='_blank' className='footer__link'>LinkedIn</a>
                <a href='https://github.com/NKatsitadze' target='_blank' className='footer__link'>GitHub</a>
                <a href='/' onClick={(e) => {e.preventDefault();children.openProjectModal(iframeElement)}} className='footer__link'>PDF</a>
            </footer>
        </>
    )
}

export default Footer

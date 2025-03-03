import './Footer.css'

const Footer = (children) => {
    const basePath = import.meta.env.BASE_URL
    const iframeElement = <iframe src={`${basePath}resume-nika-katsitadze.pdf`}></iframe>

    const links = [
        {
            label: "Gmail",
            href: "mailto:nikakatsitadze98@gmail.com",
            src: "gmail.svg"
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/nika-katsitadze/",
            src: "linkedin.svg"
        },
        {
            label: "GitHub",
            href: "https://github.com/NKatsitadze",
            src: "github.svg"
        },
        {
            label: "Resume/PDF",
            href: "/",
            src: "resume.svg",
            iframe: true
        },
    ]

    const handleFooterLink = (e, containsIframe) => {
        if(containsIframe) {
            e.preventDefault()
            children.openProjectModal(iframeElement)
        } 
    }

    return (
        <>
            <footer className="footer">
                {links.map((link, i) => {
                    return (
                        <div key={i} className='footer__link-container'>
                            <img className='footer__link-image' src={link.src} alt={`${link.label} svg`} />
                            <a href={link.href} onClick={(e) => handleFooterLink(e, link.iframe)} target='_blank' className='footer__link'>{link.label}</a>
                        </div>
                    )
                })}
            </footer>
        </>
    )
}

export default Footer

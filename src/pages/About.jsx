import styles from './css/About.module.css'

const contactLinks = [
  {
    label: 'Gmail',
    href: 'mailto:nikakatsitadze98@gmail.com',
    icon: 'gmail.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nika-katsitadze/',
    icon: 'linkedin.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NKatsitadze',
    icon: 'github.svg',
  },
  {
    label: 'Resume (PDF)',
    href: '/resume-nika-katsitadze.pdf',
    icon: 'resume.svg',
  },
]

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Let’s Connect</h2>
      <p className={styles.subtitle}>Feel free to reach out via any of the platforms below.</p>

      <div className={styles.links}>
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img src={link.icon} alt={`${link.label} icon`} className={styles.icon} />
          </a>
        ))}
      </div>
    </section>
  )
}

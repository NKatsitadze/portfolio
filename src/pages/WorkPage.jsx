import Accordion from "../components/Accordion"
import styles from './css/WorkPage.module.css'

export default function WorkPage() {
  const identomatDetails = [
    {
      title: "Dashboard",
      description: `Developed a comprehensive dashboard to oversee identity verification sessions. It presents key session data including status (approved, rejected, manual check, abandoned), rejection reasons and facial similarity scores.
                    Clients can filter sessions by date and companies to analyze performance trends or investigate specific cases. The dashboard also highlights real-time sanctions checks, document validation results and video call insights — such as session count and total duration.
                    Built with usability in mind, it helps compliance and operations teams quickly assess identity outcomes and make informed decisions without needing to dig through raw data.`,
      src: "/videos/dashboard.mp4",
    },
    {
      title: "Configurations",
      description: `Worked alongside the team on building a flexible configuration system that allows teams to customize the structure and behavior of identity verification flows. Users can define general settings like public URL, language, session rules and notifications, while also visually managing the steps of the session through a drag-and-drop interface.
                    Each session step can be reordered and fully customized through an intuitive panel. This setup makes it easy to build tailored verification experiences without writing code, adapting to different business or regulatory needs with just a few clicks.`,
      src: "/videos/configs.mp4",
    },
    {
      title: "Video call",
      description: `Contributed to the development of a real-time video call system built with Twilio, designed to enable secure communication between users and operators during the identity verification process. The system supports both single and multi-participant calls, with operators able to manually initiate sessions.
                    While the user progresses through the verification flow, the video call remains active, allowing operators to provide live assistance when needed. Virtual background support was also added to enhance user privacy and experience. This feature was developed collaboratively to ensure smoother, more guided identity checks.`,
      src: "/videos/call.mp4",
    },
    {
      title: "Company settings",
      description: `Developed the frontend for a company settings page that displays and manages configuration details for each client company in the system. Each company has its own customizable profile, including branding (logos, favicons, login images, virtual backgrounds), company colors, security and verification rules, authentication methods, communication providers and callback settings.
                    The backend logic and service modules were handled by a colleague, while I focused on building the entire frontend interface — ensuring a clear, intuitive experience for managing complex company-level settings.`,
      src: "/videos/company.mp4",
    },
    {
      title: "UI library",
      description: `Contributed extensively to our internal UI library containing over 30 reusable components, focusing on accessibility, responsiveness and developer experience. The library ensures consistency across all projects and speeds up development by providing polished, modular building blocks.`,
      type: 'image',
      src: "/design-system.png",
    }
  ]

  const bitoidDetails = [
    {
      title: "Bitoid projects",
      description: `Completed a focused training program at Bitoid, where I built multiple frontend projects using JS/React under the guidance of senior developers. The projects were designed to simulate real-world challenges, helping me strengthen my skills in building scalable, accessible, and responsive UIs. Throughout the process, I received in-depth code reviews that improved my understanding of clean architecture, performance optimization, and maintainability. I also collaborated with a team using Git and modern development workflows, gaining practical experience in component-based design and problem-solving in a collaborative environment.`,
      type: 'image',
      src: "/group.png",
    }
  ]

  return (
    <section className="flex flex-col gap-4">
      <Accordion title="Identomat">
        <div className="grid gap-4">
          {identomatDetails.map((item, idx) => (
            <div key={idx} className={`${styles['work-item']} flex gap-4 items-start`}>
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles['feature-video']}
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles['feature-video']}
                />
              )}
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Accordion>
      <Accordion title="Bitoid">
        <div className="grid gap-4">
          {bitoidDetails.map((item, idx) => (
            <div key={idx} className={`${styles['work-item']} flex gap-4 items-start`}>
              <img
                src={item.src}
                alt={item.title}
                className={styles['feature-video']}
              />
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Accordion>
    </section>
  )
}

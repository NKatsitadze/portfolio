import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import ProjectDetailsBox from "./ProjectDetailsBox";
import './Section.css'


function Section (children) {
    const ref = useRef(null)
    const inView = useInView(ref, { threshold: 0.1 }) // Trigger when 30% visible
    const controls = useAnimation()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [inView, controls])

    const variants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    }

    const linkMap = {
      projects: 'projects',
      experience: 'work',
      "tech-stack": 'about-contact'
    }

    return (
        <>
          <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`section ${children.type} section-adjust`}
          >
            <div className='section-header'>
              <h2 className='text-l b'>{children.section}</h2>
            </div>
            <div className={`details-box ${children.doubleGrid ? 'double' : children.tripleGrid  ? 'triple' : 'single'}-column-grid `}>
              {children.renderData.map((data) => (
                <ProjectDetailsBox key={data.id} type={children.section.toLowerCase()} {...data} openProjectModal={children.openProjectModal} flexColumn={children.flexColumn}/>
              ))}
            </div>
              <div className='view-button text-m'>
                <NavLink to={`/${linkMap[children.type]}`}>View more</NavLink>
              </div>
          </motion.section>
        </>
    )
}

export default Section

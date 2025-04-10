import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ProjectDetailsBox from "./ProjectDetailsBox";
import ToggleDisplayMode from "./ToggleDisplayMode";

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

    const projectsRef = useRef()

    const setGridDisplay = (gridDisplay) => {
      if(gridDisplay) {
        projectsRef.current.classList.add('double-column-grid')
        projectsRef.current.classList.remove('single-column-grid')
      } else {
        projectsRef.current.classList.remove('double-column-grid')
        projectsRef.current.classList.add('single-column-grid')
      }
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
              {children.doubleGrid &&
                  <ToggleDisplayMode setGridDisplay={setGridDisplay}/>
              }
            </div>
            <div ref={projectsRef} className={`details-box ${children.doubleGrid ? 'double' : children.tripleGrid  ? 'triple' : 'single'}-column-grid `}>
              {children.renderData.map((data) => (
                <ProjectDetailsBox key={data.id} type={children.section.toLowerCase()} {...data} openProjectModal={children.openProjectModal} flexColumn={children.flexColumn}/>
              ))}
            </div>
          </motion.section>
        </>
    )
}

export default Section

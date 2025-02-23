import { useRef } from "react";
import ProjectDetailsBox from "./ProjectDetailsBox";

function Section (children) {

    const projectsRef = useRef()

    const setColumnsOne = () => {
        projectsRef.current.classList.remove('double-column-grid')
        projectsRef.current.classList.add('single-column-grid')
      }
    
      const setColumnsTwo = () => {
        projectsRef.current.classList.add('double-column-grid')
        projectsRef.current.classList.remove('single-column-grid')
      }

    return (
        <>
        <section className='section-adjust'>
          <div className='section-header'>
            <div className='text-l'>{children.section}</div>
            {children.containsGrid &&
                <div className='grid-actions'>
                <button onClick={setColumnsOne}>A</button>
                <button onClick={setColumnsTwo}>B</button>
                </div>
            }
          </div>
          <div ref={projectsRef} className={`details-box ${children.type === 'experience' ? 'single' : 'double'}-column-grid `}>
            {children.renderData.map((data) => (
              <ProjectDetailsBox key={data.id} type={children.section.toLowerCase()} {...data} openProjectModal={children.openProjectModal}/>
            ))}
          </div>
        </section>
        </>
    )
}

export default Section
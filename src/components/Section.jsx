import { useRef } from "react";
import ProjectDetailsBox from "./ProjectDetailsBox";
import ToggleDisplayMode from "./ToggleDisplayMode";

function Section (children) {

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
        <section className='section-adjust'>
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
        </section>
        </>
    )
}

export default Section

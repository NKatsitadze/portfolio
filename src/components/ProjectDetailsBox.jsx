import './ProjectDetailsBox.css'

function ProjectDetailsBox (details) {
    let imageUrl = '/'
    let startDate = new Date()
    let datesString = ''
    
    if(details.type === "experience") {
        startDate = new Date(details.start)
        const endDate = details.end ? new Date(details.end) : undefined
        const endDateString = endDate ? `${String(endDate.getDate()).padStart(2, '0')}/${String(endDate.getMonth()).padStart(2, '0')}/${String(endDate.getFullYear()).padStart(2, '0')}` : 'Present'
        datesString = `${String(startDate.getDate()).padStart(2, '0')}/${String(startDate.getMonth()).padStart(2, '0')}/${String(startDate.getFullYear()).padStart(2, '0')} - ${endDateString}`

    } else if (details.type === "projects") {
        imageUrl = details.html_url + `/blob/${details.default_branch}/public/desktop.webp?raw=true`
        startDate = new Date(details.created_at)
        datesString = startDate.getFullYear()
    }

    if(details.type !== "projects") imageUrl = details.logo

    
    if(details.type === 'tech-stack') console.log(details.stack)

    return (
        <>
            <div className={`project-card ${details.flexColumn ? 'flex-column unset-max-height' : ''}`}>
                <img src={imageUrl} className={`project-card__image ${details.type === 'tech-stack' ? 'adjust-image' : ''} ${details.type === 'experience' ? 'sticky decreased-width' : ''}`} onClick={() => details.openProjectModal(details.name)} alt={`${details.company_name || 'project'} img`} />
                <div className='project-card__details'>
                        <div>
                            <div className="project-card__header">
                                {details.type === 'projects' && <div className='project-card__title'>{ details.name} - {datesString}</div>}

                                {details.type === 'experience' && 
                                    <div className='project-card__title text-center'>
                                        <div className='text-l'>{details.company_name}</div>
                                        <div className='text-m'>{ details.position}, {`${datesString}`}</div>
                                    </div>
                                }
                                
                                {details.type === 'projects' &&
                                    <button className='project-card__modal-button' onClick={() => details.openProjectModal(details.name)}>+</button>
                                }
                            </div>
                            {details.type === 'projects' && <div className='project-card__description'>{details.description}</div>}
                            {details.type === 'experience' && (details.responsibilities.map((each, i) => { return <div key={i}>{String.fromCharCode(8226)} {each}</div> }))}
                            {details.type === 'tech-stack' && (details.stack.map((each, i) => { return <div key={i}>{each}</div> }))}
                        </div>

                    {details.type === 'projects' &&
                        <div className='project-card__actions'>
                            <a href={details.html_url} target='_blank'>Repo</a>
                            <a href={details.homepage} target='_blank'>Demo</a>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsBox
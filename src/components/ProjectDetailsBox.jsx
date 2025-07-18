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
    if(details.type !== "projects") {
        const basePath = import.meta.env.BASE_URL
        imageUrl = `${basePath}${details.logo}`
    } 

    return (
        <>
            <div className={`project-card ${details.flexColumn ? 'flex-column unset-max-height' : ''}`}>
                <img src={imageUrl} loading="lazy" className={`project-card__image ${details.type === 'tech-stack' ? 'adjust-image' : ''} ${details.type === 'experience' ? 'decreased-width' : ''}`} onClick={() => details.openProjectModal(details.name)} alt={`${details.company_name || 'project'} image`} />
                <div className='project-card__details'>
                        <div className='project-card__description'>
                            <div className="project-card__header b">
                                {details.type === 'projects' && <div className='project-card__title'>{ details.name} - {datesString}</div>}
                                {details.type === 'experience' && 
                                    <div className='project-card__title text-center b'>
                                        <div>
                                            <h3 className='text-l b'>{details.company_name}</h3>
                                            <div className='text-m'>{ details.position}, {`${datesString}`}</div>
                                        </div>
                                    </div>
                                }
                            </div>
                            {details.type === 'projects' && <div className='project-card__description'>{details.description}</div>}
                            <ul className={details.type === 'tech-stack' ? 'tech-ul' : ''}>
                                {details.type === 'experience' && (details.responsibilities.map((each, i) => { return <li key={i}>{String.fromCharCode(8226)} {each}</li> }))}
                                {details.type === 'tech-stack' && (details.stack.map((each, i) => { return <li key={i}>{String.fromCharCode(8226)} {each}</li> }))}
                            </ul>
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
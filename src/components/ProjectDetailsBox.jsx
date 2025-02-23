import './ProjectDetailsBox.css'

function ProjectDetailsBox (details) {
    let imageUrl = '/'
    let startDate = new Date()
    
    if(details.type === "experiences") {
        imageUrl = details.logo
        startDate = new Date(details.start)

    } else if (details.type === "projects") {
        imageUrl = details.html_url + `/blob/${details.default_branch}/public/desktop.webp?raw=true`
        startDate = new Date(details.created_at)
    }

    return (
        <>
            <div className='project-card'>
                <img src={imageUrl} className='project-card__image' onClick={() => details.openProjectModal(details.name)} alt={`${details.company_name || 'project'} img`} />
                <div className='project-card__details'>
                        <div>
                            <div className='project-card__header'>
                                <div className='project-card__title'>{details.name} - {startDate.getFullYear()}</div>
                                {details.type === 'projects' &&
                                    <button className='project-card__modal-button' onClick={() => details.openProjectModal(details.name)}>+</button>
                                }
                            </div>
                            {details.type === 'projects' ? (
                                <div className='project-card__description'>{details.description}</div> ) :
                                (details.responsibilities.map(each => {
                                    <div>{each}</div>
                                }))
                            }
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
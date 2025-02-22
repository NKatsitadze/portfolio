import './ProjectDetailsBox.css'

function ProjectDetailsBox ({ name, description, html_url, default_branch, homepage, created_at, openProjectModal }) {
    const projectImageUrl = html_url + `/blob/${default_branch}/public/desktop.webp?raw=true`
    const creationDate = new Date(created_at)

    return (
        <>
            <div className='project-card'>
                <img src={projectImageUrl} className='project-card__image' onClick={() => openProjectModal(name)} alt="project image" />
                <div className='project-card__details'>
                        <div>
                            <div className='project-card__header'>
                                <div className='project-card__title'>{name} - {creationDate.getFullYear()}</div>
                                <button className='project-card__modal-button' onClick={() => openProjectModal(name)}>+</button>
                            </div>
                            <div className='project-card__description'>{description}</div>
                        </div>

                    <div className='project-card__actions'>
                        <a href={html_url} target='_blank'>Repo</a>
                        <a href={homepage} target='_blank'>Demo</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsBox
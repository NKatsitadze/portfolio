import { useState, useEffect, useRef, Fragment } from 'react'
import ProjectDetailsBox from './components/ProjectDetailsBox'
import Modal from './components/Modal'
import { handleScroll } from '../helpers'
import Experience from '../experience.json'
import About from '../about.json'

import './App.css'
import './index.css'
import './Fonts.css'

function App() {

  const [repositories, setRepositories] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [targetedRepo, setTargetedRepo] = useState({})
  const [experience, setExperience] = useState()

  const openProjectModal = (name) => {
    setTargetedRepo(repositories.find(e => e.name === name))
    setShowModal(true)
  }

  const closeProjectModal = () => setShowModal(false)

  useEffect(() => {
    handleScroll(showModal)
  }, [showModal])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NKatsitadze/repos")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        let repos = await response.json()
        repos = repos.filter(e => e.stargazers_count > 0) // filters by stared repositories
        setRepositories(repos)
      } catch (err) {
        // setError(err)
      } finally {
        // setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (

    <>

      {showModal && <Modal closeProjectModal={closeProjectModal} repo={targetedRepo}/>}

      <section className='section-owner'>
        <img className='owner-image' src={repositories[0]?.owner.avatar_url || '/'} alt="image" />
        <div>
          <h1 className='text-xl'>{About.name}</h1>
          <div className='text-l'>{About.role}</div>
        </div>
        <div>{About.story}</div>
      </section>

      <section className='section-adjust'>
          <div className='text-l'>Experience</div>
          <div className='experiences'>
            {Object.values(Experience).map((exp) => (
              // <ProjectDetailsBox key={exp.id} {...exp} openProjectModal={openProjectModal}/>
              <div className='' key={exp.id}>{exp.company_name}</div>
            ))}
          </div>
        </section>

      <section className='section-adjust'>
          <div className='text-l'>Projects</div>
          <div className='projects'>
            {repositories.map((repo) => (
              <ProjectDetailsBox key={repo.id} {...repo} openProjectModal={openProjectModal}/>
            ))}
          </div>
        </section>

    </>
  )
}

export default App

import { useState, useEffect, useRef, Fragment } from 'react'
import Modal from './components/Modal'
import { handleScroll } from '../helpers'
import Experience from '../experience.json'
import TechStack from '../tech-stack.json'
import About from '../about.json'

import './App.css'
import './index.css'
import './Fonts.css'
import Section from './components/Section'

function App() {
  const [repositories, setRepositories] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [targetedRepo, setTargetedRepo] = useState({})

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
        // repos = repos.filter(e => e.stargazers_count > 0) // filters by stared repositories
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
        <img className='section-owner__image' src={repositories[0]?.owner.avatar_url || '/'} alt="image" />
        <div>
          <h1 className='text-xl'>{About.name}</h1>
          <div className='text-l'>{About.role}</div>
        </div>
        <div>{About.story}</div>
      </section>

      <Section section={"Experience"} type="experience" renderData={Object.values(Experience)}/>
      <Section section={"Projects"} type="projects" renderData={repositories.filter(e => e.stargazers_count > 0)} openProjectModal={openProjectModal} doubleGrid/>
      <Section section={"Tech-stack"} type="tech-stack" renderData={Object.values(TechStack)} tripleGrid flexColumn/>

      <Section section={"Education"} type="education" renderData={[]}/>
    </>
  )
}

export default App

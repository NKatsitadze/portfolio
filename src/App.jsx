import { useState, useEffect } from 'react'
import Modal from './components/Modal'
import Footer from './components/Footer'
import Section from './components/Section'
import { handleScroll } from '../helpers'
import Experience from '../experience.json'
import TechStack from '../tech-stack.json'
import About from '../about.json'

import './App.css'
import './index.css'
import './Fonts.css'

function App() {
  const [repositories, setRepositories] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const openProjectModal = (content) => {
    if(typeof content === 'string') setModalContent(repositories.find(e => e.name === content))
    if(typeof content === 'object') setModalContent(content)
    setShowModal(true)
  }

  const closeProjectModal = () => setShowModal(false)

  useEffect(() => {
    handleScroll(showModal)
    return () => handleScroll(false)
  }, [showModal])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NKatsitadze/repos")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const repos = await response.json()
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
      {showModal && <Modal closeProjectModal={closeProjectModal} content={modalContent}/>}
      <section className='section-owner'>
        <img className='section-owner__image' src={repositories[0]?.owner.avatar_url || '/'} alt="image of owner" loading="lazy"/>
        <div>
          <h1 className='text-xl'>{About.name}</h1>
          <h2 className='text-l b'>{About.role}</h2>
        </div>
        <p>{About.story}</p>
      </section>

      <Section section={"Experience"} type="experience" renderData={Object.values(Experience)}/>
      <Section section={"Projects"} type="projects" renderData={repositories.filter(e => e.stargazers_count > 0)} openProjectModal={openProjectModal} doubleGrid/>
      <Section section={"Tech-stack"} type="tech-stack" renderData={Object.values(TechStack)} tripleGrid flexColumn/>
      <Footer openProjectModal={openProjectModal} closeProjectModal={closeProjectModal}/>
    </>
  )
}

export default App

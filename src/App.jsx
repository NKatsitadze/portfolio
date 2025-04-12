import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './components/Modal'
import Footer from './components/Footer'
import Section from './components/Section'
import OwnerSection from './components/OwnerSection'
import { handleScroll } from '../helpers'
import Experience from '../experience.json'
import TechStack from '../tech-stack.json'
import About from '../about.json'

import './App.css'
import './index.css'
import './Fonts.css'
import './Medias.css'

function App() {
  const [repositories, setRepositories] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
    const timeout = setTimeout(() => setIsLoading(false), 1000) // 1 second delay
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NKatsitadze/repos")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const repos = await response.json()
        setRepositories(repos.sort((a,b) => b.created_at.slice(0,4) - a.created_at.slice(0,4)))
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
<AnimatePresence>
  {isLoading && (
    <motion.div
      className="loading-overlay"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 2, ease: 'easeInOut', delay: 1 }} // Delay fade-out to show overlay longer
    >
      <motion.div
        className="loader-content"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h1 className="loader-title">
          N.K.{' '}
          <motion.span
            className="blaze"
            animate={{ 
              textShadow: [
                '0 0 0px #DDDDDD', 
                '0 0 8px #DDDDDD', 
                '0 0 16px #DDDDDD', 
                '0 0 0px #DDDDDD'
              ],
              color: ['#DDDDDD', '#fff', '#DDDDDD'],
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            portfolio
          </motion.span>
        </h1>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {showModal && <Modal closeProjectModal={closeProjectModal} content={modalContent}/>}
      <OwnerSection repositories={repositories} about={About}/>
      <Section section={"Projects"} type="projects" renderData={repositories.filter(e => e.stargazers_count > 0)} openProjectModal={openProjectModal} doubleGrid/>
      <Section section={"Experience"} type="experience" renderData={Object.values(Experience)}/>
      <Section section={"Tech-stack"} type="tech-stack" renderData={Object.values(TechStack)} tripleGrid flexColumn/>
      <Footer openProjectModal={openProjectModal} closeProjectModal={closeProjectModal}/>
    </>
  )
}

export default App

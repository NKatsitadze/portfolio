import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import Section from '../components/Section'
import OwnerSection from '../components/OwnerSection'
import { handleScroll } from '../../helpers'
import Experience from '../../experience.json'
import TechStack from '../../tech-stack.json'
import About from '../../about.json'

function HomePage({ repositories }) {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const openProjectModal = (content) => {
    if (typeof content === 'string') setModalContent(repositories.find(e => e.name === content))
    if (typeof content === 'object') setModalContent(content)
    setShowModal(true)
  }

  const closeProjectModal = () => setShowModal(false)

  useEffect(() => {
    handleScroll(showModal)
    return () => handleScroll(false)
  }, [showModal])

  return (
    <>
      <AnimatePresence>
        {showModal && <Modal closeProjectModal={closeProjectModal} content={modalContent} />}
      </AnimatePresence>

      <OwnerSection repositories={repositories} about={About} />
      <Section section="Projects" type="projects" renderData={repositories.filter(e => e.stargazers_count > 0).slice(0,4)} openProjectModal={openProjectModal} doubleGrid />
      <Section section="Experience" type="experience" renderData={Object.values(Experience)} />
      <Section section="Tech-stack" type="tech-stack" renderData={Object.values(TechStack)} tripleGrid flexColumn />
      <Footer openProjectModal={openProjectModal} closeProjectModal={closeProjectModal} />
    </>
  )
}

export default HomePage

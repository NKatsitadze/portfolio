import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import WorkPage from './pages/WorkPage'
import About from './pages/About'

import './App.css'
import './index.css'
import './Fonts.css'
import './Medias.css'

function Layout({ repositories }) {
  return (
    <>
      <Header />
      <main className='main-container' style={{ flex: 1, overflow: 'auto', paddingTop: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <Outlet context={{ repositories }} />
      </main>
    </>
  )
}

function App() {
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NKatsitadze/repos")
        if (!response.ok) throw new Error("Network response was not ok")
        const repos = await response.json()
        setRepositories(repos.sort((a, b) => b.created_at.slice(0, 4) - a.created_at.slice(0, 4)))
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout repositories={repositories} />,
      children: [
        {
          index: true,
          element: <HomePage repositories={repositories} />
        },
        {
          path: 'projects',
          element: <ProjectsPage repositories={repositories}/>
        },
        {
          path: 'work',
          element: <WorkPage/>
        },
        {
          path: 'about-contact',
          element: <About/>
        }
      ]
    }
  ])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-overlay"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
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
                    color: ['#DDDDDD', '#fff', '#DDDDDD']
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

      {!isLoading && <RouterProvider router={router} />}
    </>
  )
}

export default App

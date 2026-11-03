import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Sports from './pages/Sports'
import Membership from './pages/Membership'
import Coaches from './pages/Coaches'
import Events from './pages/Events'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="font-display text-9xl font-black text-lime">404</p>
        <h1 className="font-display text-4xl font-bold mt-3">PAGE NOT FOUND</h1>
        <p className="text-gray-400 mt-4">Looks like this page has left the arena.</p>
        <a href="/" className="lime-button mt-7">Back to home</a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}

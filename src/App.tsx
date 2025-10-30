import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Admin from './pages/Admin'
import './App.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/')
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      navigate(path)
    }
  }

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo" onClick={() => handleNavigation('/')}>
          ✨ RAVAL
        </div>
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('services')}>Serviços</a></li>
          <li><a onClick={() => handleNavigation('/catalogo')}>Catálogo</a></li>
          <li><a onClick={() => scrollToSection('gallery')}>Galeria</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>✨ RAVAL</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          Transformando ideias em realidade desde 2020
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
          © 2025 RaVal. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

function App() {
  const location = useLocation()
  
  // Esconde header e footer na página admin
  const isAdminPage = location.pathname === '/admin'

  return (
    <div className="app">
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </div>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper

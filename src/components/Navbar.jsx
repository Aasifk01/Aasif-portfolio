import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const Navbar = () => {
  //  the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  // the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false)

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    //scroll listner
    window.addEventListener('scroll', handleScroll)
    
    // Clean up the listener when the component is removed
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // List of navigation links
  const navLinks = [
    { name: 'Home', href: '/Home' },
    { name: 'About', href: '/About' },
    { name: 'Skills', href: '/Skills' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Contact', href: '/Contact' },
  ]

  return (

    
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-black/10 dark:border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-slate-800 dark:text-white"
        >
          Aasif<span className="text-cyan-500">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-white">
            {/* Toggle between Menu and X icon */}
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (

    
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-black/10 dark:border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="container flex items-center justify-between px-6 mx-auto">
        
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
        <div className="items-center hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium transition-colors text-slate-600 dark:text-slate-300 hover:text-cyan-500"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
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
        <div className="border-b md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-black/10 dark:border-white/10">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                className="text-lg font-medium transition-colors text-slate-600 dark:text-slate-300 hover:text-cyan-500"
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

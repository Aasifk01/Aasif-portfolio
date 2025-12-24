import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Aasif Khan. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

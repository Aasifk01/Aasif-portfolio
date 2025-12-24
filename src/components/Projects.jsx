import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'


const Projects = () => {
  // Array of project
  const projects = [
    {
      title: 'HelpingPaws',
      description: 'A MERN Stack Animal Rescue Platform to facilitate the rescue of injured and stray animals. Features image upload, live location tracking with Position Stack API, broadcast feeds for NGOs with automated SMS alerts, and PWA capabilities for offline submissions.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'PWA', 'Position Stack API'],
      image: '/Logo.jpg',
      githubLink: 'https://github.com/Aasifk01/Helping-Paws',
    },
    {
      title: 'iNOTEBOOK',
      description: 'A Secure Cloud Note-Taking App with RESTful backend using Node.js, Express.js, and MongoDB. Features React.js front-end with JWT authentication, modular components for dashboard and note management, and scalable architecture for CRUD operations.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      image: '/NoteBook.jpg',
      githubLink: '#',
    },
    
  ]

  return (
    <section id="projects" className="py-24 bg-transparent dark:bg-slate-900/50">
      <div className="container px-6 mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-widest uppercase text-cyan-500 dark:text-cyan-400"
          >
            Recent Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden border shadow-xl group bg-white dark:bg-slate-800/50 rounded-3xl border-slate-200 dark:border-white/10"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                {/* Tags (e.g., React, Node.js) */}
                <div className="flex gap-3 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold border rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
                
                {/* Links to Demo and Code */}
                <div className="flex gap-6">
                  <a href="#" className="flex items-center gap-2 font-medium transition-colors text-slate-500 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 font-medium transition-colors text-slate-500 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

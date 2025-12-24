import { motion } from 'framer-motion'
import { Code2, Server, Database } from 'lucide-react'


const Skills = () => {
  // Array of skills 
  const skills = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-12 h-12 text-cyan-400" />,
      description: 'React, HTML5, CSS3, Tailwind CSS, GSAP',
    },
    {
      title: 'Backend',
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      description: 'Node.js, Express, Core Java',
    },
    {
      title: 'Database',
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      description: 'MongoDB, MySQL',
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 dark:text-cyan-400 uppercase tracking-widest font-bold text-sm"
          >
            My Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4"
          >
            Technical Skills
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // Stagger the animations
              transition={{ delay: index * 0.1 }}
              // Lift the card slightly 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl text-center group transition-all"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{skill.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

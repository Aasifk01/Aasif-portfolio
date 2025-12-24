import { motion } from 'framer-motion'


const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent dark:bg-slate-900/50">
      <div className="container px-6 mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-widest uppercase text-cyan-500 dark:text-cyan-400"
          >
            Get To Know Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl"
          >
            About Me
          </motion.h2>
        </div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 border shadow-xl glass md:p-12 rounded-3xl"
          >
            <p className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I am a passionate MERN Stack Developer. I love building web applications 
              that are both beautiful and functional. I enjoy learning new technologies 
              and solving complex problems.
            </p>
            
            <p className="mb-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              My goal is to create high-quality software that provides a great user 
              experience. I am always looking for opportunities to grow as a developer.
            </p>

            {/* Grid for Info Items */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col">
                <span className="mb-2 font-bold text-cyan-600 dark:text-cyan-400">Location:</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">Bangalore, Karnataka</span>
              </div>
              <div className="flex flex-col">
                <span className="mb-2 font-bold text-cyan-600 dark:text-cyan-400">Experience:</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">MERN Stack Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

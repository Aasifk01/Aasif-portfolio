import { motion } from 'framer-motion'
import ThreeDModel from './ThreeDModel'

const Hero = () => {
  const handleDownloadResume = () => {
    // Open in new tab
    window.open('/Asif-Khan-.pdf', '_blank');
    // Trigger download
    const link = document.createElement('a');
    link.href = '/Asif-Khan-.pdf';
    link.download = 'Aasif_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // 'min-h-screen' makes the section take up at least the full height of the screen
    <section id="home" className="flex items-center min-h-screen pt-20 overflow-hidden">
      <div className="container grid items-center gap-12 px-6 mx-auto md:grid-cols-2">
        
        {/* Left Side: Text Content */}
        {/* motion.div allows us to animate the entire block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when visible
          transition={{ duration: 0.9 }} // Animation takes 0.9 seconds
        >
          <h5 className="mb-4 text-xl font-medium text-cyan-500 dark:text-cyan-400">Hello, I'm</h5>
          
          <h1 className="mb-6 text-6xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-8xl">
            Aasif <br />
            {/* Gradient text using Tailwind classes */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              Khan
            </span>
          </h1>
          
          <h2 className="mb-8 text-2xl md:text-3xl text-slate-700 dark:text-slate-400">
            MERN Stack Developer
          </h2>
          
          <p className="max-w-lg mb-10 text-lg text-slate-600 dark:text-slate-400">
            I build modern websites and web applications. I specialize in React.Js, 
            Tailwind CSS, and the MERN stack.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-6">
            <a href="#projects" className="px-8 py-3 font-bold transition-all border-2 rounded-full hover:text-slate-950 hover:shadow-lg border-cyan-500 hover:bg-cyan-400 text-cyan-500">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 font-bold transition-all border-2 rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-950">
              Let's Talk
            </a>
            <button onClick={handleDownloadResume} className="px-4 py-2.5 font-bold transition-all border-2 rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-950">
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Start smaller and invisible
          whileInView={{ opacity: 1, scale: 1 }} // Grow to full size and fade in
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <ThreeDModel />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

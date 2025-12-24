import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'


const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 dark:text-cyan-400 uppercase tracking-widest font-bold text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4"
          >
            Contact Me
          </motion.h2>
        </div>

        {/* Contact Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Let's discuss your project</h3>
            
            <div className="space-y-8">
              {/* Email Info */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex justify-center items-center text-cyan-500 dark:text-cyan-400 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Email</p>
                  <p className="text-slate-900 dark:text-white font-medium">aasif@example.com</p>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex justify-center items-center text-cyan-500 dark:text-cyan-400 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Location</p>
                  <p className="text-slate-900 dark:text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()} 
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
              />
              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
              />
            </div>
            
            {/* Message Textarea */}
            <textarea 
              placeholder="Message" 
              rows="5"
              className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
            ></textarea>
            
            {/* Submit Button */}
            <button className="w-full py-4 bg-cyan-500 text-white dark:text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 transition-all flex justify-center items-center gap-2">
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

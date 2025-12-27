import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("sending")

    try {
      // FormSubmit.co - Zero configuration email service
      // Configured to make emails look like they're from the user
      const response = await fetch("https://formsubmit.co/ajax/aasifkhan3756@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,  // Sets user's email as reply-to
          _subject: `Portfolio Contact: Message from ${formData.name}`,
          _template: "box",  // Clean template
          _captcha: "false"  // Disable captcha for smooth UX
        })
      })

      const data = await response.json()
      console.log('FormSubmit Response:', data)

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        // Auto-hide success message after 5 seconds
        setTimeout(() => setStatus(""), 5000)
      } else {
        setStatus("error")
        console.error("Form submission failed. Status:", response.status)
      }
    } catch (error) {
      setStatus("error")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
                  <a href="mailto:aasifkhan3756@gmail.com" className="text-slate-900 dark:text-white font-medium hover:text-cyan-500 transition-colors">aasifkhan3756@gmail.com</a>
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
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Aasifk01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl flex justify-center items-center text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 transition-all shadow-md">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/asif-khan-73990124b" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl flex justify-center items-center text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 transition-all shadow-md">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
            onSubmit={handleSubmit} 
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                required
                className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
              />
              {/* Email Input */}
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                required
                className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
              />
            </div>
            
            {/* Message Textarea */}
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              rows="5"
              required
              className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400"
            ></textarea>
            
            {/* Status Messages */}
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 text-green-600 border border-green-500/20 bg-green-500/10 rounded-2xl"
              >
                <CheckCircle2 size={20} />
                <span>Message sent successfully!</span>
              </motion.div>
            )}
            
            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 text-red-600 border border-red-500/20 bg-red-500/10 rounded-2xl"
              >
                <AlertCircle size={20} />
                <span>Failed to send message. Please try again.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-cyan-500 text-white dark:text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 transition-all flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Youtube, Instagram, Twitter, Send, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { socialLinks, personalInfo } from '@/data'

const iconMap = {
  Youtube: Youtube,
  Mail: Mail,
  Instagram: Instagram,
  Twitter: Twitter,
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('🎉 Your message has been sent successfully! Thank you for reaching out. I\'ll get back to you within 24 hours.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Clear success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 8000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Failed to send message. Please check your connection and try again.')
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden transition-all duration-300 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
              'text-white'
            }`}>
              Let's <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              'text-gray-400'
            }`}>
              Ready to create something amazing? Whether you need a custom AMV, want to collaborate, or just want to say hello, I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                  'text-white'
                }`}>Get in Touch</h3>
                <p className={`leading-relaxed mb-8 transition-colors duration-300 ${
                  'text-gray-400'
                }`}>
                  I'm always excited to work on new projects and collaborate with fellow anime enthusiasts. 
                  Drop me a message and let's bring your vision to life!
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                <motion.div
                  className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                    'bg-white/5 border-white/10'
                  }`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      'text-white'
                    }`}>Email</div>
                    <div className={`transition-colors duration-300 ${
                      'text-gray-400'
                    }`}>zenoeditz444@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                    'bg-white/5 border-white/10'
                  }`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      'text-white'
                    }`}>Location</div>
                    <div className={`transition-colors duration-300 ${
                      'text-gray-400'
                    }`}>{personalInfo.location}</div>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                    'bg-white/5 border-white/10'
                  }`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      'text-white'
                    }`}>Response Time</div>
                    <div className={`transition-colors duration-300 ${
                      'text-gray-400'
                    }`}>Usually within 24 hours</div>
                  </div>
                </motion.div>
              </div>

              {/* Social links */}
              <div>
                <h4 className={`text-xl font-bold mb-6 transition-colors duration-300 ${
                  'text-white'
                }`}>Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                    
                    return (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group backdrop-blur-sm p-4 rounded-2xl border transition-all duration-300 ${
                          'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                          'bg-white/5 border-white/10 hover:border-white/30'
                        }`} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className={`backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 ${
                'bg-white/5 border-white/10 hover:border-white/30'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  'text-white'
                }`}>Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status message */}
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl flex items-center gap-3 ${
                        submitStatus === 'success' 
                          ? 'bg-green-600/20 border border-green-600/30 text-green-400'
                          : 'bg-red-600/20 border border-red-600/30 text-red-400'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span>{submitMessage}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={`block font-semibold mb-2 transition-colors duration-300 ${
                        'text-white'
                      }`}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full border rounded-xl px-4 py-3 transition-all duration-300 disabled:opacity-50 focus:outline-none focus:border-cyan-400 ${
                          'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block font-semibold mb-2 transition-colors duration-300 ${
                        'text-white'
                      }`}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full border rounded-xl px-4 py-3 transition-all duration-300 disabled:opacity-50 focus:outline-none focus:border-cyan-400 ${
                          'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={`block font-semibold mb-2 transition-colors duration-300 ${
                      'text-white'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full border rounded-xl px-4 py-3 transition-all duration-300 disabled:opacity-50 focus:outline-none focus:border-cyan-400 ${
                        'bg-white/5 border-white/10 hover:border-white/30'
                      }`}
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block font-semibold mb-2 transition-colors duration-300 ${
                      'text-white'
                    }`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows={6}
                      className={`w-full border rounded-xl px-4 py-3 resize-none transition-all duration-300 disabled:opacity-50 focus:outline-none focus:border-cyan-400 ${
                        'bg-white/5 border-white/10 hover:border-white/30'
                      }`}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Quick links */}
              <div className={`backdrop-blur-sm rounded-3xl p-6 border transition-all duration-300 ${
                'bg-white/5 border-white/10 hover:border-white/30'
              }`}>
                <h4 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  'text-white'
                }`}>Quick Actions</h4>
                <div className="space-y-3">
                  <motion.a
                    href="https://youtube.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-red-600/20 border border-red-600/30 text-red-400 hover:bg-red-600/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Youtube className="w-5 h-5" />
                    Subscribe to Channel
                  </motion.a>
                  <motion.a
                    href="mailto:your.email@example.com?subject=Collaboration Inquiry"
                    className="flex items-center gap-3 p-3 rounded-xl bg-blue-600/20 border border-blue-600/30 text-blue-400 hover:bg-blue-600/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-5 h-5" />
                    Email Directly
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



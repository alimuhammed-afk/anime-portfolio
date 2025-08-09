'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Clock, Phone, MapPin, Send, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "zenoeditz444@gmail.com",
      description: "Send me an email for project inquiries or collaborations",
      action: "mailto:zenoeditz444@gmail.com",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Response Time",
      subtitle: "Within 24 hours",
      description: "I typically respond to all inquiries within 24 hours",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MessageSquare,
      title: "Project Consultation",
      subtitle: "Free consultation",
      description: "Let's discuss your anime editing project and bring your vision to life",
      color: "from-cyan-500 to-blue-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Contact <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to create something amazing? Whether you need a custom AMV, want to collaborate, or just want to say hello, I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with fellow anime enthusiasts. 
                  Drop me a message and let's bring your vision to life!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${method.color} p-3 rounded-xl flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-cyan-400 font-medium mb-2">{method.subtitle}</p>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                        {method.action && (
                          <motion.a
                            href={method.action}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mt-3 text-sm"
                            whileHover={{ x: 5 }}
                          >
                            Send Email →
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <motion.div
                className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                variants={itemVariants}
              >
                <h3 className="text-white font-bold text-lg mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-cyan-400 font-medium">How long does a typical AMV take to create?</p>
                    <p className="text-gray-400">Most projects take 1-2 weeks depending on complexity and length.</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-medium">Do you work with copyrighted anime content?</p>
                    <p className="text-gray-400">Yes, all work falls under fair use for artistic and educational purposes.</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-medium">What's your pricing structure?</p>
                    <p className="text-gray-400">Pricing varies by project scope. Contact me for a free consultation and quote.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
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
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 disabled:opacity-50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 disabled:opacity-50"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 disabled:opacity-50"
                      placeholder="Project inquiry, collaboration, etc."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
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

              {/* Additional Contact Info */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-white font-bold text-lg mb-4">Why Work With Me?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Professional quality anime music videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Fast turnaround times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Collaborative approach to bring your vision to life</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Experienced with various anime genres and styles</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Play, Heart, Youtube, Mail, Instagram, Twitter } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data'

const iconMap = {
  Youtube: Youtube,
  Mail: Mail,
  Instagram: Instagram,
  Twitter: Twitter,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
    <footer className="bg-gray-900 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Play className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{personalInfo.name}</div>
                  <div className="text-gray-400 text-sm">{personalInfo.channelName}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                {personalInfo.tagline}
              </p>
              
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'Services', href: '#services' },
                  { name: 'Live Stats', href: '#stats' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                  
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  )
                })}
              </div>
              <p className="text-gray-400 text-sm">
                Stay updated with the latest anime edits and behind-the-scenes content!
              </p>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            variants={itemVariants}
          >
            <div className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <motion.a
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#contact"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="w-6 h-6 text-white transform rotate-180">
              ↓
            </div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

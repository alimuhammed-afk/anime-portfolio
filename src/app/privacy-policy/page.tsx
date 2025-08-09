'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, Cookie, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal Information: When you contact us through our website, we may collect your name, email address, and any information you provide in your message.",
        "Usage Data: We may collect information about how you access and use our website, including your IP address, browser type, and pages visited.",
        "Cookies: We use cookies to enhance your browsing experience and analyze website traffic."
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide customer support",
        "To improve our website and services",
        "To send periodic emails regarding your inquiry or other products and services",
        "To analyze website usage and optimize user experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "We implement appropriate security measures to protect your personal information",
        "Your data is stored securely and access is limited to authorized personnel only",
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share your information only when required by law or to protect our rights"
      ]
    },
    {
      icon: Cookie,
      title: "Cookies Policy",
      content: [
        "We use cookies to remember your preferences and improve your experience",
        "You can choose to disable cookies through your browser settings",
        "Disabling cookies may affect the functionality of our website",
        "We use Google Analytics to analyze website traffic and usage patterns"
      ]
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Privacy <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 border border-pink-500/20"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us:
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-cyan-400">Email: zenoeditz444@gmail.com</p>
                <p className="text-gray-400">We will respond to your inquiry within 24 hours.</p>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">Access & Portability</h3>
                  <p className="text-gray-300">You have the right to request copies of your personal data.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">Rectification</h3>
                  <p className="text-gray-300">You have the right to request correction of inaccurate data.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">Erasure</h3>
                  <p className="text-gray-300">You have the right to request deletion of your personal data.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">Object</h3>
                  <p className="text-gray-300">You have the right to object to processing of your data.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

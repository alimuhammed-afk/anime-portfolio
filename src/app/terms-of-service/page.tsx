'use client'

import { motion } from 'framer-motion'
import { FileText, Users, Shield, AlertTriangle, Copyright, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms may be updated from time to time, and continued use constitutes acceptance of any changes."
      ]
    },
    {
      icon: FileText,
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials"
      ]
    },
    {
      icon: Shield,
      title: "Disclaimer",
      content: [
        "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied.",
        "We do not warrant that the functions contained in the materials will be uninterrupted or error-free.",
        "We do not warrant or make any representations regarding the use or the results of the use of the materials in terms of their correctness, accuracy, reliability, or otherwise."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations",
      content: [
        "In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.",
        "This includes damages for loss of data or profit, or due to business interruption.",
        "This limitation applies even if we have been notified orally or in writing of the possibility of such damage.",
        "Some jurisdictions do not allow limitations on implied warranties or liability, so these limitations may not apply to you."
      ]
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content: [
        "All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, and software, is our property or the property of our content suppliers.",
        "All anime content used is for educational and artistic purposes under fair use guidelines.",
        "You may not reproduce, distribute, or create derivative works from any content without explicit written permission.",
        "Any unauthorized use of the content may violate copyright laws, trademark laws, and other applicable laws."
      ]
    }
  ]

  const serviceTerms = [
    {
      title: "Video Editing Services",
      terms: [
        "All custom video editing work requires a 50% deposit before work begins",
        "Final payment is due upon delivery of the completed project",
        "Revisions are limited to 3 rounds of feedback per project",
        "Copyright of source material remains with original creators; we provide editing services only"
      ]
    },
    {
      title: "Communication",
      terms: [
        "Response time for inquiries is typically within 24 hours",
        "All project communications should be conducted through official channels",
        "Clients are responsible for providing clear project requirements and feedback",
        "We reserve the right to refuse projects that violate copyright or contain inappropriate content"
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Terms of <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Service</span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Please read these Terms of Service carefully before using our website and services. These terms govern your use of our website and services.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>

          {/* General Terms */}
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">General Terms</h2>
            </motion.div>

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
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
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

            {/* Service-Specific Terms */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">Service-Specific Terms</h2>
            </motion.div>

            {serviceTerms.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                <div className="space-y-4">
                  {service.terms.map((term, termIndex) => (
                    <div key={termIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{term}</p>
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
                <h2 className="text-2xl font-bold text-white">Questions About These Terms?</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-cyan-400">Email: zenoeditz444@gmail.com</p>
                <p className="text-gray-400">We will respond to your inquiry within 24 hours.</p>
              </div>
            </motion.div>

            {/* Agreement */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

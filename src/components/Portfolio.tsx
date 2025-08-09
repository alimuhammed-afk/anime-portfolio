'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Eye, Filter } from 'lucide-react'
import { portfolioVideos, PortfolioVideo } from '@/data'
import { cn } from '@/lib/utils'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null)

  const categories = ['All', 'AMV', 'Edit', 'Compilation', 'Tutorial']

  const filteredVideos = selectedCategory === 'All' 
    ? portfolioVideos 
    : portfolioVideos.filter(video => video.category === selectedCategory)

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
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500"></div>
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore my collection of anime edits, AMVs, and compilations that have captivated millions of viewers
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                )}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </motion.div>

          {/* Video grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            layout
          >
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedVideo(video)}
                layout
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                  {/* Video thumbnail */}
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        video.category === 'AMV' && "bg-pink-500 text-white",
                        video.category === 'Edit' && "bg-purple-500 text-white",
                        video.category === 'Compilation' && "bg-cyan-500 text-white",
                        video.category === 'Tutorial' && "bg-yellow-500 text-black"
                      )}>
                        {video.category}
                      </span>
                    </div>
                    {/* Views */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">{video.views}</span>
                    </div>
                  </div>

                  {/* Video info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video embed */}
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {selectedVideo.views} views
                    </span>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold",
                      selectedVideo.category === 'AMV' && "bg-pink-500 text-white",
                      selectedVideo.category === 'Edit' && "bg-purple-500 text-white",
                      selectedVideo.category === 'Compilation' && "bg-cyan-500 text-white",
                      selectedVideo.category === 'Tutorial' && "bg-yellow-500 text-black"
                    )}>
                      {selectedVideo.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-300 leading-relaxed">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

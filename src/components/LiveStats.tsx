'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Users, Eye, Video, TrendingUp, Play, Heart } from 'lucide-react'
import { creatorStats } from '@/data'
import { formatNumber } from '@/lib/utils'

export default function LiveStats() {
  const [isLive, setIsLive] = useState(true)
  const [animatedStats, setAnimatedStats] = useState({
    subscribers: 0,
    views: 0,
    videos: 0,
    likes: 0
  })

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        subscribers: prev.subscribers + Math.floor(Math.random() * 3),
        views: prev.views + Math.floor(Math.random() * 100),
        videos: creatorStats.videosCount,
        likes: prev.likes + Math.floor(Math.random() * 10)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Initialize with base stats
  useEffect(() => {
    setAnimatedStats({
      subscribers: creatorStats.subscribers,
      views: creatorStats.totalViews,
      videos: creatorStats.videosCount,
      likes: 45000 // Initial likes count
    })
  }, [])

  const stats = [
    {
      icon: Users,
      label: 'Subscribers',
      value: animatedStats.subscribers,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/20',
      change: '+12'
    },
    {
      icon: Eye,
      label: 'Total Views',
      value: animatedStats.views,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      change: '+2.1K'
    },
    {
      icon: Video,
      label: 'Videos',
      value: animatedStats.videos,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/20',
      change: '+2'
    },
    {
      icon: Heart,
      label: 'Total Likes',
      value: animatedStats.likes,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/20',
      change: '+89'
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
    <section className="py-16 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
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
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-green-400 font-semibold text-lg">LIVE STATS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Channel Performance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-time analytics from my YouTube channel. Watch the numbers grow as more people discover amazing anime content!
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {stat.change}
                    </div>
                  </div>

                  <div className="mb-2">
                    <motion.div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      key={stat.value} // Key change triggers re-animation
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {formatNumber(stat.value)}
                    </motion.div>
                  </div>

                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min((stat.value / 1000000) * 100, 100)}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Live indicator */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <motion.div
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white font-semibold">Live Updates Every 5 Seconds</span>
              <Play className="w-4 h-4 text-gray-400" />
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://youtube.com/@ZenoEditz_444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              Subscribe for More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

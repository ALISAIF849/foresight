import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'Summer Campaign 2024',
      status: 'completed',
      thumbnail: 'https://via.placeholder.com/400x225/667eea/ffffff?text=Video+1',
      createdAt: '2 days ago',
      assets: 12
    },
    {
      id: '2',
      name: 'Product Launch Video',
      status: 'processing',
      thumbnail: 'https://via.placeholder.com/400x225/f093fb/ffffff?text=Video+2',
      createdAt: '5 hours ago',
      assets: 8
    },
  ])

  const createNewProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: `New Project ${projects.length + 1}`,
      status: 'draft',
      thumbnail: 'https://via.placeholder.com/400x225/4facfe/ffffff?text=New+Project',
      createdAt: 'Just now',
      assets: 0
    }
    setProjects([newProject, ...projects])
    navigate(`/upload/${newProject.id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Casकैड</h1>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Page Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-2">Projects</h2>
            <p className="text-gray-600">Manage your content projects</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={createNewProject}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium shadow-lg hover:bg-gray-900 transition"
          >
            <span className="text-xl">+</span>
            New Project
          </motion.button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => {
                if (project.status === 'completed') {
                  navigate(`/results/${project.id}`)
                } else {
                  navigate(`/upload/${project.id}`)
                }
              }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  {project.status === 'completed' && (
                    <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                      ✓ Complete
                    </span>
                  )}
                  {project.status === 'processing' && (
                    <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
                      ⏳ Processing
                    </span>
                  )}
                  {project.status === 'draft' && (
                    <span className="px-3 py-1 rounded-full bg-gray-500 text-white text-xs font-medium">
                      📝 Draft
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {project.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{project.createdAt}</span>
                  <span>{project.assets} assets</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Create New Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
            onClick={createNewProject}
            className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all duration-300 cursor-pointer group flex items-center justify-center min-h-[300px]"
          >
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center mx-auto mb-4 transition">
                <span className="text-3xl text-gray-400 group-hover:text-blue-600 transition">+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create New Project</h3>
              <p className="text-sm text-gray-600">Start a new content project</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Projects', value: projects.length, icon: '📁' },
            { label: 'Total Assets', value: projects.reduce((sum, p) => sum + p.assets, 0), icon: '🎬' },
            { label: 'Completed', value: projects.filter(p => p.status === 'completed').length, icon: '✓' },
            { label: 'Processing', value: projects.filter(p => p.status === 'processing').length, icon: '⏳' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

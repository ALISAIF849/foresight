import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Upload() {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0])
    }
  }

  const handleUpload = (file) => {
    setUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            navigate(`/results/${projectId}`)
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 300)
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
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-2 text-center">
            Upload your video
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Drop your video file or click to browse
          </p>

          {/* Upload Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-3xl p-16 transition-all duration-300 ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <input
              type="file"
              id="file-upload"
              accept="video/*"
              onChange={handleChange}
              className="hidden"
            />

            {!uploading ? (
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drop your video here
                </h3>
                <p className="text-gray-600 mb-4">or click to browse</p>
                <p className="text-sm text-gray-500">
                  Supports: MP4, MOV, AVI (Max 500MB)
                </p>
              </label>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Uploading your video...
                </h3>
                <div className="max-w-md mx-auto">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className="bg-black h-3 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">{uploadProgress}% complete</p>
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Fast Processing', desc: 'AI analyzes in minutes' },
              { icon: '🎯', title: 'Smart Detection', desc: 'Finds best moments' },
              { icon: '🌍', title: 'Multi-Platform', desc: 'Optimized for all' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

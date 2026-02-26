import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { processVideo } from "../services/api"

export default function Upload() {

  const navigate = useNavigate()
  const { projectId } = useParams()

  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [videoFile, setVideoFile] = useState(null)
  const [niche, setNiche] = useState("general")

  // ============================
  // DRAG EVENTS
  // ============================

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  // ============================
  // DROP FILE
  // ============================

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0])
    }
  }

  // ============================
  // FILE SELECT
  // ============================

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0])
    }
  }

  // ============================
  // BACKEND UPLOAD
  // ============================

  const handleUpload = async (file) => {

    setVideoFile(file)
    setUploading(true)
    setUploadProgress(20)

    try {

      // Call FastAPI backend
      const result = await processVideo(file, niche)

      setUploadProgress(100)

      // Navigate with backend response
      navigate(`/results/${projectId}`, {
        state: result
      })

    } catch (error) {
      console.error("Upload failed:", error)
      setUploading(false)
    }
  }

  // ============================
  // UI
  // ============================

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Casकैड
            </h1>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to dashboard
          </button>
        </div>
      </header>

      {/* MAIN */}
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

          {/* UPLOAD AREA */}
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
              accept="video/*"
              onChange={handleChange}
              className="hidden"
              id="file-upload"
            />

            {!uploading ? (

              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >

                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6
                      L16 6a5 5 0 011 9.9M15 13l-3-3m0
                      0l-3 3m3-3v12" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drop your video here
                </h3>

                <p className="text-gray-600">
                  or click to browse
                </p>

              </label>

            ) : (

              <div className="text-center">

                <h3 className="text-xl font-semibold mb-4">
                  Processing your video...
                </h3>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-black h-3 rounded-full transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm">
                  {uploadProgress}% complete
                </p>

              </div>
            )}

          </div>

        </motion.div>
      </div>
    </div>
  )
}
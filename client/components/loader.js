import React from 'react'
import './loader.scss'

const Loader = () => {
  return (
    <div className="bg-white h-screen w-screen text-white flex justify-center items-center">
      <div className="loader bg-gray-900 p-5 rounded-full flex space-x-3">
        <div className="w-5 h-5 bg-white rounded-full animate-bounce" />
        <div className="w-5 h-5 bg-white rounded-full animate-bounce" />
        <div className="w-5 h-5 bg-white rounded-full animate-bounce" />
      </div>
    </div>
  )
}

export default Loader

import React from 'react'

const modal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
    {/* <!-- Modal content --> */}
    <div className="bg-white rounded-t-md p-4 md:p-8 lg:p-12 transform translate-y-full md:translate-y-0 mx-4 md:mx-auto max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
      <p className="text-gray-600 mb-4">Modal content goes here.</p>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Close</button>
    </div>
  </div>
  )
}

export default modal
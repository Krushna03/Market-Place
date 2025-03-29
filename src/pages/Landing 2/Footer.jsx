import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col items-center text-white">
      <h2 className="text-3xl font-semibold">Subscribe to our IoT Market Place</h2>
      <p className="text-lg mt-2">For Regular Updates</p>
      <div className="mt-4 flex items-center bg-white rounded-full p-1 shadow-md w-[90%] max-w-md">
        <input
          type="email"
          placeholder="Subscribe for IoT"
          className="flex-1 px-4 py-2 text-gray-600 rounded-l-full outline-none"
        />
        <button className="bg-[#0e57bd] text-white px-6 py-2 rounded-full font-semibold shadow-md">
          Subscribe
        </button>
      </div>
    </footer>
  )
}

export default Footer
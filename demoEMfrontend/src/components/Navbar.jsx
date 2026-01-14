import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      
      {/* Logo / Brand */}
      <h1 className="text-xl font-bold tracking-wide">
        demoEMproject
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar

import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className='hover:bg-sky-700'>The Real account</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar ()
{
    const linkClass = ( { isActive } ) =>
        `rounded-xl px-4 py-2 text-sm font-medium transition ${ isActive ? "bg-black text-white" : "bg-gray-100"
        }`

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex items-center justify-between max-w-6xl px-4 py-4">
                <div>
                    <h1>react</h1>
                    <p>react router</p>
                </div>

                <nav className="flex gap-2">
                    <NavLink to="/" className={ linkClass }>Home</NavLink>
                    <NavLink to="/about" className={ linkClass }>About</NavLink>
                    <NavLink to="/courses" className={ linkClass }>Courses</NavLink>
                    <NavLink to="/contact" className={ linkClass }>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
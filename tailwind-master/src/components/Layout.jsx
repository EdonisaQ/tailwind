import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
function Layout ( { children } )
{
    return (
        <div
            className="mon-h-screen bg-linear-to-br from-slate-50 to-gray-100 text-gray-900">
            <Navbar />
            <main className='mx-auto max-w-6xl px-4 py-10'>
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Courses from './pages/Courses'
function App ()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/courses' element={ <Courses /> } />
        <Route path='*' element={ <Notfound /> } />
      </Routes>
    </Layout>
  )
}

export default App;
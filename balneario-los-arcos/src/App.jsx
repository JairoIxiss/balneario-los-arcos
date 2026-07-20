import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Main from './componentes/Main'
import AguasTermales from './componentes/AguasTermales'
import Experiencias from './componentes/Experiencias'
import Beneficios from './componentes/Beneficios'
import Reviews from './componentes/Reviews'
import Contacto from './componentes/Contacto'
import Footer from './componentes/Footer'

function App() {
  return (
    <Router>
      <div className="absolute inset-0 -z-30 bg-[#F5EBE0]"></div>
      <Routes>
        <Route 
        path="/"
        element={
          <>
          <Navbar/>
          <Main/>
          <AguasTermales/>
          <Experiencias/>
          <Beneficios/>
          <Reviews/>
          <Contacto/>
          <Footer/>
          </>
        }
        />
      </Routes>
    </Router>
  )
}

export default App

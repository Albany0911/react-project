import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import UsPage from "./components/Nosotros/UsPage"
import Fondo from "./assets/Fondo.png"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative',
  }

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/nosotros" element={<UsPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App

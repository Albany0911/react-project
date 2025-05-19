import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import UsPage from "./components/UsPage/UsPage"
import ProductsPage from "./components/Products/ProductsPage"
import ProductDetail from "./components/ProductDetails/ProductDetail"
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
          <Route path="/UsPage" element={<UsPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/item/:id" element={<ProductDetail productId={1} />} />
          <Route path="/product/category/:name" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>    
      
    </div>
  )
}

export default App

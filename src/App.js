
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </>
  );
}

export default App;

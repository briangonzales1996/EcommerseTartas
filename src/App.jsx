import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import TextMarquee from './components/TextMarquee.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
       
      <Header />
       
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/acerca" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App

import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'
import SideBar from './components/sidemenu';
import Display from './components/display';

import Learning from './pages/learning';

import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/products'
import Products2 from './pages/products2';


export default function App() {
  return (
    <div className="app-container">
      <Navbar />
        <div className="content-wrapper">
          <SideBar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Display />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products-dynamic" element={<Products2 /> }/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/learning" element={<Learning />} />
            </Routes>
          </main>
        </div>
      <Footer />
    </div>
  )
}

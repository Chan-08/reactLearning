import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'
import SideBar from './components/sidemenu';
import Display from './components/display';

import Learning from './pages/learning';

import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/products'
import Products2 from './pages/products2';
import LoginPage from './pages/login';
import ApiIntegration from './pages/apitesting';
import UseRef from './pages/useRef';


export default function App() {

  const location = useLocation();
  const data = localStorage.getItem("loggedInUser");

  if (!data && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {location.pathname !== "/login" ? (
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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/api" element={<ApiIntegration />} />
                <Route path="/useref" element={<UseRef />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  )
}

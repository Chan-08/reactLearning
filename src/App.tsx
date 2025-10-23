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
import UseRef from './pages/hooks/useRef';
import UseReducer from './pages/hooks/useReducer';
import UseMemo from './pages/hooks/useMemo';
import UseCallback from './pages/hooks/useCallback';
import UserPage from './pages/user';


export default function App() {

  const location = useLocation();
  const data = localStorage.getItem("loggedInUser");
  const loggedInUser = data ? JSON.parse(data) : null;
  const username = loggedInUser ? loggedInUser.username : null;
  const id = loggedInUser ? loggedInUser.id : null;

  if (!data && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {location.pathname !== "/login" ? (
        <div className="app-container">
          <Navbar />
          <div className="content-wrapper">
            <SideBar id={id} />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Display username = {username} id={id}/>
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
                <Route path="/usereducer" element={<UseReducer />} />
                <Route path="/usememo" element={<UseMemo />} />
                <Route path="/usecallback" element={<UseCallback />} />
                <Route path="/user/:id" element={<UserPage username= {username} />} />
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

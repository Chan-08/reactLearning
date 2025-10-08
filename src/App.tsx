import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'
import SideBar from './components/sidemenu';

import Welcome from './components02/welcome'
import Bootstrap from './components02/bootstrap'
import ProbsExample from './components02/probs'
import State from './components02/state'
import Onchange from './components02/onchange'
import List from './components02/list'
import TaskManager from './components02/taskmanager'

import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/products'


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
                    <Welcome />
                    <Bootstrap />
                    <ProbsExample name="Chandrakumar" age={21} />
                    <State />
                    <Onchange />
                    <List />
                    <TaskManager />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      <Footer />
    </div>
  )
}

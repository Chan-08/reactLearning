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
                    <Welcome />
                    <Bootstrap />

                    <h1 className='mt-5'>Probs section</h1>
                    <ProbsExample name="Chandrakumar" age={21} show={true} />
                    <ProbsExample name="Name 2" age={23}/>
                    <ProbsExample show={true}/>
                    <p>there are three example but true is opted only for two</p>

                    <h1 className='mt-5'>Use State Section</h1>
                    <State />

                    <Onchange />

                    <List />

                    <TaskManager />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products-dynamic" element={<Products2 /> }/>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      <Footer />
    </div>
  )
}

import { NavLink } from 'react-router-dom'

export default function Navbar() {
    
    function logout() {
      localStorage.removeItem("loggedInUser");
      window.location.href = "/login";
    }

  return (
      <nav className="navbar bg-dark navbar-dark navbar-expand-lg sticky-top">
          <div className="container-fluid">
              <a className="navbar-brand text-white" href="/">Navbar</a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Home </NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Products </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/products-dynamic" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Products(Dynamic) </NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> About </NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Contact </NavLink>
                      </li>

                      <li className="nav-item">
                          <NavLink to="/learning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Learning </NavLink>
                      </li>

                      <li className="nav-item">
                          <button className='btn btn-outline-danger ' onClick={logout}> Logout </button>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
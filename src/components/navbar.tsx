export default function navbar() {
    return <nav className="navbar bg-dark navbar-dark navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Navbar</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
}
import { Link } from "react-router-dom";
import '../App.css';

export default function SideBar() {
    return (
        <aside className="SideBar bg-danger">
            <h2 className="text-white">Side Bar</h2>
            <nav>
                <ul className="list-unstyled">
                    <li><Link className="text-white" to="/">Home</Link></li>
                    <li><Link className="text-white" to="/about">About</Link></li>
                    <li><Link className="text-white" to="/contact">Contact</Link></li>
                    <li><Link className="text-white" to="/products">Products</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
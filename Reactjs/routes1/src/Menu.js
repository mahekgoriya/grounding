import { Outlet,Link } from "react-router-dom";
function Menu(){
    return(
        <div>
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="aboutus" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contactus/9662512857/ankit3385@gmail.com" className="nav-link">Contact Sales</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contactus/1231231230/support@gmail.com" className="nav-link">Contact Support</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}
export default Menu;
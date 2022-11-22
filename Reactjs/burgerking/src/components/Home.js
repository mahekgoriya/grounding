import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><h1>Burger King</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link mx-5 active" aria-current="page" to="/burger"><h4>Burger</h4></Link>
                            <Link className="nav-link mx-5 active" to="/makeburger"><h4>Make Burger</h4></Link>
                            <Link className="nav-link mx-5 active" to="/checkout"><h4>Checkout</h4></Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer className="text-center text-white fixed-bottom" style={{backgroundColor: "#000000"}}>
                <div className="container p-4"></div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </>
    )
}
export default Home;
import { Outlet, Link } from "react-router-dom";
function MyCommonParts() {
    return (
        <div>
                <header class="nav-holder make-sticky">
                    <div class="navbar navbar-light bg-white navbar-expand-lg py-0" id="navbar">
                        <div class="container py-3 py-lg-0 px-lg-0">
                            <a class="navbar-brand" href="index.html"><img class="d-none d-md-inline-block" src="img/logo.png" alt="Universal logo"/><img class="d-inline-block d-md-none" src="img/logo-small.png" alt="Universal logo"/><span class="sr-only">Universal - go to homepage</span></a>
                                <button class="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="sr-only">Toggle navigation</span><i class="fas fa-align-justify"></i></button>
                                <div class="collapse navbar-collapse" id="navigationCollapse">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item"><Link class="nav-link" to="/" role="button" aria-expanded="false">Home</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="category" role="button" aria-expanded="false">SHOP</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="cart" role="button" aria-expanded="false">CART</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="checkout" role="button" aria-expanded="false">CHECKOUT</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="login" role="button" aria-expanded="false">LOGIN</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="register" role="button" aria-expanded="false">REGISTER</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </header>
            <Outlet />
            <div class="bg-dark py-5">
          <div class="container">
            <div class="row align-items-cenrer gy-3 text-center">
              <div class="col-md-6 text-md-start">
                <p class="mb-0 text-sm text-gray-500">&copy; 2022. Pooja & Company </p>
              </div>
              <div class="col-md-6 text text-md-end">
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default MyCommonParts;
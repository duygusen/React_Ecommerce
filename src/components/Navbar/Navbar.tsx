import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

type Props = {}

const Navbar = (props: Props) => {

  const cartState = useSelector((state: any) => state.cart);
  

  return (
    <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          ReactProduct
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/product-add"}>
                Add
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
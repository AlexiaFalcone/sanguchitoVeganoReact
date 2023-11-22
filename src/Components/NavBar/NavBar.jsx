import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { categories } from '../../data/productsData';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
          <img className='LogoImg' src= {logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((product)=>{
                return (
                  <NavDropdown.Item key={product.id}>
                    <Link to={`/category/${product.category}`}>
                      {product.category}
                    </Link>
                  </NavDropdown.Item>
                )
              })}
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

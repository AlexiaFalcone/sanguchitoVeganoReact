import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img className='LogoImg' src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown" className='categoryStyleTitle'>
            <NavDropdown.Item>
                <Link to={`/category/panes`} className='categoryStyle'>
                  Panes
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/category/sanguche`} className='categoryStyle'>
                  Sanguches
                </Link>
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <>
<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#BATERIAS">BATERIAS</Nav.Link>
            <Nav.Link href="#PLATILLOS">PLATILLOS</Nav.Link>
            <Nav.Link href="#CARRITO"> <CartWidget /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </>
  );
}


export default NavBar;
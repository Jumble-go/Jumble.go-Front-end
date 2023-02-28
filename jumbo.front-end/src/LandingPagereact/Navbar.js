import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'

function NavBar() {
  
  const navigate = useNavigate()

  return (
    <Navbar className="Nav-bar" collapseOnSelect expand="lg"  variant="dark">
      <Container className = "Nav-bar-container">
        <Navbar.Brand href="#home">Jumble</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link className='NAV-1' href="/">Home</Nav.Link>
          </Nav>
          <Nav>      
            <Nav.Link className='NAV-2' href="+Signup" > Sign up </Nav.Link>     
          </Nav>
          <Nav>
            <Nav.Link className='NAV-3' href="Login" >Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
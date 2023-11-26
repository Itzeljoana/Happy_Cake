import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import '/src/App.css'

function Navigation() {
  return (
    
      <Navbar bg="danger" className="w-100" >
        <Nav.Item as="li" style={{ listStyleType: 'none', margin: '10px'}} >
          <Link to="/homepage" style={{ color: 'white', textDecoration: 'none' }} > 🏠 Home</Link>
          </Nav.Item>
          <Nav.Item as="li" style={{ listStyleType: 'none', margin: '10px'}}>
            <Link  to="/contact" style={{ color: 'white', textDecoration: 'none' }}> 📒 Contacto</Link>
            </Nav.Item >
            <Nav.Item as="li"  className="ms-auto" style={{ listStyleType: 'none', margin: '10px'}}>
              <Link to="/homepage" style={{ color: 'white', textDecoration: 'none' }} ><h5>Happy cake 🍰</h5></Link>
              </Nav.Item>
      </Navbar>
   
  );
}

export default Navigation;

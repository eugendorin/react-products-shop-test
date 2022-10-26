import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export function Navbar (){
  return (
    <BootstrapNavbar expand="lg">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <BootstrapNavbar.Brand as={Link} to="/">Shop</BootstrapNavbar.Brand>
      </Container>
    </BootstrapNavbar>
  )
}

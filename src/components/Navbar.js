import { Badge, Container, Nav, Navbar as BootstrapNavbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ROUTES from 'routes'

export function Navbar (){
  return (
    <BootstrapNavbar expand="lg">
      <Container className="grid h-100">
        <div className='g-col-4' />

        <div className='g-col-4 center-content'>
          <BootstrapNavbar.Brand as={Link} to={ROUTES.root}>Shop</BootstrapNavbar.Brand>
        </div>

        <div className='g-col-4 d-flex align-items-center justify-content-end'>
          <Nav.Link as={Link} to={ROUTES.cart} className="position-relative">
            <i className="fa fa-shopping-cart" />

            <Badge pill bg="danger"size="sm">4</Badge>
          </Nav.Link>
        </div>
      </Container>
    </BootstrapNavbar>
  )
}

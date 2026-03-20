import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../public/assets/images/logo.png'
import { Col } from 'react-bootstrap';

function Navigation() {
    return (

        <Container>
            <Navbar expand="lg" className="bg-body-tertiary py-3">
                <Container fluid>
                    <Col xs={2}>
                        <Navbar.Brand href="#">
                            <img src={logo} className="img-fluid" />
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <NavDropdown title="pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/ourDoctor">Our Doctor</NavDropdown.Item>
                                <NavDropdown.Item href="/gallary">Gallary</NavDropdown.Item>
                                <NavDropdown.Item href="/faq">Faq's</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div>
                            <ul className='d-flex mb-0 list-unstyled'>
                                <li  className='mx-3'> <a href="tel:+00-1234-5678" className='text-decoration-none text-dark fw-bold color-primary'>+00-1234-5678</a></li>
                                <li className='mx-3'> <a href="tel:+00-1234-5678" className='text-decoration-none text-dark fw-bold'><i class="bi bi-minecart-loaded"></i></a></li>
                                <li className='mx-3'> <a href="tel:+00-1234-5678" className='text-decoration-none text-dark fw-bold'><i class="bi bi-three-dots-vertical"></i></a></li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
}

export default Navigation;
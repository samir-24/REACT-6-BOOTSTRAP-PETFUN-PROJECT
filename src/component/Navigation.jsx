import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/assets/images/logo.png'
import { Col } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <div className='hero-banner-bg'>
                <Container className='hero-banner-bg'>
                    <Navbar expand="lg" className="py-3">
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
                                    <Nav.Link href="/" className='fw-bold'>Home</Nav.Link>
                                    <Nav.Link href="/services" className='fw-bold'>Services</Nav.Link>
                                    <Nav.Link href="/shop" className='fw-bold'>Shop</Nav.Link>
                                    <Nav.Link href="/blog" className='fw-bold'>Blog</Nav.Link>
                                    <Nav.Link href="/contact" className='fw-bold'>Contact</Nav.Link>
                                    <NavDropdown title="Pages" className='fw-bold' id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/about" className='fw-bold'>About Us</NavDropdown.Item>
                                        <NavDropdown.Item href="/ourDoctor" className='fw-bold'>Our Doctor</NavDropdown.Item>
                                        <NavDropdown.Item href="/gallary" className='fw-bold'>Gallary</NavDropdown.Item>
                                        <NavDropdown.Item href="/faq" className='fw-bold'>Faq's</NavDropdown.Item>
                                        <NavDropdown.Item href="/review" className='fw-bold'>Reviews</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <div>
                                    <ul className='d-flex mb-0 list-unstyled'>
                                        <li className='mx-3'> <a href="tel:+00-1234-5678" className='text-decoration-none text-dark fw-bold color-primary'>+00-1234-5678</a></li>
                                        <li className='mx-3'> <a href="tel:+00-1234-5678" className='text-decoration-none text-dark fw-bold'><i class="bi bi-minecart-loaded"></i></a></li>
                                        <li className='mx-3'> <a href="tel:+00-1234-5678" className='text-decoration-none text-dark fw-bold'><i class="bi bi-three-dots-vertical"></i></a></li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

export default Navigation;
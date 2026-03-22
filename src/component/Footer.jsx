import React from 'react'
import logo from '../../public/assets/images/logo.png'
import { Container, Row, Col } from 'react-bootstrap'
import FooterPets from '../../public/assets/images/footer-pets.png'

const Footer = () => {
    return (
        <div className='footer-bg'>
            <Container>
                <Row className='mb-5 pb-4' style={{paddingTop : "150px"}}>
                    <Col lg={3} md={6}>
                        <div className="footer-logo mb-4">
                            <img src={logo} alt="logo" className='mb-0' style={{ maxWidth: '150px', marginBottom: '20px' }} />
                        </div>
                        <div className="footer-content mb-5">
                            <p className='fs-6'>Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved.</p>
                        </div>
                        <div className="footer-socials">
                            <i class="bi bi-instagram"></i>

                            <i class="bi bi-twitter-x"></i>

                            <i class="bi bi-facebook"></i>

                            <i class="bi bi-tiktok"></i>
                        </div>
                    </Col>
                    <Col lg={2} md={6}>
                        <section className='information'>
                            <h3 className='mb-4 ms-3'>Information</h3>
                            <ul className='fs-6'>
                                <li className='mb-3'>Home Veterinary</li>
                                <li className='mb-3'>Home </li>
                                <li className='mb-3'>Home Pet Care</li>
                                <li className='mb-3'>Contact</li>
                            </ul>
                        </section>
                    </Col>
                    <Col lg={4} md={6} >
                        <section className='get-in-touch'>
                            <h3 className='mb-4 ms-3'>Get In Touch</h3>
                            <ul className='list-unstyled'>
                                <li>
                                    <h5 className='color-primary'>Address : </h5>
                                    <p className='fs-6'>
                                        Germany — 785 15h Street, Office 478 Berlin, De 81566
                                    </p>
                                </li>
                                <li>
                                    <h5 className='color-primary'>Phone - Email: </h5>
                                    <p >
                                        <a href="tel:+0012345678" className='fs-6 text-dark text-decoration-none '> +00 12345678 </a> - 
                                        <a href="mailto:hi@petfun.com" className='fs-6 text-dark text-decoration-none'>  hi@petfun.com </a>
                                    </p>
                                </li>
                                <li>
                                    <h5 className='color-primary'>Monday To Friday</h5>
                                    <p className='fs-6'>
                                        9:30 AM - 5:30 PM
                                    </p>
                                </li>

                            </ul>
                        </section>
                    </Col>
                    <Col lg={3} md={6}>
                        <section className='subscribe'>
                            <h3 className='mb-4'>Subscribe Us</h3>
                            <div>
                                <input type="text" placeholder='Your Email Address ' className='subscribe-box mb-4' />

                                <p className='fs-6'>Join our list and get 15% off your first order.</p>
                            </div>
                        </section>
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <img
                        src={FooterPets}
                        alt="Footer Pets"
                        style={{
                            height: '150px',
                            display: 'block',
                            margin: '0 auto',
                            marginBottom: '-30px'
                        }}
                    />
                </div>
            </Container>

            <div className='petFun-bg text-center py-5'>
                <p className="mb-0">© Copyright 2026 <span className='color-primary'>DynamicLayers</span>. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer

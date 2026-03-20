import React from 'react'
import { Container , Row , Col , Form , Button } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <>
        <section className="py-5 position-relative" style={{ backgroundColor: '#fff' }}>
            <Container className="py-5">
                <Row className="align-items-start">
                
                    <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
                        <h6 className="color-primary fw-bold text-uppercase mb-3">Get In Touch!</h6>
                        <h2 className="display-5 fw-bold mb-4">
                            Have questions? <br /> 
                            Get in <span className="border-bottom border-warning border-5">touch!</span>
                        </h2>
                        <p className="text-secondary mb-5 fs-5">
                            We'd love to hear from you – please use the form to send us your message or ideas. 
                            Or simply pop in for a cup of fresh tea and a cookie.
                        </p>

                        <div className="d-flex mb-4">
                            <i className="bi bi-geo-alt color-primary fs-3 me-3"></i>
                            <div>
                                <h6 className="fw-bold mb-0">Petcare 8th Avenue</h6>
                                <p className="mb-0">New York 1200</p>
                            </div>
                        </div>

                        <div className="d-flex mb-4 align-items-center">
                            <i className="bi bi-telephone-outbound color-primary fs-3 me-3"></i>
                            <a href="tel:+800-356-8933"  className='text-dark text-decoration-none fw-semibold'>+800-356-8933</a>
                        </div>

                        <div className="d-flex align-items-center">
                            <i className="bi bi-envelope color-primary fs-3 me-3"></i>
                           <a href="mailto:info@example.com" className='text-dark text-decoration-none fw-semibold'>info@example.com</a>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <Form>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Name" 
                                        className="py-3 shadow-sm border-light" 
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email" 
                                        className="py-3 shadow-sm border-light" 
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Phone" 
                                        className="py-3 shadow-sm border-light" 
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Subject" 
                                        className="py-3 shadow-sm border-light" 
                                    />
                                </Col>
                                <Col xs={12}>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={5} 
                                        placeholder="Message" 
                                        className="py-3 shadow-sm border-light" 
                                    />
                                </Col>
                                <Col xs={12} className="mt-4">
                                    <Button 
                                        variant="warning" 
                                        className="px-5 py-3 rounded-pill fw-bold shadow-sm"
                                    >
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}

export default ContactForm

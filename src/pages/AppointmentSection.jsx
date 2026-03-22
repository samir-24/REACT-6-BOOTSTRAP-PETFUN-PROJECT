import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AppointmentSection = () => {
    return (
        <div className="py-5" style={{ backgroundColor: '#fdf8f4', overflow: 'hidden', position: 'relative' }}>

            <Row className="align-items-center g-0">

                <Col lg={3} className="d-none d-lg-block">
                    <div className="position-relative">
                        <img
                            src="/assets/images/hands-holding-dog.png"
                            alt="Hands holding dog"
                            className="img-fluid"
                            style={{
                                marginLeft: '-20px',
                                maxHeight: '500px',
                                objectFit: 'contain'
                            }}
                        />
                        {/* AUCH Sticker */}
                        <div className="position-absolute" style={{ top: '25%', right: '5%', zIndex: 10 }}>
                            <img src="/assets/images/auch.png" alt="auch" className='img-fluid' style={{ width: '80px' }} />
                        </div>
                    </div>
                </Col>

                <Col lg={6} md={12}>
                    <Container>
                        <div className="text-center text-lg-start mb-4 ms-lg-4">
                            <p className="text-danger fw-bold mb-1">Make Appointment!</p>
                            <h2 className="fw-bold display-6">
                                Book Your <span className="position-relative">Slot
                                    <span className="position-absolute start-0 bottom-0 w-100 bg-warning" style={{ height: '8px', zIndex: -1, marginBottom: '5px' }}></span>
                                </span>
                            </h2>
                        </div>

                        <Form className="ms-lg-4">
                            <Row className="g-3">
                                <Col md={6}><Form.Control type="text" placeholder="Name" className="rounded-3 border-0 shadow-sm p-3" /></Col>
                                <Col md={6}><Form.Control type="email" placeholder="Email" className="rounded-3 border-0 shadow-sm p-3" /></Col>
                                <Col md={6}><Form.Control type="text" placeholder="Phone" className="rounded-3 border-0 shadow-sm p-3" /></Col>
                                <Col md={6}><Form.Control type="text" placeholder="Location" className="rounded-3 border-0 shadow-sm p-3" /></Col>

                                <Col md={4}>
                                    <Form.Select className="rounded-3 border-0 shadow-sm p-3 text-muted">
                                        <option>Cat</option>
                                        <option>Dog</option>
                                    </Form.Select>
                                </Col>
                                <Col md={4}>
                                    <Form.Select className="rounded-3 border-0 shadow-sm p-3 text-muted">
                                        <option>Day Care</option>
                                        <option>Grooming</option>
                                    </Form.Select>
                                </Col>
                                <Col md={4}><Form.Control type="text" placeholder="Select date & time" className="rounded-3 border-0 shadow-sm p-3" /></Col>

                                <Col xs={12}>
                                    <Form.Control as="textarea" rows={4} placeholder="Describe your pet..." className="rounded-3 border-0 shadow-sm p-3" />
                                </Col>

                                <Col xs={12} className="text-center text-lg-start mt-4">
                                    <Button variant="warning" className="fw-bold px-5 py-2 rounded-pill shadow-sm border-0">
                                        Book A Reservation
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Col>

                <Col lg={3} className="d-none d-lg-block text-end align-self-start">
                    <img
                        src="/assets/images/hanging-cat.png"
                        alt="Hanging Cat"
                        className="me-0 w-25"
                        style={{ maxHeight: '280px', marginTop: '-50px' }}
                    />
                </Col>

            </Row>
        </div>
    );
};

export default AppointmentSection;



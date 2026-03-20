import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import service1 from '../../public/assets/images/service1.jpg'
import service2 from '../../public/assets/images/service2.jpg'
import service3 from '../../public/assets/images/service3.jpg'
import serviceFood from '../../public/assets/images/service-img-food.png'

const servicesData = [
    {
        id: 1,
        image: service1,
        type: 'Daycare',
        title: 'Full Grooming & Styling',
        description: 'High-quality veterinary care to keep pets healthy.'
    },
    {
        id: 2,
        image: service2,
        type: 'Wellness',
        title: 'Health Check Monitoring',
        description: 'High-quality veterinary care to keep pets healthy.'
    },
    {
        id: 3,
        image: service3,
        type: 'Behavior',
        title: 'Basic Obedience Training',
        description: 'High-quality veterinary care to keep pets healthy.'
    }
];

const ServiceCard = ({ image, type, title, description }) => {
    return (
        <Card className="service-card text-center h-100 border-0 shadow-sm">
            <div className="service-image-container">
                <Card.Img variant="top" src={image} className="service-img" />
            </div>
            <Card.Body>
                <Badge bg="warning" text="dark" className="service-badge mb-3">
                    {type}
                </Badge>
                <Card.Title as="h5" className="fw-bold service-title mb-2">
                    {title}
                </Card.Title>
                <Card.Text className="text-muted service-description">
                    {description}
                </Card.Text>
                <div className="d-flex justify-content-center text-center  mt-3">
                    <a href="" className='text-dark text-decoration-none'>
                        <span className='d-flex icon-box d-block text-center '>&#10140;</span>
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
};

const ServiceDetail = () => {
    return (
        <section className="services-section py-5">
            <Container >
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">

                        <h6 className="color-primary fs-6 fw-bold mb-2">Services We Provide!</h6>
                        <h2 className="display-5 fw-bold mb-3">
                            Trusted Hands for <br /> Your Beloved <span className="text-orange">Pets</span>
                        </h2>
                        <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
                            High-quality veterinary care to keep pets healthy and happy from
                            routine checkups to advanced treatments.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {servicesData.map((service) => (
                        <Col key={service.id} xs={12} sm={6} lg={4}>
                            <ServiceCard {...service} />
                        </Col>
                    ))}
                </Row>
            </Container>
             <Container className="mt-5 pt-5 mb-5">
                    <div
                        className="rounded-pill position-relative overflow-visible"
                        style={{
                            backgroundColor: '#1A0B08', 
                            padding: '15px 40px',
                            minHeight: '120px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Row className="align-items-center w-100 m-0">
                            
                            <Col xs={4} md={3} className="text-start ps-md-4">
                                <p className="mb-0 fw-bold fs-6 color-primary" >
                                    Flash Sale
                                </p>
                                <h1 className="fw-bold mb-0 text-white display-5">
                                    <span className='color-primary'>50%</span> Off
                                </h1>
                            </Col>

                            <Col xs={4} md={3} className="text-center position-relative">
                                <img
                                    src={serviceFood}
                                    alt="Pet Products"
                                    className="img-fluid"
                                    style={{
                                        height: '220px', 
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </Col>

                            <Col xs={12} md={6} className="d-flex align-items-center justify-content-between mt-3 mt-md-0">
                                <div className="text-start ms-md-5">
                                    <p className="mb-1 fw-bold fs-6 color-primary">
                                        Use Promo Code <span className="text-white">25XANDER</span>
                                    </p>
                                    <h3 className="fw-bold text-white mb-0 fs-3" >
                                        Premium Pet Toys & Apparel!
                                    </h3>
                                </div>

                                <Button
                                    className="px-4 py-2 rounded-pill fw-bold border-0"
                                    style={{ 
                                        backgroundColor: '#FFD700', 
                                        color: '#000',
                                        minWidth: '120px'
                                    }}
                                >
                                    Shop Now
                                </Button>
                            </Col>

                        </Row>
                    </div>
                </Container>
        </section >
    );
};

export default ServiceDetail;
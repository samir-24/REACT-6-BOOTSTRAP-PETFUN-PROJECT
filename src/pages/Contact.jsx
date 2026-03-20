import React from "react"
import { Container , Row , Col , Button } from "react-bootstrap"
import ContactForm from "../component/ContactForm"
import ContactItem from '../../public/assets/images/contact-img.png'


function Contact() {
    return (

        <>
            <section className="map-section py-5">
                <div style={{ width: '100%', height: '450px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <iframe
                        title="London Eye Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540424380271!2d-0.12209532338006835!3d51.503186371812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1710594000000!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            <ContactForm />

            <section className="py-5">
            <Container>
                <div
                    className="rounded-5 position-relative"
                    style={{
                        backgroundColor: '#FFC107',
                        minHeight: '220px', // બોક્સને નાનું (Slim) કરવા માટે
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px 0'
                    }}
                >
                    <Row className="align-items-center w-100 m-0">
                        
                        <Col md={4} className="text-center text-md-start ps-md-5">
                            <p className="text-danger fw-bold mb-1" style={{ fontSize: '14px' }}>
                                Half Price Deal
                            </p>
                            <h2 className="fw-bold text-dark" style={{ lineHeight: '1.2' }}>
                                Pet Toys, Cloths & <br /> Supplementaries!
                            </h2>
                        </Col>

                        <Col md={4} className="text-center position-relative">
                            <img
                                src={ContactItem}
                                alt="Pet Products"
                                className="img-fluid"
                                style={{ 
                                    height: '350px', // ઈમેજને બોક્સ કરતા મોટી કરવા માટે
                                    marginTop: '-80px', // ઉપરથી બહાર કાઢવા માટે
                                    marginBottom: '-50px', // નીચેથી બહાર કાઢવા માટે
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))'
                                }}
                            />
                        </Col>

                        <Col md={4} className="text-center text-md-end pe-md-5">
                            <p className="text-danger fw-bold mb-1" style={{ fontSize: '14px' }}>
                                Summer Sale Offer
                            </p>
                            <h1 className="display-5 fw-bold text-dark mb-3">50% Off Now!</h1>
                            <Button
                                className="px-4 py-2 rounded-pill fw-bold border-0 shadow"
                                style={{ backgroundColor: '#FF5722', color: 'white' }}
                            >
                                Shop On Discount!
                            </Button>
                        </Col>

                    </Row>
                </div>
            </Container>
        </section>
        </>

    )
}
export default Contact
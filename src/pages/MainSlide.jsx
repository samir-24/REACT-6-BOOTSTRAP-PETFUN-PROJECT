import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '/assets/images/cat1.jpg'
import Slide2 from '/assets/images/dog.jpg'
import Slide3 from '/assets/images/dog2.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlinePets } from "react-icons/md";
import { BiInjection } from "react-icons/bi";

const MainSlide = () => {
    return (
        <section>
            <Carousel fade style={{ height: "800px" }}>
                <Carousel.Item style={{ hheight: "650px" }}>
                    <img src={Slide1} alt="Cat Image" className="w-100 h-100 object-fit-cover" style={{ filter: "brightness(60%)" }} />
                    <Carousel.Caption className="h-100 d-flex align-items-end justify-content-end mb-5">
                        <Container>
                            <Row className="justify-content-center text-center">
                                <Col lg={6} className='ps-lg-5'>
                                    <div className="pet-care-title">
                                        <h4 className='color-primary fw-semibold'>Because Every Pet Matters !</h4>
                                        <h2 className='fw-bold fs-1 text-capitalize'>
                                            Where every paw feels home
                                        </h2>
                                        <p className="text-dark fw-semibold mt-3">High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments, always.</p>
                                    </div>

                                    <div className="d-flex align-items-end flex-wrap justify-content-center">
                                        <button className='btnn me-4 mb-2 fw-bold'>Book Appointment</button>
                                        <div className="d-flex  align-items-center">
                                            <div className="icon-box icon-box-2 me-2">
                                                <i className="bi bi-telephone-fill fs-4"></i>
                                            </div>
                                            <div>
                                                <p className="d-block mb-0 fw-semibold icon text-dark fw-bold">Have any quistions ?</p>
                                                <span className='fs-3 fw-semibold color-primary'>00123456789</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slide2} alt="dog Image" className="w-100 h-100 d-block object-fit-cover" style={{ filter: "brightness(60%)" }} />
                    <Carousel.Caption className="h-100 d-flex align-items-end justify-content-end mb-5">
                        <Container>
                            <Row className="justify-content-center text-center">
                                <Col lg={6} className='ps-lg-5'>
                                    <div className="pet-care-title">
                                        <h4 className='color-primary fw-semibold'>Because Every Pet Matters</h4>
                                        <h2 className='fw-bold fs-1 fw-bold fs-1 text-capitalize'>
                                            Comfort and Care for every Pet
                                        </h2>
                                        <p className="fw-semibold text-dark mt-3">We are your local dog home boarding service giving you complete care and attention.</p>
                                    </div>

                                    <div className="d-flex align-items-end flex-wrap justify-content-center">
                                        <button className='btnn me-4 mb-2 fw-bold'>Book Appointment</button>
                                        <div className="d-flex  align-items-center">
                                            <div className="icon-box icon-box-2 me-2">
                                                <i className="bi bi-telephone-fill text-dark fs-4"></i>
                                            </div>
                                            <div>
                                                <p className="d-block mb-0 fw-semibold icon text-dark fw-bold">Have any quistions ?</p>
                                                <span className='fs-3 fw-semibold color-primary'>00123456789</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slide3} alt="Dog Image" className="d-block w-100 h-100 object-fit-cover" />
                    <Carousel.Caption>
                        <Container>
                            <Row className="justify-content-center text-center">
                                <Col lg={6} className='ps-lg-5'>
                                    <div className="pet-care-title">
                                        <h4 className='color-primary fw-semibold'>Because Every Pet Matters</h4>
                                        <h2 className='fw-bold fs-1 fw-bold fs-1 text-capitalize'>
                                            Trusted care for paws and cats !
                                        </h2>
                                        <p className="fw-semibold text-dark mt-3">We are your local dog home boarding service giving you complete care and attention.</p>
                                    </div>

                                    <div className="d-flex align-items-end flex-wrap justify-content-center">
                                        <button className='btnn me-4 mb-2 fw-bold'>Book Appointment</button>
                                        <div className="d-flex  align-items-center">
                                            <div className="icon-box icon-box-2 me-2">
                                                <i className="bi bi-telephone-fill text-dark fs-4"></i>
                                            </div>
                                            <div>
                                                <p className="d-block mb-0 fw-semibold icon text-dark fw-bold">Have any quistions ?</p>
                                                <span className='fs-3 fw-semibold color-primary'>00123456789</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default MainSlide

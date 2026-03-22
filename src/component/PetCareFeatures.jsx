import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlinePets } from "react-icons/md";
import { BiInjection } from "react-icons/bi";



const PetCareFeatures = ({
    badgeText,
    title,
    highlightTitle,
    description,
    image,
    phone,
}) => {
    return (
        <div className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className='text-center mb-4 mb-lg-0'>
                        <img src={image} alt="Pet Care" className='w-100 object-fit-contain img-max' />
                    </Col>

                    <Col lg={6} className='ps-lg-5'>
                        <div className="pet-care-title">
                            <h4 className='color-primary fw-semibold'>{badgeText}</h4>
                            <h2 className='fw-bold fs-1'>
                                {title} <span>{highlightTitle}</span>
                            </h2>
                            <p className="text-muted mt-3">{description}</p>
                        </div>

                        <Row className="mt-4">
                            <Col md={6} className="d-flex align-items-center mb-3">
                                <div className="icon-box me-3">
                                    <MdOutlinePets size={25} />
                                </div>
                                <div>
                                    <h5 className="mb-0 fw-bold">Pet Care</h5>
                                    <p className="mb-0">High-quality veterinary care to keep pets healthy.</p>
                                </div>
                            </Col>

                            {/* Veterinary Item */}
                            <Col md={6} className="d-flex align-items-center mb-3">
                                <div className="icon-box me-3">
                                    <BiInjection size={25} />
                                </div>
                                <div>
                                    <h5 className="mb-0 fw-bold">Veterinary</h5>
                                    <p className="mb-0">High-quality veterinary care to keep pets healthy.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className='mt-3'>
                            <div className='mb-2 d-flex align-items-center'>
                                <MdOutlinePets className='me-2 color-primary' />
                                <p className='fw-bold mb-0'>Comprehensive Health Check-ups</p>
                            </div>
                            <div className='mb-4 d-flex align-items-center'>
                                <MdOutlinePets className='me-2 color-primary' />
                                <p className='fw-bold mb-0'>Emergency & First Aid Support</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center flex-wrap">
                            <button className='btnn me-4 mb-2 fw-bold'>Book Appointment</button>
                            <div className="d-flex align-items-center mb-2">
                                <div className="icon-box me-2">
                                    <i className="bi bi-telephone-fill fs-4"></i>
                                </div>
                                <div>
                                    <p className="d-block mb-0 fw-semibold">Emergency Call:</p>
                                    <span className='fs-3 fw-semibold color-primary'>{phone}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PetCareFeatures;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const doctors = [
    { id: 1, name: "Emma Grace", role: "Pet Doctor", image: "/assets/images/doc1.png" },
    { id: 2, name: "Michael Thomas", role: "Surgeon", image: "/assets/images/doc2.png" },
    { id: 3, name: "Sofia Marie", role: "Pathologist", image: "/assets/images/doc3.png" },
    { id: 4, name: "Brand Larned", role: "Radiologist", image: "/assets/images/doc4.png" },
];

const TeamSection = () => {
    return (
        <section className="py-5 position-relative">
            <Container>
                {/* Doctors Cards  */}
                <Row className="g-4">
                    {doctors.map((doc) => (
                        <Col key={doc.id} sm={6} lg={3}>
                            <div className="text-center position-relative">
                                <div className="position-relative mb-3">
                                    <img 
                                        src={doc.image} 
                                        alt={doc.name} 
                                        className="img-fluid position-relative z-1" 
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div 
                                    className="text-white p-2 rounded-3 mx-2 shadow"
                                    style={{ 
                                        marginTop: '-30px', 
                                        position: 'relative', 
                                        zIndex: '2',
                                        backgroundColor: '#ff6b35' 
                                    }}
                                >
                                    <h5 className="mb-0 fw-bold">{doc.name}</h5>
                                    <div className="bg-warning text-dark d-inline-block px-3 py-1 rounded-pill small fw-bold mt-1">
                                        {doc.role}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TeamSection;
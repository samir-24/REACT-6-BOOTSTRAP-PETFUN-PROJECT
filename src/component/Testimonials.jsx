import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import testi1 from '../../public/assets/images/testi1.png'
import testi2 from '../../public/assets/images/testi2.png'
import testi3 from '../../public/assets/images/testi3.png'

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "James Williams",
      location: "Oklahoma City",
      img: testi1,
      text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices."
    },
    {
      id: 2,
      name: "Eredrik Johanson",
      location: "California",
      img: testi2,
      text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices."
    },
    {
      id: 3,
      name: "Félix Lengyel",
      location: "New York",
      img: testi3,
      text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices."
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-danger fw-bold">Testimonials!</h6>
          <h2 className="fw-bold display-5">
            Hear From Fellow <span className='color-primary'>Pet Lovers!</span>
          </h2>
          <p className="text-dark mx-auto" style={{ maxWidth: '600px' }}>
            High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments.
          </p>
        </div>

        {/* Testimonial Cards */}
        <Row className="g-4">
          {reviews.map((item) => (
            <Col key={item.id} md={4}>
              <div className="position-relative p-3">
                <Card className="border-0 shadow-sm h-100 yello-bg rounded-4" >
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <Image 
                        src={item.img} 
                        roundedCircle 
                        width="60" 
                        height="60" 
                        className="me-3 border border-white border-3"
                      />
                      <div>
                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                        <small className="text-dark">{item.location}</small>
                      </div>
                      <div className="ms-auto">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={12} color="#ff6b35" />
                        ))}
                      </div>
                    </div>
                    
                    <Card.Text className="mb-4 pt-2 fs-6 lh-base">
                      "{item.text}"
                    </Card.Text>
                    
                    <div className="text-end">
                      <FaQuoteRight size={40} opacity={0.2} />
                    </div>
                  </Card.Body>
                </Card>
                
                <div style={{
                  width: '0',
                  height: '0',
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '30px solid #ffda2b',
                  marginLeft: '40px'
                }}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
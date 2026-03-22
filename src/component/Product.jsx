import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BsFullscreen } from 'react-icons/bs';

const Product = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    { id: 1, name: 'PurePaws Nutrition', price: '470.00$', oldPrice: '625.00$', sale: true, img: '../../public/assets/images/p1.png' },
    { id: 2, name: 'Golden Meals', price: '475.00$', oldPrice: '', sale: false, img: '../../public/assets/images/p2.png' },
    { id: 3, name: 'FurLife Nutrition', price: '245.00$', oldPrice: '375.00$', sale: true, img: '../../public/assets/images/p3.png' },
    { id: 4, name: 'Whisker Food', price: '545.00$', oldPrice: '775.00$', sale: true, img: '../../public/assets/images/p4.png' },
    { id: 5, name: 'Joyful Paws', price: '120.00$', oldPrice: '250.00$', sale: true, img: '../../public/assets/images/p5.png' },
    { id: 6, name: 'MeowMix Delight', price: '550.00$', oldPrice: '', sale: false, img: '../../public/assets/images/p6.png' },
    { id: 7, name: 'TruePaws Formula', price: '550.00$', oldPrice: '', sale: false, img: '../../public/assets/images/p7.png' },
    { id: 8, name: 'Premium Dog Food', price: '650.00$', oldPrice: '850.00$', sale: true, img: '../../public/assets/images/p8.png' },
  ];

  return (
    <Container className="py-5 bg-white">
      <Row className="g-4">
        {products.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={3}>
            <Card 
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`h-100 border text-center transition-all p-3 shadow-sm ${hoveredId === p.id ? 'bg-warning border-warning' : 'bg-white'}`}
              style={{ borderRadius: '10px', cursor: 'pointer', transition: '0.3s' }}
            >
              {p.sale && (
                <Badge 
                  pill 
                  bg="danger" 
                  className="position-absolute mt-2 ms-2 top-0 start-0 px-3 py-2"
                  style={{ fontSize: '12px' }}
                >
                  Sale!
                </Badge>
              )}

              {hoveredId === p.id && (
                <div className="position-absolute top-0 end-0 mt-2 me-2 bg-white rounded-circle p-1 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
                  <BsFullscreen className="text-dark" size={18} />
                </div>
              )}

              {/* image  */}
              <div className="d-flex align-items-center justify-content-center my-3" style={{ height: '180px' }}>
                <Card.Img 
                  variant="top" 
                  src={p.img} 
                  className="img-fluid" 
                  style={{ maxHeight: '100%', width: 'auto' }} 
                />
              </div>

              {/* Add To Cart Button */}
              <div style={{ height: '40px' }} className="d-flex align-items-center justify-content-center mb-2">
                {hoveredId === p.id && (
                  <Button 
                    variant="danger" 
                    className="rounded-pill px-4 py-1 fw-bold border-0 shadow"
                  >
                    Add To Cart
                  </Button>
                )}
              </div>

              <Card.Body className="p-0 mt-2">
                <Card.Title className="fw-bold mb-1 fs-5">{p.name}</Card.Title>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <span className="fw-bold text-danger">{p.price}</span>
                  {p.oldPrice && (
                    <del className="text-muted">{p.oldPrice}</del>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

{/* view all products  */}
      <div className="text-center mt-5">
        <Button 
          variant="warning" 
          className="fw-bold px-4 py-2 rounded-3 shadow-sm"
        >
          View All Products!
        </Button>
      </div>
    </Container>
  );
};

export default Product;
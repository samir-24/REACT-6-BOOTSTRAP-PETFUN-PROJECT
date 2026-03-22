import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaUser, FaRegComment } from 'react-icons/fa'; 

const BlogSec = () => {
  const sidePosts = [
    {
      id: 1,
      title: 'Common Pet Care Mistakes And How To Avoid Them',
      img: '../../public/assets/images/service1.jpg',
      author: 'Mostain',
      comments: 'No Comments'
    },
    {
      id: 2,
      title: 'Pet Grooming Made Easy Step-By-Step Guide',
      img: '../../public/assets/images/service2.jpg',
      author: 'Mostain',
      comments: 'No Comments'
    },
    {
      id: 3,
      title: 'Choosing The Right Vet: Tips For Pet Parents',
      img: '../../public/assets/images/service3.jpg',
      author: 'Mostain',
      comments: 'No Comments'
    }
  ];

  return (
    <Container className="pb-5 bg-white">
      <Row>
        <Col lg={6} md={12} className="mb-4">
          <Card className="border-0 h-100 shadow-sm overflow-hidden rounded-4" >
            <div className="position-relative">
              <Card.Img 
                variant="top" 
                src="../../public/assets/images/mainService.jpg" 
                className="w-100" 
                style={{ height: '350px', objectFit: 'cover' }} 
              />

              <div className="position-absolute bottom-0 end-0 m-0 d-flex text-center fw-bold"  style={{ zIndex: 2 }}>
                <div className="bg-warning p-2 text-dark" style={{ minWidth: '40px' }}>16</div>
                <div className="bg-danger p-2 text-white px-3">SEP, 2025</div>
              </div>
            </div>
            <Card.Body className="px-0 pt-3">
              <div className="d-flex gap-3 text-muted mb-2 small fw-bold">
                <span><FaUser className="color-primary me-1" /> Mostain</span>
                <span><FaRegComment className="color-primary me-1" /> No Comments</span>
              </div>
              <Card.Title className="fw-bold h4 lh-base">
                Complete Vaccinations Guide For Your Cute Pets
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12}>
          {sidePosts.map((post, index) => (
            <div key={post.id} className={`d-flex align-items-center mb-4 ${index !== sidePosts.length - 1 ? 'border-bottom pb-4' : ''}`}>
              <div className="flex-shrink-0" style={{ width: '150px' }}>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ height: '100px', width: '150px', objectFit: 'cover' }}
                />
              </div>
              
              <div className="ms-3">
                <div className="d-flex gap-3 text-muted mb-1 small fw-bold" style={{ fontSize: '12px' }}>
                  <span><FaUser className="color-primary me-1" /> {post.author}</span>
                  <span><FaRegComment className="color-primary me-1" /> {post.comments}</span>
                </div>
                <h6 className="fw-bold mb-0 text-dark lh-base">
                  {post.title}
                </h6>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSec;
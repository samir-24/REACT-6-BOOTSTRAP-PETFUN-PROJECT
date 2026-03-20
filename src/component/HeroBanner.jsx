import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroBanner = ({ badgeText, titleLine1, titleLine2, highlightText, subText }) => {
  const dogGroupPath = "/assets/images/service-dogs.png"; 

  return (
    <section className="text-center hero-banner-bg" style={{ 
        paddingTop: '60px', 
        position: 'relative',
        overflow: 'hidden',
        minHeight: '450px'
    }}>
      <Container style={{ position: 'relative', zIndex: 3 }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="mb-2">
              <span className='yello-bg fw-bold fs-6' style={{ 
                padding: '6px 20px', 
                borderRadius: '50px',
                display: 'inline-block'
              }}>
                {badgeText}
              </span>
            </div>
            
            <h1 className="fw-bold mb-2 text-dark" style={{fontSize: '45px', lineHeight: '1.2' }}>
              {titleLine1} <br /> 
              {titleLine2} <span className='color-primary'>
                {highlightText}
              </span>
            </h1>
            
            <p className="text-dark mx-auto mb-5 fs-6" style={{ maxWidth: '550px' }}>
              {subText}
            </p>
          </Col>
        </Row>
      </Container>
      
     {/* bottom part  */}
      <div style={{ 
          position: 'relative', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: '180px',
          marginTop: '-20px'
      }}>
        
        {/* yellow ovel  */}    
        <div style={{ 
          position: 'absolute', 
          bottom: '-180px', 
          backgroundColor: '#FFD93D', 
          width: '900px',  
          height: '350px', 
          borderRadius: '50%', 
          zIndex: 1
        }}></div>

        <img 
          src={dogGroupPath} 
          alt="Happy Dogs" 
          style={{ 
            width: "100%", 
            maxWidth: "600px", 
            position: 'relative', 
            zIndex: 2,
            marginBottom: '-10px'
          }} 
        />
      </div>
    </section>
  );
};

export default HeroBanner;
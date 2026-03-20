// import React from 'react';
// import { Container, Row, Col, Badge } from 'react-bootstrap';
// import dogGroup from '../../public/assets/images/service-dogs.png'; 
// import PetCareFeatures from '../component/PetCareFeatures';
// import ServiceDetail from '../component/ServiceDetail';

// const Services = () => {
//   return (
//    <>
//      <section className="service text-center mb-5">
//       <Container >
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <div className="mb-3">
//               <p bg="warning" text="dark" className="services-badge btn yellow-box">
//                 Services!
//               </p>
//             </div>
            
//             <h1 className="display-4 fw-bold mb-3">
//               Caring Services <br /> for Happy Pets
//             </h1>
            
//             <p className="text-dark mb-5">
//               Providing compassionate, reliable, and professional care 
//               to keep pets healthy, happy, and loved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
      
//       <div className="service-foot">
//         <div className="yellow-curve"></div>
//         <img src={dogGroup} alt="Happy Dogs" className="dogs-img" style={{width:"700px"}} />
//       </div>
//     </section>

//     <PetCareFeatures/>

//     <ServiceDetail/>
//    </>
//   );
// };

// export default Services;

import React from 'react';
import HeroBanner from '../component/HeroBanner';
import PetCareFeatures from '../component/PetCareFeatures';
import ServiceDetail from '../component/ServiceDetail';

const Services = () => {
  return (
    <>
      <HeroBanner 
        badgeText="Services!"
        titleLine1="Caring Services"
        titleLine2="for Happy"
        highlightText="Pets"
        subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
      />

      <PetCareFeatures />
    </>
  );
};

export default Services;
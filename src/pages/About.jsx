import HeroBanner from '../component/HeroBanner';
import PetCareFeatures from '../component/PetCareFeatures';
import img2 from '../../public/assets/images/about-vet.png'
import TeamSection from '../component/TeamSection';
import { Container, Row , Col } from 'react-bootstrap';
import video from '../../public/assets/images/video-bg.mp4';
import ContactForm from '../component/ContactForm'
import Testimonials from '../component/Testimonials';

function About() {

  return (
    <>

      <HeroBanner
        badgeText="About Us!"
        titleLine1="Where Every Pet"
        titleLine2="Feels"
        highlightText="Home"
        subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
      />
      <div className='mb-5'></div>

      <PetCareFeatures
        badgeText="Every Pets Deserves Care!"
        title="Professional Care With A Loving Touch For"
        highlightTitle="Pets"
        description="High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments, always."
        image={img2}
        phone="00123456789"
      />

      <Container>
        <Row className="align-items-center mb-5">
          <Col md={8}>
            <h6 className="color-primary fs-5 fw-bold">Veterinarians!</h6>
            <h2 className="fw-bold display-5">
              Dedicated Doctors <br /> for Your <span className="color-primary    ">Pets</span>
            </h2>
            <p className="text-muted mt-3 w-75">
              High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <button className='btnn me-4 mb-2 fw-bold'>Book Appointment</button>
          </Col>
        </Row>
      </Container>

      <TeamSection />

      <section className='video'>
        <Container fluid>
          <Row className="justify-content-center">
            <div className="position-relative">

              {/* Video */}
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-100 rounded"
                style={{ height: "100vh", objectFit: "cover" }}
              ></video>

              {/* Play Button */}
              <button
                className="btn btn-warning rounded-circle position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px" }}
              >
                ▶
              </button>

            </div>
          </Row>
        </Container>
      </section>

      <Testimonials />

      <ContactForm />


    </>

  )
}
export default About
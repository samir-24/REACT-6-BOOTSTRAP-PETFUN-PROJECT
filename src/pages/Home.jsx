import MainSlide from './MainSlide';
import PetCareFeatures from '../component/PetCareFeatures';
import img1 from '../../public/assets/images/about-petcare.png'
import ServiceDetail from '../component/ServiceDetail';
import TeamSection from '../component/TeamSection';
import { Container, Col, Row } from 'react-bootstrap';
import { FaBone, FaDog, FaSyringe, FaBaseballBall, FaUtensils } from 'react-icons/fa';
import Product from '../component/Product';
import BlogSec from '../component/BlogSec';
import AppointmentSection from './AppointmentSection';
import Testimonials from '../component/Testimonials';

function Home() {
    const categories = [
        { name: 'Pet Food', icon: <FaUtensils />, color: '#ffc107' },
        { name: 'Accessories', icon: <FaDog />, color: '#ffc107' },
        { name: 'Essentials', icon: <FaBone />, color: '#ffc107' },
        { name: 'Fun Toys', icon: <FaBaseballBall />, color: '#ffc107' },
        { name: 'Pet Health', icon: <FaSyringe />, color: '#ffc107' },
    ];

    return (
        <>
            <MainSlide />

            <PetCareFeatures
                badgeText="Every Pets Deserves Care!"
                title="Professional Care with a Loving Touch for"
                highlightTitle="Pets"
                description="High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments."
                image={img1}
                phone="00123456789"
            />

            {/* service section  */}
            <ServiceDetail />

            {/* Products section  */}
            <Container className="py-5 text-center">
                <p className="text-danger fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Shop Categories!</p>
                <h2 className="fw-bold mb-5" style={{ color: '#1a1a1a' }}>Browse By Categories</h2>

                <Row className="justify-content-center">
                    {categories.map((cat, index) => (
                        <Col key={index} xs={6} md={2} className="mb-4 d-flex flex-column align-items-center">
                            <div
                                className="d-flex align-items-center justify-content-center mb-3 shadow-sm"
                                style={{
                                    width: '120px',
                                    height: '110px',
                                    backgroundColor: cat.color,
                                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                                    fontSize: '2.5rem',
                                    color: '#333'
                                }}
                            >
                                {cat.icon}
                            </div>
                            {/* Label */}
                            <h6 className="fw-bold text-dark mt-2">{cat.name}</h6>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Product />

            {/* Our Doctor Section  */}
            <Container className='mt-5'>
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

            {/* Appoinment section  */}
            <AppointmentSection />

            {/* Testimonial section  */}
            <Testimonials />

            {/* blog section  */}
            <Container className='mt-5 mb-0'>
                <Row className="align-items-center mb-5">
                    <Col md={8}>
                        <h6 className="color-primary fs-5 fw-bold">Recent Updates !</h6>
                        <h2 className="fw-bold display-5">
                            Explore Our Blogs <br /> And<span className="color-primary  ">   News</span>
                        </h2>
                        <p className="text-muted mt-3 w-75">
                            High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments.
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <button className='btnn me-4 mb-2 fw-bold'>View All Updates</button>
                    </Col>
                </Row>
            </Container>

            <BlogSec />

        </>


    )
}
export default Home
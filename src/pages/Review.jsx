import React from 'react'
import HeroBanner from '../component/HeroBanner'
import { Container, Row, Col, Card } from 'react-bootstrap';
import testi1 from '/assets/images/testi1.png'
import testi2 from '/assets/images/testi2.png'
import testi3 from '/assets/images/testi3.png'
import testi4 from '/assets/images/testi4.png'
import { FaStar } from 'react-icons/fa';

const Review = () => {

    const testimonials = [
        {
            name: "Eredrik Johanson",
            location: "California",
            text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices.",
            image: testi1
        },
        {
            name: "Félix Lengyel",
            location: "New York",
            text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices.",
            image: testi2
        },
        {
            name: "Brandon Larned",
            location: "Los Angeles",
            text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices.",
            image: testi3
        },
        {
            name: "James Williams",
            location: "Oklahoma City",
            text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices.",
            image: testi4
        },
        {
            name: "Lauren Wilkins",
            location: "Crowfield Phoenix",
            text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices.",
            image: testi1
        },
        {
            name: "Jhon Hamilton",
            location: "Layman Savannah",
            text: "Absolutely love this shop! My dog always comes back looking fresh and happy. Great grooming service! Very friendly and affordable prices.",
            image: testi2
        },
    ];

    return (
        <>
            <HeroBanner
                badgeText="Reviews!"
                titleLine1="Hear From Fellow"
                titleLine2="Pet"
                highlightText="Lovers"
                subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
            />

            <div className='mt-5 mb-5'></div>

            <Container className="my-5 py-5">
                <Row>
                    {testimonials.map((item, index) => (
                        <Col key={index} md={4} className="mb-4 d-flex justify-content-center align-items-center text-center">
                            <Card className="w-75 testimonial-card text-center h-100 border-2 border-warning rounded-4">
                                <div className="mx-auto mt-4">
                                    <Card.Img var iant="top" src={item.image} className="rounded-circle avatar" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold mb-1">{item.name}</Card.Title>
                                    <p className="location-text text-orange mb-3">{item.location}</p>
                                    <Card.Text className="text-muted">
                                        "{item.text}"
                                    </Card.Text>
                                    <div className="mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="color-primary mx-1" size={20} />
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Review

import React from 'react';
import { Container, Row, Col, Accordion, Form, ListGroup, Image, Card, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const FaqSection = () => {

    const recentPosts = [
        {
            id: 1,
            title: "Creating a Pet-Friendly Home Environment",
            date: "September 15, 2025",
            img: "/assets/images/blog1.jpg"
        },
        {
            id: 2,
            title: "Senior Pet Care: Helping Your Pet Age Gracefully",
            date: "September 15, 2025",
            img: "/assets/images/blog2.jpg"
        },
        {
            id: 3,
            title: "Pet Mental Health: How to Keep Them Happy",
            date: "September 15, 2025",
            img: "/assets/images/blog3.jpg"
        }
    ];

    const categories = ['Adoption Stories', 'Nutrition & Feeding', 'Pet Care', 'Supplements & Treats', 'Veterinary'];
    const tags = ['Animal Clinic', 'Pet Care', 'Pet Health', 'Pet Shop', 'Veterinary'];

    const faqData = [
        {
            id: "0",
            question: "What vaccinations does my pet need?",
            answer: "Most pets need core vaccinations like rabies, distemper, and parvovirus for dogs, and rabies and FVRCP for cats. Specific needs depend on your pet's lifestyle and location."
        },
        {
            id: "1",
            question: "How often should I take my pet to the veterinarian?",
            answer: "Healthy adult pets should visit the vet at least once a year for a wellness exam. Puppies, kittens, and senior pets may need more frequent check-ups."
        },
        {
            id: "2",
            question: "How often should I groom or bathe my pet?",
            answer: "Grooming frequency depends on the breed and coat type. Generally, dogs should be bathed every 4-8 weeks, while cats often groom themselves but may need occasional brushing."
        },
        {
            id: "3",
            question: "How do I keep my pet’s teeth clean?",
            answer: "Most pets should have a wellness check-up at least once a year. Puppies, kittens, senior pets, or pets with health conditions may need more frequent visits. Core vaccinations vary by species and region but typically include rabies, distemper, and parvovirus for dogs, and rabies and FVRCP for cats."
        },
        {
            id: "4",
            question: "What should I feed my pet?",
            answer: "Feed your pet high-quality, age-appropriate food. Consult your vet to determine the best diet based on your pet's breed, weight, and health status."
        }
    ];

    return (
        <Container className="py-5">
            <Row>
                <Col lg={8}>
                    <Accordion defaultActiveKey="3" flush className="faq-accordion">
                        {faqData.map((item) => (
                            <Accordion.Item eventKey={item.id} key={item.id} className="mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <Accordion.Header className="fw-bold custom-accordion-header">
                                    {item.question}
                                </Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#fdf8f4', borderTop: '1px dashed #FFC107' }}>
                                    <p className="text-muted mb-0">{item.answer}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>

                <Col lg={4} className="ps-lg-5 mt-5 mt-lg-0">

                    {/* search  */}
                    <Card className="border-0 shadow-sm p-4 mb-4 rounded-4 blog-bg">
                        <InputGroup className="bg-white rounded-pill px-3 py-1 border-0 shadow-sm overflow-hidden">
                            <Form.Control className="border-0 shadow-none" placeholder="Search ..." />
                            <InputGroup.Text className="bg-white border-0 text-warning">
                                <FaSearch />
                            </InputGroup.Text>
                        </InputGroup>
                    </Card>

                    {/* Categories  */}
                    <Card className="border-0 shadow-sm p-4 mb-4 rounded-4 blog-bg">
                        <h5 className="fw-bold mb-4 border-start border-warning border-4 ps-2">Categories</h5>
                        <ul className="list-unstyled mb-0">
                            {categories.map((cat, i) => (
                                <li key={i} className="mb-3 d-flex align-items-center cursor-pointer text-hover-warning">
                                    <span className="text-warning me-2" style={{ fontSize: '10px' }}>●</span> {cat}
                                </li>
                            ))}
                        </ul>
                    </Card>

                    {/* Recent Posts  */}
                    <Card className="border-0 shadow-sm p-4 mb-4 rounded-4 blog-bg">
                        <h5 className="fw-bold mb-4 border-start border-warning border-4 ps-2">Recent Posts</h5>

                        {recentPosts.map((post) => (
                            <div key={post.id} className="d-flex align-items-center mb-4 last-child-mb-0">
                                <img
                                    src={post.img}
                                    alt="recent"
                                    className="rounded-circle me-3"
                                    style={{ width: '65px', height: '65px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h6 className="mb-1 fw-bold small lh-sm">{post.title}</h6>
                                    <span className="text-warning small" style={{ fontSize: '12px' }}>{post.date}</span>
                                </div>
                            </div>
                        ))}
                    </Card>

                    {/* Banner */}
                    <Card className="border-0 shadow-sm mb-4 rounded-4 overflow-hidden p-0">
                        <Card.Img src="/assets/images/sidebar-add.jpg" alt="Adopt Banner" className="w-100" />
                    </Card>

                    {/* Tag Clouds  */}
                    <Card className="border-0 shadow-sm p-4 mb-4 rounded-4 blog-bg">
                        <h5 className="fw-bold mb-4 border-start border-warning border-4 ps-2">Tag Clouds</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold"
                                    style={{ cursor: 'pointer', fontSize: '12px' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                </Col>
            </Row>

            <style>
                {`
          .faq-accordion .accordion-button {
            background-color: #fdf8f4 !important;
            color: #000 !important;
            font-weight: bold;
            padding: 20px;
            box-shadow: none !important;
          }
          .faq-accordion .accordion-button:not(.collapsed) {
            background-color: #fdf8f4 !important;
            color: #000 !important;
          }
          .faq-accordion .accordion-item {
            border-radius: 15px !important;
          }
          /* Custom arrow color jo badlvi hoy to */
          .faq-accordion .accordion-button::after {
            background-size: 15px;
          }
        `}
            </style>
        </Container>
    );
};

export default FaqSection;
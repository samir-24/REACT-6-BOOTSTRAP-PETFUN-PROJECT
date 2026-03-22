import React from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaRegUser, FaRegCalendarAlt, FaRegComments } from 'react-icons/fa';
import HeroBanner from './HeroBanner';

const BlogPage = () => {

    const blogs = [
        { id: 1, title: "Creating a Pet-Friendly Home Environment", category: "Nutrition & Feeding", date: "Sep 15, 2025", img: "/assets/images/blog1.jpg" },
        { id: 2, title: "Senior Pet Care: Helping Your Pet Age Gracefully", category: "Pet Care", date: "Sep 15, 2025", img: "/assets/images/blog2.jpg" },
        { id: 3, title: "Pet Mental Health: How to Keep Them Happy", category: "Adoption Stories", date: "Sep 15, 2025", img: "/assets/images/blog3.jpg" },
        { id: 4, title: "Preventing Common Pet Illnesses: Tips for Owners", category: "Nutrition & Feeding", date: "Sep 15, 2025", img: "/assets/images/blog4.jpg" },
        { id: 5, title: "Choosing the Right Vet: Tips for Pet Parents", category: "Adoption Stories", date: "Sep 15, 2025", img: "/assets/images/blog5.jpg" },
        { id: 6, title: "Pet Grooming Made Easy Step-by-Step Guide", category: "Pet Care", date: "Sep 15, 2025", img: "/assets/images/blog6.jpg" },
    ];

    const categories = ['Adoption Stories', 'Nutrition & Feeding', 'Pet Care', 'Supplements & Treats', 'Veterinary'];
    const tags = ['Animal Clinic', 'Pet Care', 'Pet Health', 'Pet Shop', 'Veterinary'];

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
    return (
        <>
        
        <Container className="my-5 py-4">
            <Row>
                <Col lg={8}>
                    <Row className="g-4">
                        {blogs.map((blog) => (
                            <Col md={6} key={blog.id}>
                                <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden blog-bg" >
                                    <div className="position-relative">
                                        <Card.Img variant="top" src={blog.img} className="w-100" style={{ height: '220px', objectFit: 'cover' }} />
                                        <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '12px' }}>
                                            {blog.category}
                                        </span>
                                    </div>

                                    <Card.Body className="p-4">
                                        <div className="d-flex gap-3 text-muted small mb-3">
                                            <span><FaRegUser className="color-primary me-1" /> Mostain</span>
                                            <span><FaRegCalendarAlt className="color-primary me-1" /> {blog.date}</span>
                                        </div>

                                        {/* description  */}
                                        <Card.Title className="fw-bold mb-3 fs-5">{blog.title}</Card.Title>
                                        <Card.Text className="text-muted small mb-4">
                                            Pets bring endless joy, companionship into our lives. Whether you're a first-time pet parent or an experienced owner.
                                        </Card.Text>

                                        <hr className="my-3 opacity-25" />

                                        {/* footer  */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href="#" className="text-decoration-none text-dark fw-bold small">Read More →</a>
                                            <span className="text-muted small"><FaRegComments className="color-primary me-1" /> No Comments</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
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

        </Container> 
        
        </>
    );
};

export default BlogPage;
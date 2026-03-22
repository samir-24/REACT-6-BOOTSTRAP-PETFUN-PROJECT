import React from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, ListGroup } from 'react-bootstrap';
import { FaStar, FaSearch, FaFilter } from 'react-icons/fa';

const ShopPage = () => {
    const products = [
        { id: 1, name: "FurLife Nutrition", price: 245, oldPrice: 375, category: "Essentials", img: "/assets/images/p1.png", sale: true },
        { id: 2, name: "Golden Meals", price: 475, category: "Essentials", img: "/assets/images/p2.png", sale: false },
        { id: 3, name: "Joyful Paws", price: 120, oldPrice: 250, category: "Pet Food", img: "/assets/images/p3.png", sale: true },
        { id: 4, name: "MeowMix Delight", price: 550, category: "Accessories", img: "/assets/images/p4.png", sale: false },
        { id: 5, name: "NutriPaws Select", price: 345, category: "Essentials", img: "/assets/images/p5.png", sale: false },
        { id: 6, name: "Premium Dog Food", price: 650, oldPrice: 850, category: "Pet Food", img: "/assets/images/p6.png", sale: true },
    ];

    const tags = ['Accessories', 'cat food', 'Dog Bed', 'dog food', 'pet care'];

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col lg={9} md={8}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="text-muted">Showing All {products.length} Results</span>
                            <Form.Select className="w-auto border-0 bg-light shadow-sm">
                                <option>Default Sorting</option>
                                <option>Price: Low to High</option>
                            </Form.Select>
                        </div>

                        <Row className="g-4">
                            {products.map((p) => (
                                <Col lg={4} md={6} key={p.id}>
                                    <Card className="h-100 border-0 shadow-sm position-relative overflow-hidden product-card text-center p-3">
                                        {p.sale && (
                                            <Badge bg="danger" className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
                                                Sale!
                                            </Badge>
                                        )}
                                        <div className="p-3" style={{ height: '220px' }}>
                                            <Card.Img
                                                variant="top"
                                                src={p.img}
                                                className="h-100 w-100 object-fit-contain"
                                            />
                                        </div>
                                        <Card.Body>
                                            <small className="text-muted">{p.category}</small>
                                            <Card.Title className="fw-bold fs-6 mt-1">{p.name}</Card.Title>
                                            <div className="text-warning mb-2 small">
                                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                            </div>
                                            <div className="fw-bold">
                                                {p.oldPrice && <span className="text-muted text-decoration-line-through me-2 small">{p.oldPrice}.00$</span>}
                                                <span className="text-danger">{p.price}.00$</span>
                                            </div>
                                            <Button variant="warning" className="w-100 mt-3 fw-bold rounded-pill border-0 py-2">
                                                Add To Cart
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col lg={3} md={4} className="mt-5 mt-md-0">
                        <div className="p-4 rounded-4 shadow-sm mb-4 blog-bg">
                            <div className="position-relative">
                                <Form.Control type="text" placeholder="Search products..." className="border-0 p-3 pe-5 rounded-pill shadow-sm" />
                                <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-4 text-danger" />
                            </div>
                        </div>

                        <div className="p-4 rounded-4 shadow-sm mb-4 blog-bg" >
                            <h5 className="fw-bold border-bottom border-warning border-3 d-inline-block mb-4">Product Categories</h5>
                            <ListGroup variant="flush" className="bg-transparent">
                                {['Accessories', 'Essentials', 'Fun Toys', 'Pet Food', 'Pet Health'].map(cat => (
                                    <ListGroup.Item key={cat} className="bg-transparent border-0 px-0 py-2 cursor-pointer text-muted fw-semibold">
                                        {cat}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>

                        <div className="p-4 rounded-4 shadow-sm mb-4 blog-bg" >
                            <h5 className="fw-bold border-bottom border-warning border-3 d-inline-block mb-4">Filter By Price</h5>
                            <Form.Range className="mb-3" />
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="small text-muted fw-bold">PRICE: 120$ — 650$</span>
                                <Button variant="link" className="text-dark fw-bold text-uppercase text-decoration-none small">Filter</Button>
                            </div>
                        </div>

                        <Card className="border-0 shadow-sm mb-4 rounded-4 overflow-hidden p-0">
                            <Card.Img src="/assets/images/sidebar-add.jpg" alt="Adopt Banner" className="w-100" />
                        </Card>

                        <Card className="border-0 shadow-sm p-4 mb-4 rounded-4 blog-bg">
                            <h5 className="fw-bold mb-4 border-start border-warning border-4 ps-2">Products Tags</h5>
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

export default ShopPage;
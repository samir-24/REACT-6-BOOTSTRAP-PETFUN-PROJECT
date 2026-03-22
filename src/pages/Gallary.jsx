import HeroBanner from "../component/HeroBanner"
import { Container , Col , Row ,Card } from "react-bootstrap"

function Gallary() {

    const images = [
        "/assets/images/gallery-1.jpg",
        "/assets/images/gallery-2.jpg",
        "/assets/images/gallery-3.jpg",
        "/assets/images/gallery-4.jpg",
        "/assets/images/gallery-5.jpg",
        "/assets/images/gallery-6.jpg",
    ];

    return (
        <>
            <HeroBanner
                badgeText="Gallary!"
                titleLine1="Every Picture A"
                titleLine2="Promise Of"
                highlightText="Care"
                subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
            />

            <Container className="my-5">
                <Row className="g-4 my-5">
                {images.map((src, index) => (
                    <Col key={index} md={4} sm={6} xs={12}>
                        <Card className="border-0  rounded-0 shadow-sm overflow-hidden">
                            <Card.Img 
                                variant="top" 
                                src={src} 
                                className="w-100 object-fit-cover" 
                                style={{ height: '300px' }} 
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
           
        </>
    )
}
export default Gallary
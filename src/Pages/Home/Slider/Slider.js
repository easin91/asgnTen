import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
const Slider = ({ course }) => {
    const { image_url } = course;
    return (
        <div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image_url} style={{ height: '360px' }}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Card className="mb-5">
                <Card.Header>
                    <Card.Title></Card.Title>
                </Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={image_url} style={{ height: '360px' }} />

                    <Card.Text className='my-2'>

                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    {/* <div><Link to={`/checkOut/${_id}`}><Button className='mt-2'>Get Premium Access</Button></Link></div> */}
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Slider;
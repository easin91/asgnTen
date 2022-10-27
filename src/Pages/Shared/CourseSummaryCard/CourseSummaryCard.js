import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CourseSummaryCard = ({ course }) => {

    const { _id, title, details, details_1, image_url } = course;

    return (
        <Card className="mb-5">
            <Card.Header>
                <Card.Title>Name : {title}</Card.Title>
            </Card.Header>
            <Card.Body className=''>

                <Card.Img variant="top" src={image_url} style={{ height: '360px' }} />

                <Card.Text className='my-2'>
                    <ol>
                        <li>{details}</li>
                        <li>{details_1}</li>
                    </ol>
                </Card.Text>

            </Card.Body>
            <Card.Footer>
                <div><Link to={`/checkOut/${_id}`}><Button className='mt-2'>Get Premium Access</Button></Link></div>
            </Card.Footer>
        </Card>
    );
};

export default CourseSummaryCard;
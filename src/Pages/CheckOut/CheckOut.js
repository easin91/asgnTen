import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const checkOut = useLoaderData();
    const { _id, title, image_url, category_id } = checkOut;

    return (
        <div>
            <h5>ID No : {_id}</h5>

            <Card>
                <Card.Header>
                    CheckOut Page of ID No : {_id}
                </Card.Header>
                <Card.Title>Name : {title}</Card.Title>

                <Card.Body>

                    <Card.Img variant="top" src={image_url} />

                </Card.Body>
                <Card.Footer>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Another CheckOut of this category</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CheckOut;
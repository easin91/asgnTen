import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h3>Different types of blogs written by Scholars</h3>

            <Card>
                <Card.Title>Q - 1 : What is cors ?</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <p>
                            Cross-Origin Resource Sharing (CORS) is a mechanism to restrict users from accessing shared resources.CORS error occurs when the external API server doesn't return the HTTP headers required by the CORS standard.The browser will then match this header with the Origin. In case of a mismatch, the browser will reject the response throwing a cors error.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>Q - 2 : Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <p>
                            Firebase allows us to track user's journey through realtime and custom reporting.
                            Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps.
                            Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.

                        </p>
                        <p>Auth0, MongoDB, Passport, Okta are the most popular alternatives and competitors to Firebase Authentication.</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Title>Q - 3 : How does the private route work?</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <p>
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.Private Routes in React Router also called Protected Routes which require a user being authorized to visit a route and read the page.

                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Title>Q - 4 : What is Node? How does Node work?</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <p>
                            Simply we can say that Node js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser taking a “non-blocking” approach to serving requests.
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code.

                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;
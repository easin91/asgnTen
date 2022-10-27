import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import GoogleGit from './GoogleGit';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <div className='d-flex justify-content-between align-items-center'>

                        <Button variant="outline-primary" type="submit" className='w-50'>
                            Login
                        </Button>
                        <p>New Comer!!! <Link to='/register'><Button variant="outline-primary">Sign Up</Button></Link></p>
                    </div>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>

            </div>
            <div className='my-3'>
                <GoogleGit></GoogleGit>
            </div>
        </>
    );
};

export default Login;
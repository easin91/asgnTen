import React, { useContext } from 'react';
import { Button, ButtonGroup, Image, ToggleButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import img from '../../../assets/brands/nav2.png';
import './Header.css';
import { useState } from 'react';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // Mouse hover display name start
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    // Mouse hover display name end
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        // { name: 'Active', value: '1' },
        { name: 'White', value: '2' },
        { name: 'Dark', value: '3' },
    ];
    // ---
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container className='menu'>
                <Navbar.Brand className=''><Link to='/'><img
                    alt="easin"
                    src={img}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                />Coding Style</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav> <Link to='/course'>COURSES</Link></Nav>
                        <Nav><Link to='/question' className='mx-2'>FAQ</Link></Nav>
                        <Nav><Link to='/blog'>BLOG</Link></Nav>

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">


                            {user?.photoURL ?
                                <div>
                                    {/* <Image
                                     style={{ height: '30px' }}
                                     roundedCircle
                                     src={user?.photoURL}>
                                 </Image> */}
                                    <div>
                                        <div>
                                            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                                <Image
                                                    style={{ height: '30px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                            </div>

                                            {isHovering && (
                                                <>{user?.displayName}</>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                : <FaUser></FaUser>
                            }

                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='mx-2'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </Nav.Link>

                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>

            <>
                <ButtonGroup className='me-5'>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-dark' : 'outline-secondary'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </>
        </Navbar>
    );
};

export default Header;
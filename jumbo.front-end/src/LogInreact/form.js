import Button from 'react-bootstrap/Button';
import '../styleFolder/LoginPage.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import Context from '../Context/Contex';
import NavBar from '../LandingPagereact/Navbar';
import Footer from './footer';

function LoginForm() {

    const navigate = useNavigate()

    const { user, setUser } = useContext(Context)

    return (
        <>
            <NavBar></NavBar>
            <div className='Log-In'>
                <img className="Img-Login" alt="Picture of Store" src="/images/second.png" />
                <div className="Log-In-Form">
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Username </Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                            <Form.Text className="text-muted">
                                We'll never share your email or Username with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
}

export default LoginForm;
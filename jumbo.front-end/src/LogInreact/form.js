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
    const { posts, setAllPosts } = useContext(Context)
    const { wishL, setWishList } = useContext(Context)
    const { password, setPassword } = useContext(Context)
    const { username, setUsername } = useContext(Context)
    const { active, setActive } = useContext(Context)


    function passwordForm(e) {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(password)
    }

    function usernameForm(e) {
        e.preventDefault()
        setUsername(e.target.value)
        console.log(username)
    }


    function handleClick(e) {
        e.preventDefault()
        console.log({username, password})
        fetch('http://localhost:8000/look_user', {
            method: "POST",
            body: JSON.stringify({
               username,
               password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response=>response.json())
        .then(data=>{
        if(data.message){
            setPassword("")
            setUsername("")
            alert('Wrong password or username. Please try again')
            
        } else{
            console.log(data)
            navigate('/Home')
            setActive(true)
            setUser(data)
            setPassword("")
            setUsername("")
        } 
        });
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className='Log-In'>
                <img className="Img-Login" alt="Picture of Store" src="/images/second.png" />
                <div className="Log-In-Form">
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Username </Form.Label>
                            <Form.Control type="text"  value={username} placeholder="Enter Username" onChange={(e) => { usernameForm(e) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email or Username with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}  placeholder="Password" onChange={(e) => { passwordForm(e) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => handleClick(e)} >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default LoginForm;
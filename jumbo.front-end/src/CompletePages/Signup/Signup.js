import { display, positions } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';
import NavBar from '../../LandingPagereact/Navbar';
import { useState, useContext } from 'react'
import Context from '../../Context/Contex';
import { Email } from '@mui/icons-material';

function BasicSignup() {

  const navigate = useNavigate()

  const { user, setUser } = useContext(Context)
  const { posts, setAllPosts } = useContext(Context)
  const { wishL, setWishList } = useContext(Context)
  const { signPassword, setSignpassword } = useContext(Context)
  const { signUsername, setSignusername } = useContext(Context)
  const [email, setEmail] = useState("")
  const { active, setActive } = useContext(Context)



  function getEmail(e) {
    e.preventDefault()
    setEmail(e.target.value)
  }

  function handleSignsubmit(e) {
    e.preventDefault()
    // console.log(email, signPassword, signUsername)
    // fetch('http://localhost:8000/add_user', {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email,
    //     username: signUsername,
    //     password: signPassword
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // }).then(response=> response.json()).then(data=>{
    //   console.log(data)
    //   setUser(data)
    //   setEmail('')
    //   setSignusername("")
    //   setSignpassword("")
    //   navigate('/Home')
    //   setActive(true)
    // })
    // console.log(data)
    //   setUser(data)
      setEmail('')
      setSignusername("")
      setSignpassword("")
      navigate('/Home')
      setActive(true)
  }

  return (
    <div>
      <NavBar />
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5%'
        // flexDirection: "column",
        // justifyContent: "space-between",

      }}>
        <div style={{
          width: '60%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: "5%"
          }}>
            <div>
              <LockResetIcon />
            </div>
          </div>
          <Form sx={{ backgroundColor: "blue" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { getEmail(e) }} />
              <Form.Text className="text-muted" >
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email" value={signUsername} onChange={(e) => { setSignusername(e.target.value) }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={signPassword} onChange={(e) => { setSignpassword(e.target.value) }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => { handleSignsubmit(e) }} style={{ backgroundColor: '#82A6B1' }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>

    </div>

  );
}

export default BasicSignup;
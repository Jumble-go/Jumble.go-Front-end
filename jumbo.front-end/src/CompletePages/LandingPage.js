
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '../LandingPagereact/grid';
import '../styleFolder/LandingPage.css';
import NavBar from '../LandingPagereact/Navbar';
import Uncontrolled from '../LandingPagereact/LandingImg';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate()
  
    return (
      <div className='Home'>
        <NavBar/>
        <Uncontrolled/>
        <h1 className='Intro'> Hello there</h1>
        <Grid></Grid>
        <Button onClick={()=>{navigate('/+Signup')}}> Sign Up </Button>
      </div>
    );
  }

  export default Landing;
